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

// easy expanation:
// Class: Think of a class as a blueprint for creating a special kind of machine.
// Constructor: This is like the setup function that runs when we create a new machine. It sets up some basic rules:
// direct: Decides if the machine gives the message in the normal order or reversed.
// _alpha: This is the alphabet, all the letters from A to Z.
// _errorMsg: This is the message we show if something goes wrong.


// _converter: This is the secret worker inside the machine that does the actual work of changing the message.
// Check for Errors: If there's no message or keyword, it shows an error.
// Prepare Message and Key: It makes the message and key all uppercase and repeats the key to match the message length.
// Loop Through Message: For each letter in the message:
// If it's a letter (A-Z), it finds the position of the corresponding letter in the key.
// It shifts the alphabet based on the key letter and either encrypts or decrypts the message letter.
// If it's not a letter (like a space or punctuation), it just adds it to the result as is.
// Return Result: It returns the final message, either in normal order or reversed.
// Visual Representation of _converter
// Encrypt and Decrypt Methods
// ;
// encrypt: This method uses the _converter to change the message using the keyword to make it secret.
// decrypt: This method uses the _converter to change the secret message back to the original message using the keyword.

// Message:  H  E  L  L  O  shift these letters message, keyword, false);
// Keyword:  K  E  Y  K  E
// Shift:   +10 +4 +24 +10 +4 counting from letter A
// Result:   R  I  J  V  S
// Message: The text you want to encrypt.
// Keyword: The word used to determine the shift for each letter in the message.
// Alphabet: The set of letters we use for shifting.

// Explanation
// Finding Indexes: The _alphabet string is used to find the index of each letter in the message and the keyword.
// Creating Shifted Alphabets: By slicing and concatenating _alphabet, the code creates a shifted version of the alphabet based on the current letter of the keyword.
// Encrypting/Decrypting: The shifted alphabet is then used to map each letter in the message to its encrypted or decrypted counterpart.


class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
    this._alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this._errorMessage = 'Incorrect arguments!';
  }

  _converter(message, keyword, encrypt = true) {
    if (!message || !keyword) {
      throw new Error(this._errorMessage);
    }
        const msg = message.toUpperCase().split('');
        const key = keyword.repeat(Math.ceil(message.length / keyword.length)).toUpperCase();
        let i = 0;

        const encrMsg = msg.reduce((resultMsg, currentLetter) => {
          if (this._alphabet.includes(currentLetter)) {
            const letterIndexInAlphabet  = this._alphabet.indexOf(key[i++]);
            const newAlphabet = `${this._alphabet.slice(letterIndexInAlphabet)}${this._alphabet.slice(0, letterIndexInAlphabet)}`;
            return encrypt ?
                 `${resultMsg}${newAlphabet[this._alphabet.indexOf(currentLetter)]}` :
                 `${resultMsg}${this._alphabet[newAlphabet.indexOf(currentLetter)]}`;
          }  else {
                return `${resultMsg}${currentLetter}`;
          }
        }, '');
        return this.direct ? encrMsg : encrMsg.split('').reverse().join('');
      }

        encrypt(message, keyword) {
           return this._converter(message, keyword);
        }

        decrypt(message, keyword) {
          return this._converter(message, keyword, false);
        }
    }

module.exports = {
  VigenereCipheringMachine
};
