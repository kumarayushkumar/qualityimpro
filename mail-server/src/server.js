import admin from 'firebase-admin'
import serviceAccount from './config/firebase-admin-sdk.js'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://qualityimpro-ac9b7.firebaseio.com',
})

const db = admin.firestore()

const transporter = nodemailer.createTransport({
  host: "mail.growigh.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
})

const collectionRef = db.collection('details')

const query = collectionRef.where('created_time', '>', new Date())

const sendEmail = async (documentData) => {
  const mailOptions = {
    from: process.env.EMAIL,
    to: 'pawanqualityimpro@gmail.com',
    subject: `New User: ${documentData.firstName} ${documentData.lastName}`,
    text: `User details:\n\n` +
      `First Name: ${documentData.firstName}\n` +
      `Last Name: ${documentData.lastName}\n` +
      `Company: ${documentData.company}\n` +
      `Email: ${documentData.email}\n` +
      `Phone: ${documentData.phone}\n`,
  }

  await transporter.sendMail(mailOptions)
  console.log('Email sent')
}

query.onSnapshot(async (snapshot) => {
  snapshot.docChanges().forEach(async (change) => {
    if (change.type === 'added') {
      const newDocumentData = change.doc.data()
      await sendEmail(newDocumentData)
    }
  })
})
