const JokesService = require('../services/JokesService')

const getNextJoke = async (req, res) => {
    try {
        console.log('body', req.body)
        const lastJokeId = req.body ? req.body.lastJokeId : 1;
        const response = await JokesService.getNextJoke(lastJokeId);
        if (!response) {
            return res.status(404).json({
                message: 'That\'s all the jokes for today! Come back another day!'
            });
        }
        res.cookie('lastJokeId', response.id, { maxAge: 900000, httpOnly: true });
        return res.status(200).json(response)
    } catch (err) {
        console.log(err)
        return res.status(404).json({
            message: err
        })
    }
}

module.exports = {
    getNextJoke
}