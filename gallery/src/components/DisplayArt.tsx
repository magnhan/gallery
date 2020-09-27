import React, {Component} from "react";
import Installation from "./paintings/Installation";


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
          <Installation image={1} poem={this.generatePoetry()} />
          <Installation image={2} poem={this.generatePoetry()} />
          <Installation image={3} poem={this.generatePoetry()} />
          <Installation image={4} poem={this.generatePoetry()} />
          <Installation image={5} poem={this.generatePoetry()} />
          <Installation image={6} poem={this.generatePoetry()} />
        </div>
        )
    }
}

export default DisplayArt; 
