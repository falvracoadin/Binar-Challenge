'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game.hasOne(models.Biodata, {
        foreignKey : 'user_game_id',
        as : 'biodata'
      });

      user_game.hasMany(models.History, {
        foreignKey : 'user_game_id',
        as : 'history'
      });
    }
  }
  user_game.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'user_games'
  });
  return user_game;
};