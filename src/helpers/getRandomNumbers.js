export const getRandomNumbers = (min, max) => {
  // Create byte array and fill with 1 random number
  const byteArray = new Uint8Array(1)
  window.crypto.getRandomValues(byteArray)

  // Convert to decimal
  let randomNum = "0." + byteArray[0].toString()

  // Get number in range
  randomNum = Math.floor(randomNum * (max - 0)) + min

  return randomNum
}
