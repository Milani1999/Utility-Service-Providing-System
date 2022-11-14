import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Booking = db.define('booking',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name:{
        type: DataTypes.STRING

    },
    email:{
        type: Sequelize.STRING
    },
    phoneNumber:{
        type: DataTypes.TEXT
    },
    address:{
        type: DataTypes.TEXT
    },
    service:{
        type: DataTypes.TEXT
    },
    problem:{
        type: Sequelize.STRING
    },
    Payment:{
        type : Sequelize.BOOLEAN,
        defaultValue: false
    }
    
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Booking;