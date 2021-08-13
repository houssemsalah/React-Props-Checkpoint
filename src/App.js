
import './App.css';
import Profile from './profile/Profile';


function App() {
  let fullName = "HoussemSalah"
  let bio = 28
  let profession = "Software Deveolper"

  let handleName=(name)=>{
  alert(name)
  }

  return (
    <div>
      <Profile name={fullName} age={bio} pro={profession} alrt={handleName} />

    </div>

  );
}


export default App;
