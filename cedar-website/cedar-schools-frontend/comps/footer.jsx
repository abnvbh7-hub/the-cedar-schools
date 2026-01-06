export default function Footer() {
  return (
    <>
    <div className="fm-con">
      <div className="col1-con">
        <img className="fm-logo" src="logo.png"/>
        <div className="info-con">
          <div className="mail-con">
            <div className="add-t"><img className="map-logo" src="phone.png"/></div>
            <div className="add-txt">+91 9703786483</div>
          </div>
        <div className="mail-con">
          <div className="mail-t"><img className="mail-logo" src="gmail.png"/></div>
          <div className="mail-txt">XXX@gmail.com</div>
        </div>
        <div className="address-con">
          <div className="add-t"><img className="map-logo" src="map.png"/></div>
          <div className="add-txt">Dorathota, Bheemunipatnam, Visakhapatnam,Andhra Pradesh, 531163.</div>
        </div>
          </div>
      </div>
      <iframe
        className="fm-map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3248.073419784108!2d83.42070187435267!3d17.893182088039097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a395780f1773bb1%3A0xa52419b0ef65fad3!2sTHE%20CEDAR%20SCHOOLS!5e1!3m2!1sen!2sin!4v1767408107088!5m2!1sen!2sin"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    </>
  );
}
