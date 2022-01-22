export const characterSelectionOpitions = (req, res, next) => {
    const { orderField, direction, gender } = req.query;

    const choices = {
        select: {
            id: true,
            name: true,
            height: true,
            gender: true,
          },
    };
    if (orderField) {
        choices.orderBy = { [orderField]: direction ? direction : 'asc' }
    };

    if (gender) {
        choices.where = { gender }
    }

    req.query.choices = choices;
    return next();
};
