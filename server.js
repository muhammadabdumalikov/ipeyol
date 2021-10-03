//Get npm packages
import Express from "express";
import DotEnv from "dotenv";
import Path from "path";
import routes from "./src/routes/routes.js";
import { ErrorHandler, handleError } from "./src/helpers/errorHandler.js";

//Get own env-variables
DotEnv.config({
    path: Path.join(Path.resolve(), ".env"),
});

//Declare variables
const PORT = process.env.PORT || 3000;

//Server function
async function server() {
    try {
        // let db = postgres();

        //Run server
        const app = Express();
        app.listen(PORT, () => console.log(`Server is running at ${PORT}`));

        //Run middlewares
        app.use(Express.urlencoded({ extended: true }));
        app.use(Express.json());

        //Custom error-handler
        app.use((req, res, next) => {
            res.error = ErrorHandler;
            // req.db = db;
            next();
        });

        await routes(app);

        await app.use((req, res, next) => {
            next(new ErrorHandler(404, "Not Found"));
        });

        //Error handler section
        await app.use((err, req, res, next) => {
            handleError(err, res);
        });
    } catch (error) {
        console.log(error);
    }
}

server().then();
