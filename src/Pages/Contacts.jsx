import "./Contacts.css";

function Contacts() {
  return (
    <div className="contact-container">
      <div className="contact-heading">
        <h2>Get in Touch with Us</h2>
        <p>
          We&apos;d love to hear from you. Feel free to reach out with any
          questions or feedback.
        </p>
      </div>
      <div className="iframe-container">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSf0PqRMlq82nX7Nb3eSPIQOiahcCTsu1GpwxJTSNS3-IoJLxQ/viewform?embedded=true"
          width="100%"
          height="851" 
          frameBorder="0" 
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
export default Contacts;
