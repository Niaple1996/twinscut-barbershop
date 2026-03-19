import { NextRequest, NextResponse } from 'next/server'

// Basic rate limiting: track IPs in memory (resets on cold start)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>()
const RATE_LIMIT = 3
const RATE_WINDOW = 60 * 60 * 1000 // 1 hour in ms

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? 'unknown'
  const now = Date.now()
  const rateData = rateLimitMap.get(ip)

  if (rateData) {
    if (now - rateData.timestamp < RATE_WINDOW) {
      if (rateData.count >= RATE_LIMIT) {
        return NextResponse.json(
          { error: 'Zu viele Anfragen. Bitte warte eine Stunde.' },
          { status: 429 }
        )
      }
      rateData.count++
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now })
    }
  } else {
    rateLimitMap.set(ip, { count: 1, timestamp: now })
  }

  try {
    const data = await req.formData()
    const name = (data.get('name') as string)?.trim()
    const contact = (data.get('contact') as string)?.trim()
    const message = (data.get('message') as string)?.trim()
    const privacy = data.get('privacy')

    // Validation
    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: 'Bitte alle Pflichtfelder ausfüllen.' },
        { status: 400 }
      )
    }
    if (!privacy) {
      return NextResponse.json(
        { error: 'Datenschutz-Einwilligung fehlt.' },
        { status: 400 }
      )
    }

    // Send email via nodemailer if SMTP configured
    const smtpHost = process.env.SMTP_HOST
    if (smtpHost) {
      const nodemailer = await import('nodemailer')
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: parseInt(process.env.SMTP_PORT ?? '587'),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      })

      await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: process.env.CONTACT_EMAIL ?? 'info@twinscut.de',
        subject: `Neue Kontaktanfrage von ${name}`,
        text: `Name: ${name}\nKontakt: ${contact}\n\nNachricht:\n${message}`,
        html: `<h2>Neue Kontaktanfrage</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Kontakt:</strong> ${contact}</p>
          <p><strong>Nachricht:</strong></p>
          <p>${message.replace(/\n/g, '<br>')}</p>
          <hr>
          <small>Gesendet via twinscut.de Kontaktformular</small>`,
      })
    }

    // Redirect back with success
    return NextResponse.redirect(new URL('/kontakt?success=1', req.url))
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Fehler beim Senden. Bitte versuche es später erneut.' },
      { status: 500 }
    )
  }
}
