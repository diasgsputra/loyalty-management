
/**
 * @swagger
 * tags:
 *   name: Membership
 *   description: Membership APIs
 */

const express = require("express");
const router = express.Router();
const { getAllMember, getMemberById } = require("../controllers/membershipController");

/**
 * @swagger
 * /api/membership/list:
 *   get:
 *     summary: Membership list
 *     tags: [Membership]
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 * /api/membership/{id}:
 *   get:
 *     summary: Membership get by id
 *     tags: [Membership]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID of the membership
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 */
const path = "/api/membership"
router.get(path + "/list", (req, res) => getAllMember(req, res));
router.get(path + "/:id", (req, res) => getMemberById(req, res));

module.exports = router;
