import logo from "./logo.svg";
import "./App.css";
import Sagar from "./Sagar";
import CustomButton from "./CustomButton";
import MagicalCounter from "./Counter.js";
import Post from "./Post";
import Counter from "./Counter.js";
import TikTok from "./TikTok";
import Accordion from "./Accordion";
import RoundedButton from "./RoundedButton";
import Rating from "./Rating";

function App() {
  return (
    <div className="App">

      <Rating value={3}/>
      <Rating value={4}/>
      <Rating value={2}/>

      {/* <RoundedButton label={'React'} active={true}></RoundedButton> */}
      {/* <RoundedButton label={'Node.js'}></RoundedButton> */}
      {/* <RoundedButton label={'Javascript'}></RoundedButton> */}

      {/* <Accordion header={'This is header'} body={'<s f asfsft asdomBuasdfttoa sf asf n text={"HTML"} isOrange={true}/>'}/> */}

      {/* <Accordion header={'Some other heading'} body={'blah blah blah'}/> */}
      {/* <TikTok /> */}
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

      {/* <CustomButton text={"HTML"} isOrange={true}/>
      <CustomButton text={"CSS"} isOrange={false}></CustomButton>
      <CustomButton text={"Javascript"}  isOrange={true}></CustomButton> */}
    </div>
  );
}

export default App;
