document.addEventListener('mousemove', e => {
  const xPosition = e.clientX;
  const yPosition = e.clientY;
  const Width = window.innerWidth;
  const Height = window.innerHeight;
  
  const rValue = document.querySelector('.redValue');
  const gValue = document.querySelector('.greenValue');
  const bValue = document.querySelector('.blueValue');
  
  const r = Math.round((xPosition/Width)*255);
  const b = Math.round((yPosition/Height)*255);
  const g = Math.round((r+b)/2);

  rValue.innerHTML = r;
  gValue.innerHTML = g;
  bValue.innerHTML = b;

  document.body.style.backgroundColor = `rgb(${r},${g},${b})`


})