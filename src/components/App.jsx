import React from "react";
import {useDispatch} from "react-redux";
import {HashRouter} from "react-router-dom";
import {Route, Switch, Redirect} from "react-router-dom";
import Main from "./main/Main";
import "./App.less"
import Card from "./main/card/Card";


const App = () => {
    return (
        <HashRouter>
            <div className='content'>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route path="/card/:username/:reponame" component={Card}/>
                    <Redirect to="/"/>
                </Switch>
            </div>
        </HashRouter>
    )
}
export default App