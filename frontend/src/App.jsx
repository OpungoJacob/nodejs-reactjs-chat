import React from 'react';
import { useState } from 'react';
import "./App.css";

import AuthPage from "./AuthPage";
import ChatsPage from "./ChatsPage";

function App() {

  const [user, setuser] = useState(undefined);

  if(!user) {
    return <AuthPage onAuth={(user) => setuser(user)} />;
  } else {
    return <ChatsPage user ={user} /> ;
  }
  return (
    <div>App</div>
  )
}

export default App