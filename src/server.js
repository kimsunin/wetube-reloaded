import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";

const app = express();

const middleWare = morgan("dev");
app.use(middleWare);

app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/", globalRouter);

const PORT = 4000;

const handleListening = () =>
  console.log(`✅Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); //포트4000에 서버를 생성
