import {Route,Switch} from 'react-router-dom';


import AllMeetUpsPage from './pages/AllMeetUps';
import FavoritesPage from './pages/Favorites';
import NewMeetUpPage from './pages/NewMeetUp';
import Layout from './components/layout/Layout';


function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetUpsPage/>
        </Route>
        <Route path="/new-meetup">
          <NewMeetUpPage/>
        </Route>
        <Route path="/favorites">
          <FavoritesPage/>
        </Route>
      </Switch>
   </Layout>
  );
}

export default App;
