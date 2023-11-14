import React from 'react';

import './App.css';
import Main from "./main/main";
import {Route, Routes} from "react-router-dom";
import BookComponent from "./book/book";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/book/:bookId" element={<BookComponent/>}/>
        </Routes>
    </div>
  );
}

export default App;
