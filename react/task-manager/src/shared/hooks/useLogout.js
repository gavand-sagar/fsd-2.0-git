import { useNavigate } from "react-router-dom";

export default function useLogout() {
  const navigate = useNavigate();

  
  function logout() {
    localStorage.clear();
    navigate("/login");
  }
  function login() {
    localStorage.clear();
    navigate("/login");
  }
  return { logout, login };
}
