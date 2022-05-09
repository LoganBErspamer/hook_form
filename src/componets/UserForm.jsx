import React, {useState} from 'react'


    const UserForm = () => {
const [firstName, setFirstName] = useState("")
const [lastName, setLastName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [confirmPassword, setConfirmPassowrd] = useState("")

const firstNameHandler = (e)=>{
    setFirstName(e.target.value)
}
const lastNameHandler = (e)=>{
    setLastName(e.target.value)
}
const emailHandler = (e)=>{
    setEmail(e.target.value)
}
const passwordHandler = (e)=>{
    setPassword(e.target.value)
}
const confirmPasswordHandler = (e)=>{
    setConfirmPassowrd(e.target.value)
}

  return (
    <div>
        <div>
        <form>
            <div>
            <label>First Name:</label>
            <input type="text" name="First Name" onChange={firstNameHandler} value={firstName} />
            </div>
            <div>
            <label>Last Name:</label>
            <input type="text" name="Last Name" onChange={lastNameHandler} value={lastName} />
            </div>
            <div>
            <label>Email:</label>
            <input type="text" name="Email" onChange={emailHandler} value={email} />
            </div>
            <div>
            <label>Password:</label>
            <input type="password" name="Password" onChange={passwordHandler} value={password} />
            </div>
            <div>
            <label>Confirm Password:</label>
            <input type="password" name="Confirm Password" onChange={confirmPasswordHandler} value={confirmPassword}/>
            </div>
        </form>
        </div>
        <div>
            <h1>Form Data</h1>
        <p>First Name: {firstName}</p>
        <p>Last Name: {lastName}</p>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Confirm Password: {confirmPassword}</p>
        </div>
    </div>
  )
}

export default UserForm