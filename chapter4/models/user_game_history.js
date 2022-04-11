'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_history extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game_history.belongsTo(models.User, {
        foreignKey : 'user_game_id',
        as : 'user'
      });
    }
  }
  user_game_history.init({
    score: DataTypes.INTEGER,
    user_game_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'History',
    tableName: 'user_game_histories'
  });
  return user_game_history;
};