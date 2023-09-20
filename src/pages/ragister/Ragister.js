import "./ragister.css";

function Ragister() {
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
                <input className="LoginInput"  placeholder="UserName"/>
                <input className="LoginInput"  placeholder="Email"/>
                <input className="LoginInput"  placeholder="Password"/>
                <input className="LoginInput"  placeholder="Password Again"/>
                <button className="loginbtn">Sign Up</button>
                <button className="loginRagistrationBtn">Log Into Account</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ragister;
