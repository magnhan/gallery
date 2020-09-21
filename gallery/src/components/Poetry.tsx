import React, { Component } from "react";

class Poetry extends Component<{}, {poetryDB: Readonly<any>} > {
    constructor(props: any){
      super(props);
      console.log(this.props);
  
      this.state = {
        poetryDB: []
      };
    }
    
    componentDidMount() {
      fetch('https://poetrydb.org/author,title/Shakespeare;Sonnet')
        .then(response => response.json())
        .then(users => this.setState({poetryDB: users}));
    }

    generatePoetry(){
      return(
        <div>
          {
            this.state.poetryDB.map((poem: { title: string | number | null | undefined; lines: React.ReactNode; }) => (
            <p key={poem.title}>
              {poem.title}
            </p>
            ))[Math.floor(Math.random() * (this.state.poetryDB.length - 1))]
          }
        </div>
      )
    }

    render(){
        return(
          this.generatePoetry()
        )
    }
}

export default Poetry; 
