import "./login.css";

function Login() {
  return (
    <>
      <div className="Login">
        <div className="loginWrapper">
          <div className="loginLeft">
            <h3 className="loginLogo">Sangathan</h3>
            <span className="loginDesc">
              Connect To The World Of joy With Sangathan.
            </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
                <input className="LoginInput"  placeholder="Email"/>
                <input className="LoginInput"  placeholder="Password"/>
                <button className="loginbtn">Log In</button>
                <span className="loginForgot">Forgot Password?</span>
                <button className="loginRagistrationBtn">Create a new Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
