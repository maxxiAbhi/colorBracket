var jwt = require('jsonwebtoken');
const User = require('../model/users');

exports.userAuth = async (req, res, next) => {
    try {
        if (req.headers.authorization) {
            const token = req.headers.authorization;
            const verfyToken = jwt.verify(token, `asadsadsad44646464`);
                const rootUser = await User.findOne({ _id: verfyToken._id })
                if (!rootUser) {
                    throw new Error('user not found')
                }
                req.rootUser = rootUser
                req.userId = rootUser._id
            } else {
                res.status(401).json({ message: 'Login First' })
            }
            next()
    } catch (error) {
        res.status(401).json({ message: 'Something went wrong' })
    }
}