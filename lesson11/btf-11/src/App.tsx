import React from 'react';
import './App.css';
import { book } from "./Book";
import Library from "./Library";

const books: book[] = [
  {
    name: 'Harry Potter',
    author: 'J. K. Rouling'
  },
  {
    name: '1984',
    author: 'Ourel',
  },
]

function App() {
  return (
    <>
      <Library books={books} />
    </>
  );
}

export default App;
