export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { to, subject, html, from_name, type } = req.body;
    const RESEND_API_KEY = process.env.RESEND_API_KEY;

    if (!RESEND_API_KEY) {
        console.error('RESEND_API_KEY is missing');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${RESEND_API_KEY}`,
            },
            body: JSON.stringify({
                from: 'Soholang Cup <onboarding@resend.dev>',
                to: [to || 'contact@guyanevents.fr'],
                reply_to: req.body.reply_to || undefined,
                subject: subject,
                html: html,
            }),
        });

        if (!response.ok) {
            const error = await response.json();
            console.error('Resend API Error:', error);
            return res.status(response.status).json({ error: error.message });
        }

        const data = await response.json();
        return res.status(200).json(data);
    } catch (error) {
        console.error('Internal Server Error:', error);
        return res.status(500).json({ error: error.message });
    }
}
