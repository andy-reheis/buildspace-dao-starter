import sdk from "./1-initialize-sdk.js";

const app = sdk.getAppModule("0x27437798DEd25455E5ccC6C10f39A76e3D142d2A");

(async () => {
  try {
    // Deploy a standard ERC-20 contract.
    const tokenModule = await app.deployTokenModule({
      name: "chessDAO  Token",
      symbol: "CHESS",
    });
    console.log(
      "✅ Successfully deployed token module, address:",
      tokenModule.address,
    );
  } catch (error) {
    console.error("failed to deploy token module", error);
  }
})();