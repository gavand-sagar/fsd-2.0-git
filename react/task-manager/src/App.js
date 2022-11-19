import logo from "./logo.svg";
import "./App.css";
import Sagar from "./Sagar";
import CustomButton from "./CustomButton";
import MagicalCounter from "./Counter.js";
import Post from "./Post";
import Counter from "./Counter.js";
import TikTok from "./TikTok";

function App() {
  return (
    <div className="App">
      <TikTok />
      {/* <Counter start={10}></Counter> */}

      {/* <MagicalCounter/> */}

      {/* 
    <Sagar></Sagar>
    <Sagar></Sagar>
    <Sagar></Sagar> */}

      {/* <Post heading={'This was funny'} author={'Homer Simpson'} body={"So I Saw blah blah blah."}></Post>
      <Post heading={'Ohh Really?'} author={'Sagar'} body={"So I Saw blah blah blah."}/> */}


      {/* <input/>
      <hr></hr> */}

      <CustomButton text={"HTML"} isOrange={true}/>
      <CustomButton text={"CSS"} isOrange={false}></CustomButton>
      <CustomButton text={"Javascript"}  isOrange={true}></CustomButton>
    </div>
  );
}

export default App;
