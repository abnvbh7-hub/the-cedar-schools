import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function RegForm() {

  const nav = useNavigate()
  
  const [pn, setpn] = useState("");
  const [cn, setcn] = useState("");
  const [gr, setgr] = useState("");
  const [ph, setph] = useState("");
  const [em, setem] = useState("");
  const [gen,setgen] = useState("");
  const [msg, setmsg] = useState("");
  const [dt,setdate] = useState("");
  const [acad,setacad] = useState("");

  return (
    <>
      <video className="reg-vid" autoPlay muted loop >
        <source src="./school-vid.mp4" />
      </video>
    <div className="rf-overlay">
      <div className="rf-mcon">
        <div className="rf-title-con">
          <img className="rf-logo" src="/logo.png" />
          <div className="rf-title">ENQUIRE US</div>
          <div className="rf-close" onClick={()=>nav('/')} ><img  className="rf-close-logo" src="./close.png"></img></div>
        </div>
        <div className="rf-form">
          <div className="rf-form-row">
            <div className="rf-form-row-title">Parent Name <span className="rf-required">*</span></div>
            <div className="rf-form-row-input">
              <input
                type="text"
                value={pn}
                onChange={(e) => {
                  setpn(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="rf-form-row">
            <div className="rf-form-row-title">Child Name <span className="rf-required">*</span></div>
            <div className="rf-form-row-input">
              <input
                type="text"
                value={cn}
                onChange={(e) => {
                  setcn(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="rf-form-row">
            <div className="rf-form-gender">Gender  <span className="rf-required">*</span></div>
            <div className="rfg-drop-con">
              <label htmlFor="gm"> <input id="gm" type="radio" name="gender" className="rfg" value={"Male"} onChange={(e)=>setgen(e.target.value)}/>Male</label>
              <label htmlFor="gf"><input id="gf" name="gender" type="radio" className="rfg" value={"Female"} onChange={(e)=>setgen(e.target.value)}/>Female</label>
            </div>
          </div>
          <div className="rf-form-row">
            <div className="rf-form-row-title">Date of Birth<span className="rf-required">*</span></div>
            <input type="date" value={dt} onChange={(e)=>{setdate(e.target.value)}}></input>
          </div>
          <div className="rf-form-row">
            <div className="rf-form-row-title">Grade <span className="rf-required">*</span></div>
            <div className="rf-form-row-input">
              <select className="rf-gr" value={gr} onChange={(e)=>setgr(e.target.value)}>
                <option value={""} className="grade">Select Standard</option>
                <option value={"LKG"} className="grade">LKG</option>
                <option value={"UKG"} className="grade">UKG</option>
                <option value={"I"} className="grade">I</option>
                <option value={"II"} className="grade">II</option>
                <option value={"III"} className="grade">III</option>
                <option value={"IV"} className="grade">IV</option>
                <option value={"V"} className="grade">V</option>
                <option value={"VI"} className="grade">VI</option>
                <option value={"VII"} className="grade">VII</option>
                <option value={"VIII"} className="grade">VIII</option>
                <option value={"IX"} className="grade">IX</option>
                <option value={"X"} className="grade">X</option>
              </select>
            </div>
          </div>
          <div className="rf-form-row">
            <div className="rf-form-row-title">Academics<span className="rf-required">*</span></div>
            <select className="rf-acad" onChange={(e)=>setacad(e.target.value)}>
              <option value={""} className="acad">Select Academics</option>
              <option value={"CBSE"} className="acad">CBSE</option>
              <option value={"ICSE"} className="acad">ICSE</option>
              <option value={"Nursing"} className="acad">Nursing</option>
              <option value={"B.Ed"} className="acad">B.Ed</option>
            </select>
          
          </div>
          <div className="rf-form-row">
            <div className="rf-form-row-title">Phone Number<span className="rf-required">*</span></div>
            <div className="rf-form-row-input">
              <input
                type="text"
                value={ph}
                onChange={(e) => {
                  setph(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="rf-form-row">
            <div className="rf-form-row-title">Email<span className="rf-required">*</span></div>
            <div className="rf-form-row-input">
              <input
                type="email"
                value={em}
                onChange={(e) => {
                  setem(e.target.value);
                }}
              />
            </div>
          </div>
          <div className="rf-form-row">
            <div className="rf-form-row-title">Write to us:</div>
            <div className="rf-form-row-input">
              <input
                type="text"
                value={msg}
                onChange={(e) => {
                  setmsg(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
        <div className="rf-submit-con">
          <div className="rf-submit">SUBMIT</div>
        </div>
      </div>
    </div>
      </>
  );
}
