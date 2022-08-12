import {NavLink,useHistory} from "react-router-dom";
import './sign-forms.css'
import {useState} from "react";

function SignUp() {
    const history = useHistory();
    const emailRegExp = /^(\w{3})+([.-]?\w+)*@(\w{2})+([.-]?\w+)*(\.\w{2,3})+$/;
    const passwordRegExp = /^(?=.{8,30})(?=.*[A-Z])(?=.*[a-z])/;
    const nameRegExp = /^(?=.{2})/;
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [firstNameValue, setFirstNameValue] = useState('');
    const [lastNameValue, setLastNameValue] = useState('');

    const handleEmailChange = (e) => {
        setEmailValue(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPasswordValue(e.target.value);
    }

    const handleFirstNameChange = (e) => {
        setFirstNameValue(e.target.value);
    }

    const handleLastNameChange = (e) => {
        setLastNameValue(e.target.value);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (document.querySelectorAll("._green").length === 4) {
            let users = {
                'user': firstNameValue + ' ' + lastNameValue,
                'password': passwordValue,
                "email": emailValue,
                "checked" : true,
            };
            localStorage.setItem("users", JSON.stringify(users))
            history.push('/sign-in')
        } else {
            alert('Правильно заповніть всі поля')
        }

    };
    handleEmailInputColor();
    handlePasswordInputColor();
    handleFirstNameInputColor();
    handleLastNameInputColor();
    return (
        <div>
            <div className="form__body">
                <div className="form__icon">
                    <img src="https://cdn-icons-png.flaticon.com/512/565/565547.png" alt="form-icon" className="icon"/>
                </div>
                <h1 className="form__title">Sign Up</h1>
                <form className='form'>

                    <div className="form__item  user__name">
                        <input onChange={handleFirstNameChange} placeholder='First Name*' id="firstName" type="text"
                               name="email"
                               className="form__input _req"/>
                        <input onChange={handleLastNameChange} placeholder='Last Name*' id="lastName" type="text"
                               name="email"
                               className="form__input _req"/>
                    </div>
                    <div className="form__item">
                        <input onChange={handleEmailChange} placeholder='Email Address*' id="formEmail" type="text"
                               name="email"
                               className="form__input _email"/>
                    </div>
                    <div className="form__item">
                        <input onChange={handlePasswordChange} placeholder='Password*' id="formPassword" type="password"
                               name="password"
                               className="form__input _password"/>
                    </div>
                    <div className="form__item checkbox__item">
                        <input className='form__checkbox' type="checkbox" name="checkbox" value="yes"/> <span>I want to receive inspiration, marketing promotions and updates via email me</span>
                    </div>
                    <button onClick={handleFormSubmit} type="submit" className="form__button">Sign Up</button>
                </form>
                <div className="form__link-up">
                    <div className="">
                        <NavLink to='sign-in'>Already have an account? Sign in </NavLink>
                    </div>
                </div>
            </div>

        </div>
    );

    function handleChangeColor(InputValue, inputName, inputRegExp) {
        if (InputValue.length != '') {
            if (InputValue.match(inputRegExp)) {
                inputName.classList.add('_green')
                inputName.classList.remove('_red')
            } else {
                inputName.classList.remove('_green')
                inputName.classList.add('_red')
            }
        }
    }

    function handleEmailInputColor() {
        const emailInput = document.getElementById('formEmail');
        handleChangeColor(emailValue, emailInput, emailRegExp)
    }

    function handlePasswordInputColor(e) {
        const passwordInput = document.getElementById('formPassword');
        handleChangeColor(passwordValue, passwordInput, passwordRegExp)
    }

    function handleFirstNameInputColor() {
        const firstNameInput = document.getElementById('firstName');
        handleChangeColor(firstNameValue, firstNameInput, nameRegExp)
    }

    function handleLastNameInputColor() {
        const lastNameInput = document.getElementById('lastName');
        handleChangeColor(lastNameValue, lastNameInput, nameRegExp)
    }

}

export default SignUp;