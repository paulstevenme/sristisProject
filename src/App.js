import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React, { useEffect } from "react";
import LoginPage from './LoginPage';
import TaskDetailsPage from './TaskDetailsPage';
import TaskListPage from './TaskListPage';

function App() {
  useEffect(() => {
    document.title = "Sristis Project";
  });
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<LoginPage />} />
        <Route exact path='/tasklist' element={<TaskListPage />} />
        <Route exact path='/tasklist-details' element={<TaskDetailsPage />} />
  
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
