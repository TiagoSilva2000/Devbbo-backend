const User = require('../models/User');
const Repo = require('../models/Repo');
const Item = require('../models/Item');
const UserRepoItem = require('../models/UserRepoItem');
const ItemConfigs = require('../models/ItemConfigs');

module.exports = {
  async store (req, res) {
    const {posX, posY, posZ} = req.body;
    const {relId} = req.params;
    const rel = await UserRepoItem.findByPk(relId);

    if (!rel) {
      return res.status(404).send({message: 'Non existent relationship'})
    }

    const configs = await ItemConfigs.create({
      relId,
      posX,
      posY,
      posZ
    })

    return res.send(configs);
  },

  async show (req, res) {
    const {configsId} = req.params;
    const configs = await ItemConfigs.findByPk(configsId);

    return res.send(configs);
  },

  async update (req, res) {
    const {posX, posY, posZ} = req.body;
    const {relId} = req.params;
    const rel = await UserRepoItem.findByPk(relId);

    if (!rel) {
      return res.status(404).send({message: 'Non existent relationship'})
    }

    await rel.update({posX, posY, posZ});

    return res.send(rel);
  },

}