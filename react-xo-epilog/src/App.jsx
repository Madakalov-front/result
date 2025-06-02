import { Component } from "react";
import XO from "./xo/app/XO";

class App extends Component {
  render() {
    return (
      <div className="min-h-screen bg-gray-100">
        <XO />
      </div>
    );
  }
}

export default App;