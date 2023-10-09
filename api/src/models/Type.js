//!modelo de la tabla type en mi base de datos con los timetpms elimonados o no agregados 
const {DataTypes} = require('sequelize')

module.exports =(sequelize)=>{
    sequelize.define('type',{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey:true,
            allowNull:false
        },
        name:{
            type:DataTypes.STRING,
            allowNull:false
        }
    },{ timestamps: false })
}