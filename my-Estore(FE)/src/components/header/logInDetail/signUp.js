import React, {useState, useContext} from "react";
import { useAuth } from "../../../context/authContext";

const SignUp = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const role = "customer";
  const {announcement, signUp} = useAuth();

  const handleSignUp = (e) =>{
    e.preventDefault()
    signUp({userName, password, email, role})
    setUserName("");
    setPassword("");
    setEmail("");
  }

    return (
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignUp}>
            <h1>Đăng ký</h1>
            <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>hoặc sử dụng email để đăng ký</span>
            <input type="text" placeholder="Name" value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Mật khẩu" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <div>{announcement}</div>
            <button type="submit">Đăng ký</button>
          </form>
        </div>
    );
  };
  export default SignUp;
  