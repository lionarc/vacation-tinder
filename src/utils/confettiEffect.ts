import confetti from 'canvas-confetti';

export const firePalmTreeConfetti = (buttonElement: HTMLElement | null) => {
  if (!buttonElement) return;
  
  const rect = buttonElement.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;
  
  // Palm tree colors - green for leaves, brown for trunk
  const palmLeafColors = ["#00873D", "#25A244", "#008F39", "#00AA55"];
  const trunkColors = ["#8B4513", "#A0522D", "#6B4423"];
  
  // First wave - palm tree leaves (green)
  confetti({
    particleCount: 80,
    spread: 100,
    origin: { x, y },
    colors: palmLeafColors,
    shapes: ["circle"],
    gravity: 0.7,
    scalar: 1.5,
    drift: 0,
    ticks: 200,
  });
  
  // Second wave - palm tree trunks (brown)
  setTimeout(() => {
    confetti({
      particleCount: 30,
      angle: 90,
      spread: 50,
      origin: { x, y },
      colors: trunkColors,
      shapes: ["square"],
      gravity: 1,
      drift: 0,
      ticks: 250,
    });
  }, 100);
  
  // Third wave - more palm leaves with different angles
  setTimeout(() => {
    confetti({
      particleCount: 60,
      angle: 120,
      spread: 70,
      origin: { x, y },
      colors: palmLeafColors,
      shapes: ["circle"],
      gravity: 0.8,
      scalar: 1.2,
      ticks: 150,
    });
  }, 200);
};
