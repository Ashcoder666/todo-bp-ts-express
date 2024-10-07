import mongoose, { ConnectOptions } from "mongoose"


const connectDatabase = async() =>{
    try {
       await mongoose.connect("mongodb://localhost:27017/todo",{useNewUrlParser:true} as ConnectOptions)
        mongoose.connection.on("error", (error: string) => {
            console.log("Connect to database failed with error:", error);
            throw new Error(error);
          });
      
          mongoose.connection.on("open", () => {
            console.log("Connect to database successfully");
          });
    } catch (error:any) {
        console.log("Connect to database failed with error:", error);
        throw new Error(error);
    }
}

export default connectDatabase