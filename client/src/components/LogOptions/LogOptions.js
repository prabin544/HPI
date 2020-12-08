import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../../Context/UserContext';

export default function LogOptions() {
    const { userData, setUserData } = useContext(UserContext);
    const history = useHistory();

    const register = () => history.push('/register')
    const login = (e) => {
      e.preventDefault();
      // setUserData({
      //   token: TOKEN,
      //   user: USER
      // });
      // localStorage.setItem("auth-token", "");
      history.push('/login')
    }
    const logout = (e) => {
      e.preventDefault();
        setUserData({
          token: undefined,
          user: undefined
        });
        localStorage.setItem("auth-token", "");
      };
      console.log('USER DATA', userData)
      return (
        
        <div className="auth-options">
          {userData.user ? (
            <button onClick={logout}>Log out</button>
          ) : (
            <>
              <button onClick={register}>Register</button>
              <button onClick={login}>Log in</button>
            </>
          )}
        </div>
      );
}