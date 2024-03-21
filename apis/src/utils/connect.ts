import mongoose from "mongoose";
import config from 'config'


async function connect() {
    const dburl = config.get<string>("dbUrl")

    try {
        await mongoose.connect(dburl)
       console.info("DB is connected")
    } catch (error) {
       console.error("DB not connected", error)
        process.exit(1)
    }
}

export default connect