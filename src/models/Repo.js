const {Model, DataTypes} = require('sequelize');

class Repo extends Model {
  static init(sequelize) {
    super.init({
      name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'repos'
    })
  }

  static associate (models) {
    this.belongsToMany(models.User, { foreignKey: 'user_id', through: 'user-repo-item', as: 'user'});
    this.belongsToMany(models.Item, {foreignKey: 'item_id', through: 'user-repo-item', as: 'item'})
  }
}

module.exports = Repo;