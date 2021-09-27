import React, { FC, useContext } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/style.css'
import HomeScreen from './screens/HomeScreen';
import { LangContext } from './context/lang';
import Page404 from './screens/Page404';




const App: FC = () => {
  const {dispatch: {translate}} = useContext(LangContext);

  return (
    <Router>
      <Switch>
      <Route path='/' exact> 
        <HomeScreen translate={translate}/>
      </Route>
      <Route path='*'>
        <Page404 translate={translate}/>
      </Route>
      </Switch>
    </Router>
  );
}

export default App;
