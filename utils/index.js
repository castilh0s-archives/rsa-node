const fs = require("fs/promises");

const bigIntToStr = (n) => {
  const big256 = BigInt("256");
  const big0 = BigInt("0");
  let strValue = "";

  if (n === big0) return "0";

  while (n > big0) {
    let quot = n / big256;
    let rem = n % big256;

    let charCode = Number(rem);
    strValue += String.fromCharCode(charCode);

    n = quot;
  }

  return strValue;
};

const stringToBigInt = (str) => {
  const big256 = BigInt("256");
  let result = BigInt("0");

  for (let i = str.length - 1; i >= 0; i--) {
    result = result * big256;
    result = result + BigInt(str.charCodeAt(i));
  }

  return result;
};

const getBlockSize = (n) => {
  const big1 = BigInt("1");
  const big2 = BigInt("2");

  let temp = n - big1;

  let blockSize = 0;
  while (temp > big1) {
    temp = temp / big2;
    blockSize++;
  }

  return Math.floor(blockSize / 8);
};

const getChunks = (str, size) => {
  const chunks = [];

  for (let i = 0; i < str.length; i += size) {
    chunks.push(str.substr(i, size));
  }

  return chunks;
};

const getKeys = async (file) => {
  const [modulus, key] = (await getText(file)).split("\n");

  return [BigInt(modulus), BigInt(key)];
};

const getText = async (file) => {
  try {
    return fs.readFile(file, { encoding: "utf-8" });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  bigIntToStr,
  stringToBigInt,
  getBlockSize,
  getChunks,
  getKeys,
  getText,
};
