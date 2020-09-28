import React, {Component} from "react";
import Installation from "./paintings/Installation";


class DisplayArt extends React.Component<{page: string},{poetryDB: Readonly<any>} > {
    constructor(props: any){
      super(props);
      
      this.state = {
        poetryDB: [],

      };
    }
    //Fetches poetry from the online database
    componentDidMount() {
      fetch('https://poetrydb.org/author,title/Shakespeare;Sonnet')
        .then(response => response.json())
        .then(users => this.setState({poetryDB: users}));
    }

    //Generates one random poetry title
    generatePoetry(){
      //Extracts only the titles and picks one at random from the array
      return(
        this.state.poetryDB.map((poem: { title: string | number | null | undefined; lines: React.ReactNode; }) => (
          poem.title))[Math.floor(Math.random() * (this.state.poetryDB.length - 1))]
        )
    }

    showImage(imageNumber: number){
      return(
        <Installation image={imageNumber} poem={this.generatePoetry()} />
      )
    }


    
    render(){
      const elements: number[] = JSON.parse(localStorage.getItem("favorites") || "[]");
      const items = []
      for (const i of elements){
        items.push(this.showImage(i))
      }
      if(this.props.page === "all"){
        return(
        <div className="DisplayArt">  
            {this.showImage(1)}
            {this.showImage(2)}
            {this.showImage(3)}
            {this.showImage(4)}
            {this.showImage(5)}
            {this.showImage(6)}
        </div>
        )
      }
      else{
        return(
          <div className="DisplayArt">
            {items}
          </div>
        )
      }
    }
}

export default DisplayArt; 
