const Jokes = require('../models/jokes.model')

const getNextJoke = (lastJokeId) => {
    return new Promise((resolve, reject) => {
        try {
            if (Jokes) {
                Jokes.getNextJoke(lastJokeId ,function(err,data) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status: 200,
                            message: 'Get Next Jokes successfully',
                            data: data ,
                         })
                    }
                })
            }
        }
        catch (e) { 
            reject(e)
        }
    })
}

module.exports = {
    getNextJoke
}