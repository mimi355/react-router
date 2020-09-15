
import React,{useState} from 'react';
import {Redirect} from 'react-router-dom';

export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    }
    
  };



function Login(props){
    const [redirectToReferrer, setRedirectToReferrer] = useState(false);

    const login = () => {
        fakeAuth.authenticate(() => setRedirectToReferrer(true));
      };
    
      const { from } = props.location.state || { from: { pathname: "/" } };
    
      if (redirectToReferrer) {
        return <Redirect to={from} />;
      }

    return (
      <div>
        <p>You must log in to view the page at{from.pathname} </p>
        <button onClick={login}>Log in</button>
      </div>
    );
  };
 
  export default Login;