import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify'
import awsExports from './aws-exports';
import config from './aws-exports';

import { updateGame } from './graphql/mutations'
import { listGames } from './graphql/queries'

import './App.css';
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Poker Feed</h1>
        <p>Most recent game:</p>
      </header>
    </div>
  );
}

export default App;