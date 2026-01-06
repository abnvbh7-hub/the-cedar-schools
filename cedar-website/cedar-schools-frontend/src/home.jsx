import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import RegForm from "../comps/reg-form.jsx";
import Scrollimg from "../comps/scroll.jsx";
import RegFormHome from "../comps/regform-hm.jsx";
import NoticeScroll from "../comps/notice.jsx";

export default function Home() {
  const [popup, setPopup] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setPopup(true);
    }, 3000);
  }, []);

  return (
    <div className="home-main-con">
      {popup && <RegForm onClose={() => setPopup(false)} />}
      {/*<NoticeScroll annouce={"Admissions Open 2026-27"}/>*/}
      <video className="home-vid" autoPlay muted loop playsInline>
        <source src="./school-vid.mp4" />
      </video>
      <h2 className="vid-text">THE CEDAR SCHOOLS</h2>
      <Scrollimg />
      <RegFormHome/>
    </div>
  );
}
