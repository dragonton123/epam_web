import CryptoJS from "crypto-js"

const crypty =  "e8am;l"

export const epamEncrypt = data => {
  return CryptoJS.AES.encrypt(JSON.stringify(data), crypty)
}

export const epamDecrypt = cipher => {
  const bytes = CryptoJS.AES.decrypt(cipher.toString(), crypty)
  return JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

}
