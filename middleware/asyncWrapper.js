export const asyncWrapper = (fun) => {
    return async (req, res, next) => {
        try {
            await fun(req, res, next)
        }
        catch (error) {
            // here we are calling errorHandler middleware
            next(error);
        }
    }

}  