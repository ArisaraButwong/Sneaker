const dotenv = require('dotenv');
const SneakersModel = require("../models/SneakersModel");

exports.getAllSneakers = async function (req, res) {
  try {
    const Sneakers = await SneakersModel.find({});
    res.status(200).json({
      status: "success",
      results: Sneakers.length,
      data: { Sneakers },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.getSneakers = async function (req, res) {
  try {
    const SneakersId = parseInt(req.params.id);
    const Sneakers = await SneakersModel.findOne({id: SneakersId});
    if (Sneakers) {
        res.status(200).json({
            status:'success',
            data: {Sneakers}
        });
    } else {
        res.status(404).json({
            status:'fail',
            message: 'NO ID FOUND'
        });
    }
} catch (error) {
res.status(404).json({
    status: 'fail',
    message: error
})};
};

exports.createSneakers = async function (req, res) {
  try {
    let currentId = await SneakersModel.find({}).sort({id: -1}).limit(1).then((lastId) => {
      return lastId[0].id
  });
  currentId += 1;
  const creatNewSneakers = {
      id: currentId,
      ...req.body
  };
  const newSneakers = await SneakersModel.create(creatNewSneakers);
  res.status(201).json({
      status:'success',
      data: {Sneakers: newSneakers}
  });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.updateSneakers = async function (req, res) {
  try {
    const id = req.params.id;
    const { name,generation } = req.body;

    const Sneakers = await SneakersModel.findOneAndUpdate({ id }, { name,generation });
    res.status(200).json({
      status: "success",
      results: Sneakers.length,
      data: { Sneakers },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.deleteSneakers = async function (req, res) {
  try {
    const id = req.params.id;

    const Sneakers = await SneakersModel.findOneAndDelete({ id });
    res.status(200).json({
      status: "success",
      results: Sneakers.length,
      data: { Sneakers },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};