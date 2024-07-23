import Logo from "./components/Logo.jsx";
import Form from "./components/Form.jsx";
import CV from "./components/CV.jsx";
// import { useState } from "react";


function App() {
  // const [personalInfo, setPersonalInfo] = useState({});
  // const [educationInfo, setEducationInfo] = useState({});
  // const [experienceInfo, setExperienceInfo] = useState({});

  return (
    <div className='app'>
      <Logo />
      <div className="content">
        <Form />
        <CV />
      </div>
    </div>
  )
}

export default App
