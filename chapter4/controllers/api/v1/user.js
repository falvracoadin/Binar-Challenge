const {User} = require('../../../models');

const getAllUser = async (req, res) => {
    try {
        const users = await User.findAll({
            include : ['biodata', 'history']
        });

        return res.status(200).json({
            status : 'success',
            message : 'successfully get all user data',
            data : {
                users
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Fail to get all user",
            error,
          });
    }
}

const getUser = async (req, res) => {
    try {
        const id = req.params.userId;

        const user = await User.findOne({
            where : {
                id
            },
            include : ['biodata', 'history']
        });

        if(! user) throw `user with id ${id} doesnt exist`;

        return res.status(200).json({
            status : 'success',
            message : 'Successfully retrive user with id '+id,
            data : {
                user
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Fail to get user",
            error,
          });
    }
}

const createUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        let user = await User.findOne({
            where : {
                username
            }
        });
        if(user) throw `username ${username} have been used!`;

        user = await User.create({
            username : username,
            password : password
        });

        return res.status(201).json({
            status : 'success',
            message : 'successfully create user',
            data : {
                user
            }
        });
        
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Fail to create user",
            error,
          });
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {username, password} = req.body;

        let user = await User.findOne({
            where : {id}
        });

        if(! user) throw `user not found for user id ${id}`;

        user = await User.findOne({
            where : {
                username
            }
        });

        if(user && user.id != id) throw  `username ${username} have been used`;

        const updated = await User.update({
            username, password
        }, {
            where : {
                id
            }
        });

        if(! updated) throw `failed to update user`;

        return res.status(200).json({
            status : 'success',
            message : 'successfulyy update user',
            data : {
                updated
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Fail to update user",
            error,
          });
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const deleted  = await User.destroy({
            where : {
                id
            }
        });

        if(! deleted) throw `user not found for id : ${id}`;

        return res.status(200).json({
            status : 'success',
            message : 'successfully delete user',
            data : {
                deleted
            }
        });
    } catch (error) {
        res.status(500).json({
            status: "fail",
            message: "Fail to delete user",
            error,
          });
    }
}

module.exports = {
    getAllUser,
    getUser,
    createUser,
    updateUser,
    deleteUser
}