
import { useState } from "react";
import { BitcoinRates } from "../components/BitcoinRates"
import { GlobalState } from "../components/GlobalState";
export const LabOne = ()=>{
// states/var

//functions

//return
    return(
        <div>
            <div><GlobalState/></div>
            <h1>Lab One</h1>
            <div><BitcoinRates/></div>
        </div>

    )
}