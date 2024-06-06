
const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://gaurav_rdj:gaurav%402002S@firstcluster.66p7ced.mongodb.net/barsaati');

const trendingdScehma=new mongoose.Schema({
    // one:{
    //     type:String,
    //    },
    //    two:{
    //     type : String,
    //    },
    //    three:{
    //     type : String,
    //    },
    //    four : {
    //     type: String,
    //    },
    //    five: {
    //     type :String,
    //    },
    trendingList:{
        type: [String],
    },
       ip_address :{
        type : String
       },

       date:{
        type:Date
       } 
    


})
const trendings=mongoose.model('trendings', trendingdScehma);

module.exports={
    trendings,
}