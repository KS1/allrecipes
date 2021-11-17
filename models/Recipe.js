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
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    dish: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishPic: {
      type: DataTypes.STRING,
      allowNull: true,
      primaryKey: true,
      unique: true
    },
    chef: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prepTime: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    nutrition_facts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishDesc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {

        len: [8,2000]

      },
    },

    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {

        len: [8,2000]

      },

    },
    directions: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {

        len: [8,2000]

      },
    }

  },
  
  {
    // hooks: {
    //   beforeCreate: async (newUserData) => {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },
    //   },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipe',
  }
);

module.exports = Recipe;
