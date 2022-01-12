import './Auth.css';
import React, { useState } from 'react';
import classnames from 'classnames';
import AuthForm from '../Components/AuthForm';
import { signInUser, signupUser } from '../services/users';

export default function Auth({ setCurrentUser }) {
  const [type, setType] = useState('Sign In');
  const [errorMessage, setErrorMessage] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (type === 'Sign In') {
        resp = await signInUser(email, password);
      } else {
        resp = await signupUser(email, password);
      }
      setCurrentUser(resp);
    } catch {
      setErrorMessage('There was an error, please try again.');
    }
  };
  return (
    <div>
      <div classnames="section">
        <h1
          onClick={() => {
            setType('Sign In');
          }}
          className={classnames({ active: type === 'Sign In' })}
        >
          Sign In
        </h1>
        <h1
          onClick={() => {
            setType('Sign Up');
          }}
          className={classnames({ active: type === 'Sign Up' })}
        >
          Sign Up
        </h1>
      </div>
      <p> {type} </p>
      <AuthForm
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        errorMessage={errorMessage}
      />
    </div>
  );
}
