window.addEventListener('load', function() {
  let button = document.querySelector('.click');
  button.addEventListener('mouseover', function() {
    this.style.backgroundColor = '#c0c0c0'
  });
  button.addEventListener('mouseout', function() {
    this.style.backgroundColor = '#fff'
  });
})