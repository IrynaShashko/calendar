import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import swaggerUi from "swagger-ui-express";
import  {swaggerDocument}  from "./docs/swaggerDocs.js";

import authRoutes from "./routes/authRoutes.js";
import taskRoutes from "./routes/taskRoutes.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin:
      process.env.NODE_ENV === "production"
        ? `${process.env.CLIENT_URL}`
        : "http://localhost:3000",
    credentials: true,
  }),
);

app.use(cookieParser());

app.use(express.json());

const swaggerOptions = {
  customCssUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui.css",
  customJs: [
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui-bundle.js",
    "https://cdnjs.cloudflare.com/ajax/libs/swagger-ui/4.18.3/swagger-ui-standalone-preset.js",
  ],
};

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(process.env.MONGO_URI!);
    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected");
  } catch (err) {
    console.error("DB Error:", err);
  }
};

app.use(async (req, res, next) => {
  await connectDB();
  next();
});

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, swaggerOptions),
);

app.use("/api/auth", authRoutes);
app.use("/api/tasks", taskRoutes);

if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(
      `📄 API Documentation available at http://localhost:${PORT}/api-docs`,
    );
  });
}

export default app;
