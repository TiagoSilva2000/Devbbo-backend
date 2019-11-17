const {Model, DataTypes} = require('sequelize');

class Item extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'items'
    })
  }

  static associate(models) {
    this.belongsToMany(models.User, { foreignKey: 'user_id', through: 'user-repo-item', as: 'user'})
    this.belongsToMany(models.Repo, { foreignKey: 'repo_id', through: 'user-repo-item', as: 'repo'})
  }
}

module.exports = Item;