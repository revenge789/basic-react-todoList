import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
  <div className=" w-screen h-screen justify-center items-center flex bg-wheat">
    <div className=" w-1/2 h-1/2 p-6 rounded-lg bg-tan flex-column border-4 border-orange-300">
      <h1 className="text-center text-2xl mb-4">Todo List</h1>
      <App/>
      </div>
  </div>
</>
);

