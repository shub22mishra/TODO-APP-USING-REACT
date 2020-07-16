import React from 'react';

import './App.css';
import ToDoList from './ToDoList';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTrash, faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faEdit, faPlus);

function App() {
  return (
    <div className="App">
      <ToDoList/>
      
    </div>
  );
}

export default App;
