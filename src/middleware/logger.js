const logger = store => next => action => {
  console.log('Action:', action)
  const value = next(action)
  console.log('Latest state: ', store.getState())
  return value
}

export default logger
