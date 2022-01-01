import React, {useRef, useState} from 'react';
import './ThePassword.css';
import eyeslash from '../icons/eye-slash.svg'
import eye from '../icons/eye.svg'
import copy from '../icons/copy.png'
const Passwords = ({passGenerator}) =>{

    const inputRef = useRef();
    const seePassIcon = useRef();

    const [showPass, setShowPass] = useState(false);
    const [passwords, setPasswords] = useState('');
    const copyClick = () =>{
        navigator.clipboard.writeText(passwords);
    }
    const seePassword = (e) =>{
        setShowPass(!showPass);
    }
    const myPasswordS = () =>{
        setPasswords(passGenerator());
    }
    const setPassword = (e) => {
        setPasswords(e.target.value);
    }

    return(
        <div className="myform">
            <h3>Password Generator</h3>
            {
                showPass === true ?
                (
                    <input id="inpt" onChange={setPassword} value={passwords} className="pass" type="text" placeholder="Enter a password" ref={inputRef}/>
                )
                :
                (
                    <input id="inpt" onChange={setPassword} value={passwords} className="pass" type="password" placeholder="Enter a password" ref={inputRef}/>
                )
            }
            <div className="eyeContainer">
            {
                showPass === true ?
                (
                    <img onClick={seePassword} className="eye" src={eye} ref={seePassIcon} alt="eye icon for hiding and showing the password"/>
                )
                :
                (
                    <img onClick={seePassword} className="eye" src={eyeslash} ref={seePassIcon} alt="eye icon for hiding and showing the password"/>
                )
            }
            </div>
            <div className="copyContainer">
            <img onClick={copyClick} className="copy" src={copy} alt="copy icon for copying the password"/>
            </div>
            <button onClick={myPasswordS}>
                Generate a password
            </button>
        </div>
    );
}

export default Passwords;