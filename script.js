// Check OP_Wallet
function isWalletInstalled() {
  return typeof window.opnet !== "undefined";
}

// Send Tip
function sendTip() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin("recipientAddressHere", 1000, 1)
      .then(tx => alert("Tip sent! TX: " + tx))
      .catch(err => alert("Error: " + err));
  } else {
    alert("OP_Wallet not installed!");
  }
}

// Mint NFT
function mintNFT() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin("contractAddressHere", 2000, 1, { action: "mintNFT", image: "https://opnet.org/sample.png" })
      .then(tx => alert("NFT minted! TX: " + tx))
      .catch(err => alert("Error: " + err));
  }
}

// Deploy Token
function deployToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin("contractAddressHere", 3000, 1, { action: "deployToken", name: "MyToken", symbol: "MTK", supply: 1000000 })
      .then(tx => alert("Token deployed! TX: " + tx))
      .catch(err => alert("Error: " + err));
  }
}

// Buy Token
function buyToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin("contractAddressHere", 1500, 1, { action: "buyToken" })
      .then(tx => alert("Token bought! TX: " + tx))
      .catch(err => alert("Error: " + err));
  }
}

// Sell Token
function sellToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin("contractAddressHere", 1500, 1, { action: "sellToken" })
      .then(tx => alert("Token sold! TX: " + tx))
      .catch(err => alert("Error: " + err));
  }
}

// Claim Token
function claimToken() {
  if (isWalletInstalled()) {
    window.opnet.sendBitcoin("contractAddressHere", 1000, 1, { action: "claimToken" })
      .then(tx => alert("Token claimed! TX: " + tx))
      .catch(err => alert("Error: " + err));
  }
}

// Background Music Toggle
let musicOn = true;
function toggleMusic() {
  const player = document.getElementById("ytplayer").contentWindow;
  if (musicOn) {
    player.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
    musicOn = false;
  } else {
    player.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    musicOn = true;
  }
}
