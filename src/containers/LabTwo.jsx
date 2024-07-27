
import { useState } from "react";
import { BitcoinRatesTwo } from "../components/BitcoinRatesTwo";
import { BitcoinRatesThree } from "../components/BitcoinRatesThree";
import { GlobalState } from "../components/GlobalState";

export const LabTwo = ()=>{
// states/var

//functions

//return
    return(
        <div>
            <div><GlobalState/></div>
            <h1>Lab Two</h1>
            <div><BitcoinRatesTwo/></div>
            <h2>Extension Activity</h2>
            <div><BitcoinRatesThree/></div>
        </div>

    )
}