import React from 'react';
import './App.scss';
import { hot } from "react-hot-loader/root";
import Router from './router'

function App() {
  return (
    <Router />
  );
}

export default hot(App);
