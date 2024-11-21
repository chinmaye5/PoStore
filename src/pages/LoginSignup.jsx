import React, { useState } from "react";
import './LoginSignup.css';
import { Link } from "react-router-dom";

export default function LoginSignup() {
    const [isSignup, setIsSignup] = useState(true);

    return (
        <div className="loginsignup">
            <div className="loginsignup-container">
                {isSignup ? (
                    <>
                        <h1>Signup</h1>
                        <div className="loginsignup-fields">
                            <input type="text" placeholder="Your Name" />
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <div className="loginsignup-agree">
                            <input type="checkbox" name="" id="" />
                            <p>By continuing, I agree to the terms of use & privacy policy</p>
                        </div>
                        <button>Continue</button>
                        <p className="loginsignup-login">
                            Already have an account?{" "}
                            <span onClick={() => setIsSignup(false)} style={{ color: "blue", cursor: "pointer" }}>
                                Login
                            </span>
                        </p>
                    </>
                ) : (
                    <>
                        <h1>Login</h1>
                        <div className="loginsignup-fields">
                            <input type="email" placeholder="Email" />
                            <input type="password" placeholder="Password" />
                        </div>
                        <button>Login</button>
                        <p className="loginsignup-login">
                            Don't have an account?{" "}
                            <span onClick={() => setIsSignup(true)} style={{ color: "blue", cursor: "pointer" }}>
                                Signup
                            </span>
                        </p>
                    </>
                )}
            </div>
        </div>
    );
}