window.addEventListener('load', () => {
  var now = new Date();
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())

  /* remove second/millisecond if needed - credit ref. https://stackoverflow.com/questions/24468518/html5-input-datetime-local-default-value-of-today-and-current-time#comment112871765_60884408 */
  now.setMilliseconds(null)
  now.setSeconds(null)

  document.getElementById('form_date').value = now.toISOString().slice(0, -1)
  document.getElementById('survey_date').value = now.toISOString().slice(0, -1)
});

window.addEventListener('scroll', () => {
  if(window.scrollY + 10> document.getElementById("why").offsetTop) {
    document.getElementById("nav_home").classList.remove("active")
    document.getElementById("nav_why").classList.add("active")
  } else {
    document.getElementById("nav_home").classList.add("active")
    document.getElementById("nav_why").classList.remove("active")
  }
});

