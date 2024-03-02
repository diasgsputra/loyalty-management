const { sequelize, TierManagement } = require("../models");

const getAllTierManagement = async (req, res) => {
  try {
    // get all member
    const [tierManagement] = await sequelize.query(
      "SELECT * FROM tier_managements",
      {
        type: sequelize.QueryTypes.query,
      }
    );

    return res.status(200).json({ data: tierManagement });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const addTierManagement = async (req, res) => {
    const { tier_name, min_poin, max_poin } = req.body;
  
    try {
      let tierManagement;
        // Create new tier management entry
        tierManagement = await TierManagement.create({
          tier_name,
          min_poin,
          max_poin
        });
  
      return res.status(200).json({ message: "Data saved" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

const updateTierManagement = async (req, res) => {
    const { id } = req.params;
    const { tier_name, min_poin, max_poin } = req.body;
  
    try {
      let tierManagement;

        // Update existing entry
        tierManagement = await TierManagement.findByPk(id);
  
        if (!tierManagement) {
          return res.status(404).json({ message: "Tier management not found" });
        }
  
        // Update tier management attributes
        tierManagement.tier_name = tier_name;
        tierManagement.min_poin = min_poin;
        tierManagement.max_poin = max_poin;
  
        // Save the updated tier management
        await tierManagement.save();
  
      return res.status(200).json({ data: tierManagement });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

  const deleteTierManagement = async (req, res) => {
    const { id } = req.params;
  
    try {
      // Find the tier management entry by ID
      const tierManagement = await TierManagement.findByPk(id);
  
      // Check if the tier management entry exists
      if (!tierManagement) {
        return res.status(404).json({ message: "Tier management not found" });
      }
  
      // Delete the tier management entry
      await tierManagement.destroy();
  
      return res.status(200).json({ message: "Data deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };
  

module.exports = { getAllTierManagement, addTierManagement, updateTierManagement, deleteTierManagement };