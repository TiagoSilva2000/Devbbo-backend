const User = require('../models/User');

module.exports = {

  async store(req, res) {
    const {username, password, email, github_username} = req.body;

    const user = await User.create({username, password, email, github_username});

    return res.send(user);
  },

  async index(req, res) {
    const users = await User.findAll();


    return res.send(users);
  },

  async show(req, res) {
    const {id} = req.params;
    const user = await User.findByPk(id, {attributes: ['username', 'email']});


    return res.send(user);
  },


  async update(req, res) {
    const {username, password, email} = req.body;
    const {id} = req.params;
    const user = await User.findByPk(id);

    await user.update({username, email, password});

    return res.send(user);
  },


  async destroy(req, res) {
    const {id} = req.params;
    const user = await User.findByPk(id);

    await user.destroy();

    return res.send({message: "success"});
  },

}