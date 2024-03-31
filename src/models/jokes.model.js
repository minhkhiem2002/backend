const db = require('../common/connect')

const Jokes = function(joke){
    this.id = joke.id;
    this.content = joke.content;
    this.votes = joke.votes;
}
Jokes.getNextJoke = function(lastJokeId, callback){
    const sqlCount = `SELECT COUNT(*) AS total FROM jokes`;
db.query(sqlCount, (err, countResult) => {
    if (err) {
        return callback(err, null);
    }

    const totalJokes = countResult[0].total;
    if (lastJokeId >= totalJokes) {
        return callback(null, "That's all the jokes for today! Come back another day!");
    }

    const sql = `SELECT * FROM jokes WHERE id > ? ORDER BY id LIMIT 1`;
    db.query(sql, [lastJokeId], (err, result) => {
        if (err) {
            return callback(err, null);
        } else {
            if (result.length > 0) {
                return callback(null, result[0]);
            } else {
                return callback(null, null);
            }
        }
    });
});
}


module.exports = Jokes