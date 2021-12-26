import { ethers } from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0x27437798DEd25455E5ccC6C10f39A76e3D142d2A");

(async () => {
  try {
    const bundleDropModule = await app.deployBundleDropModule({
      // The collection's name, ex. CryptoPunks
      name: "chessDAO Membership",
      // A description for the collection.
      description: "A DAO for fans of CHESS.",
      // The image for the collection that will show up on OpenSea.
      image: readFileSync("scripts/assets/chess.jpg"),
      // We're planning on not charging people for the drop, so we'll pass in the 0x0 address
      primarySaleRecipientAddress: ethers.constants.AddressZero,
    });
    
    console.log(
      "✅ Successfully deployed bundleDrop module, address:",
      bundleDropModule.address,
    );
    console.log(
      "✅ bundleDrop metadata:",
      await bundleDropModule.getMetadata(),
    );
  } catch (error) {
    console.log("failed to deploy bundleDrop module", error);
  }
})()