const findInDataBy = (data, attribute, value, first=false) => {
  const results = data.filter(item => item[attribute] === value)
  return first ? results[0] : results
}

export {
  findInDataBy
}
