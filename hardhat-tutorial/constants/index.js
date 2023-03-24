const { ethers, BigNumber } = require("hardhat");

const LINK_TOKEN = "0x326c977e6efc84e512bb9c30f76e30c160ed06fb";
const VRF_COORDINATOR = "0x8C7382F9D8f56b33781fE506E897a4F1e2d17255";
const KEY_HASH =
  "0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4";
const FEE = ethers.utils.parseEther("0.0001");
module.exports = { LINK_TOKEN, VRF_COORDINATOR, KEY_HASH, FEE };