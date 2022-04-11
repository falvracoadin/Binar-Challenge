const { Biodata, User } = require("../../../models");

//get all biodata
const getAllBiodata = async (req, res) => {
  try {
    const biodatas = await Biodata.findAll({include : 'user'}); 
    res.status(200).json({
      status: "success",
      message: "Successfully retrive all biodata",
      data: {
        biodatas,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Fail to retrieve all biodata",
      error: error,
    });
  }
};

//get detail biodata
const getBiodata = async (req, res) => {
  try {
    const id = req.params.biodataId;

    const biodata = await Biodata.findOne({
        where : {
            id
        },
        include : 'user'
    });

    if(!biodata) throw `biodata with id ${id} doesnt exist`;

    return res.status(200).json({
      status: "success",
      message: "Successfully retrive data with id : " + id,
      data: {
        biodata,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Fail to retrieve biodata",
      error: error,
    });
  }
};

//create biodata
const createBiodata = async (req, res) => {
  try {
    const { age, address, description, user_game_id } = req.body;
    
    if(isNaN(age)) throw "age must be number"; //validasi umur harus number
    else if(! user_game_id) throw "user_game_id required"; //validasi user_game_id wajib ada

    //validasi usernya ada apa nggak
    const user = await User.findOne({
        where : {
            id : user_game_id
        }
    });
    if(! user) throw `user with id ${user_game_id} doesnt exist`; 

    //validasi biodatanya udah ada apa belum
    const biodata = await Biodata.findOne({
        where : {
            user_game_id
        }
    });
    if(biodata) throw `biodata already exists for user id ${user.username}`;

    const newBiodata = await Biodata.create({
      age,
      address,
      description,
      user_game_id,
    });

    return res.status(201).json({
      status: "success",
      message: "successfully create new biodata",
      data: {
        newBiodata,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Fail to create biodata",
      error: error,
    });
  }
};

//update biodata
const updateBiodata = async (req, res) => {
  try {
    const id = req.params.biodataId;
    const { age, address, description, user_game_id } = req.body;
    
    if(isNaN(age)) throw "age must be number";
    else if(! user_game_id) throw "user_game_id required";  
    
    const user = await User.findOne({
        where : {
            id : user_game_id
        }
    });
    
    if(! user) throw `user with id ${user_game_id} doesnt exist`;

    const biodata = await Biodata.findOne({
        where : {
            id,
            user_game_id
        }
    });

    if(!biodata) throw `biodata for user ${user.username} doesnt exist with biodata id ${id}`;

    //update biodata dengan id = id, dan user_game_id = user_game_id
    const updated = await Biodata.update(
      {
        age,
        address,
        description,
        user_game_id,
      },
      {
        where: {
          id
        },
      }
    );

    if (updated == 0) throw "failed to update biodata";

    return res.status(200).json({
      status: "success",
      message:
        "successfuly updated biodata for user : " +
        user.username,
      data: {
        updated,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Fail to update biodata",
      error,
    });
  }
};

//delete biodata
const deleteBiodata = async (req, res) => {
  try {
    const id = req.params.biodataId;
    const deleted = await Biodata.destroy({
      where: {
        id,
      },
    });

    if (deleted == 0) throw `failed to delete biodata with id ${id}`;

    return res.status(200).json({
      status: "success",
      message: "successfully delete biodata with id : " + id,
      data: {
        deleted,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Fail to delete biodata",
      error,
    });
  }
};

module.exports = {
  getAllBiodata,
  getBiodata,
  createBiodata,
  updateBiodata,
  deleteBiodata,
};
