// Auto confetti every few seconds
setInterval(() => {
    confetti({
      particleCount: 120,
      spread: 100,
      origin: { y: 0.6 }
    });
  }, 3000);
  
  // Confetti firework on click
  document.addEventListener("click", () => {
    confetti({
      particleCount: 150,
      spread: 120,
      origin: {
        x: Math.random(),
        y: Math.random()
      }
    });
  });
  function updateClock() {
    const now = new Date();
    const hrs = String(now.getHours()).padStart(2, '0');
    const mins = String(now.getMinutes()).padStart(2, '0');
    const secs = String(now.getSeconds()).padStart(2, '0');
    document.getElementById("clock").textContent = `${hrs}:${mins}:${secs}`;
  }
  
  setInterval(updateClock, 1000);
  updateClock(); // call immediately
  // Matrix Rain Code
const matrixCanvas = document.getElementById('matrix');
const ctx = matrixCanvas.getContext('2d');

matrixCanvas.width = window.innerWidth;
matrixCanvas.height = window.innerHeight;

const letters = "01💚";
const fontSize = 16;
const columns = matrixCanvas.width / fontSize;
const drops = Array.from({ length: columns }).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
  ctx.fillRect(0, 0, matrixCanvas.width, matrixCanvas.height);

  ctx.fillStyle = '#0F0';
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > matrixCanvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }

    drops[i]++;
  }
  requestAnimationFrame(drawMatrix);
}

drawMatrix();
