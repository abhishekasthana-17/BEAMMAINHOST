import { addRow } from "../utils/googleSheet.js";

export const newsletterSubscribe = (req, res, next) => {

    try {
        const { email, category } = req.body;

        // Validate input
        if (!email || !category) {
            return res.status(400).json({ error: 'Email and category are required.' });
        }

        console.log(`New subscription: Email - ${email}, Category - ${category}`);

        addRow(email, category)
            .then(() => {
                console.log("Row added to Google Sheet successfully");
                // Respond with success message
                return res.status(200).json({ message: 'Subscription successful!', data: { email, category } });
            })
            .catch((error) => {
                console.error("Error adding row to Google Sheet:", error);
                return res.status(500).json({ error: 'Failed to add subscription to Google Sheet.' });
            });

    } catch (error) {
        console.error("Error in newsletterSubscribe:", error);
        res.status(500).json({ error: 'Internal server error.' });
    }
}