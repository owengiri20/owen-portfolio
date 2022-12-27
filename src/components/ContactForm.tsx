import { useState } from "react";

export const ContactForm = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  function encode(data: any) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  const handleSubmit = (event: any) => {
    console.log(input);

    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        Name: "test",
      }),
    }).catch((error) => alert(error));
  };

  return (
    <div>
      <form onSubmit={handleSubmit} name="contact" method="post">
        <input type="hidden" name="form-name" value="contact" />
        <p>
          <label>
            Name:{" "}
            <input
              onChange={(e) => {
                setInput((p) => ({ ...p, name: e.target.value }));
              }}
              type="text"
              name="name"
            />
          </label>
        </p>
        <p>
          <label>
            Email:{" "}
            <input
              onChange={(e) => {
                setInput((p) => ({ ...p, email: e.target.value }));
              }}
              name="email"
            />
          </label>
        </p>
        <p>
          <label>
            Message:{" "}
            <textarea
              onChange={(e) => {
                setInput((p) => ({ ...p, message: e.target.value }));
              }}
              name="message"
            ></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  );
};
