/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./detectingJS.js":
/*!************************!*\
  !*** ./detectingJS.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

var html = document.querySelector('.no-js'); // Если js включен, то убираем класс no-js с html

html.classList.remove('no-js');

/***/ }),

/***/ "./form.js":
/*!*****************!*\
  !*** ./form.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detectingJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detectingJS */ "./detectingJS.js");
/* harmony import */ var _detectingJS__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_detectingJS__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuToggle */ "./menuToggle.js");
/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menuToggle__WEBPACK_IMPORTED_MODULE_1__);

 // Переменные полей формы

var firstName = document.querySelector('#first-name');
var surname = document.querySelector('#surname');
var patronymic = document.querySelector('#patronymic');
var phone = document.querySelector('#phone');
var mail = document.querySelector('#mail');
var devilBridge = document.querySelector('#devil-bridge');
var mountainBell = document.querySelector('#mountain-bell');
var slidePark = document.querySelector('#slide-park');
var redRocks = document.querySelector('#red-rocks');
var emotions = document.querySelector('.emotions');
var formFields = {
  firstName: firstName,
  surname: surname,
  patronymic: patronymic,
  phone: phone,
  mail: mail,
  devilBridge: devilBridge,
  mountainBell: mountainBell,
  slidePark: slidePark,
  redRocks: redRocks,
  emotions: emotions
};
/**
 *  Временное хранилище для данных формы, чтобы лишний раз не обращаться к
 *  localStorage
 */

var temporaryDataStorageOfForm = {}; // Сохранить данные формы во временном хранилище

var savingFormDataToTemporaryStorage = function savingFormDataToTemporaryStorage(fieldName, value) {
  temporaryDataStorageOfForm[fieldName] = value;
}; // Сохранить данные формы в localStorage


var savingFormDataToLocalStorage = function savingFormDataToLocalStorage(temporaryDataStorage) {
  localStorage.setItem('feedbackFormData', JSON.stringify(temporaryDataStorage));
};
/** Проверить соответствует ли текущее значение поля сохранненому во
 * временном хранилище
 */


var isCheckStoredValue = function isCheckStoredValue(fieldToBeChecked, temporaryDataStorage, newValue) {
  if (fieldToBeChecked in temporaryDataStorage && temporaryDataStorage[fieldToBeChecked] === newValue) {
    return true;
  }

  return false;
}; // Обработчик для сохранения текстовых данных формы при потери фокуса


var textInputFieldBlurHandler = function textInputFieldBlurHandler(e) {
  e.preventDefault();
  var that = e.target;

  if (!isCheckStoredValue(that.id, temporaryDataStorageOfForm, that.value)) {
    savingFormDataToTemporaryStorage(that.id, that.value);
    savingFormDataToLocalStorage(temporaryDataStorageOfForm);
  }
}; // Обработчик для сохранения значений чекбоксов


var checkboxInputFieldChangeHandler = function checkboxInputFieldChangeHandler(e) {
  e.preventDefault();
  var that = e.target;

  if (!isCheckStoredValue(that.id, temporaryDataStorageOfForm, that.checked)) {
    savingFormDataToTemporaryStorage(that.id, that.checked);
    savingFormDataToLocalStorage(temporaryDataStorageOfForm);
  }
}; // Навешываем обработчики для сохранения данных полей ввода


firstName.addEventListener('blur', textInputFieldBlurHandler);
surname.addEventListener('blur', textInputFieldBlurHandler);
patronymic.addEventListener('blur', textInputFieldBlurHandler);
phone.addEventListener('blur', textInputFieldBlurHandler);
mail.addEventListener('blur', textInputFieldBlurHandler);
devilBridge.addEventListener('change', checkboxInputFieldChangeHandler);
mountainBell.addEventListener('change', checkboxInputFieldChangeHandler);
slidePark.addEventListener('change', checkboxInputFieldChangeHandler);
redRocks.addEventListener('change', checkboxInputFieldChangeHandler);
emotions.addEventListener('blur', textInputFieldBlurHandler); // Преобразовать строку в camelCase (из вида devil-bridge в devilBridge)

