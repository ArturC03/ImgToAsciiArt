function createStars(count) {
  const starsContainer = document.getElementById('stars');
  
  for(let i = 0; i < count; i++) {
    let star = document.createElement('div');
    star.className = 'star';
    
    // Random position
    let xy = Math.random() * 100;
    let duration = Math.random() * (1.5 - 0.5) + 0.5; // Duration between 0.5s and 1.5s
    
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 100 + 'vh';
    star.style.animationDuration = `${duration}s, ${duration}s`;
    
    starsContainer.appendChild(star);
  }
}

createStars(150); // Create 150 stars


