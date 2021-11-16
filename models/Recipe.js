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

    description: {
      type: DataTypes.STRING,
    },
 
    cook_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    ingredients: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,
      unique: true,

    },
    directions: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false,

    },
    nutrition_facts: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishPic: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id:{
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'user_id',
      },
    }

    // image_id: {
    //     type: DataTypes.INTEGER,
    //     references: {
    //       model: 'gallery',
    //       key: 'id',
    //     },
    //   },
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
