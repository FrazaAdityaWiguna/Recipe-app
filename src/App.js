import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './components/auth/Signin';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/pages/dashboard';
import Navbar from './components/navbar';
import { store } from './config/redux';
import Create from './components/pages/create';
import Recipe from './components/pages/request';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/signin' component={Signin} />
            <Route path='/signup' component={SignUp} />
            <Route path='/create' component={Create} />
            <Route path='/request' component={Recipe} />
            <Route path='/' component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
