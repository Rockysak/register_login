const modal = require('../modals/usermodals')

const reguser = async (req, res) => {

    try {

        const data = req.body;
        console.log(data);
        const mdata = new modal(data);
        const response = await mdata.save();
        res.status(200).json({
            message: "register success",
            data: response

        })

    }

    catch (err) {

        console.log(err);
        res.status(500).json({
            message:"internal server error"
        })
    }
}

module.exports=reguser;