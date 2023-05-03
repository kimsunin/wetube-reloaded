import express from "express";

const app = express();

const loggerMiddleWare = (req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next(); //loggerMiddleWare 다음함수를 호출
};

const privateMiddleWare = (req, res, next) => {
  const url = req.url;
  if (url === "/projected") {
    return res.send("허용되지 않음");
  } else {
    console.log("다음함수");
    next();
  }
};

const handleHome = (req, res) => {
  return res.send("홈 응답");
};

app.use(loggerMiddleWare);
app.use(privateMiddleWare);
app.get("/", handleHome); //get:request중의 하나(브라우저가 / url에 get요청을 보냄)

const PORT = 4000;

const handleListening = () =>
  console.log(`✅Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening); //포트4000에 서버를 생성
