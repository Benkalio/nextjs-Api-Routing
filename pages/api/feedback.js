//FOR SERVER SIDE CODE AND FEEDBACK FROM DATABASE
//EXPLORING NEXTJS API ROUTE

import fs from 'fs';
import path from 'path';

function handler(req, res) {
    if (req.method === 'POST') {
        const email = req.body.email;
        const feedbackText = req.body.text;

        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: feedbackText,
        };

        //STORE THE DATA IN A FILE
        const filePath = path.join(process.cwd(), 'data', 'feedback.json');
        const fileData = fs.readFileSync(filePath);
        const data = JSON.parse(fileData);
        data.push(newFeedback);
        fs.writeFileSync(filePath, JSON.stringify(data));
        res.status(201).json({ message: 'Success', feedback: newFeedback });
    } else {
        res.status(200).json({ check: 'Responding...' });
    }    
}

export default handler;
