import { CorsOptions } from "cors";
import config from 'config'
const host = config.get<string>("host")
export const corsOptions:CorsOptions = {
    origin: (origin, callback) => {
      if (!origin || origin === host) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200
  }