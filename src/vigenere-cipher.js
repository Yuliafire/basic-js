const { NotImplementedError } = require('../extensions/index.js');

/**

 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
// Encryption and decryption are processes used to secure information
// by transforming it into a format that is unreadable without a specific key or method.
//encrypting and decrypting method for texts using keyword!!!
// Use Case: Military or diplomatic
// Use Case: Storing personal information, financial records, or medical records securely.
// Use Case: User login systems where passwords need to be securely stored and transmitted.
// Digital Rights Management (DRM):
// Example: Encrypting digital content such as e-books, music, or videos to prevent unauthorized copying and distribution.
// Use Case: Online media services that need to protect their content from piracy.
// Email Encryption:


class VigenereCipheringMachine {
  //set the machine in the direct mode:
  constructor(isDirect = true) {
     this.isDirect = isDirect;
  }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments');
      message = message.toUpperCase();
      key = key.toUpperCase();
      let result = '';
      let keyIndex = 0;

      //Calculate Encrypted Character Code:
      //Unicode values are numerical representations of characters, 
      //making it easy to perform arithmetic operations
      // iterate each character in the message
      for (let i = 0; i < message.length; i++) {
        if (message[i] >= 'A' && message[i] <= 'Z') {
           const messageCharCode = message.charCodeAt(i);
           // gets the Unicode value of the character at the current keyIndex in the key.
           const keyCharCode = key.charCodeAt(keyIndex % key.length);
           const encryptedCharCode = ((messageCharCode - 65 + keyCharCode - 65) % 26) + 65;
           result += String.fromCharCode(encryptedCharCode);
           keyIndex++;
        } else {
             result += message[i];
        }
      }
      return this.isDirect ? result : result.split('').reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments');
    message = message.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    let keyIndex = 0;

    


  }
}

module.exports = {
  VigenereCipheringMachine
};
