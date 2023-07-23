const validator =
  (schema, type = 'body') =>
  (req, res, next) => {
    try {
      const { error } = schema.validate(req[type]);
      if (error) {
        const errorMessages = error.details.map((err) => err.message);
        return res
          .status(400)
          .json({ isSuccess: false, error: errorMessages.join(', ') });
      }

      next();
    } catch (error) {
      console.log('validator() - error: ', error);
      res.status(500).json({ isSuccess: false, error: 'Something went wrong' });
    }
  };

module.exports = validator;
