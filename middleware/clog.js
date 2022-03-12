// Custom middle ware that logs out the type and path for each request to server
// This is a feature for Insommnia so not sure if it will work for Heroku

const clog = (req, res, next) => {
    const fgShine = `\x1b[1m`;
    const fgBlue = `\x1b[36m`;
    const bgBlack = `\x1b[40m`;
    switch (req.method) {
        case 'GET': {
            console.info(`📗 ${fgBlue}${req.method} request to ${req.path}`);
            break;
        }
        case 'POST': {
            console.info(`📘 ${fgBlue}${fgShine}${bgBlack}${req.method} request to ${req.path}`);
            break;
        }
        default:
            console.log(`📙 ${fgBlue}${bgBlack}${req.method} request to ${req.path}`)
    };

    next();
};

exports.clog = clog;