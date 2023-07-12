const buttons = document.querySelectorAll('.group-button')

function toggleActive() {
  let buttonActive = document.querySelector('.panel.active')
  if (buttonActive) {
    buttonActive.classList.remove('active')
  } else {
    this.classList.toggle('active')
  }
}

buttons.forEach(panel => panel.addEventListener('click', toggleActive))