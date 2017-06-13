const findInDataBy = (data, attribute, value, first=false) => {
  let results = []

  if (attribute.indexOf('.') > -1) {
    const parts = attribute.split('.')
    results = data.filter(item => `${item[parts[0]][parts[1]]}` === `${value}`)
  } else {
    results = data.filter(item => `${item[attribute]}` === `${value}`)
  }

  return first ? results[0] : results
}

export {
  findInDataBy
}
