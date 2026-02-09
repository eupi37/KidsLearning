// ===== STORAGE KEYS =====
const COIN_KEY = "coins";

// ===== GET COINS =====
function getCoins() {
  return parseInt(localStorage.getItem(COIN_KEY)) || 0;
}

// ===== SET COINS =====
function setCoins(value) {
  localStorage.setItem(COIN_KEY, value);
}

// ===== GET LEVEL =====
// 10 coins = 1 level
function getLevel() {
  return Math.floor(getCoins() / 10);
}

// ===== ADD COIN (ONLY ON CORRECT ANSWER) =====
function addCoin() {
  let coins = getCoins();
  coins++;
  setCoins(coins);
  updateUI();
}

// ===== UPDATE UI EVERYWHERE =====
function updateUI() {

  // Home & Game top bar
  const coinCount = document.getElementById("coinCount");
  const levelCount = document.getElementById("levelCount");

  if (coinCount) coinCount.innerText = getCoins();
  if (levelCount) levelCount.innerText = getLevel();

  // Profile page
  const profileCoins = document.getElementById("coinsText");
  const profileLevel = document.getElementById("levelText");

  if (profileCoins) profileCoins.innerText = getCoins();
  if (profileLevel) profileLevel.innerText = getLevel();
}

// ===== AUTO LOAD =====
document.addEventListener("DOMContentLoaded", updateUI);