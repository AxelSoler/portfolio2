const Contact = () => (
  <section className="contactForm">
    <div className="contactContainer">
      <h2 className="contactTitle1">CONTACT ME</h2>
      <h2 className="contactTitle2">Let’s chat!</h2>
      <p className="description">
        If you have an application you are interested in developing, a
        {' '}
        feature that you need built or a project that needs coding. I’d love to help with it.
      </p>
      <form action="https://formspree.io/f/meqnzyke" method="post">
        <input type="text" name="usename" placeholder="Text input" required />
        <input type="email" name="userEmail" placeholder="email@something.com" required />
        <textarea name="userComment" placeholder="Enter text here" required />
        <button className="submitButton" type="submit">Send Message</button>
      </form>
    </div>
  </section>
);

export default Contact;
