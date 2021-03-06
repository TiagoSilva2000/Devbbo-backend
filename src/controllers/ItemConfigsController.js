const User = require('../models/User');
const Repo = require('../models/Repo');
const Item = require('../models/Item');
const UserRepoItem = require('../models/UserRepoItem');
const ItemConfigs = require('../models/ItemConfigs');

module.exports = {
  async store (req, res) {
    const {pos_x, pos_y, pos_z} = req.body;
    const {relId} = req.params;
    const rel = await UserRepoItem.findByPk(relId);

    if (!rel) {
      return res.status(404).send({message: 'Non existent relationship'})
    }

    const configs = await ItemConfigs.create({
      relId,
      pos_x,
      pos_y,
      pos_z
    })

    return res.send(configs);
  },

  async show (req, res) {
    const {configsId} = req.params;
    const configs = await ItemConfigs.findByPk(configsId);

    return res.send(configs);
  },

  async update (req, res) {
    const {pos_x, pos_y, pos_z} = req.body;
    const {relId} = req.params;
    const rel = await UserRepoItem.findByPk(relId);

    if (!rel) {
      return res.status(404).send({message: 'Non existent relationship'})
    }

    await rel.update({pos_x, pos_y, pos_z});

    return res.send(rel);
  },

}