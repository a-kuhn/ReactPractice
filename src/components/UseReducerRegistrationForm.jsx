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
        <div>
            {JSON.stringify(state)}
            <form className="container" onSubmit={onSubmitHandler}>
                <div className="form-group text-left">
                    {state.firstName.error != null && ( 
                        <p className="validation-error">{state.firstName.error}</p>
                    )}
                    <input name="firstName" type="text" onChange={onChangeHandler} value={state.firstName} className="form-control" placeholder="First Name"></input>
                </div>
                <div className="form-group text-left">
                    {state.lastName.error != null && ( 
                        <p className="validation-error">{state.lastName.error}</p>
                    )}
                    <input name="lastName" type="text" onChange={onChangeHandler} value={state.lastName} className="form-control" placeholder="Last Name"></input>
                </div>
                <div className="form-group text-left">
                    {state.email.error != null && ( 
                        <p className="validation-error">{state.email.error}</p>
                    )}
                    <input name="email" type="email" onChange={onChangeHandler} value={state.email} className="form-control" placeholder="Enter email"></input>
                </div>
                <div className="form-group text-left">
                    {state.pw.error != null && ( 
                        <p className="validation-error">{state.pw.error}</p>
                    )}
                    <input name="pw" type="password" onChange={onChangeHandler} value={state.pw} className="form-control" placeholder="Enter password"></input>
                </div>
                <div className="form-group text-left">
                    {state.pwConfirm.error != null && ( 
                        <p className="validation-error">{state.pwConfirm.error}</p>
                    )}
                    <input name="pwConfirm" type="password" onChange={onChangeHandler} value={state.pwConfirm} className="form-control" placeholder="Confirm password"></input>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
        </div>
    );
}