import React from 'react';
import Home from './Home';
import Category from './Category';
import Products from './Products';
import Nav from './Nav';
import Login,{fakeAuth} from './Login';
import{Redirect,Route,BrowserRouter as Router, Switch} from 'react-router-dom';


   const PrivateRoute = ({component: Component, authed, ...rest}) => {
    return (
      <Route
        {...rest}
        render={(props) => authed === true
          ? <Component {...props} />
          : <Redirect to={{pathname:'/login', state: {from: props.location}}} />} />
    )
  }


  function Protected (){return(
    <h1> Welcome admin </h1>)}
   
   
   
function App(){
return(
    <Router>
     
        <Nav />
        <Switch>
      <Route  path='/' exact component={Home} />
      <Route  path='/category' component={Category} />
      <Route path='/products' component={Products} />
      
      <Route path="/login" component={Login}/> 
      <PrivateRoute authed={fakeAuth.isAuthenticated} path='/admin' component = {Protected} />
 
      </Switch>
    
</Router>
    )
}
export default App;