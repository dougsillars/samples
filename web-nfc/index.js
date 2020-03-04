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
	  for (var property in ${message.records}) {
	    output += property + ': ' + object[property]+'; ';
	  }
	  
	  log(`> Records: (${message.records})`);
	  log(`> message	: output`);
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
