import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <h1 className="click" onClick={() => navigate("/home")}>Welcome</h1>
      <button className="click" onClick={() => navigate("/home")}>
        Enter
      </button>
      <div className="welcome__img click" onClick={() => navigate("/home")}>
      <img src="/assets/welcome-img.gif" alt="Welcome"  />
    </div>
    </div>
  );
}

export default Landing;