import React, { Component } from "react";
import "./App.css";
import "./index.css";
import DisplayArt from "./components/DisplayArt";

class App extends Component<any,any> {
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

  render() {
    return (
      <div className="App">
        <div className="Welcome-page">
        {
         this.state.poetryDB.map((poem: { title: string | number | null | undefined; lines: React.ReactNode; }) => (
           <p key={poem.title}>
             {poem.title}
             </p>
          ))}
        </div>

        <div className="grid-container">
          <div className="Header">Header</div>
          <div className="Menu">Menu</div>
          <DisplayArt/>
          <div className="Footer">Footer</div>
        </div>
      </div>
    )
  }
}

export default App;
