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

const successTemplate = document.querySelector('#success');
const successSection = successTemplate.content.querySelector('.success');

const showSuccessMessage = () => {
  const success = successSection.cloneNode(true);
  const successButton = success.querySelector('.success__button');
  successButton.addEventListener('click', () => {
    success.remove();
  });

  document.body.append(success);

  const successInner = document.querySelector('.success__inner');

  const isSuccessInnerFocused = () =>
    document.activeElement === successInner;

  const clickHandler = () => {
    if (!isSuccessInnerFocused()) {
      success.remove();
      document.removeEventListener('mousedown', clickHandler);
    }
  };

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      success.remove();
      document.removeEventListener('mousedown', clickHandler);
    }
  });

  document.addEventListener('mousedown', clickHandler);
};


const errorTemplate = document.querySelector('#error');
const errorSection = errorTemplate.content.querySelector('.error');

const showErrorMessage = () => {
  const error = errorSection.cloneNode(true);
  const errorButton = error.querySelector('.error__button');

  errorButton.addEventListener('click', () => {
    error.remove();
  });

  document.body.append(error);

  const errorInner = document.querySelector('.error__inner');

  const isErrorInnerFocused = () =>
    document.activeElement === errorInner;

  const clickHandler = () => {
    if (!isErrorInnerFocused()) {
      error.remove();
      document.removeEventListener('mousedown', clickHandler);
    }
  };

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      error.remove();
      document.removeEventListener('mousedown', clickHandler);
    }
  });

  document.addEventListener('mousedown', clickHandler);
};


function debounce (callback, timeoutDelay = 500) {
  // Используем замыкания, чтобы id таймаута у нас навсегда приклеился
  // к возвращаемой функции с setTimeout, тогда мы его сможем перезаписывать
  let timeoutId;

  return (...rest) => {
    // Перед каждым новым вызовом удаляем предыдущий таймаут,
    // чтобы они не накапливались
    clearTimeout(timeoutId);

    // Затем устанавливаем новый таймаут с вызовом колбэка на ту же задержку
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);

    // Таким образом цикл «поставить таймаут - удалить таймаут» будет выполняться,
    // пока действие совершается чаще, чем переданная задержка timeoutDelay
  };
}


export { showAlert,showSuccessMessage, showErrorMessage, debounce };
