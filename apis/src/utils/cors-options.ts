import { CorsOptions } from "cors";

export const corsOptions:CorsOptions = {
    origin: (origin, callback) => {
      if (!origin || origin === 'http://localhost:5173') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200
  }