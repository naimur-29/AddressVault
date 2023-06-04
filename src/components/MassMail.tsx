export const MassMail = () => {
  <form
    action="mailto:recipient@example.com, email@gmail.com"
    method="get"
    encType="text/plain"
  >
    Subject:
    <br />
    <input type="text" name="subject" placeholder="Your Name" />
    <br />
    Email:
    <br />
    <input type="email" name="email" placeholder="Your Email" />
    <br />
    Message:
    <br />
    <textarea name="body" rows={5} cols={30} placeholder="Your Message" />
    <br />
    <input type="submit" value="Send" />
  </form>;
};
