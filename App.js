import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [gender, setGender] = useState("")
  const [phonenumber, setPhonenumber] = useState("")
  const [username, setUsername] = useState("")
  const [nameError, setnameError] = useState("")
  const [emailError, setemailError] = useState("")
  const [phoneNumberError, setphoneNumberError] = useState("")
  const [genderError, setgenderError] = useState("")
  const [emptyError, setEmptyerror] = useState("")
  const resetErrorDefault = () => {
    setnameError("")
    setphoneNumberError("")
    setemailError("")
    setgenderError("")
    setEmptyerror("")
  }
  const validate = () => {
    if (
      name === "" || email === "" || gender === "" || phonenumber === ""
    ) {
      setEmptyerror("All fields are mondatory")
      setUsername("")
      return false
    }
    if (!name.match(/^[A-Za-z0-9- ]+$/)) {
      setnameError("Name is not Alphanumertic")
      setUsername("")
      return false
    }
    if (!email.includes("@")) {
      setemailError("Email must contain @")
      setUsername("")
      return false;
    }
    if (!gender.match(/male|female|other/i)) {
      setgenderError("Please identify as male,female or other")
      setUsername("")
      return false
    }
    if (!phonenumber.match(/^[0-9]+$/)) {
      setphoneNumberError("Phone number must contain only numbers")
      setUsername("")
      return false;
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    resetErrorDefault()
    const isValid = validate()
    if (isValid) {
      setName("")
      setEmail("")
      setGender("")
      setPhonenumber("")
      resetErrorDefault()

    }
    setUsername(email.substr(0,email.indexOf("@")))
  }

  return (

    <div className="form">
      <h1>Student Registration Form</h1>
      <div className="form_body">
        <form onSubmit={handleSubmit}>
          <label className="form__label" for="name">Name :  </label>
          <input className="form_input" type="text" placeholder='name' value={name} onChange={(e) => { setName(e.target.value) }} /> <br />
          <span>{nameError}</span>
          <label className="form__label" for="email">Email :  </label>
          <input className="form_input" type="text" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /><br />
          <span>{emailError}</span>
          <label className="form__label" for="gender">Geneder :  </label>
          <select name="gender" value={gender} onChange = {(e)=>{setGender(e.target.value)}}>
          <option value="select gender">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select><br />
           <span>{genderError}</span>
          <br />
         
          <label className="form__label" for="phonenumber">Phone Number : </label>
          <input className="form_input" type="text" placeholder='Phone Number' value={phonenumber} onChange={(e) => { setPhonenumber(e.target.value) }} /><br />
          <span>{phoneNumberError}</span>
          <span>{emptyError}</span><br />
          <button onClick={() => handleSubmit()} type="submit" class="btn">Register</button>


        </form>
        <div>
        <h2>{username ? "Hello " + username : ""}</h2>
      </div>

      </div>
    </div>
  );
}

export default App;