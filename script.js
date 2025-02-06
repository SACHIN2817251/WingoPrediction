// Function to start periodic updates for data fetching
const startUpdating = () => {
    setInterval(fetchAndDisplayData, 5000); // Fetch new data every 5 seconds
  };
  
  // Initialization
  window.onload = () => {
    document.getElementById("alert-dialog").style.display = "flex"; // Show alert dialog
    startUpdating();  // Start fetching and displaying data
  };
  
  // Event handlers
  document.getElementById("close-dialog").addEventListener("click", () => {
    document.getElementById("alert-dialog").style.display = "none";  // Hide dialog
    fetchAndDisplayData(); // Update the data immediately after closing the dialog
  });
  
  document.getElementById("redirect-btn").addEventListener("click", () => {
    window.open("https://earninghelper.github.io/Bdg-Win/", "_blank");
  });
  
  document.getElementById("float-btn-1").addEventListener("click", () => {
    window.open("https://earninghelper.github.io/UnlimitedFH/", "_blank");
  });
  
  document.getElementById("float-btn-2").addEventListener("click", () => {
    window.open("https://earninghelper.github.io/Bdg-Win/", "_blank");
  });
  
  document.getElementById("float-btn-3").addEventListener("click", () => {
    window.open("https://mastershack.github.io/PaidHackz/", "_blank");
  });
