export const forEach = (obj = {}, callback) => {
  Object.keys(obj).forEach((key, index) => {
    return callback(obj[key], key)
  })
}