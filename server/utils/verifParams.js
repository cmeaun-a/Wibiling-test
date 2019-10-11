/* eslint-disable no-restricted-globals */
/* eslint-disable radix */
const verifParams = req => {
  const { protocol, count, url } = req.query
  const errors = []
  if (protocol !== 'http' && protocol !== 'https')
    errors.push({ param: 'protocol', message: 'Can only accept http or https' })
  if ((count && (count > 30 || count < 1)) || isNaN(parseInt(count)))
    errors.push({ param: 'count', message: 'Must be a number, min 1, max 30' })
  if (url && url !== 'true' && url !== 'false')
    errors.push({ param: 'url', message: 'Must be true or false' })
  if (errors.length) throw new Error(JSON.stringify(errors))
}

export default verifParams
