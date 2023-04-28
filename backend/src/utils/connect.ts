import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect() {
  const dbUrl = config.get<string>("dbUrl");
  try {
    await mongoose.connect(dbUrl, <object>{
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info("DB connected");
  } catch (error) {
    logger.error("Could not connect to DB");
    process.exit(1);
  }
  return;
}

export default connect;
