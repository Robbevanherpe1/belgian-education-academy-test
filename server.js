require('dotenv').config()
const express = require('express')
const nodemailer = require('nodemailer')
const path = require('path')

const app = express()

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')))

// Parse JSON body content
app.use(express.json())

// Endpoint for Admissions form (POST)
app.post('/api/admissions', async (req, res) => {
  try {
    const { fullName, email, phone, program } = req.body
    
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@school.edu', 
      subject: 'New Admissions Application',
      text: `Name: ${fullName}\nEmail: ${email}\nPhone: ${phone}\nProgram: ${program}`
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Application received! We will be in touch soon.' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error sending application.' })
  }
})

// Endpoint for Contact form (POST)
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    })

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient@school.edu',
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    }

    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: 'Message sent successfully!' })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Error sending message.' })
  }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
