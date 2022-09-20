import React, { useState } from 'react'



const Form = (props) => {
    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [conf, setConf] = useState('');
    const [val, setVal] = useState({ username: "", email: "", pass: "", confPass: "" });
   
    const [userVal, setUserVal] = useState('hidden');
    const [emailVal, setEmailVal] = useState('hidden');
    const [passVal, setPassVal] = useState('hidden');
    const [confVal, setConfVal] = useState('hidden');
    
    function onChange(e) {
        setVal({ ...val, [e.target.name]: e.target.value })
    }
    
    const [type, setType] = useState('password');
    const [eyeType, setEyeType] = useState('eye-slash');
    function toggle() {
        if (type === 'password') { setType('text'); setEyeType('eye') }
        else {
            setType('password');
            setEyeType('eye-slash');
        }
    }
    
    function checkValdity(name) {
        var flag = true;
        switch (name) {
            case "username":
                if (val.username.length > 3 && val.username.length < 25) {
                    setUser('valid');
                    setUserVal('hidden');
                }
                else {
                    setUserVal('');
                    setUser('invalid');
                    flag = false;
                }
                break;
            case 'email':
                if (!val.email.trim().toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                    setEmail('invalid'); flag = false;
                    setEmailVal('');
                }
                else {
                    setEmail('valid');
                    setEmailVal('hidden');
                }
                break;
            case 'pass':
                if (val.pass.match(/[a-z]/g) && val.pass.match(/[A-Z]/g) &&
                    val.pass.match(/[0-9]/g) && val.pass.match(/[^a-zA-Z\d]/g) && val.pass.length >= 8) {
                    setPassVal('hidden');
                    setPass('valid');
                }
                else {
                    setPassVal('');
                    setPass('invalid'); flag = false;
                }
                break;
            default:
                if (val.pass === val.confPass) {
                    setConf('valid');
                    setConfVal('hidden');
                }
                else {
                    setConf('invalid');
                    flag = false;
                    setConfVal('');
                }
                break;
        }
        return flag;
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            checkValdity('username') &&
            checkValdity('email') &&
            checkValdity('pass') &&
            checkValdity('confirmPass')){
                props.showModal(''); 
                console.log("ok");
            }
    }
    
    return (
        <form onSubmit={handleSubmit} className="form">
            <h1>Sign Up</h1>
            <div className="input">
                <label htmlFor="username">Username:</label>
                <input className={`${user}`} type="text" id="username" name="username" onChange={onChange} value={val.username} required />
                <p id='user-msg' className={`msg ${userVal}`}>Username must be between 3 and 25 characters</p>
            </div>
            <div className="input">
                <label htmlFor="Email">Email:</label>
                <input className={`${email}`} type="text" id="email" name="email" onChange={onChange} value={val.email} required />
                <p id="email-msg" className={`msg ${emailVal}`}>Not an Email</p>

            </div>
            <div className="password">
                <label htmlFor="password">Password : </label>
                <div className="password-field">
                    <input className={`${pass}`} type={type} id="password" name="pass" onChange={onChange} value={val.pass} required />
                    <i className={`fa-regular fa-${eyeType}`} onClick={toggle} id="toggle"></i>
                </div>
                <p id="pass-msg" className={`msg ${passVal}`}>Password must be atleast 8 characters and should include
                    atleat 1 lowercase, 1 uppercase, 1 number and 1 special character in (!@#$%^&*)</p>
            </div>

            <div className="input">
                <label htmlFor="conf-pass">Confirm Password:</label>
                <input className={`${conf}`} type="password" id="conf-password" name="confPass" onChange={onChange} value={val.confPass} required />
                <p id="conf-pass-msg" className={`msg ${confVal}`}>Passwords mismatch</p>
            </div>
                <button className='submit-btn'>Submit</button>
        </form>
    )
}

export default Form