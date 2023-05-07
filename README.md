package.json을 통해 index.js를 실행시킴
babel:nodejs가 읽지 못하는 최신 자바스크립트를 안정적인 자바스크립트로 변환해줌

MiddleWare
const methodMiddleWare = (req, res, next) => {
console.log(`method:${req.method}`);
next(); <!-- next():methodMiddleware 다음함수를 회출 -->

};

const handleHome = (req, res) => {
return res.send("Home");
};

app.use(routerMiddleWare, methodMiddleWare);

const MiddleWare = morgan("dev") <!-- morgan:이미 만들어진 midleware >> 직접 만드는 것보다 좀더 세부적이고 편리함 -->

app.use(MiddleWare)

Router
const userRouter = express.Router();

const handdleEditUser = (req, res) => {
return res.send("Edit User)
}

userRouter.get("/edit", handdleEditUser)<!-- /users중에서 /edit으로 get요청을 받으면 haddleEditUser을 return해줌 -->

app.use("/users", userRouter)<!-- /users로 시작하는 url들은 userRouter에서 관리 -->
