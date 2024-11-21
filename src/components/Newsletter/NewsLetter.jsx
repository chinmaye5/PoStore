import React, { useState } from "react";
import './NewsLetter.css';

export default function NewsLetter() {
    const [email, setEmail] = useState("");

    const handleSubscribe = () => {
        if (email.trim()) {
            alert(`Thank you for subscribing with ${email}`);
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <div className="newsletter">
            <h1>Get Exclusive Offers On Your Email</h1>
            <p>Subscribe to our newsletter and stay updated</p>
            <div className="newsletter-input">
                <input
                    type="email"
                    placeholder="Your Email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <button onClick={handleSubscribe}>Subscribe</button>
            </div>
        </div>
    );
}
