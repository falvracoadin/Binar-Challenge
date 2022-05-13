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
            error : error.message,
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

        if(! user) throw Error(`user with id ${id} doesnt exist`);

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
            error: error.message,
          });
    }
}

const createUser = async (req, res) => {
    try {
        const {username, password} = req.body;

        if(!username || !password) 
            return res.status(400).json({
                status: 'fail',
                message: 'fail to create user',
                error : "username and password required!"
            });

        let user = await User.findOne({
            where : {
                username
            }
        });
        if(user) throw Error(`username ${username} have been used!`);

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
            error : error.message,
          });
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id;
        const {username, password} = req.body;

        if(!username){
            return res.status(400).json({
                status: "fail",
                message: "failed to update User",
                error: "username is required"
            });
        }

        let user = await User.findOne({
            where : {id}
        });

        if(! user){
            return res.status(404).json({
                status : "fail",
                message: "failed to update user",
                error: "user not found"
            });
        }

        user = await User.findOne({
            where : {
                username
            }
        });

        if(user && user.id != id) throw  Error(`username ${username} have been used`);

        const updated = await User.update({
            username, password
        }, {
            where : {
                id
            }
        });

        if(! updated) throw Error(`failed to update user`);

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
            error : error.message,
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

        if(! deleted){
            return res.status(404).json({
                status: "fail",
                message: "fail to delete user",
                error: "user not found"
            });
        }

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
            error : error.message,
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