const { pool } = require("../config/dbConfig");

const submitCustomerDetails = async function (req, res) {
  try {
    console.log(req.body);
    const { email, contact, name, city, state } = req.body;
    await pool.query(
      "INSERT INTO CUSTOMERS (customer_name,contact,email,city,state) VALUES($1,$2,$3,$4,$5)",
      [name, contact, email, city, state]
    );

    return res
      .status(201)
      .json({ success: true, msg: "Customer added successfully ." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ success: false, msg: "Server side error ." });
  }
  j;
};

module.exports = { submitCustomerDetails };
