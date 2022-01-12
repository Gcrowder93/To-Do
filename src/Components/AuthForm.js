import React from 'react';

export default function AuthForm({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  errorMessage,
}) {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{errorMessage}</h3>
      <div className="form-controls">
        <label>Email:</label>
        <input
          placeholder="Enter Valid Email Address"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-controls">
        <label>Password:</label>
        <input
          placeholder="Minimum 6 digits req."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <input className="submit" type="submit" />
    </form>
  );
}
