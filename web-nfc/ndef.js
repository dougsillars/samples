ndef = require('ndef');

let ndefText = "01001615722944550094000000AAEADF457F2432B2516F2BC8082A95DFE9";
const encoder = TextEncoder('utf-8');

console.log(ndefMessage);
message = [
    ndef.textRecord("01001615722944550094000000AAEADF457F2432B2516F2BC8082A95DFE9")
];

bytes = ndef.encodeMessage(message);

// do something useful with bytes: write to a tag or send to a peer
  
records = ndef.decodeMessage(bytes);

let myCode = ndef.decodeMessage(ndefMessage);
console.log(myCode);

ndef.text.decodePayload(records[0].payload);

// prints 'hello, world'