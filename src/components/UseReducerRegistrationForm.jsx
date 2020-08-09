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
    // console.log(`state: ${state.firstName.value}`);
    const onChangeHandler = (e) => {
        console.log('********** onChangeHandler triggered...');
        const {name, value} = e.target;
        dispatch({
            type: name,
            payload: value
        });
        if (name == 'firstName' && value.length<2){
            dispatch({
                type: name,
                error: "First name required"
        });}
    }

    const handleFirstName = (e) => {
        console.log(`first name length: ${e.target.value.length}`);
        if(e.target.value.length < 1 ){
            console.log(`first name not long enough...setting state.firstName.error`);
            state.firstName.error = ("First name is required!");
        }else if(e.target.value.length < 2){
            state.firstName.error = ("First name must be at least 2 characters long!");
        }else {state.firstName.error = null;}
        onChangeHandler(e);
    }
    const handleLastName = (e) => {
        onChangeHandler(e);
        if(e.target.value.length < 1 ){
            state.lastName.error = ("Last name is required!");
        }else if(e.target.value.length < 2){
            state.lastName.error = ("Last name must be at least 2 characters long!");
        }else {state.lastName.error = null;}
    }
    const handleEmail = (e) => {
        let emailRegEx = /\S+@\S+\.\S+/;
        let potentialEmail = e.target.value;
        const emailIsValid = (potentialEmail) => emailRegEx.test(potentialEmail);
        console.log(`emailIsValid: ${emailIsValid(potentialEmail)}`);
        if(potentialEmail.length < 1 ){
            state.email.error = ("Email is required!");
        }else if(potentialEmail.length < 5){
            state.email.error = ("Email must be at least 5 characters long!");
        }else if(!emailIsValid(potentialEmail)){
            console.log('invalid email detected...');
            state.email.error = ("Must be a valid email address!");
        }else {state.email.error = null;}
        onChangeHandler(e);
    }
    const handlePw = (e) => {
        onChangeHandler(e);
        if(e.target.value.length < 1 ){
            state.pw.error = ("Password is required!");
        }else if(e.target.value.length < 8){
            state.pw.error = ("Password must be at least 8 characters long!");
        }else {state.pw.error = null;}
    }
    const handlePwConfirm = (e) => {
        onChangeHandler(e);
        if(e.target.value !== state.pw ){
            state.pwConfirm.error = ("Passwords must match!");
        }else {state.pwConfirm.error = null;}
    }

    // helper method for onSubmit handler
    // when server is built out, this might include a POST request
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const {firstName, lastName, email, pw} = state;
        const newUser = {firstName, lastName, email, pw};

        console.log(`newUser: 
            \n${newUser.firstName}
            \n${newUser.lastName}
            \n${newUser.email}
            \n${newUser.pw}`);
    }

    // build form:
    return(
        <div>
            {JSON.stringify(state)}
            <form className="container" onSubmit={onSubmitHandler}>
                <div className="form-group text-left">
                    {state.firstName.error != null && ( 
                        <p className="validation-error">{state.firstName.error}</p>
                    )}
                    <input name="firstName" type="text" onChange={handleFirstName} value={state.firstName.value} className="form-control" placeholder="First Name"></input>
                </div>
                <div className="form-group text-left">
                    {state.lastName.error != null && ( 
                        <p className="validation-error">{state.lastName.error}</p>
                    )}
                    <input name="lastName" type="text" onChange={handleLastName} value={state.lastName.value} className="form-control" placeholder="Last Name"></input>
                </div>
                <div className="form-group text-left">
                    {state.email.error != null && ( 
                        <p className="validation-error">{state.email.error}</p>
                    )}
                    <input name="email" type="email" onChange={handleEmail} value={state.email.value} className="form-control" placeholder="Enter email"></input>
                </div>
                <div className="form-group text-left">
                    {state.pw.error != null && ( 
                        <p className="validation-error">{state.pw.error}</p>
                    )}
                    <input name="pw" type="password" onChange={handlePw} value={state.pw.value} className="form-control" placeholder="Enter password"></input>
                </div>
                <div className="form-group text-left">
                    {state.pwConfirm.error != null && ( 
                        <p className="validation-error">{state.pwConfirm.error}</p>
                    )}
                    <input name="pwConfirm" type="password" onChange={handlePwConfirm} value={state.pwConfirm.value} className="form-control" placeholder="Confirm password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}