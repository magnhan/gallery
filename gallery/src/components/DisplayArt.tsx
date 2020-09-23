import React, { Component } from "react";

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
      return(
        <div>
          {
            this.state.poetryDB.map((poem: { title: string | number | null | undefined; lines: React.ReactNode; }) => (
            <p key={poem.title} style={{color:"white", fontSize:"x-small"}}>
              {poem.title}
            </p>
            ))[Math.floor(Math.random() * (this.state.poetryDB.length - 1))] 
          }
        </div>
      )
    }

    render(){
        return(
        <div className="DisplayArt">
          <div className="SVG 1">
            <svg className="SVG_picture"></svg>
            {this.generatePoetry()}
          </div>

          <div className="SVG 2">
            <svg className="SVG_picture"></svg>
            {this.generatePoetry()}
          </div>

          <div className="SVG 3">
            <svg className="SVG_picture"></svg>
            {this.generatePoetry()}
          </div>

          <div className="SVG 4">
            <svg className="SVG_picture"></svg>
            {this.generatePoetry()}
          </div>

          <div className="SVG 5">
            <svg className="SVG_picture"></svg>
            {this.generatePoetry()}
          </div>

          <div className="SVG 6">
            <svg className="SVG_picture"></svg>
            {this.generatePoetry()}
          </div>
        </div>
        )
    }
}

export default DisplayArt; 
