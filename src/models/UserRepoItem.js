const {Model, DataTypes} = require('sequelize');

class UserRepoItem extends Model {
  static init(sequelize) {
    super.init({
    }, {
      sequelize,
      tableName: 'user-repo-item'
    })

  }

  static associate(models) {
    this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    this.belongsTo(models.Repo, {foreignKey: 'repo_id', as: 'repo'})
    this.belongsTo(models.Item, {foreignKey: 'item_id', as: 'item'})
  }
}

module.exports = UserRepoItem;