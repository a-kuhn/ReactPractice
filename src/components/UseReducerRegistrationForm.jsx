import React, {useReducer} from 'react';

const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    },
    pw: {
        value: '',
        error: null
    },
    pwConfirm: {
        value: '',
        error: null
    },
}

const reducer = (state, action) => {
    return {
        ...state,
        [action.type]: action.payload
    };
}

export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const onChangeHandler = (e) => {
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        });
    }

    // helper method for onSubmit handler
    // when server is built out, this might include a POST request
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newUser = {firstName, lastName, email, pw};

        console.log(`newUser: 
            \n${newUser.firstName}
            \n${newUser.lastName}
            \n${newUser.email}
            \n${newUser.pw}`);
    }

    // build form:
    return(
        <form className="container" onSubmit={onSubmitHandler}>
            <div className="form-group text-left">
                {
                    firstNameError ? 
                    <p className="validation-error">{firstNameError}</p> :
                    ''
                }
                <input id="firstName" type="text" onChange={handleFirstName} value={firstName} className="form-control" placeholder="First Name"></input>
            </div>
            <div className="form-group text-left">
                {
                    lastNameError ? 
                    <p className="validation-error">{lastNameError}</p> :
                    ''
                }
                <input id="lastName" type="text" onChange={handleLastName} value={lastName} className="form-control" placeholder="Last Name"></input>
            </div>
            <div className="form-group text-left">
                {
                    emailError ? 
                    <p className="validation-error">{emailError}</p> :
                    ''
                }
                <input id="email" type="email" onChange={handleEmail} value={email} className="form-control" placeholder="Enter email"></input>
            </div>
            <div className="form-group text-left">
                {
                    pwError ? 
                    <p className="validation-error">{pwError}</p> :
                    ''
                }
                <input id="pw" type="password" onChange={handlePw} value={pw} className="form-control" placeholder="Enter password"></input>
            </div>
            <div className="form-group text-left">
                {
                    pwConfirmError ? 
                    <p className="validation-error">{pwConfirmError}</p> :
                    ''
                }
                <input id="pwConfirm" type="password" onChange={handlePwConfirm} value={pwConfirm} className="form-control" placeholder="Confirm password"></input>
            </div>
            <button type="submit" className="btn btn-primary">Register</button>
        </form>
    );
}