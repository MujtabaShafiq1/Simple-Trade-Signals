import { contactSchema } from "sts/utils/validation/contact";
import { connectToDatabase, insertDocument } from "sts/utils/mongodb";

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await contactSchema.validate(req.body);
    } catch (error) {
      res.status(400).json({ message: error.message });
      return;
    }

    let client;

    try {
      client = await connectToDatabase();
    } catch (error) {
      res.status(500).json({ message: "Could not connect to database." });
      return;
    }

    try {
      await insertDocument(client, "contact", req.body);
      client.close();
      res.status(201).json({ message: "Message Received" });
    } catch (error) {
      client.close();
      res.status(500).json({ message: "Unable to Send Message" });
      return;
    }
  }
}

export default handler;
