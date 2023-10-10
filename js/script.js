'use strict';

document.querySelector('#calculate').addEventListener('click', function () {
  const height = document.querySelector('#height').value;
  const weight = document.querySelector('#weight').value;

  const bmi = (weight / (height * 2)) * 100;
  document.querySelector('#result').textContent = bmi.toFixed(2);

  let container = document.getElementById('result');

  bmi <= 18.6 || bmi >= 24.9 ? container.style.color =  'red' : container.style.color = "green";
});
