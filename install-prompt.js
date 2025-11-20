let deferredPrompt;
const banner = document.getElementById("install-banner");
const installBtn = document.getElementById("install-btn");

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;
  banner.style.display = "block";
});

installBtn.addEventListener("click", async () => {
  banner.style.display = "none";
  deferredPrompt.prompt();
  const { outcome } = await deferredPrompt.userChoice;
  deferredPrompt = null;
});
