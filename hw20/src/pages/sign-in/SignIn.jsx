import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../img/pad-img.png";
import "../form.css"

import FormStyle from "../../components/form";
import ImgStyle from "../../components/img";
import InputStyle from "../../components/input";
import ButtonStyle from "../../components/button";

const SignIn = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    useEffect(() => {
        const savedLoginData = localStorage.getItem('loginData');
        if (savedLoginData) {
            const { email: savedEmail, password: savedPassword, rememberMe: savedRememberMe } = JSON.parse(savedLoginData);
            setEmail(savedEmail);
            setPassword(savedPassword);
            setRememberMe(savedRememberMe);
            setIsFormValid(true);
        }
    }, []);
 
 
    const validateEmail = (email) => {
        const emailRegex = /^[A-Za-z0-9]{3,}@[A-Za-z0-9]{2,}\.[A-Za-z]{2,}$/;
        const isValid = emailRegex.test(email);
        setIsEmailValid(isValid);
        return isValid;
    };

    const validatePassword = (password) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{8,}$/;
        const isValid = passwordRegex.test(password);
        setIsPasswordValid(isValid);
        return isValid;
    };

    const setData = (value, name) => {
        let isValid = true;
        if (name === "Email") {
            isValid = validateEmail(value);
        } else if (name === "Password") {
            isValid = validatePassword(value);
        }

        const block = document.getElementsByName(name)[0]

        if (isValid) {
            block.classList.add('correct');
            if (isEmailValid && isPasswordValid) {
                setIsFormValid(true)
            }
            const setterFunctions = {
                Email: setEmail,
                Password: setPassword,
                RememberMe: setRememberMe,
            };
            const setterFunction = setterFunctions[name];
            if (setterFunction) {
                setterFunction(value);
            }
        } else {
            block.classList.add('error');
        }
    }

    const saveLoginData = () => {
        const loginData = {
            email,
            password,
        };
        localStorage.setItem('loginData', JSON.stringify(loginData));
    };

    return (
        <FormStyle>
            <ImgStyle><img className="form-img" src={img} alt='lock'></img></ImgStyle>
            <h1 className='form-title'>Sign in</h1>
            <InputStyle

                value={email}
                onChange={e => {
                    setEmail(e.target.value)
                    setData(e.target.type === 'checkbox' ? e.target.checked :
                        e.target.value, e.target.name)
                }}
                type="text"
                placeholder="Email Address *"
                name="Email">
            </InputStyle>
            <InputStyle type="password" placeholder="Password *" name="Password"
                value={password}
                onChange={e => {
                    setPassword(e.target.value)
                    setData(e.target.type === 'checkbox' ? e.target.checked :
                        e.target.value, e.target.name)
                }}>
            </InputStyle>
            <label className='label-text'>
                <div className="checkBox-format" >
                    <InputStyle
                        value={rememberMe}
                        onChange={e => {

                            setData(e.target.type === 'checkbox' ? e.target.checked :
                                e.target.value, e.target.name)
                        }}
                        className="checkBox-format-input" type="CheckBox" name="RememberMe"></InputStyle>
                </div>
                Remember me
            </label>

            <ButtonStyle className={isFormValid ? "" : "disabled"}
                onClick={() => {
                    if (isFormValid) {
                        saveLoginData();
                        alert('Login successful!');
                    }
                }}
                disabled={!isFormValid}>Sign In
            </ButtonStyle>

            <div className='form-links'>
                <Link to="/" className='form-links-text'>Forgot password?</Link>
                <Link to="/sign-up" className='form-links-text'>Don't have an account? Sign up</Link>
            </div>
        </FormStyle>
    );
};

export default SignIn;