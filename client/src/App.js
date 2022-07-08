import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hook";

import {
  ApolloClient,
  //InMemoryCache,
  ApolloProvider,
  //createHttpLink,
  //operationName,
} from "@apollo/client";
//import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Message from "./components/Message";
import Provider from './pages/Login';
import shop from  './redux/';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from "./pages/Success";
import Login from "./pages/Login"


//import './App.css';



const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem("id_token")
    operation.setContext({
      headrs: {
        authorization: token? `bearer ${token}`: ""
      }
    })
  },
  uri : "/graphql", 
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Provider shop={shop}>
            <Header />

            <Switch>
            <Header />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login"  component={Login}/>
            <Route exact path="/messges" component={Message} />
            <Route exact path="/success" component={Success} />
            <Router exact path="/orderHistory" component={OrderHistory}/>
            </Switch>
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
