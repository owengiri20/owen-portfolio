export const ContactForm = () => {
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(e);

    console.log("submitting");

    const myForm = e.target;
    const formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    }).then((res) => {
      console.log("then", res);
    });
  };

  return (
    <div>
      <form
        onSubmit={(e) => onSubmit(e)}
        name="contact"
        method="POST"
        data-netlify="true"
      >
        <p>
          <label>
            Your Name: <input type="text" name="name" />
          </label>
        </p>
        <p>
          <label>
            Your Email: <input type="email" name="email" />
          </label>
        </p>
        <p>
          <label>
            Message: <textarea name="message"></textarea>
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>

      <input type="hidden" name="form-name" value="contact" />
    </div>
  );
};
