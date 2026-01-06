import {useNavigate} from "react-router-dom";

export default function NavBar(){

  const nav = useNavigate()
  return <div className="home-navbar-con">
  <div className="home-logo-con">
    <img className="home-logo" src="./logo.png" />
  </div>
  <div className="home-nav-items">
    <div
      className="nav-home"
      onClick={() => {
        nav("/");
      }}
    >
      Home
    </div>
    <div className="nav-academics-con">
      <div className="navac-head">Academics</div>
      <div className="navac-item-con">
        <div className="navac-item1">CBSE</div>
        <div className="navac-item2">ICSE</div>
        <div className="navac-item3">Junior College</div>
        <div className="navac-item4">Nursing College</div>
      </div>
    </div>
    <div className="nav-contact" onClick={()=>nav("/contact")}>Contact</div>
    <div className="nav-about">About</div>
    <div
      className="nav-apply"
      onClick={() => {
        nav("/register");
      }}
    >
      Apply
    </div>
  </div>
</div>}