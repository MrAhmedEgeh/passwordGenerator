import React from 'react';
import './ThePassword.css';
import eyeslash from '../icons/eye-slash.svg'
import eye from '../icons/eye.svg'
import copy from '../icons/copy.png'
const Passwords = ({passGenerator}) =>{
    const copyClick = () =>{
        // want to copy if password is visible
        const myInput = document.querySelector('#inpt').value;
        navigator.clipboard.writeText(myInput);
    }
    const seePassword = (e) =>{
        const inputField = document.querySelector('#inpt');
        if(e.target.src === 'http://localhost:3000/static/media/eye-slash.bbea8303.svg'){
            e.target.src = eye
            inputField.type = 'text';
        }else{
            e.target.src = eyeslash;
            inputField.type = 'password';
        }
    }
    const myPasswordS = () =>{
        let field = document.querySelector('#inpt');
        field.value = passGenerator();
    }

    return(
        <div className="myform">
            <h3>Password Generator</h3>
            <input id="inpt" className="pass" type="password" placeholder="Enter a password"/>
            <div className="eyeContainer">
            <img onClick={seePassword} className="eye" src={eyeslash} alt="eye icon for hiding and showing the password"/>
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