import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import { store, history } from "./app/store";
import App from "./app/App";
import registerServiceWorker from "./common/registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(

    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.getElementById("root")

);

registerServiceWorker();