//1. Функция длины строки

const isLessOrEqual = (string, length) => string.length <= length;

// isLessOrEqual('привет', 7);


// 2. Функция палиндром
// функция может принимать строку в разном регистре
// функция может содержать пробелы и пробелы не должны влиять на палиндром

const isPalindrom = (string) => {
  const tempString = string
    .toLowerCase()
    .replaceAll(' ','');

  let reverseString = '';
  for(let i = tempString.length - 1; i >= 0; i--) {
    reverseString += tempString[i];
  }
return tempString === reverseString
}
isPalindrom('Лёша на полке клопа нашёл')


// 3. функция возвращающая целое число
const extractNumber = (string) => {
    if (typeof string === 'number') {
      return string;
    }
    let result ='';
    for(let i = 0; i < string.length; i++){
      if (!Number.isNaN(parseInt(string.at(i),10)));
    result += string.at(i)
  }
  return parseInt(result,10);
}


// 4. формирование адресов
function padStart(string, minLength, pad) {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  const tempPad = pad.slice(0, actualPad % pad.length);
  const tempRepeat = pad.repeat(actualPad / pad.length);

  return tempPad + tempRepeat + string;
};

// вариант решения с while
// const padStart = (string, minLength, pad) => {
//   let result = string;
//   while (result.length < minLength){
//     const newResultLength = result.length + pad.length;
//     const actualPad = newResultLength <= minLength ? pad : pad.slice(0,minLength - newResultLength);
//     result = actualPad + result;
//   }
//   return result;
// };


const ALERT_SHOW_TIME = 5000;

const showAlert = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = message;
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

const showSuccessMessage = (message) => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = 'Данные успешно отправлены';
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

const showErrorMessage = () => {
  const alert = document.createElement('div');
  alert.style.position = 'absolute';
  alert.style.zIndex = '100';
  alert.style.left = '0';
  alert.style.top = '0';
  alert.style.right = '0';
  alert.style.padding = '10px 3px';
  alert.style.fontSize = '30px';
  alert.style.textAlign = 'center';
  alert.style.backgroundColor = 'red';
  alert.textContent = 'Не удалось отправить форму. Попробуйте ещё раз';
  document.body.append(alert);

  setTimeout(() => {
    alert.remove();
  }, ALERT_SHOW_TIME);

};

export { showAlert,showSuccessMessage,showErrorMessage };

// function throttle (callback, delayBetweenFrames) {
//   // Используем замыкания, чтобы время "последнего кадра" навсегда приклеилось
//   // к возвращаемой функции с условием, тогда мы его сможем перезаписывать
//   let lastTime = 0;

//   return (...rest) => {
//     // Получаем текущую дату в миллисекундах,
//     // чтобы можно было в дальнейшем
//     // вычислять разницу между кадрами
//     const now = new Date();

//     // Если время между кадрами больше задержки,
//     // вызываем наш колбэк и перезаписываем lastTime
//     // временем "последнего кадра"
//     if (now - lastTime >= delayBetweenFrames) {
//       callback.apply(this, rest);
//       lastTime = now;
//     }
//   };
// }
