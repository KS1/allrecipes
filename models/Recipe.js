const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Recipe extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },

    dish: {
      type: DataTypes.STRING,
      allowNull: false
    },

    dishPic: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true
    },

    filename: {
      type: DataTypes.STRING,
      allowNull: true
    },

    chef: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prepTime: {
      type: DataTypes.STRING,
      allowNull: false
    },

    nutrition_facts: {
      type: DataTypes.STRING,
      allowNull: false
    },
    dishDesc: {
      type: DataTypes.STRING,
      allowNull: false

      
    },

    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },

    directions: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id'
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe'
  }
);

module.exports = Recipe;
