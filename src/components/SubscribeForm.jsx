import React, { useState} from "react";
import { useFormInput } from "../hooks/UseForm";

export const SubscribeForm = () => {
    const [status, setStatus] = useState("");
    //STATE VAR
    // similar state variables mapped to form inputs
    const [firstName, resetFirstName] = useFormInput("Mary");
    const [email, resetEmail] = useFormInput("mary@poppins.com");
    const [lastName, resetLastName] = useFormInput("Poppins");
    // FUCNTIONS
    // similar handler functions
    const handleNameChange = (e) => firstName.onChange(e);
    const handleEmailChange = (e) => email.onChange(e);
    const handleSurnameChange = (e) => lastName.onChange(e);
    function handleSubscribe() {
      resetFirstName();
      resetEmail();
      resetLastName();
      setStatus(`Thanks for subscribing, ${firstName.value} ${lastName.value}!`);
    }
    // RETURN
    return (
      <div className="SubscribeForm componentBox">
        <label>
          First name: {/* form inputs with similar props */}
          <input value={firstName.value} onChange={handleNameChange} />
        </label>
        <label>
          Email: {/* form inputs with similar props */}
          <input value={email.value} onChange={handleEmailChange} />
        </label>
        <label>
          Surname: {/* form inputs with similar props */}
          <input value={lastName.value} onChange={handleSurnameChange} />
        </label>
        <button onClick={handleSubscribe}>Subscribe</button>
        <div>{status}</div>
      </div>
    );
  };

