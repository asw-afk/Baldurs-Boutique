//import { useState } from 'react'
import { Outlet } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import Header from "./components/header/header.jsx";
import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});
import Login from "./components/auth/Login.jsx";
import Auth from "./utils/auth";
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
function App() {

  return (
    <>
      <ApolloProvider client={client}>
        {!Auth.loggedIn() ? (
          <Login />
        ) : (
          <>
            <Header />
            <Outlet />
          </>
        )}
      </ApolloProvider>
    </>
  );
}

export default App;
