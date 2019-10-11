const asyncHandler = fn => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(err => {
    console.error(`Error: ${err.message}`)
    res.status(400).json({
      type: 'badRequest',
      code: 400,
      errors: JSON.parse(err.message),
    })
  })
}

export default asyncHandler
