import React from 'react'
import '@/App.scss'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter } from 'react-router-dom'
import RouterView from '@/router'
import Header from '@/components/Header'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <RouterView />
      </BrowserRouter>
    </div>
  )
}

export default hot(App)
