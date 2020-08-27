import React, { Component } from "react";
import Board from "./components/board";
import "./App.css";
import Main from "./components/main";
import Dashboard from "./components/dashboard";
import Listview from "./components/list-view/list-view";
import Detail from "./components/detail/detail";
import { Route, Redirect } from "react-router-dom";

class App extends Component {
    Auth(){
      if(sessionStorage.login==undefined){
          return <Redirect to="/"/>
      }
      else if((window.location.href=="http://localhost:3000/")&&(sessionStorage.login=="true")){
          return <Redirect to="/board"/>
      }
    }  

    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Main} />
                {this.Auth()}
                <Route path="/list/:type" component={Listview} />
                <Route exact path="/board" component={Dashboard} />
                <Route exact path="/detail" component={Detail} />
                <Route exact path="/visual" component={Board} />
            </div>
        );
    }
}

export default App;
