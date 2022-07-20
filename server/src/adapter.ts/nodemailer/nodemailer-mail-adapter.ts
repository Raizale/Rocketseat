import { MailAdapter, SendMailData } from './../mail-adapter';
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "039a089f2ea352",
        pass: "acd7da56f7805d"
    }
});

export class NodeMailerMailAdapter implements MailAdapter {
async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
        from: "Equipe Feedget <oi@feedget.com>",
        to: 'Raíza Leal <raizall7@gmail.com>',
        subject,
        html: body,
    })

}
}