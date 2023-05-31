import mongoose from "mongoose";
import app from "./app";
import config from "./config/index";


async function run() {
    try {
        await mongoose.connect(config.database_url as string);
        console.log('Database connected..');
        
        app.listen(config.port, () => {
          console.log(`Server is running on PORT ${config.port}`);
          
      })
    } catch (err:any) {
        console.log(err);
    }
}

run()