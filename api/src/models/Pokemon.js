 //! modelo de la tabla pokemon con el timetamps eliminado o no agregado en la tabla de pgadmi 
const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      primaryKey:true,
      defaultValue:DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    },
    image:{
      type:DataTypes.STRING,
      defaultValue:"api/pokebola.png"
    },
    life:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    attack:{
     type:DataTypes.INTEGER,
     allowNull:false
    },
    defense:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    speed:{
     type:DataTypes.INTEGER,
     allowNull:false
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull:false
    }
  },
  { timestamps: false });
};
