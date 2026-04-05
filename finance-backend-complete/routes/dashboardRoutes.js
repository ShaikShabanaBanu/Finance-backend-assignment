
const router = require("express").Router();
const dash = require("../controllers/dashboardController");
const {verifyToken} = require("../middleware/authMiddleware");

router.get("/", verifyToken, dash.getSummary);

module.exports = router;
