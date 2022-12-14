import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import AddStudent from './components/dbPages/AddStudent';
import AddTeacher from './components/dbPages/AddTeacher';
import StudentDB from './components/dbPages/StudentDB';
import TeacherDB from './components/dbPages/TeacherDB';
import EditStudent from './components/dbPages/EditStudent';
import EditTeacher from './components/dbPages/EditTeacher';
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Home from "./components/home/Home";



function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user && user._id ? <Home setLoginUser={setLoginUser} /> : <LoginRegister setLoginUser={setLoginUser}/>} />
            {/* {
              user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            } */}
            <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginRegister setLoginUser={setLoginUser}/>}  />
          <Route path="/register" element={<LoginRegister />} />

        <Route path='/students' element={<StudentDB/>} />
          <Route path='/teachers' element={<TeacherDB/>} /> 
          <Route path='/add_teacher' element={<AddTeacher/>} />
          <Route path='/add_student' element={<AddStudent/>} />
          <Route path='/student/edit/:id' element={<EditStudent/>} />
          <Route path='/teacher/edit/:id' element={<EditTeacher/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
