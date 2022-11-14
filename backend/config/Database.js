import { Sequelize } from "sequelize";
 
const db = new Sequelize('utilityservicesystem', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;