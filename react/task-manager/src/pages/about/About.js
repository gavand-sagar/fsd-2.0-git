import React, { useContext } from "react";
import Accordion from "../../shared/components/Accordion";
import Counter from "../../shared/components/Counter";
import CounterWithClass from "../../shared/components/CounterWithClass";
import Post from "../../shared/components/Post";
import RoundedButton from "../../shared/components/RoundedButton";
import UserDataContext from "../../shared/data/UserGlobalData";


function Border({children}){
  return (<div class="border">{children}</div>)
}


export default function About() {
  const { username, changeUsername } = useContext(UserDataContext);
 
  return (
    <div>
      {username}
      
      <Border>
        <RoundedButton>
        Javascript
        </RoundedButton>
      </Border>

      {/* <Accordion header={<Counter start={0} />}></Accordion> */}

      <Border>
        <button>About</button>
      </Border>

      <hr></hr>

      <Counter start={0} />
      <Counter start={1} />
      <Counter start={5} />

      

      <CounterWithClass start={5} />

      <hr></hr>

      <Border>
        <Post author={"Sagar"} heading="hi there"></Post>
      </Border>
    </div>
  );
}
