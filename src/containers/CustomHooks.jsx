import React from "react";
import {SubscribeForm} from "../components/SubscribeForm";
import { BenForm } from "../components/BenForm";
import { CatFact } from "../components/CatFact";
import { GlobalState } from "../components/GlobalState";



export const CustomHookExamples = ()=>{
    //state var

    //function

    //return
    return(<div>
        <div><GlobalState/></div>
        <h4>Custom Hook Examples</h4>
        <ExampleDecorator>
            <>
            <h5>Subscribe Form</h5>
            <SubscribeForm />
            </>
        </ExampleDecorator>
        <AthleteDecorator>
            <>
            <h5>Athlete Profile</h5>
            <BenForm />
            </>
        </AthleteDecorator>
        <ExampleDecorator>
            <>
            <h5>Cat Fact Finder</h5>
            <CatFact />
            </>
        </ExampleDecorator>
    </div>
    )
}

const ExampleDecorator = ({children}) =>{

    return(
        <div className="exampleDecorator" 
        style={{
            border:'solid blue 1px',
            width: '100%',
            padding: '10px',
            margin: '10px',
        }}
        >
        {children}
    </div>
    );
};

const AthleteDecorator = ({children}) =>{
    
    return(
        <div className="AthleteDecorator" 
        style={{
            border:'solid forestGreen 1px',
            width: '100%',
            padding: '10px',
            margin: '10px',
            backgroundColor: 'green',
            color: 'white'
        }}
    >
        {children}
    </div>
    );
};





// export default function SubscribeForm() {
//     const [status, setStatus] = useState('');
//     // similar state variables mapped to form inputs
//     const [firstName, setFirstName] = useState('Mary');
//     const [email, setEmail] = useState('mary@poppins.com');
//     // similar handler functions
//     const handleNameChange = (e) => setFirstName(e.target.value);
//     const handleEmailChange = (e) => setEmail(e.target.value);
//     function handleSubscribe() {
//         setFirstName(''); setEmail('');
//         setStatus('Thanks for subscribing!')
//     }
//     return (
//        <div className="SubscribeForm componentBox">
//           <label>First name: {/* form inputs with similar props */}
//              <input value={firstName} onChange={handleNameChange} />
//           </label>
//           <label>Email: {/* form inputs with similar props */}
//              <input value={email} onChange={handleEmailChange} />
//           </label>
//           <button onClick={handleSubscribe}>Subscribe</button>
//           <div>{status}</div>
//        </div>
//     );
//  }