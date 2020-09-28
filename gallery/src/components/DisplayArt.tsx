import React, { Component } from "react";
import Installation from "./paintings/Installation";

interface displayArtProps {
  page: string;
}
class DisplayArt extends Component<displayArtProps, {poetryDB: Readonly<any>}> {
  constructor(props: displayArtProps) {
    super(props);

    this.state = {
      poetryDB: [],
    };
  }
  //Fetches poetry from the online database
  componentDidMount() {
    fetch("https://poetrydb.org/author,title/Shakespeare;Sonnet")
      .then((response) => response.json())
      .then((users) => this.setState({ poetryDB: users }));
  }

  //Generates one random poetry title
  generatePoetry() {
    //Extracts only the titles and picks one at random from the array
    return this.state.poetryDB.map(
      (poem: {
        title: string | number | null | undefined;
        lines: React.ReactNode;
      }) => poem.title
    )[Math.floor(Math.random() * (this.state.poetryDB.length - 1))];
  }

  //Creates an installation with a given image
  showImage(imageNumber: number){
    return(
      <Installation image={imageNumber} poem={this.generatePoetry()} />
    )
  }

  //Creates all installations in elements
  getRenderedImages(elements: number[]){
    const items = []
    for (const i of elements){
      items.push(this.showImage(i));
    }
    return items;
  }   

  render(){
    //Renders all installations
    if(this.props.page === "all"){
      return(
      <div className="DisplayArt">  
          {this.getRenderedImages([1,2,3,4,5,6])}
      </div>
      )
    }
    //Renders locally stored installations with key "favorites"
    else if(this.props.page === "favorites"){
      return(
        <div className="DisplayArt">
          {this.getRenderedImages(JSON.parse(localStorage.getItem("favorites") || "[]"))}
        </div>
      )
    }
  }
}

export default DisplayArt;
