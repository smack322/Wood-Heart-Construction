const axios = require('axios');

exports.handler = async (event, context) => {
    console.log("Receieved data:", event.body)
    if (event.httpMethod !== 'POST') {
        return { statusCode: 405, body: 'Method Not Allowed' };
    }

    try {
        const {name, email, phone, type, budget, message, to } = JSON.parse(event.body);
        const formattedMessage = `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Project Type: ${type}
        Budget: ${budget}
        Details: ${message}
        `
        const response = await axios.post('https://api.postmarkapp.com/email', {
            From: 'quotes@3woodconstruction.com',
            To: to,
            Subject: `New Project Inquiry From ${name}`,
            TextBody: formattedMessage
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-Postmark-Server-Token': `${process.env.NETLIFY_EMAILS_PROVIDER_API_KEY}`
            }
        });

        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        };
    } catch (error) {
        return {
            statusCode: error.response.status,
            body: JSON.stringify(error.response.data)
        };
    }
};
