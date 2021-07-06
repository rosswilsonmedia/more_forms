import React, { useState } from 'react';

const Form = props => {
    const [firstName, setFirstName] = useState(
        ""
    );
    const [lastName, setLastName] = useState(
        ""
    );
    const [email, setEmail] = useState(
        ""
    );
    const [password, setPassword] = useState(
        ""
    );
    const [confirmPassword, setConfirmPassword] = useState(
        ""
    );

    return (
        <form action="">
            <div>
                <label htmlFor='firstName'>First Name</label>
                <input onChange={ (e) => setFirstName(e.target.value) } type="text" id='firstName' name='firstName' value={ firstName }/>
            </div>
            <div>
                <label htmlFor='lastName'>Last Name</label>
                <input onChange={ (e) => setLastName(e.target.value) } type="text" id='lastName' name='lastName' value={ lastName }/>
            </div>
            <div>
                <label htmlFor='email'>Email</label>
                <input onChange={ (e) => setEmail(e.target.value) } type="email" id='email' name='email' value={ email }/>
            </div>
            <div>
                <label htmlFor='password'>Password</label>
                <input onChange={ (e) => setPassword(e.target.value) } type="password" id='password' name='password' value={ password }/>
            </div>
            <div>
                <label htmlFor='confirmPassword'>Confirm Password</label>
                <input onChange={ (e) => setConfirmPassword(e.target.value) } type="password" id='confirmPassword' name='confirmPassword' value={ confirmPassword }/>
            </div>
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