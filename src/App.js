import { useState, createContext } from 'react'
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import HomePage from './HomePage';
import ConditionPage from './ConditionPage';
import PlanPage from './PlanPage';
import ButtonAppBar from './ButtonAppBar';
import BottomNavigation from './BottomNavigation';
import { makeStyles, } from '@material-ui/core/styles';
import Home from './Home';

import { Box, } from '@material-ui/core'

import ScrollDialog from './ScrollDialog'

export const AppContext = createContext();

const useStyles = makeStyles((theme) => ({
  root: {
  },
  bottomNavigation: {
    position: 'fixed',
    bottom: theme.spacing(2),
  },
}));

export default function App() {
  const classes = useStyles();
  const [google, setGoogle] = useState(null);
  const [map, setMap] = useState(null);
  const [plan, setPlan] = useState(null);
  const [markers, setMarkers] = useState(null);
  const [condition, setCondition] = useState(null);
  const [places, setPlaces] = useState(null);
  const contextValue = {
    google, setGoogle,
    map, setMap,
    plan, setPlan,
    markers, setMarkers,
    condition, setCondition,
    places, setPlaces,
  }
  return(
    <AppContext.Provider value={contextValue}>
      <Router>
        <Box>
          <Switch>
            <Route path="/condition">
              <ConditionPage />
            </Route>
            <Route path="/plan">
              <PlanPage />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Box>
      </Router>
    </AppContext.Provider>
  )
}