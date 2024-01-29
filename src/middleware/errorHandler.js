import { CustomAPIError } from "../errors/customError.js";

export const errorHandlerMiddleware = (err, req, res, next) => {

    if (err instanceof CustomAPIError) {
        return res
            .status(err.statusCode)
            .json({ msg: `${err.message}` });
    }
    else {
        return res.status(500).json({ msg: err.message })
    }
};
