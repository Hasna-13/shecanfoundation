// dashboard.js
const internName = localStorage.getItem('internName') || "Intern";

// Simulated backend data
const data = {
  referralCode: internName.toLowerCase().replace(/\s+/g, '') + '2025',
  donations: 1800,
  rewards: ["Certificate Unlocked", "Amazon Gift Card", "Special Badge"]
};

// Fill values in page
document.getElementById('internName').innerText = internName;
document.getElementById('referralCode').innerText = data.referralCode;
document.getElementById('donations').innerText = data.donations;

const rewardsList = document.getElementById('rewardsList');
data.rewards.forEach(reward => {
  const li = document.createElement('li');
  li.textContent = reward;
  rewardsList.appendChild(li);
});
