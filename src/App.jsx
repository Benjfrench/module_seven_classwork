import "./App.css";
import { useState } from "react";
import { NameComponentForRefExample, SlideWork } from "./containers/SlideWork";
import { LabOne } from "./containers/LabOne";
import { LabTwo } from "./containers/LabTwo";
import { CustomHookExamples } from "./containers/CustomHooks";
import { ContextWork } from "./containers/ContextWork";
import { UserProvider } from "./context/UserContext";
import { WelcomePage } from "./containers/WelcomePage";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";

const App = () => {
  
  //RETURN
  return (
    <UserProvider>
      <Navbar />
      <Routes>
        <Route index element={<WelcomePage/>}/>
        <Route path="lab-one" element={<LabOne/>}/>
        <Route path="lab-two" element={<LabTwo/>}/>

        <Route path="slide-work" element={<SlideWork/>}/>
        <Route path="slide-work/name-ref" 
            element={<NameComponentForRefExample name={"Ben"}/>}/>
        
        <Route path="custom-hook-examples" element={<CustomHookExamples/>}/>
        <Route path="context-work" element={<ContextWork/>}/>

        <Route path="*" element={<div>this path doesn't exist yet...</div>}/>
      </Routes>
    </UserProvider>
  )
};

export default App;
