export default class Models {
    static async UserModel(sequelize, Sequelize) {
        return sequelize.define("users", {
            user_id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            full_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                validate: {
                    isAlpha: true,
                },
            },
            user_phone: {
                type: Sequelize.DataTypes.STRING(13),
                is: /^9989[012345789][0-9]{7}$/,
                allowNull: false,
                unique: true,
            },
            user_role: {
                type: Sequelize.DataTypes.ENUM,
                values: ["admin", "user"],
                defaultValue: "user",
            },
            user_attempts: {
                type: Sequelize.DataTypes.SMALLINT,
                allowNull: false,
                defaultValue: 0,
            },
        });
    }

    static async SessionModel(sequelize, Sequelize) {
        return sequelize.define("sessions", {
            session_id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            session_inet: {
                type: Sequelize.DataTypes.INET,
                allowNull: false,
            },
            session_user_agent: {
                type: Sequelize.DataTypes.STRING(128),
                allowNull: false,
            },
        });
    }

    static async BanModel(sequelize, Sequelize) {
        return sequelize.define("bans", {
            ban_id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            expireDate: {
                type: Sequelize.DataTypes.DATE,
                allowNull: false,
            },
        });
    }

    static async AttemptsModel(sequelize, Sequelize) {
        return sequelize.define("attempts", {
            attempt_id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.UUIDV4,
            },
            user_code: {
                type: Sequelize.DataTypes.STRING(6),
                allowNull: true,
            },
            user_attempts: {
                type: Sequelize.DataTypes.SMALLINT,
                allowNull: false,
                defaultValue: 0,
            },
            isExpired: {
                type: Sequelize.DataTypes.BOOLEAN,
                defaultValue: false,
            },
        });
    }

    static async Categories(sequelize, Sequelize) {
        return sequelize.define("categories", {
            category_id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            uz_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            ru_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            en_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            url: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            icon_url: {
                type: Sequelize.DataTypes.STRING(128),
                allowNull: false,
            },
            photo: {
                type: Sequelize.DataTypes.STRING(128),
                allowNull: false,
            },
        });
    }

    static async Products(sequelize, Sequelize) {
        return sequelize.define("products", {
            product_id: {
                type: Sequelize.DataTypes.UUID,
                primaryKey: true,
                defaultValue: Sequelize.DataTypes.UUIDV4,
            },
            link: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            uz_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            ru_name: {
                type: Sequelize.DataTypes.STRING,
                allowNull: false,
            },
            photos: {
                type: Sequelize.DataTypes.ARRAY(Sequelize.DataTypes.STRING),
                allowNull: false,
            },
            price: {
                type: Sequelize.DataTypes.FLOAT,
                allowNull: false,
            },
            sale_price: {
                type: Sequelize.DataTypes.FLOAT,
                allowNull: false,
            },
            in_sale: {
                type: Sequelize.DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            uz_description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false,
            },
            ru_description: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false,
            },
            options: {
                type: Sequelize.DataTypes.TEXT,
                allowNull: false,
            },
        });
    }

}
