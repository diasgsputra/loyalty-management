/**
 * @swagger
 * tags:
 *   name: Transactions
 *   description: User transaction APIs
 */

const express = require("express");
const router = express.Router();
const { addTransaction } = require("../controllers/transactionController");

/**
 * @swagger
 * /api/transactions/add:
 *   post:
 *     summary: Add a new transaction
 *     tags: [Transactions]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               member_no:
 *                 type: integer
 *               name:
 *                 type: string
 *               phone_no:
 *                 type: string
 *               email:
 *                 type: string
 *               items:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                     price:
 *                       type: number
 *                     quantity:
 *                       type: integer
 *                     sub_total:
 *                       type: number
 *     responses:
 *       200:
 *         description: Insert successful
 *       500:
 *         description: Internal Server Error
 */

const path = "/api/transaction"
router.post(path + "/add", (req, res) => addTransaction(req, res));

module.exports = router;
