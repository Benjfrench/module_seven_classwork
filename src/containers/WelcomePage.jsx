import React, {useState} from "react";
import { LabOne } from "../containers/LabOne";
import { LabTwo } from "../containers/LabTwo";
import { CustomHookExamples } from "../containers/CustomHooks";
import { SlideWork } from "../containers/SlideWork";
import { ContextWork } from "../containers/ContextWork";


export const WelcomePage = () => {
    //STATE
    const [contentName, setContentName] = useState("");

    const contentConfig = [{ lab: "Lab 1"}, {lab: "Slide work"}, {lab: "Custom Hooks"}, {lab:"Lab 2"}, {lab: "Context work"}];


    //FUNC
    const displayHandler = () => {
        switch (contentName) {
          case contentConfig[0].lab:
            return <LabOne />
          case contentConfig[3].lab:
            return <LabTwo />
          case contentConfig[1].lab:
            return <SlideWork />
          case contentConfig[2].lab:
            return <CustomHookExamples/>
          case contentConfig[4].lab:
            return <div><ContextWork/></div>
            default:
            return (
              <div
                style={{ display: "flex", width: "100%", justifyContent: "center" }}
              >
                Click on a Lab button to see the content
              </div>
            );
        }
      };


      const buttonConstructor = () => {
        const buttonElementArray = contentConfig.map((content) => {
          return (
            <button
              key={content.lab}
              onClick={() => setContentName(content.lab)}
              style={{ margin: "5px" }}
            >
              {content.lab}
            </button>
          );
        });
    
        return buttonElementArray;
      };
    //RETURN

    return (
        <div>
          <p>Module Seven Starts Here</p>
    
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginBottom: "5px",
            }}
          >
            {buttonConstructor()}
          </div>
    
          <div
            style={{
              display: "flex",
              margin: "0 auto",
              width: "90%",
              height: "70vh",
              border: "red 1px solid",
              overflow: "scroll",
            }}
            >
            {displayHandler()}
          </div>
        </div>
      );
}