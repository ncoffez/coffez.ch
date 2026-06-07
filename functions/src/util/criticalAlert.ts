import nodemailer from 'nodemailer'
import { logger } from 'firebase-functions/v2'

interface CriticalAlertInput {
	message: string
	error?: Error
	context?: Record<string, any>
}

export async function sendCriticalAlert(input: CriticalAlertInput): Promise<void> {
	const { message, error, context } = input

	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.postmarkapp.com',
			port: 587,
			secure: false,
			auth: {
				user: process.env.POSTMARK_TOKEN,
				pass: process.env.POSTMARK_TOKEN,
			},
		})

		const subject = `[CRITICAL ALERT] ${message}`
		const emailBody = `
			<h2>Critical Alert: ${message}</h2>
			${error ? `<p><strong>Error:</strong> ${error.message}</p>` : ''}
			${error && error.stack ? `<pre><code>${error.stack}</code></pre>` : ''}
			${context ? `<h3>Context:</h3><pre><code>${JSON.stringify(context, null, 2)}</code></pre>` : ''}
			<p><em>Timestamp: ${new Date().toISOString()}</em></p>
		`

		await transporter.sendMail({
			from: process.env.EMAIL_FROM || 'alerts@coffez.ch',
			to: 'ncoffez@gmail.com',
			subject,
			html: emailBody,
		})

		logger.info(`Critical alert sent: ${message}`)
	} catch (emailError) {
		logger.error(`Failed to send critical alert: ${emailError}`)
	}
}

export function createCriticalAlertHandler(contextDescription: string) {
	return async (error: Error, additionalContext?: Record<string, any>) => {
		logger.error(`${contextDescription}: ${error.message}`)

		await sendCriticalAlert({
			message: contextDescription,
			error,
			context: additionalContext,
		})
	}
}