import './App.css';
import React from 'react';
import Profil from './Profile/Profil';

function App() {
  const fullName = "Mekki ben guirat";
  const bio = "Gamer";
  const profession = "Student";
  const handleName =() => {
    alert(`Hello! ${fullName} !`);

  }
  return (
    <div className="App">
    <Profil fullName={fullName} bio={bio} profession={profession} handleName={handleName}>
      <img style={{width:"280px", height:"350px", }} src='/mekki98.jpg' alt='mypic'/>
    </Profil>

    </div>
  );
}

export default App;
