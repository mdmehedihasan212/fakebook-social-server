const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hey! this is main route');
})

module.exports = router