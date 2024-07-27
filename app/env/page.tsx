// pages/env.js
import React from 'react';

const EnvPage = () => {
  const envVars = Object.entries(process.env).map(([key, value]) => (
    <p key={key}><strong>{key}</strong>: {value}</p>
  ));

  return (
    <div>
      <h1>Environment Variables</h1>
      {envVars}
    </div>
  );
};

export default EnvPage;
