import NewTransport from "./transport";

export default function NewMailer(options) {
  const transport = new NewTransport(options);
  console.log("=> Mail service started!");

  /**
   * Sends Email
   * @param {receiver, subject, body, type} MessageObject
   * @returns
   */
  return async function sendMail({ receiver, subject, body, type }) {
    var mailObject = {
      to: receiver,
      from: {
        name: "Md. Mushfiqur Rahman", //add name
        address: "mushfiqxrabbi@gmail.com", //add address
      },
      subject,
    };

    if (type === "text") {
      mailObject.text = body;
    } else if (type === "html") {
      mailObject.html = body;
    }

    // Mail Sender
    try {
      let a = await transport.sendMail(mailObject);
      console.log(a);
      return true;
    } catch (e) {
      return e;
    }
  };
}
