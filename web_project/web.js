function updateTime() {
    const now = new Date();
    const options = { timeZone: 'Africa/Nairobi', hour12: true, hour: 'numeric', minute: 'numeric', second: 'numeric' };
    const timeString = now.toLocaleString('en-US', options);
    document.getElementById('time').textContent = timeString;
  }
  
  // Update the time every second
  setInterval(updateTime, 1000);
  
  // Initial update
  updateTime();
  