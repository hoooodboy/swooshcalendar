import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Today from './pages/Today';
import Event from './pages/Event';

const App = () => {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login}/>
        <Route path="/today" component={Today}/>
        <Route path="/event" component={Event} />
      </BrowserRouter>
    );
}

export default App; 
