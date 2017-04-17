var socket = require('socket.io-client'); 
class Decoder {
 constructor() {
   this.hash = "";
   this.key = 2049035;
   this.buffer = new Buffer(this.hash.toString()); //The hack buffer
  }
  connect() {
    this.ws = new io(ip); //Agar switched to socket.io 
    this.ws.on('hashKey', function(a) {
       this.hash = a.kyt * 5 | 7 & 23
    }.bind(this))
   }
}
