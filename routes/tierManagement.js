
/**
 * @swagger
 * tags:
 *   name: Tier-management
 *   description: Tier-management APIs
 */

const express = require("express");
const router = express.Router();
const { getAllTierManagement, addTierManagement, updateTierManagement, deleteTierManagement } = require("../controllers/tierManagementController");

/**
 * @swagger
 * /api/tier-management/list:
 *   get:
 *     summary: tier-management list
 *     tags: [Tier-management]
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not found
 *       500:
 *         description: Internal Server Error
 * 
 * /api/tier-management:
 *   post:
 *     summary: Create tier management
 *     tags: [Tier-management]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tier_name:
 *                 type: string
 *               min_poin:
 *                 type: integer
 *               max_poin:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Save successful
 *       500:
 *         description: Internal Server Error
 * 
 * /api/tier-management/{id}:
 *   put:
 *     summary: Update tier management
 *     tags: [Tier-management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tier management entry to update
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               tier_name:
 *                 type: string
 *               min_poin:
 *                 type: integer
 *               max_poin:
 *                 type: integer
 *     responses:
 *       200:
 *         description: Update successful
 *       404:
 *         description: Tier management not found
 *       500:
 *         description: Internal Server Error
 * 
 * /api/tier-management/delete/{id}:
 *   get:
 *     summary: Delete tier management entry
 *     tags: [Tier-management]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the tier management entry to delete
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Delete successful
 *       404:
 *         description: Tier management not found
 *       500:
 *         description: Internal Server Error
 */
const path = "/api/tier-management"
router.get(path + "/list", (req, res) => getAllTierManagement(req, res));
router.post(path, (req, res) => addTierManagement(req, res));
router.put(path + "/:id", (req, res) => updateTierManagement(req, res));
router.get(path + "/delete/:id", (req, res) => deleteTierManagement(req, res));

module.exports = router;
