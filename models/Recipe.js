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
      type: DataTypes.TEXT,
      allowNull: true
    },

    dishPic: {
      type: DataTypes.TEXT,
      allowNull: true,

    },

    filename: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    chef: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    prepTime: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    nutrition_facts: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dishDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    ingredients: {
      type: DataTypes.TEXT,
      allowNull: true
    },

    directions1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    directions2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    directions3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    directions4: {
      type: DataTypes.TEXT,
      allowNull: true
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
