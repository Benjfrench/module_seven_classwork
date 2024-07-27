import React, { useState} from "react";
import { useFormInput } from "../hooks/UseForm";

export const BenForm = () => {
    const [status, setStatus] = useState("");
    //STATE VAR
    // similar state variables mapped to form inputs
    const [sport, resetSport] = useFormInput("");
    const [height, resetHeight] = useFormInput("");
    const [weight, resetWeight] = useFormInput("");
    // FUCNTIONS
    // similar handler functions
    const handleSportChange = (e) => sport.onChange(e);
    const handleHeightChange = (e) => height.onChange(e);
    const handleWeightChange = (e) => weight.onChange(e);
    function handleSubmit() {
      resetSport();
      resetHeight();
      resetWeight();
      setStatus(`Athlete profile: ${sport.value}, ${height.value} cm, ${weight.value} kg`);
    }
    // RETURN
    return (
      <div className="SubscribeForm componentBox">
        <label>
          Sport: {/* form inputs with similar props */}
          <input value={sport.value} onChange={handleSportChange} />
        </label>
        <br></br>
        <label>
          Height: {/* form inputs with similar props */}
          <input value={height.value} onChange={handleHeightChange} type="number"/> cm
        </label>
        <br></br>
        <label>
          Weight: {/* form inputs with similar props */}
          <input value={weight.value} onChange={handleWeightChange} type="number"/> kg
        </label>
        <br></br>
        <button onClick={handleSubmit}>Submit</button>
        <div>{status}</div>
      </div>
    );
  };

