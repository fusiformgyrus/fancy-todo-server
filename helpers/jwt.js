'use strict'

const jwt = require('jsonwebtoken')
const secretKey = 'ubigoreng'

function generateToken (payload) {
    const generatedToken = jwt.sign(payload, secretKey)
    return generatedToken
}

function verifyToken (inputToken) {
    const decodedToken = jwt.verify(inputToken, secretKey)
    return decodedToken
}

module.exports = {
    generateToken,
    verifyToken
}