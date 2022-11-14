import { Sequelize } from "sequelize";
import db from "../config/Database.js";
 
const { DataTypes } = Sequelize;
 
const Users = db.define('users',{
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name:{
        type: DataTypes.STRING

    },
    email:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    password:{
        type: DataTypes.STRING
    },
    phoneNumber:{
        type: DataTypes.TEXT
    },
    address:{
        type: DataTypes.TEXT
    },
    userName:{
        type: Sequelize.STRING,
        primaryKey: true
    },
    userType:{
        type: Sequelize.STRING,
    },
    refresh_token:{
        type: DataTypes.TEXT
    }
},{
    freezeTableName:true
});
 
(async () => {
    await db.sync();
})();
 
export default Users;