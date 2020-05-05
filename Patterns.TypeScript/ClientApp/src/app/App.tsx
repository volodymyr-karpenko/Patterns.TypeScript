import * as React from "react";
import { Route } from "react-router";
import Layout from "./Layout";
import HomePage from "../features/home/HomePage";
import PatternsPage from "../features/patternsDemo/PatternsPage";
import "./app.css";

export default class App extends React.PureComponent {

    public render() {

        return (

            <Layout {...this.props}>
                <Route exact path="/" component={HomePage} />
                <Route path="/patterns" component={PatternsPage} />
            </Layout>

        );
    }
}
