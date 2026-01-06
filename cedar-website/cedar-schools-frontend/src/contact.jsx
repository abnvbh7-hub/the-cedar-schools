import RegFormHome from "../comps/regform-hm.jsx";

export default function ContactPage() {
  return (
    <>
      <div className="contact-mc">
        <div className="contact-con">
          <div className="col1">
            <div className="col1-title">
              <h2 className="con-title">Contact details</h2>
            </div>
            <div className="col1-info">
              <div className="col1-info-row">
                <img className="col1-row-lg" src="phone.png" />
                <div className="col1-row-txt">+91 9703786483</div>
              </div>
              <div className="col1-info-row">
                <img className="col1-row-lg" src="gmail.png" />
                <div className="col1-row-txt">XXX@gmail.com</div>
              </div>
              <div className="col1-info-row">
                <img className="col1-row-lg" src="map.png" />
                <div className="col1-row-txt">
                  Dorathota, Bheemunipatnam, Visakhapatnam,Andhra Pradesh,
                  531163.
                </div>
              </div>
            </div>
            <div className="social-media-con">
              <div className="sm-ind">
                <div className="smt">CBSE</div>
                <div className="sml-con">
                  <a href="https://www.instagram.com/cedar.cbse?igsh=a2lqbnVuZjZ0b2Vn" target="_blank"><img className="cnl" src="instagram.png"/></a>
                  <a href="https://www.youtube.com/@Cedar-CBSE-b9p" target="_blank"><img className="cnl" src="youtube.png"/></a>
                </div>
              </div>
              <div className="sm-ind">
                 <div className="smt">ICSE</div>
                   <div className="sml-con">
                     <a href="https://www.instagram.com/cedar.icse?igsh=MWpob25xZHJ5d2wxNQ%3D%3D" target="_blank"><img className="cnl" src="instagram.png"/></a>
                     <a href="https://www.youtube.com/@Cedar-ICSE-b4j" target="_blank"><img className="cnl" src="youtube.png"/></a>
                   </div>
              </div>
              <div className="sm-ind">
                 <div className="smt">Jr College</div>
                <div className="sml-con">
                   <a href="https://www.instagram.com/thecedar.juniorcollegeforgirls?igsh=aDg2NHl3ejBveHBu" target="_blank"><img className="cnl" src="instagram.png"/></a>
                   <a href="https://www.youtube.com/@Cedar-JrCollege-c2d" target="_blank"><img className="cnl" src="youtube.png"/></a>
                 </div>
              </div>
            
            </div>
          </div>
          <div className="col2">
            <iframe
              className="contact-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.073419784108!2d83.42070187435267!3d17.893182088039097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395780f1773bb1%3A0xa52419b0ef65fad3!2sTHE%20CEDAR%20SCHOOLS!5e1!3m2!1sen!2sin!4v1767408107088!5m2!1sen!2sin"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <RegFormHome />
    </>
  );
}
