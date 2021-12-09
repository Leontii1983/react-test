const Data = require('../models/dataModel');


// const APIFeatures = require('../utils/apiFeatures');


exports.getAllDatas = async (req, res) => {

 try {
   
   //EXECUTE QUERY
  //  const features = new APIFeatures(Data.find(), req.query)
  //  .filter()
  //  .sort()
  //  .limitFields()
  //  .pagination();

   const datas = await Data.find(req.query);

  //SEND RESPONSE
  res.status(200).json({
    status: 'success',
    result: datas.length,
    data: {
      datas
    }
  });
 } catch(err) {
   res.status(404).json({
     status: 'fail',
     message: err
   })
 }
};

exports.getDataById = async (req, res) => {
  
  try {
    const data = await Data.findById(req.params.id)
    res.status(200).json({
    status: 'success',
    data: {
      data
    }
  });
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
    })
  }

  
};

exports.createData = async (req, res) => {
  try {
    const newData = await Data.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      soupes: newData
    }
  });

  } catch(err) {
    res.status(400).json({
      status: 'fail',
      message: 'Invalid data sent!'
    })
  }

};

exports.updateData = async (req, res) => {
  try {
    const soupe = await Data.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    res.status(200).json({
      status: 'success',
      data: {
        soupe
      }
    })

  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
      
    })
  }

  
};

exports.deleteData = async (req, res) => {
  try {
    const data = await Data.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: 'success',
      data: null
    })
  } catch(err) {
    res.status(404).json({
      status: 'fail',
      message: err
      
    })

  }
   
};

