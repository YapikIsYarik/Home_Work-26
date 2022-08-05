import './App.css';
import SignIn from "./components/sign-in";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import SignUp from "./components/sign-up";
import Welcome from "./components/welcome";

function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <div className="container">

                    <Router>
                        <Route exact path="/">
                            <Redirect to="/sign-in"/>
                        </Route>
                        <Route path='/sign-in' component={SignIn}/>
                        <Route path='/sign-up' component={SignUp}/>
                        <Route path='/home' component={Welcome}/>
                    </Router>

                </div>
            </div>


        </div>
    );
}

export default App;
