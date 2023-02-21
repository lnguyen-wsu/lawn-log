import { useState } from "react";
import BlogList from "./BlogList";
const Home  = () => {
    const[blogs,setBlogs] = useState([
        {title:'Testing Lawn',body:'lorem ipsum...',author:'testing'},
        {title:'Testing Lawn 2',body:'lorem ipsum...',author:'testing'},
        {title:'Testing Lawn 3',body:'lorem ipsum...',author:'testing'}
    ]);
    
    const handleEvent = ()=> {
        setBlogs( {title:'Testing Lawn',body:'lorem ipsum...',author:'testing'});
    }
    return (  
        <div className="home">
           <BlogList blogs={blogs} title="All Blogs" />
           <button onClick={handleEvent}>Clickme</button>
        </div>
    );
}
 
export default Home ;