import './App.css'
import Login from './Component/Login/Login';
import SignUp from './Component/Signup/Signup';
import Dashboard from './Component/Dashboard/Dashboard'
import Certificate from './Component/Certificate/Certificate'


function App() {
  return (
    <div>
       <SignUp/>
       <Login/>
       <Dashboard/>
       <Certificate/>
       </div>
  );
}

export default App;
