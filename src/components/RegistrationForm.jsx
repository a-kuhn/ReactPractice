import React, {useState} from 'react';

export default () => {
    // set state for all form inputs:
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");
    const [pwConfirm, setPwConfirm] = useState("");

    // set state for form validators:
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [pwError, setPwError] = useState("");
    const [pwConfirmError, setPwConfirmError] = useState("");

    // validator methods:
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1 ){
            setFirstNameError("First name is required!");
        }else if(e.target.value.length < 2){
            setFirstNameError("First name must be at least 2 characters long!");
        }else {setFirstNameError("");}
    }
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1 ){
            setLastNameError("Last name is required!");
        }else if(e.target.value.length < 2){
            setLastNameError("Last name must be at least 2 characters long!");
        }else {setLastNameError("");}
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1 ){
            setEmailError("Email is required!");
        }else if(e.target.value.length < 5){
            setEmailError("Email must be at least 5 characters long!");
        }else {setEmailError("");}
    }
    const handlePw = (e) => {
        setPw(e.target.value);
        if(e.target.value.length < 1 ){
            setPwError("Password is required!");
        }else if(e.target.value.length < 8){
            setPwError("Password must be at least 8 characters long!");
        }else {setPwError("");}
    }
    const handlePwConfirm = (e) => {
        setPwConfirm(e.target.value);
        if(e.target.value != pw ){
            setPwConfirmError("Passwords must match!");
        }else {setPwConfirmError("");}
    }

    // helper method for onSubmit handler
    // when server is built out, this might include a POST request
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newUser = [firstName, lastName, email, pw];

        console.log(`newUser: 
            \n${newUser.firstName}
            \n${newUser.lastName}
            \n${newUser.email}
            \n${newUser.pw}`);
        
        // after successful creation of newUser, clear form inputs:
        // also need value={stateVariable} in input tag below
        setFirstName("");
        setLastName("");
        setEmail("");
        setPw("");
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