import React from 'react';
import logo from './logo.svg';
import './App.less';
import TaskInput from './components/TaskInput/TaskInput';
import TaskLists from './components/TaskLists/TaskLists';

function App() {
  return (
    <div>
      <header>
        <TaskInput />
      </header>

      <TaskLists />
    </div>
  );
}

export default App;
