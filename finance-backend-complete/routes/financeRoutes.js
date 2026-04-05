
const router = require("express").Router();
const finance = require("../controllers/financeController");
const {verifyToken} = require("../middleware/authMiddleware");
const {allowRoles} = require("../middleware/roleMiddleware");

router.post("/", verifyToken, allowRoles("admin"), finance.createRecord);
router.get("/", verifyToken, allowRoles("admin","analyst"), finance.getRecords);
router.put("/:id", verifyToken, allowRoles("admin"), finance.updateRecord);
router.delete("/:id", verifyToken, allowRoles("admin"), finance.deleteRecord);

module.exports = router;
