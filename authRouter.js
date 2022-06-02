const Router = require('express');
const router = new Router();


router.post('/login', async (req, res) => {
    try {
        console.log(req);
    } catch (e) {
        res.send({message: "Server error"})
    }
});
module.exports = router;