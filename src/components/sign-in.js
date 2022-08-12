import './sign-forms.css'
import {NavLink, useHistory,} from "react-router-dom";

import {useState} from "react";


function SignIn() {
    const history = useHistory();
    let usersData = JSON.parse(localStorage.getItem('users'))
    const [checked, setChecked] = useState(false)
    const [emailValue, setEmailValue] = useState((usersData && usersData.checked) ? usersData.email : '');
    const [passwordValue, setPasswordValue] = useState((usersData && usersData.checked) ? usersData.password : '');

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    }
const handleCheckedChange = (e)=>{
    setChecked(document.querySelector('.form__checkbox').checked);
}

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (usersData == null) {
            alert('Такого профілю не існує')
        } else {
            usersData.checked = checked;
             localStorage.setItem("users", JSON.stringify(usersData))
            if (emailValue === usersData.email && passwordValue === usersData.password) {
                history.push('/home')
            } else {
                alert('Такого профілю не існує')
            }
        }
    }
    return (
        <div>
            <div className="form__body">
                <div className="form__icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="form-icon" className="icon"/>
                </div>
                <h1 className="form__title">Sign In</h1>
                <form className='form'>
                    <div className="form__item">
                        <input
                            onChange={handleEmailChange}
                            value={emailValue}
                            placeholder='Email Address*'
                            id="formEmail"
                            type="text"
                            className="form__input  _email"/>
                    </div>
                    <div className="form__item">
                        <input
                            onChange={handlePasswordChange}
                            value={passwordValue}
                            placeholder='Password*' id="formPassword"
                            type="password"
                            className="form__input _password "/>
                    </div>
                    <div className="form__item checkbox__item">
                        <input
                            onChange={handleCheckedChange}
                            className='form__checkbox'
                            type="checkbox" name="remember"
                            value="yes"/>
                        <span>Remember me</span>
                    </div>
                    <button onClick={handleFormSubmit} type="submit" className="form__button">Sign in</button>
                </form>
                <div className="form__link-in">
                    <div className="">
                        <a href="#">Forgot Password</a>
                    </div>
                    <div className="">
                        <NavLink to='sign-up'>Don`t have account? Sign Up </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );


}

export default SignIn;