const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('Hey! this is auth route');
})

module.exports = router