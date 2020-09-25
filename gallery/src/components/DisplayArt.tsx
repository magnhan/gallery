import React, {Component} from "react";
import SVG1 from "./paintings/SVG1/SVG1";
import SVG2 from "./paintings/SVG2/SVG2";
import SVG3 from "./paintings/SVG3/SVG3";
import SVG4 from "./paintings/SVG4/SVG4";
import SVG5 from "./paintings/SVG5/SVG5";
import SVG6 from "./paintings/SVG6/SVG6";
import "./display-art.css";

class DisplayArt extends Component<{}, {poetryDB: Readonly<any>} > {
    constructor(props: any){
      super(props);
      console.log(this.props);
      
      this.state = {
        poetryDB: []
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
    
    render(){
        return(
        <div className="DisplayArt">
          <SVG1 poem={this.generatePoetry()}/>
          <SVG2 poem={this.generatePoetry()}/>
          <SVG3 poem={this.generatePoetry()}/>
          <SVG4 poem={this.generatePoetry()}/>
          <SVG5 poem={this.generatePoetry()}/>
          <SVG6 poem={this.generatePoetry()}/>
        </div>
        )
    }
}

export default DisplayArt; 
