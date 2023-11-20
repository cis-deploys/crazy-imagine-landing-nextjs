export const getRandomNumbers = (min, max) => {

  const byteArray = new Uint8Array(1)
  window.crypto.getRandomValues(byteArray)

  let randomNum = "0." + byteArray[0].toString()

  randomNum = Math.floor(randomNum * (max - 0)) + min

  return randomNum
}
