const { Transaction, Item } = require("../models");

const addTransaction = async (req, res) => {
  const { member_no, name, phone_no, email, items } = req.body;
  
  const transaction_date = new Date();
  // Format the current date for transaction_id
  const currentDate = new Date();
  const formattedDate = currentDate
    .toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit' })
    .replace(/\//g, ''); // Removing slashes
  // Generate a random 6-digit number
const randomDigits = Math.floor(100000 + Math.random() * 900000); // Generates a random number between 100000 and 999999
// Convert it to a string and pad with zeros if necessary
const randomNumber = randomDigits.toString().padStart(6, '0');
// Use it in the transaction_id
const transaction_id = `TRINV/${randomNumber}/${formattedDate}`;


  try {
    // Insert transaction data into the transaction table
    

    // Insert each item data into the items table
    let total_amount = 0;
    for (const item of items) {
      await Item.create({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        sub_total: item.sub_total,
        transaction_id: transaction_id
      });
      total_amount = total_amount + item.sub_total
    }

    const transaction = await Transaction.create({
      member_no,
      name,
      phone_no,
      email,
      transaction_date,
      transaction_id,
      total_amount
    });

    return res.status(200).json({ message: "Insert successful" });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { addTransaction };
