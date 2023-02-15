const Home  = () => {
    const handleClick = (e) => {
        console.log("Hello Lawn",e);
    };
    const handleClickAgain = (name,e) =>{
        console.log(name + "is clicked", e.target)
    };
    return (  
        <div className="home">
            <h2>Welcome to the Lawn House</h2>
            <button onClick={handleClick}>Click Me</button>
            <button onClick={(e)=>handleClickAgain("Lawn",e)}>Click me Again </button>
        </div>
    );
}
 
export default Home ;