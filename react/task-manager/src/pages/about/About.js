import React, { useContext } from "react";
import Counter from "../../shared/components/Counter";
import CounterWithClass from "../../shared/components/CounterWithClass";
import Post from "../../shared/components/Post";
import RoundedButton from "../../shared/components/RoundedButton";
import UserDataContext from "../../shared/data/UserGlobalData";
import useRouteProtector from "../../shared/hooks/useRouteProtector";

export default function About() {

  const {email} = useContext(UserDataContext);  

  useRouteProtector();
  return (
    <div>
      <RoundedButton>
        <span>React</span>
      </RoundedButton>
      <button>About</button>

      <hr></hr>

      <Counter start={0}/>
      <Counter start={1}/>
      <Counter start={5}/>


      <CounterWithClass start={5}/>


      <hr></hr>

      <Post author={'Sagar'} heading="hi there"></Post>
      
    </div>
  );
}
