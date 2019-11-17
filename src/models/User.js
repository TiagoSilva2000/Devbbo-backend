const {Model, DataTypes} = require('sequelize');

class User extends Model {
  static init(sequelize) {
    super.init({
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      email: DataTypes.STRING,
      github_username: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'users'
    })
  }

  static associate(models) {
    this.belongsToMany(models.Repo, { foreignKey: 'repo_id', through: 'user-repo-item', as: 'repo'});
    this.belongsToMany(models.Repo, { foreignKey: 'item_id', through: 'user-repo-item', as: 'item'});
  }
}


module.exports = User;