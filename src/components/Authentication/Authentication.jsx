import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import '../../assets/authForm.css';


function Auth() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container"> {/* Ajoutez la classe pour appliquer les styles */}
      {isLogin ? <Login /> : <Register />}
      <button onClick={toggleAuthMode}>
        {isLogin ? 'Pas encore de compte? Inscrivez-vous' : 'Déjà un compte? Connectez-vous'}
      </button>
    </div>
  );
}

export default Auth;
