import './App.css';
import Profile from './profile/Profile';
import Image from './profile/Image';

function App() {
  const user ={
    fullName:'Med Malek',
    bio:'I’m a web developer. I spend my whole day, practically every day, experimenting with HTML, CSS, and JavaScript. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand. The list of projects I follow on GitHub will give you a good idea of the types of tools I’d prefer to be using',
    profession:'Full stack developer'
  }
  const handleName =()=>
  {alert(JSON.stringify(user, null, 4))};

  return (
    <div className="App">
      <Profile user={user} handleName={handleName} />
      <Image/>
    </div>
  );
}

export default App;
