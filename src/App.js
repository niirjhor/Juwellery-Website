import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import Navigation from './Components/Shared/Navigation/Navigation';
import Login from './Components/Authentication/Login/Login';
import SignUp from './Components/Authentication/SignUp/SignUp';
import Home from './Components/Home/Home/Home';
import Shop from './Components/Shop/Shop';
import About from './Components/Home/About/About';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <div className="App">
       <AuthProvider>
       <BrowserRouter>
      <Navigation></Navigation>
          <Switch>
              <Route path='/login'> 
                  <Login></Login>
              </Route>
              <Route path='/register'> 
                  <SignUp></SignUp>
              </Route>
          <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
          <Route path="/about">
              <About></About>
            </Route>          
          <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>          
                 
          <PrivateRoute path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </PrivateRoute>          
          </Switch>
          <Footer></Footer>
      </BrowserRouter>
       </AuthProvider>
       </div>
  );
}

export default App;
