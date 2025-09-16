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
// Live date & time (top bar)
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

// Modal clock
function updateCurrentTime() {
  const now = new Date();
  document.getElementById("currentTime").textContent = 
    "Current time: " + now.toLocaleTimeString();
}
setInterval(updateCurrentTime, 1000);
updateCurrentTime();

// Modal controls
const modal = document.getElementById("passModal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", () => modal.classList.add("show"));
closeBtn.addEventListener("click", () => modal.classList.remove("show"));
