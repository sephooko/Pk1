import React, { useState } from "react";
import firebase from "firebase/app";
import { firebaseConfig, auth } from "../../firebaseConfig";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (event) => {
    event.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Successfully signed in!");
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  };

    return(
        <div className="d-flex align-items-center justify-content-center" style={{height: "100vh"}}>
            <div className="card" style={{width: '25rem'}}>
                <h3 className="card-header text-center">Sign In</h3>
                <div className="card-body">
                    <form onSubmit={handleSignIn}>
                        <div className="mb-3">
                            <label htmlFor="signInEmail" className="form-label">Email address</label>
                            <input type="email" className="form-control" id="signInEmail" value={email} onChange={(event) => setEmail(event.target.value)} required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="signInPass" className="form-label">Password</label>
                            <input type="password" className="form-control" id="signInPass" value={password} onChange={(event) => setPassword(event.target.value)} required/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignIn;
