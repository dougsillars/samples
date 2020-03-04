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
