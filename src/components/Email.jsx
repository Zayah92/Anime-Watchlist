import emailjs from "@emailjs/browser";

function Email({ showModal, setShowModal }) {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_bpdx6ho",
      "template_byiaebq",
      e.target,
      "tHypjaTPZCFUZ-QEe"
    )
    .then(() => {
      alert("Message sent!");
      setShowModal(false);
    })
    .catch(() => {
      alert("Error sending message");
    });
  }

  // ❗ ONLY render modal when showModal is true
  if (!showModal) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <button 
          className="close-btn"
          onClick={() => setShowModal(false)}
        >
          ✕
        </button>

        <h2>Send Message</h2>

        <form onSubmit={sendEmail}>
          <input type="text" name="user_name" placeholder="Your Name" required />
          <input type="email" name="user_email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Message" required></textarea>

          <button type="submit">Send</button>
        </form>

      </div>
    </div>
  );
}

export default Email;