import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hook";
import ApolloClient, { operationName } from "@apollo/client";
import Header from "./components/Header";
import Message from "./components/Message";
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
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login"  component={Login}/>
            <Route exact path="/messges" component={Message} />
          </Provider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
