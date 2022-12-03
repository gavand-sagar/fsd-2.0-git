import React from "react";
import RoundedButton from "../../shared/components/RoundedButton";
import useRouteProtector from "../../shared/hooks/useRouteProtector";

export default function About() {
  useRouteProtector();
  return (
    <div>
      <RoundedButton>
        <span>React</span>
      </RoundedButton>
      <button>About</button>
    </div>
  );
}
