const userModels = require("../models/userprofile");
exports.profile = async (req, res) => {
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
  }

  const callback = (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    else {
      return Promise.resolve(data);
    }
  };

  try {
    const gerUserResult = await userModels.getUser(req, callback);

    if (gerUserResult && gerUserResult.length > 0 && gerUserResult[0].id) {
      req.userId = gerUserResult[0].id;
      const getUpdateResult = await userModels.updateProfile(req, callback);

      if (getUpdateResult.affectedRows) {
        res.send({
          status: true,
          message: "User Profile has been Updated Successfully",
        });
      }
    } else {
      res.send({
        status: false,
        message: "Something went Wrong, Kindly check inputs",
      });
    }
  } catch (err) {
    console.log("err on await", err);
  }
};
