import React, { Component } from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";
import logo from './logo.svg';
import './App.css';

const GET_BEDS = gql`
{
  allBeds {
    id
    reference
    newPrice
    price
    header
  }
}
`;
class App extends Component {
  render() {
    return (
      <div className="App">
        <Query query={GET_BEDS}>
        {({loading, error, data}) => {
          if (loading) return "Loading...";
          if (error) return `Error! ${error.message}`;
          return (
            <div>
            <h2>All Combinations</h2>
            {data.allBeds.map(bed =>(
              <p>Combination => {bed.id}</p>
            ))}
            </div>
          );
        }}
        </Query>

      </div>
    );
  }
}



export default App;
