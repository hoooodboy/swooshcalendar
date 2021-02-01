import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './Home';

const App = () => {
    return (
      <BrowserRouter>
        <Route path="/" component={Home} exact />
      </BrowserRouter>
    );
}

export default App;