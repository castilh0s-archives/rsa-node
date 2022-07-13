const bigInt = require("big-integer");
const fs = require("fs/promises");

const {
  stringToBigInt,
  getBlockSize,
  getChunks,
  getKeys,
  getText,
} = require("./utils");

async function encrypt() {
  const [keyFileName, srcFileName, dstFileName] = process.argv.slice(2);
  const [modulus, key] = await getKeys(keyFileName);
  const text = await getText(srcFileName);

  const chunkSize = getBlockSize(modulus);
  const codedText = Buffer.from(text, "utf-8").toString("base64");
  const chunks = getChunks(codedText, chunkSize);
  const encodedChunks = [];

  for (const i in chunks) {
    let chunk = chunks[i];
    let originalChunk = stringToBigInt(chunk);
    let encodedChunk = bigInt(originalChunk).modPow(key, modulus);

    encodedChunks.push(encodedChunk.toString());
  }

  try {
    await fs.writeFile(dstFileName, encodedChunks.join("\n"));
  } catch (err) {
    throw err;
  }
}
encrypt();
