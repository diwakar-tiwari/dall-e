import mongoose from "mongoose";

const connectDB = (url) =>{
    mongoose.set('strictQuery', true) //this will help when work with search

    mongoose.connect(url)
        .then(()=> console.log('MongoDB connected'))
        .catch((err)=> console.log(err));
}

export default connectDB;
