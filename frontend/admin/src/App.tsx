import React from 'react';
import { Route } from 'react-router';
import './App.css';
import {Layout} from "./Pages/Layout/Layout";
import {Home} from "./Pages/Home/Home";
import {UserListComponent} from "./Components/Users/UserListComponent";
import {BrowserRouter, Switch} from "react-router-dom";
import {routes} from "./Routes/Routes";
import LoginPage from "./Pages/Login/LoginPage";
import Authorize from "./Pages/Authorization/Authorize";
import SignIn from "./Pages/Authorization/SignIn";
import MyProfileComponent from "./Components/Users/MyProfileComponent";
import UserProfileComponent from "./Components/Users/UserProfileComponent";

export const App: React.FC = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path={routes.login} component={LoginPage} />
                <Route exact path={routes.signIn} component={SignIn} />
                <Layout>
                    <Authorize>
                        <Route exact path={routes.home} component={Home} />
                        <Route exact path={routes.userList} component={UserListComponent} />
                        <Route exact path={routes.myProfile} component={MyProfileComponent} />
                        <Route exact path={routes.profile} component={UserProfileComponent} />
                    </Authorize>
                </Layout>
            </Switch>
        </BrowserRouter>
    )
};
