
import './App.css';

function App() {
  const title = "Welcome to new blog";
  const likes = 50;
  const link = "https://www.youtube.com/watch?v=gpfP60KjmZU";
  // const people = {name:"Lawn" , age:30}
  return (
    <div className="App">
      <div className="content">
        <h1>{title}</h1>
        <p>{likes}</p>
        <p>{10}</p>
        <p>{[1,2,3,4]}</p>
        <p>{Math.random() * 10 }</p>
        <a href={link}>Youtube Site</a>
      </div>
    </div>
  );
}

export default App;
