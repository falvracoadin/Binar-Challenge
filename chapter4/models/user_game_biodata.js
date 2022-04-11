'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_game_biodata extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user_game_biodata.belongsTo(models.User, {
        foreignKey : 'user_game_id',
        as : 'user'
      });
    }
  }
  user_game_biodata.init({
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    description: DataTypes.STRING,
    user_game_id : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Biodata',
    tableName: 'user_game_biodata'
  });
  return user_game_biodata;
};