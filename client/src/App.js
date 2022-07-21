import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OrderHistory from "./pages/OrderHistory";
//import ApolloClient  from '@apollo-boost';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Header from "./components/Header";
import Message from "./components/Message";
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Success from "./pages/Success";
import Login from "./pages/Login";
import store from './redux/Store';
import Nav from './components/Nav';




const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem("id_token")
//     operation.setContext({
//       headers: {
//         authorization: token ? `Bearer ${token}` : ""
//       }
//     })
//   },
//   uri: "/graphql",
// })



// const client = new ApolloClient({
//   request: (operation) => {
//     const token = localStorage.getItem("id_token")
//     operation.setContext({
//       headrs: {
//         authorization: token? `bearer ${token}`: ""
//       }
//     })
//   },
//   uri : "/graphql", 
// })

function App() {
  return (
    <ApolloProvider client={client}>
    
      <Router>
      <div className="flex-column justify-flex-start min-100-vh">
          <Provider store={store}>
            
            <Header />
            <div className="container">
            <Routes>
            
            <Route exact path="/" component={Home} />
            <Route exact path="/login"  component={Login}/>

            <Route exact path="/cart" component={Cart} />
            <Route exact path="/messages" component={Message} />
            <Route exact path="/success" component={Success} />
            <Route exact path="/orderHistory" component={OrderHistory} />
          
            </Routes>
            </div>
          </Provider>
          </div>
      </Router>
  </ApolloProvider>

  
)
}


export default App;
