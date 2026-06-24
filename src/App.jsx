import React, { useState } from 'react';
import PublicLayout from './Layout/Public/PublicLayout';
import Home from './Pages/Public/Home';
import Login from './Auth/Login';
import Register from './Auth/Register';

const App = () => {
  const [view, setView] = useState('landing'); // 'landing', 'login', 'register'

  return (
    <PublicLayout view={view} setView={setView}>
      {view === 'landing' && <Home setView={setView} />}
      {view === 'login' && <Login setView={setView} />}
      {view === 'register' && <Register setView={setView} />}
    </PublicLayout>
  );
};

export default App;