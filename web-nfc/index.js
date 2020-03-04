scanButton.addEventListener("click", async () => {
  log("User clicked scan button");

  try {
    const reader = new NDEFReader();
    await reader.scan();
    log("> Scan started");

    reader.addEventListener("error", () => {
      log("Argh! Cannot read data from the NFC tag. Try a different one?");
    });

    reader.addEventListener("reading", ({ message, serialNumber }) => {
      log(`> Serial Number: ${serialNumber}`);
      log(`> Records: (${message.records.length})`);
	  var output = '';
	  var str = JSON.stringify(message.records);
	  var str1 = JSON.stringify(message);
	  log(`> Records: `+str);
	  log(`> Records: `+str1);
	  log(`> message	: `+ output);
	  //
	  for (const record of message.records) {
    	  	log("Record type:  " + record.recordType);
    		log("MIME type:    " + record.mediaType);
    		log("Record id:    " + record.id);
    		switch (record.recordType) {
     	   		case "text":
       				// TODO: Read text record with record data, lang, and encoding.
					var text = record.data;
					log("text payload: " + text + " "+record.payload);
       				break;
      	  	  	case "url":
        	  		// TODO: Read URL record with record data.
        	  		break;
      	  	  	default:
        	  		// TODO: Handle other records with record data.
			}
  		}
	  
	  
    });
  } catch (error) {
    log("Argh! " + error);
  }
});

writeButton.addEventListener("click", async () => {
  log("User clicked write button");

  try {
    const writer = new NDEFWriter();
    await writer.write("Hello world!");
    log("> Message written");
  } catch (error) {
    log("Argh! " + error);
  }
});
