import React from 'react';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => (
  <div className="App">
    <h1>Task Tracker</h1>
    <TaskForm />
    <TaskList />
  </div>
);

export default App;
