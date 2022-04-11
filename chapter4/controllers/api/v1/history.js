const { History, User } = require("../../../models");

const getAllHistory = async (req, res) => {
  try {
    const histories = await History.findAll({ include: "user" });

    return res.status(200).json({
      status: "success",
      data: {
        histories,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      error,
    });
  }
};

const getHistory = async(req, res) => {
    try {
        const id = req.params.id;
        
        const history = await History.findOne({
            where : {id},
            include : "user"
        });

        if(! history) throw 'no history with id ' + id;

        return res.status(200).json({
            status : 'success',
            data : {
                history
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: error,
          });
    }
}

const createHistory = async (req, res) => {
    try {
        const {score, user_game_id} = req.body;

        const user = await User.findOne({
            where : {
                id : user_game_id
            }
        });

        if(! user) throw `User with id ${user_game_id} doesnt exist`;

        history = await History.create({
            score, user_game_id
        });
        return res.status(200).json({
            status : 'success',
            data : {
                history
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error,
          });
    }
}

const updateHistory = async(req, res) => {
    try {
        const id = req.params.id;
        const {score, user_game_id} = req.body;

        const user = await User.findOne({
            where : {
                id : user_game_id
            }
        });

        if(! user) throw `User with id ${user_game_id} doesnt exist`;

        const updated = await History.update({
            score
        }, {
            where : {
                id, 
                user_game_id
            }
        });

        if(updated == 0) throw `failed to update history with id ${id} for user ${user.username}`;

        return res.status(200).json({
            status : "success",
            data : {
                updated
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: error,
          });
    }
}

const deleteHistory = async (req, res) => {
    try {
        const id = req.params.id;
        const deleted = await History.destroy({
            where : {
                id 
            }
        });

        if(deleted == 0) throw `failed to delete history with id ${id}`;

        return res.status(200).json({
            status : 'success',
            data : {
                deleted
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            error: error,
          });
    }
}

module.exports = {
    getAllHistory,
    getHistory,
    createHistory,
    deleteHistory,
    updateHistory
}