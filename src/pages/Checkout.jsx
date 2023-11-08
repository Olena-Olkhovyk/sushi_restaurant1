import { useRef } from "react";
import emailjs from "@emailjs/browser";

export const Checkout = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfmo1w3",
        "template_uyl1pdp",
        form.current,
        "zfKxXG29IG1WazDNd"
      )
      .then(
        (result) => {
          alert(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
export default Checkout;
