import React,{Component} from 'react';
import Board from './Components/Board';
import './App.css';
import Main from './Components/Main';

class App extends Component{
  render(){
    return(
      <div className="App">
        {/* <Main/> */}
        <Board/>
      </div>
    );
  }
}

export default App;
