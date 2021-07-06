import React, { useState } from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length==1){
            setFirstNameError('*first name must be at least two characters');
        } else {
            setFirstNameError('');
        }
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length==1){
            setLastNameError('*last name must be at least two characters');
        } else {
            setLastNameError('');
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length>0 && e.target.value.length<5){
            setEmailError('*email must be longer than 5 characters');
        } else {
            setEmailError('');
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length>0 && e.target.value.length<8){
            setPasswordError('*password must be at least 8 characters');
        } else {
            setPasswordError('');
        }
    }
    const handleConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value.length>0 && e.target.value!=password){
            setConfirmPasswordError('*passwords must match');
        } else {
            setConfirmPasswordError('');
        }
    }

    return (
        <form onSubmit={(e)=>e.preventDefault()}>
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input onChange={ handleFirstName } type="text" id='firstName' name='firstName' value={ firstName }/>
            </div>
            {
                firstNameError ?
                <p style={{color:'red'}}>{firstNameError}</p>:
                ''
            }
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input onChange={ handleLastName } type="text" id='lastName' name='lastName' value={ lastName }/>
            </div>
            {
                lastNameError ?
                <p style={{color:'red'}}>{lastNameError}</p>:
                ''
            }
            <div>
                <label htmlFor='email'>Email</label>
                <input onChange={ handleEmail } type="email" id='email' name='email' value={ email }/>
            </div>
            {
                emailError ?
                <p style={{color:'red'}}>{emailError}</p>:
                ''
            }
            <div>
                <label htmlFor='password'>Password</label>
                <input onChange={ handlePassword } type="password" id='password' name='password' value={ password }/>
            </div>
            {
                passwordError ?
                <p style={{color:'red'}}>{passwordError}</p>:
                ''
            }
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input onChange={ handleConfirmPassword } type="password" id='confirmPassword' name='confirmPassword' value={ confirmPassword }/>
            </div>
            {
                confirmPasswordError ?
                <p style={{color:'red'}}>{confirmPasswordError}</p>:
                ''
            }
            <div>
                <p>First Name: { firstName }</p>
                <p>Last Name: { lastName }</p>
                <p>Email: { email }</p>
                <p>Password: { password }</p>
                <p>Confirm Password: { confirmPassword }</p>
            </div>
        </form>
    )
}

export default Form;