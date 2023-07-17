const Contact = () => {
  return (
    <div className="contact content-container">
      <h1 className="contact-header">Skontaktuj się z nami!</h1>
      <textarea
        className="contact-input"
        placeholder="Wpisz treść wiadomości..."
      ></textarea>
      <button className="contact-btn">Wyślij</button>
    </div>
  );
};

export default Contact;
