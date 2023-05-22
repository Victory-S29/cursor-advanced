import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import img from "../../img/pad-img.png";
import "../form.css"

import FormStyle from "../../components/form";
import ImgStyle from "../../components/img";
import InputStyle from "../../components/input";
import ButtonStyle from "../../components/button";

const SignUp = () => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [receiveBox, setReceiveBox] = useState(false);
    const [isError, setIsError] = useState(false);

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isFirstNameValid, setIsFirstNameValid] = useState(false);
    const [isLastNameValid, setIsLastNameValid] = useState(false);

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

    const validateName = (name) => {
        const nameRegex = /^[A-Za-z]{3,}$/;
        const isValid = nameRegex.test(name);
        return isValid;
    };

    const setData = (value, name) => {
        let isValid = true;
        if (name === "Email") {
            isValid = validateEmail(value);
        } else if (name === "Password") {
            isValid = validatePassword(value);
        } else if (name === "FirstName") {
            isValid = validateName(value);
            setIsFirstNameValid(isValid);
        } else if (name === "LastName") {
            isValid = validateName(value);
            setIsLastNameValid(isValid);
        }

        const block = document.getElementsByName(name)[0];

        if (isValid) {
            block.classList.add('correct');
            if ((isEmailValid && isPasswordValid && isFirstNameValid && isLastNameValid)) {
                setIsFormValid(true)
            }
            setIsError(false)
            const setterFunctions = {
                Email: setEmail,
                Password: setPassword,
                FirstName: setFirstName,
                LastName: setLastName,
                ReceiveBox: setReceiveBox
            };
            const setterFunction = setterFunctions[name];
            if (setterFunction) {
                setterFunction(value);
            }
        } else {
            block.classList.add('error');
            setIsError(true)
        }
    }

    const checkLoginData = () => {
        const storedData = localStorage.getItem('loginData');
        if (storedData) {
            const loginData = JSON.parse(storedData);
            if (loginData.email === email && loginData.password === password) {
                alert('Yo successful!');
            } else {
                alert('Incorrect email or password.');
            }
        } else {
            alert('No stored login data found.');
        }
    };

    return (
        <FormStyle>
            <ImgStyle><img className="form-img" src={img} alt='lock'></img></ImgStyle>
            <h1 className='form-title'>Sign up</h1>
            <div className='input-section'>
                <div className='name-input'>
                    <InputStyle
                        onChange={e => {
                            setData(e.target.type === 'checkbox' ? e.target.checked :
                                e.target.value, e.target.name)
                        }}
                        type="text"
                        placeholder="First name *"
                        name="FirstName">
                    </InputStyle>
                    <InputStyle
                        onChange={e => {
                            setData(e.target.type === 'checkbox' ? e.target.checked :
                                e.target.value, e.target.name)
                        }}
                        type="text"
                        placeholder="Last name *"
                        name="LastName">
                    </InputStyle>
                </div>
                <InputStyle
                    onChange={e => {
                        setData(e.target.type === 'checkbox' ? e.target.checked :
                            e.target.value, e.target.name)
                    }}
                    type="text"
                    placeholder="Email Address *"
                    name="Email">
                </InputStyle>
                <InputStyle type="password" placeholder="Password *" name="Password"
                    onChange={e => {
                        setData(e.target.type === 'checkbox' ? e.target.checked :
                            e.target.value, e.target.name)
                    }}>
                </InputStyle>
                <label className='label-text'>
                    <div className="checkBox-format" >
                        <InputStyle
                            onChange={e => {
                                setData(e.target.type === 'checkbox' ? e.target.checked :
                                    e.target.value, e.target.name)
                            }}
                            className="checkBox-format-input" type="CheckBox" name="ReceiveBox"></InputStyle>
                    </div>
                    I want to receive inspiration, marketing promotions and updates via email
                </label>
                <ButtonStyle className={isFormValid ? "" : "disabled"}
                    onClick={() => {
                        if (isFormValid) {
                            checkLoginData();
                        }
                    }}
                    disabled={!isFormValid}>Sign In
                </ButtonStyle>
            </div>

            <div className='form-links'>
                <Link to="/" className='form-links-text'>Already have an account? Sign in</Link>
            </div>
        </FormStyle>
    );
};

export default SignUp;