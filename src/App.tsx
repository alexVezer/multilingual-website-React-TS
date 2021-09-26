import React, { FC } from 'react';
import { BrowserRouter as Router} from 'react-router-dom'
import { Route } from 'react-router'
import './styles/style.scss'
import HomeScreen from './screens/HomeScreen';




const App: FC = () => {
  

  return (
    <Router>
      <Route path='/' component={HomeScreen}></Route>
    </Router>
  );
}

export default App;
