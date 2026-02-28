// Check OP_Wallet
function isWalletInstalled() {
  return typeof window.opnet !== "undefined";
}

// Send Tip
function sendTip() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin(
      "opt1p9h9xzq9e0lcpkenag03ydq2y43y7pgxf7jwuusu2ajchlkaaxf8sseujqh", // testnet address
      1000, // sats
      1,    // feeRate
      { memo: "Tip from OP_NET Tip Bot" } // metadata for popup
    )
    .then(tx => alert("✅ Tip sent! TX: " + tx))
    .catch(err => alert("❌ Error: " + err));
  } else {
    alert("⚠️ OP_Wallet not installed!");
  }
}

// Mint NFT
function mintNFT() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin(
      "opt1p9h9xzq9e0lcpkenag03ydq2y43y7pgxf7jwuusu2ajchlkaaxf8sseujqh",
      2000,
      1,
      { action: "mintNFT", image: "https://opnet.org/sample.png", name: "My OP_NET NFT #001" }
    )
    .then(tx => alert("✅ NFT minted! TX: " + tx))
    .catch(err => alert("❌ Error: " + err));
  }
}

// Deploy Token
function deployToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin(
      "opt1p9h9xzq9e0lcpkenag03ydq2y43y7pgxf7jwuusu2ajchlkaaxf8sseujqh",
      3000,
      1,
      { action: "deployToken", name: "MyToken", symbol: "MTK", supply: 1000000 }
    )
    .then(tx => alert("✅ Token deployed! TX: " + tx))
    .catch(err => alert("❌ Error: " + err));
  }
}

// Buy Token
function buyToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin(
      "opt1p9h9xzq9e0lcpkenag03ydq2y43y7pgxf7jwuusu2ajchlkaaxf8sseujqh",
      1500,
      1,
      { action: "buyToken" }
    )
    .then(tx => alert("✅ Token bought! TX: " + tx))
    .catch(err => alert("❌ Error: " + err));
  }
}

// Sell Token
function sellToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin(
      "opt1p9h9xzq9e0lcpkenag03ydq2y43y7pgxf7jwuusu2ajchlkaaxf8sseujqh",
      1500,
      1,
      { action: "sellToken" }
    )
    .then(tx => alert("✅ Token sold! TX: " + tx))
    .catch(err => alert("❌ Error: " + err));
  }
}

// Claim Token
function claimToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin(
      "opt1p9h9xzq9e0lcpkenag03ydq2y43y7pgxf7jwuusu2ajchlkaaxf8sseujqh",
      1000,
      1,
      { action: "claimToken" }
    )
    .then(tx => alert("✅ Token claimed! TX: " + tx))
    .catch(err => alert("❌ Error: " + err));
  }
}

// Background Music Toggle
let musicOn = true;

function toggleMusic() {
  const player = document.getElementById("ytplayer").contentWindow;
  const eqBox = document.querySelector(".eq");

  if (musicOn) {
    player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    eqBox.classList.add("paused");
    musicOn = false;
  } else {
    player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    eqBox.classList.remove("paused");
    musicOn = true;
  }
}

