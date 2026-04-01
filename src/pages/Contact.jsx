import { useState } from "react";
import Navbar from "../components/Navbar";
import BackgroundSlider from "../components/BackgroundSlider";
import Footer from "../components/Footer";
import Email from "../components/Email";


function Contact() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <div className="header">
        <BackgroundSlider />
        <Navbar />
      </div>

      <div className="content">
        <div className="inner-content">
          <div className="about">
            <img src="/assets/dotts1.jpg" alt="" className="dotts--gray" />
            <img src="/assets/dotts1.jpg" alt="" className="dotts--gray2" />

            <div className="in-front">
              <h3 className="about-para">
                Hey! I'm Xavia Christopher 👋
              </h3>

              <div className="img-contact">
                <img src="/assets/computer-girl.webp" alt="" />
              </div>

              <h3>
                I'm a web developer, artist, and business woman.
                I love expressing myself through different mediums
                and trying out new things! Send me an email to get in touch about
                your web development needs!
              </h3>
              <div className="img-email">
  <button
    className="click email-button"
    onClick={() => setShowModal(true)}
  > Click Me
    <img src="/assets/email-img.svg" alt="" />
  </button>
</div>

            </div>
          </div>
        </div>
      </div>

     
  
      <Email showModal={showModal} setShowModal={setShowModal} />
      <Footer />
    </div>
  );
}

export default Contact;