// home controller action
module.exports.home = function (req, res) {
  return res.json(200, {
    message: "This is your home page use postman to check your API's",
  });
};
