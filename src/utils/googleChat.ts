interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface GoogleChatMessage {
  text: string;
}

export const sendContactFormToGoogleChat = async (data: ContactFormData): Promise<void> => {
  const webhookUrl = import.meta.env.VITE_GOOGLE_CHAT_WEBHOOK_URL;
  const apiKey = import.meta.env.VITE_GOOGLE_CHAT_API_KEY;
  const token = import.meta.env.VITE_GOOGLE_CHAT_TOKEN;

  // Check if all required environment variables are present
  if (!webhookUrl || !apiKey || !token) {
    console.warn('Google Chat webhook configuration is incomplete');
    throw new Error('Google Chat webhook not properly configured');
  }

  // Format the message for Google Chat
  const message: GoogleChatMessage = {
    text: formatContactMessage(data)
  };

  // Construct the full URL with query parameters
  const fullUrl = `${webhookUrl}?key=${apiKey}&token=${token}`;

  try {
    const response = await fetch(fullUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Google Chat API error: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log('Successfully sent to Google Chat:', result);
    return result;
  } catch (error) {
    console.error('Failed to send message to Google Chat:', error);
    throw error;
  }
};

const formatContactMessage = (data: ContactFormData): string => {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });

  return `🔔 *New Contact Form Submission from Parenthesis India Website*

📝 *Contact Details:*
• *Name:* ${data.name}
• *Email:* ${data.email}
• *Subject:* ${data.subject}

💬 *Message:*
${data.message}

⏰ *Submitted:* ${timestamp}

---
*From:* Parenthesis India Website Contact Form
*Website:* https://parenthesisindia.in`;
};

export default {
  sendContactFormToGoogleChat
};