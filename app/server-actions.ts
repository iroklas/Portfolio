export async function SendEmail(senderName, senderEmail, senderMessage) {
    let content = `**Name:** ${senderName}\n**Email:** ${senderEmail}\n**Message:** ${senderMessage}`;
    
    fetch("https://discord.com/api/webhooks/1181389090294345818/CU0MA-15uTeUewoCWNu9UdRtkCTrawHb4X8qmYx63X3r5l73ukkTeM6AgXDI_uPE-DkA", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: content
        })
    }).then(response => {
        if(response.ok) {
            return true;
        } else {
            return false;
        }
    })
}