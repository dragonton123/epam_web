import * as crypto from '../static/variable'

export const loadStage = () => {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    console.log(crypto.epamDecrypt(serializedState))
    return crypto.epamDecrypt(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = crypto.epamEncrypt(state)
    localStorage.setItem('state', serializedState)
  } catch (error) {
    // ignore err
  }
}