let timerId; // переменная, которая будет хранить ID таймера


const startButton = document.getElementById('start')
startButton.addEventListener('click', function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ setInterval
  timerId = setInterval(updateClock, 1000); // запускаем  updateClock() каждую секунду
});


const stopButton = document.getElementById('stop');
stopButton.addEventListener('click', function () {
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ clearInterval
  clearInterval(timerId); // останавливаем таймер
});


function updateClock() {
  const clock = document.getElementById('clock');
  // НУЖНО ПОГУГЛИТЬ ЧТО ТАКОЕ new Date()
  const now = НОВАЯдАТА();
  const hours = now.ДАЙчАСЫ()
  const minutes = now.ДАЙмИНУТЫ()
  const seconds = now.ДАЙсЕКУНДЫ()
  clock.textContent = hours + ':' + minutes + ':' + seconds;
}
