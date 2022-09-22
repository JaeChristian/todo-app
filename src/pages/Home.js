import { useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Home() {
  const navigate = useNavigate();
  // localStorage.removeItem("token");
  const { loading, error } = useFetch("authenticate");

  if (loading) {
    return <p>LOAAAAADDING</p>;
  }

  if (error) {
    navigate("/login");
  }
  return <p>home</p>;
}

export default Home;
