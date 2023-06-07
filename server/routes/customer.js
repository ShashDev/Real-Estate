const express = require('express');

const router = express.Router();
const {submitCustomerDetails} = require('../controllers/customer')

router.post('/',submitCustomerDetails);

module.exports = router;