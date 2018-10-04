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
/******/ 	return __webpack_require__(__webpack_require__.s = "./video.js");
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

/***/ }),

/***/ "./video.js":
/*!******************!*\
  !*** ./video.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detectingJS__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detectingJS */ "./detectingJS.js");
/* harmony import */ var _detectingJS__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_detectingJS__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuToggle */ "./menuToggle.js");
/* harmony import */ var _menuToggle__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_menuToggle__WEBPACK_IMPORTED_MODULE_1__);


var video = document.querySelector('.video');
var playPauseBtn = document.querySelector('.play-btn');
var fullScreenBtn = document.querySelector('.fullscreen-btn');
var videoPlayerWrp = document.querySelector('.media-player-wrp');
var controls = document.querySelector('.controls-wrp');
var playBtnSvg = document.querySelector('.play-svg');
var pauseBtnSvg = document.querySelector('.pause-svg');
var volumeOffSvg = document.querySelector('.volume-off-svg');
var volumeOnSvg = document.querySelector('.volume-on-svg');
var muteBtn = document.querySelector('.mute-btn');
var progressIndicatorBtn = document.querySelector('.progress-indicator-btn');
var sliderElem = document.querySelector('.progress-indicator-wrp');
var thumbElem = document.querySelector('.progress-indicator-btn'); // Скрыть стандартное управление

video.controls = false;

var changeBtnIcon = function changeBtnIcon(action, btn) {
  action === 'hide' ? btn.style.display = 'none' : btn.style.display = 'block';
}; // Воспроизведени / Пауза по клику


var playPauseBtnClickHandler = function playPauseBtnClickHandler(evt) {
  evt.preventDefault(); // Если видео на паузе или проигранно до конца

  if (video.paused || video.ended) {
    video.play();
    changeBtnIcon('hide', playBtnSvg);
    changeBtnIcon('show', pauseBtnSvg);
  } else {
    video.pause();
    changeBtnIcon('show', playBtnSvg);
    changeBtnIcon('hide', pauseBtnSvg);
  }
}; // Воспроизведени / Пауза по клику кнопки


playPauseBtn.addEventListener('click', playPauseBtnClickHandler); // Воспроизведени / Пауза по клику картинки видео

video.addEventListener('click', playPauseBtnClickHandler); // Выключить / включить звук

var muteBtnClickHandler = function muteBtnClickHandler(evt) {
  evt.preventDefault();

  if (video.muted) {
    video.muted = false;
    changeBtnIcon('show', volumeOnSvg);
    changeBtnIcon('hide', volumeOffSvg);
  } else {
    video.muted = true;
    changeBtnIcon('hide', volumeOnSvg);
    changeBtnIcon('show', volumeOffSvg);
  }
};

muteBtn.addEventListener('click', muteBtnClickHandler); // Поддержка полноэкранного режима

var fullScreenEnabled = !!(document.fullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || document.webkitSupportsFullscreen || document.webkitFullscreenEnabled || document.createElement('video').webkitRequestFullScreen); // Скрыть кнопку если не поддерживается полноэкранный режим

if (!fullScreenEnabled) {
  fullScreenBtn.style.display = 'none';
} // Проверка включен ли полноэкранный режим


var isFullScreen = function isFullScreen() {
  return !!(document.fullScreen || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || document.fullscreenElement);
}; // Включение / выключение полноэкранного режима


var fullscreenClickHandler = function fullscreenClickHandler(evt) {
  evt.preventDefault(); // Изменение стилей в полноэкранном режиме видео

  video.classList.add('video-fullscreen-on');
  controls.classList.add('controls-fullscreen-on');

  if (isFullScreen()) {
    // Отключить стили для полноэкранного режима
    video.classList.remove('video-fullscreen-on');
    controls.classList.remove('controls-fullscreen-on');

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else if (videoPlayerWrp.requestFullscreen) {
    videoPlayerWrp.requestFullscreen();
  } else if (videoPlayerWrp.mozRequestFullScreen) {
    videoPlayerWrp.mozRequestFullScreen();
  } else if (videoPlayerWrp.webkitRequestFullScreen) {
    videoPlayerWrp.webkitRequestFullScreen();
  } else if (videoPlayerWrp.msRequestFullscreen) {
    videoPlayerWrp.msRequestFullscreen();
  }
};

fullScreenBtn.addEventListener('click', fullscreenClickHandler); // Прогресс индикатор видео следует за его воспроизведением

var videoTimeUpdateHandler = function videoTimeUpdateHandler() {
  var currentVideoTime = Math.floor(video.currentTime / video.duration * 100);
  progressIndicatorBtn.style.left = "".concat(currentVideoTime, "%");

  if (video.ended) {
    // Передвинуть индикатор прогресса видео на начало
    progressIndicatorBtn.style.left = '0px';
    changeBtnIcon('show', playBtnSvg);
    changeBtnIcon('hide', pauseBtnSvg);
  }
};

video.addEventListener('timeupdate', videoTimeUpdateHandler); // Изменить текущую позицию видео при клике на полосе индикатора воспроизведения

sliderElem.addEventListener('click', function (evt) {
  video.currentTime = "".concat(video.duration * (evt.offsetX / evt.target.clientWidth));
}); // Скрытие / отображение контролов при наведении мыши на видео

var controlsclickHandler = function controlsclickHandler() {
  controls.classList.add('hide-menu-active');
  controls.removeEventListener('click', controlsclickHandler);
};

controls.addEventListener('click', controlsclickHandler); // Перетаскивание индикатора плеера

var getCoords = function getCoords(elem) {
  // кроме IE8-
  var box = elem.getBoundingClientRect();
  return {
    top: box.top + window.pageYOffset,
    left: box.left + window.pageXOffset
  };
};

var thumbElemMouseDownHandler = function thumbElemMouseDownHandler(evt) {
  var thumbCoords = getCoords(thumbElem);
  var shiftX = evt.pageX - thumbCoords.left;
  var sliderCoords = getCoords(sliderElem);

  var documentMouseMoveHandler = function documentMouseMoveHandler(moveEvt) {
    var newLeft = moveEvt.pageX - shiftX - sliderCoords.left; // курсор ушёл вне слайдера

    if (newLeft < 0) {
      newLeft = 0;
    }

    var rightEdge = sliderElem.offsetWidth - thumbElem.offsetWidth;

    if (newLeft > rightEdge) {
      newLeft = rightEdge;
    }

    thumbElem.style.left = "".concat(newLeft, "px");
    video.currentTime = video.duration * (newLeft / rightEdge);
  };

  var documentMouseUpHandler = function documentMouseUpHandler(upEvt) {
    upEvt.preventDefault();
    document.removeEventListener('mousemove', documentMouseMoveHandler);
    document.removeEventListener('mouseup', documentMouseUpHandler);
  };

  document.addEventListener('mousemove', documentMouseMoveHandler);
  document.addEventListener('mouseup', documentMouseUpHandler);
  return false; // disable selection start (cursor change)
};

thumbElem.addEventListener('mousedown', thumbElemMouseDownHandler);

/***/ })

/******/ });
//# sourceMappingURL=bundle.video.js.map