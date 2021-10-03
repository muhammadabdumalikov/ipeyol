import pkg from "sequelize";
import { Sequelize } from "sequelize";
import Models from "../models/Models.js";
import { request } from "express";

export async function postgres() {
    const sequelize = new Sequelize(process.env.DB_STRING, {
        logging: false,
        define: {
            freezeTableName: true
        }
    }), 

    try {
        
    } catch (error) {
        console.log(error)
    }
}
