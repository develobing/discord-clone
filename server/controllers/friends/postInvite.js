const postInvite = async (req, res) => {
  const { email } = req.body;

  return res
    .status(200)
    .json({ isSuccess: true, message: `Invitation sent to ${email}` });
};

module.exports = postInvite;
