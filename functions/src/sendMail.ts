import * as nodemailer from "nodemailer";

async function sendmail(data: any, context: any) {
  try {
    console.log(
      `Credentials: ${process.env.MAIL_USER}, ${process.env.MAIL_PASS}.`
    );
    const transporter = nodemailer.createTransport({
      host: "asmtp.mail.hostpoint.ch",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Coffez.ch" <noreply@coffez.ch>`,
      to: data.to,
      subject: "Neue Nachricht auf Coffez.ch",
      text: data.message,
      html: `<h1>Hallo ${data.name},</h1>
      <p>Danke für deine Anfrage, du wirst in Kürze von einem Coffez.ch-Mitarbeiter kontaktiert.</p>
      <br> Deine Mitteilung: 
      <table class="attributes" width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td class="attributes_content">
            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td class="attributes_item">${data.message}</td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      
      <p class="sub">Wir würden uns erlauben dich unter ${data.phone} zu kontaktieren, falls noch weitere Klärung notwendig ist.</p>
      <br>
      <p>Liebe Grüsse,
      <br>Das Coffez.ch Team</p>
      <br>
      <p class="sub align-center">{{{ pm:unsubscribe }}}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (e) {
    console.log(`Something went wrong: ${e}.`);
  }
}

export default sendmail