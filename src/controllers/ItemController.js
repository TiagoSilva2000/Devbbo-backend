const Item = require('../models/Item');
const User = require('../models/User');

module.exports = {

  async store(req, res) {
    const {name} = req.body;

    const item = await Item.create({name});

    return res.send(item);
  },

  async index(req, res) {
    const items = await Item.findAll();


    return res.send(items);
  },

  async show(req, res) {
    const {itemId} = req.params;

    const item = await Item.findByPk(itemId);


    return res.send(item);
  },

  async update(req, res) {
    const {itemId} = req.params;
    const {name} = req.body;

    const item = await Item.findByPk(itemId);
    await item.update({name});


    return res.send(item);
  },

  async destroy(req, res) {
    const {itemId} = req.params;
    const item = await Item.findByPk(itemId);

    await item.destroy();


    return res.send({message: "success!"});
  },

}