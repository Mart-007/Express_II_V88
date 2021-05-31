exports.DB = () => {
    const DB = connecttion({
        'host': 'localhost',
        'user': 'root',
        'password': 1234,
        'database': 'user',
        'port': 3307,
    });
    DB.connect( (error) => {
        if(error){
            throw(error);
        }
        return DB;
    })
}