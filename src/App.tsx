import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import Dashboard from './pages/AppPage/Dasboard';
import FormPage from './pages/AuthPage/FormPage';

const App = () => {
  return (
    <div className='font-inter'>
      <BrowserRouter>
        <Switch>
          <Route
            path={['/', '/login', '/signUp']}
            exact
          >
            <FormPage />
          </Route>
          <Route>
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
