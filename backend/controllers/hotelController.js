const hotelS = require("../models/Hotel")

const {createError} = require("../utils/error")

const createhotel = async(req,res)=>{

    try{
        const {name,type,city,adress,distance,title,desc,cheapestPrice} = req.body
        const hotel= new hotelS({
            name:name,
            type:type,
            city:city,
            adress:adress,
            distance:distance,
            title:title,
            desc:desc,
            cheapestPrice:cheapestPrice
            
        })


        await hotel.save()
        return res.json({message:"hotel ajouter",hotel})
    }catch(err){
        res.json(err)
    }

}



const deletehotel = async(req,res)=>{

    try{
    
        await hotelS.findByIdAndDelete(req.params.id)
        res.status(200).json("hotel has been deleted")

    }catch(err){
        res.json(err)
    }

}

const getAllHotels  = async(req,res,next)=>{
    
    
    try{
        const {min,max, ...others} = req.query
    const hotels = await hotelS.find({...others,cheapestPrice:{$gt:min|1,$lt:max||999}
    }).limit(req.query.limit)
    res.status(200).json(hotels)
    
    }catch(err){

        next(err)

    }   

}

const countBycity  = async(req,res,next)=>{

    const cities = req.query.cities.split(",")
    
    try{
        const list =await  Promise.all(cities.map(city=>{
            return hotelS.countDocuments({city:city})
        })) 

        res.json(list)
    }catch(err){

        next(err)

    }   

}

const countByType = async (req, res, next) => {
    const types=["hotel","apartments","resorts","villa","cabins"]
      try{

    const list =await Promise.all(types.map(type=>{
        return hotelS.countDocuments({
            type:type})
      })
        
    )
        res.json(list)
   }catch(err){
    next(err)
   }
  };

const getHotelById = async(req,res)=>{


    try{
     const hotel = await hotelS.findById(req.params.id)
     res.status(200).json(hotel)
    }catch(err){    
    res.json(err)  
    }

}

const updateHotel = async(req,res,next)=>{
   try{
    const updatedHotel = await hotelS.findByIdAndUpdate(req.params.id,
        {$set:req.body},
        {new:true})
    res.json({updatedHotel})
    }catch(err){
        next(err)
    }

}





module.exports = {
createhotel,deletehotel,getAllHotels,getHotelById,updateHotel,countBycity,countByType
}