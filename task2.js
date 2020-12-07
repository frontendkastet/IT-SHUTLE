function myFunc() {
  let count = prompt('Напиши число');
  if (count<10 || count>25) {
    alert('НЕ находится в диапазоне между 10 и 25 включительно.')
  } else {
    alert('число в диапозоне от 10 до 25 включсительно')
  }
  myFunc();
}
myFunc();