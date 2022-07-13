const bigInt = require("big-integer");
const fs = require("fs/promises");

const { getKeys, getText, bigIntToStr } = require("./utils");

async function decrypt() {
  const [keyFileName, srcFileName, dstFileName] = process.argv.slice(2);
  const [modulus, key] = await getKeys(keyFileName);

  const text = await getText(srcFileName);
  const textChunks = text.split("\n");
  let codedText = "";

  for (const i in textChunks) {
    const encodedChunk = textChunks[i];
    const originalChunk = bigInt(encodedChunk).modPow(key, modulus);
    codedText += bigIntToStr(originalChunk.value);
  }

  const decodedText = Buffer.from(codedText, "base64").toString("utf-8");

  try {
    await fs.writeFile(dstFileName, decodedText);
  } catch (err) {
    throw err;
  }
}
decrypt();
