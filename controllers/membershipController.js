// controllers/auth.js

const { sequelize } = require("../models");

const getAllMember = async (req, res) => {
  try {
    // get all member
    const [membership] = await sequelize.query(
      "SELECT member_no, name, email, phone_no, join_date, remained_point, status FROM memberships",
      {
        type: sequelize.QueryTypes.query,
      }
    );


    // Handle successful login
    return res.status(200).json({ data: membership });
  } catch (error) {
    console.error("Error during login:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

const getMemberById = async (req, res) => {
    const { id } = req.params;
    try {
        
        const [historyPoin] = await sequelize.query(
            "SELECT * FROM history_poins WHERE member_no = :id",
            {
              type: sequelize.QueryTypes.query,
              replacements: { id },
            }
          );
      const [membership] = await sequelize.query(
        "SELECT * FROM memberships where member_no = :id",
        {
          type: sequelize.QueryTypes.SELECT,
          replacements: { id },
        }
      );
      const data = {
        id: membership.id,
        member_no: membership.member_no,
        name: membership.name,
        email: membership.email,
        phone_no: membership.phone_no,
        birth_date: membership.birth_date,
        address: membership.address,
        join_date: membership.join_date,
        referral: membership.referral,
        earned_point: membership.earned_point,
        redeemed_point: membership.redeemed_point,
        remained_point: membership.remained_point,
        status: membership.status,
        createdAt: membership.createdAt,
        updatedAt: membership.updatedAt,
        historyPoin: historyPoin
    };
  
      // Handle successful login
      return res.status(200).json({ data });
    } catch (error) {
      console.error("Error during login:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  };

module.exports = { getAllMember, getMemberById };
