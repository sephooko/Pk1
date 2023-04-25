import React, { useState } from "react";
import { firebaseConfig, db, auth } from "../../firebaseConfig";

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const handleSignUp = async (event) => {
      event.preventDefault();

      try {
        const { user } = await auth.createUserWithEmailAndPassword(email, password);
        await db.collection('Users').doc(user.uid).set({ email, name, password });
        setMessage('User created! Please proceed to SignIn component to access Dashboard');
        setEmail('');
        setPassword('');
        setName('');
      } catch (error) {
        setError(error.message);
      }

    };
    return(
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <div className="card" style={{width: '25rem'}}>
                <h3 className="card-header text-center">Sign Up</h3>
                <div className="card-body">
                    <form onSubmit={handleSignUp}>
                      <div className="mb-3">
                            <label htmlFor="signUpName" className="form-label">Name</label>
                            <input type="text" className="form-control" id="signUpName" value={name} onChange={(event) => setName(event.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signUpEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="signUpEmail" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signUpPass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signUpPass" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    {message && <p>{message}</p>}
                </div>
            </div>
        </div>
    )
}
export default SignUp;
