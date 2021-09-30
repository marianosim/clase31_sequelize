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
        title: {
            type: dataTypes.STRING(500),
            allowNull: false
        },
        rating: {
            type: dataTypes.DECIMAL(3,1),
            allowNull: false
        },
        awards: {
            type: dataTypes.INTEGER(10),
        },
        release_date: {
            type: dataTypes.DATE,
            allowNull: false
        },
        length: {
            type: dataTypes.INTEGER(10),
        },
        genre_id: {
        type: dataTypes.INTEGER(10),
        }
        
    };
    let config = {
        tableName: 'movies',
        timestamps: false
    }
    const Movie = sequelize.define("movies", cols, config);
    return Movie;
}