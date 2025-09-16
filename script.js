// Live date & time
function updateDateTime() {
  const now = new Date();
  document.getElementById("dateTime").textContent = 
    now.toLocaleString("en-US", { 
      month: "short", day: "numeric", 
      hour: "2-digit", minute: "2-digit", second: "2-digit"
    });
}
setInterval(updateDateTime, 1000);
updateDateTime();
