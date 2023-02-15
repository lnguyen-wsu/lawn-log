import { useState } from "react";
const Home  = () => {
    const[name, setName] = useState("Mario");
    const[age , SetAge] = useState(25);
    const handleClick = () => {
        setName(name==="Lawn"?"Mario":"Lawn");
        SetAge(age === 25 ? 31 : 25);
    };
   
    return (  
        <div className="home">
            <h2>Welcome to the {name} House</h2>
            <h3>He is {age}</h3>
            <button onClick={handleClick}>Click Me</button>         
        </div>
    );
}
 
export default Home ;