import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x09c6E14f40bB3D38D2F88802D2cbeB9162428a16",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Queen",
        description: "This NFT will give you access to chessDAO!",
        image: readFileSync("scripts/assets/queen.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()