var convertStringToCamelCase = function convertStringToCamelCase(str) {
  var camelCaseStr = '';

  for (var i = 0; i < str.length; i += 1) {
    if (str[i] === '-') {
      camelCaseStr += str[i += 1].toUpperCase();
      i += 1;
    }

    camelCaseStr += str[i];
  }

  return camelCaseStr;
}; // Задать сохраненное ранее значение полю ввода


var setValueOfInputField = function setValueOfInputField(field, value) {
  if (formFields[field].type === 'checkbox') {
    formFields[field].checked = value;
  } else {
    formFields[field].value = value;
  }
}; // Проверить наличие данных формы в хранилище


var isCheckFormDataInLocalStorage = function isCheckFormDataInLocalStorage() {
  return localStorage.length && 'feedbackFormData' in localStorage;
}; // Подгружаем данные формы после загрузки HTML и построенного DOM-дерева


var documentDomContentLoadedHandler = function documentDomContentLoadedHandler() {
  // Достаём раннее введенные данные из localStorage во временный объект
  if (isCheckFormDataInLocalStorage()) {
    temporaryDataStorageOfForm = JSON.parse(localStorage.getItem('feedbackFormData')); // Массив с собственными ключами. Не наследуемыми

    var arr = Object.keys(temporaryDataStorageOfForm); // Перебираем раннее введенные данные

    for (var i = 0; i < arr.length; i += 1) {
      // Задаем ранее сохраненные данные полям ввода
      setValueOfInputField(convertStringToCamelCase(arr[i]), temporaryDataStorageOfForm[arr[i]]);
    }
  }
};
/** Навешиваем обработчик событий для подгрузки данных формы после загрузки
 *  HTML и построенного DOM-дерева
 */


document.addEventListener('DOMContentLoaded', documentDomContentLoadedHandler);
var submitFormButton = document.querySelector('.button-form');
var preloader = document.querySelector('.preloader-wrp'); // Обработчик отправки формы

var submitFormButtonClickHandler = function submitFormButtonClickHandler(e) {
  e.preventDefault();
  var req = new XMLHttpRequest();
  req.open('post', '/feedback', true);
  req.setRequestHeader('Content-type', 'application/json; charset=utf-8'); // Тайм-аут соединения ( например, пропала сеть )

  var reqTimeout = setTimeout(function () {
    req.abort();
  }, 10000); // Обработчик состояния ответа

  req.onreadystatechange = function () {
    if (req.readyState !== 4) return; // Очистить таймаут при завершении запроса

    clearTimeout(reqTimeout); // Запрос сервером обработан успешно

    if (req.status === 201) {
      // Ответ от сервера, что все ок
      // Чистим временное хранилище раннее введенных данных формы
      temporaryDataStorageOfForm = null; // Очищаем localStorage от данных формы

      localStorage.removeItem('feedbackFormData');
      preloader.classList.add('preloader-wrp--hide'); // Вывести модалку, что всё ОК
    } else {
      // Если код статуса ответа от сервера не 201
      preloader.classList.add('preloader-wrp--hide'); // handError(req.statusText);
      // Вызвать обработчик ошибки с текстом ответа
    }
  }; // Отобразить прелоадер пока отсылаются данные формы


  preloader.classList.remove('preloader-wrp--hide');
  req.send(JSON.stringify(temporaryDataStorageOfForm));
}; // Навешиваем обработчик на отправку формы


submitFormButton.addEventListener('click', submitFormButtonClickHandler);

/***/ }),

/***/ "./menuToggle.js":
/*!***********************!*\
  !*** ./menuToggle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

var mainNav = document.querySelector('.main-nav');
var menuToggle = document.querySelector('.menu-toggle');
var logo = document.querySelector('.logo'); // Открыть/скрыть меню при клике по гамбургеру

var menuToggleClickHandler = function menuToggleClickHandler(e) {
  e.preventDefault(); // Сменить три полосы гамбургера на крестик

  menuToggle.classList.toggle('menu-toggle--open'); // Открыть главное меню

  mainNav.classList.toggle('main-nav--show'); // Скрыть логотип, что бы не загараживал меню на мобильниках

  logo.classList.toggle('hidden');
}; // Обработчик для открытия/скрытия меню


menuToggle.addEventListener('click', menuToggleClickHandler);

/***/ })

/******/ });
//# sourceMappingURL=bundle.form.js.map