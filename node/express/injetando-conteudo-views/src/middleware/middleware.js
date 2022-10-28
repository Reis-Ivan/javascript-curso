exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Valor qualquer para variável local.'
    next();
};

exports.outroMiddleware = (req, res, next) => {
    next();
};
