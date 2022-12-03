import React from "react";
import { Link } from "react-router-dom";
import RoundedButton from "./RoundedButton";

export default function Header() {
  return (
    <div>
      <Link to={"/products"}><button>Products</button></Link>
      <Link to={"/about"}><button>About</button></Link>
      <Link to={"/dashboard"}><button>Dashboard</button></Link>
      <Link to={"/login"}><button>Login</button></Link>
      <Link to={"/signup"}><button>SignUp</button></Link>
      <button>Logout</button>
    </div>
  );
}
