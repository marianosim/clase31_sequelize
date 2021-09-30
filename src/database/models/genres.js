module.exports = (sequelize, dataTypes) => {
    let cols =  {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        name: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        ranking: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        active: {
            type: dataTypes.INTEGER,
        }
    };
    let config = {
        tableName: 'genres',
        timestamps: false
    }
    const Genre = sequelize.define("genres", cols, config);
    return Genre;
}