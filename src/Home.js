import { useState } from "react";
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
            {blogs.map((blog)=>(
                <div className="blog-preview" key={blog.id}>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.body}</p>
                </div>
            ))}
            <button onClick={handleEvent}>Click me</button>
        </div>
    );
}
 
export default Home ;