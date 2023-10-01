/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/interact-with-api.js":
/*!**********************************!*\
  !*** ./src/interact-with-api.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fetchLocation: () => (/* binding */ fetchLocation)
/* harmony export */ });


function fetchLocation(location) {
  const request = fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=e1f664d77dd7414a88681100232009&q=${location}&days=3`
  );

  request
    .then((response) => {
      if (response.status == 200) {
        return response.json();
      } else {
        throw new Error('Location was not found');
      }
    })
    .then((object) => consoleLogData(object))
    .catch((err) => console.log(err));
}

function consoleLogData(dataObject) {
  console.log(dataObject);
  console.log(`Country: ${dataObject.location.country}`);
  console.log(`City: ${dataObject.location.name}`);
  console.log(`Localtime: ${dataObject.location.localtime}`);

  console.log(`Current condition: ${dataObject.current.condition.text}`);
  console.log(`Temperature in Celsius (now): ${dataObject.current.temp_c}`);
  console.log(`Temperature in Fahrenheit (now): ${dataObject.current.temp_f}`);

  console.log('Forecast for next 3 days');
  console.log(`1) Date: ${dataObject.forecast.forecastday[0].date}`);
  console.log('Info about day:');
  console.log(dataObject.forecast.forecastday[0].day);

  console.log(`2) Date: ${dataObject.forecast.forecastday[1].date}`);
  console.log('Info about day:');
  console.log(dataObject.forecast.forecastday[1].day);

  console.log(`3) Date: ${dataObject.forecast.forecastday[2].date}`);
  console.log('Info about day:');
  console.log(dataObject.forecast.forecastday[2].day);
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _interact_with_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./interact-with-api */ "./src/interact-with-api.js");


(0,_interact_with_api__WEBPACK_IMPORTED_MODULE_0__.fetchLocation)('Prague');

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUF5Qjs7QUFFekI7QUFDQTtBQUNBLHVGQUF1RixTQUFTO0FBQ2hHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwwQkFBMEIsNEJBQTRCO0FBQ3RELHVCQUF1Qix5QkFBeUI7QUFDaEQsNEJBQTRCLDhCQUE4Qjs7QUFFMUQsb0NBQW9DLGtDQUFrQztBQUN0RSwrQ0FBK0MsMEJBQTBCO0FBQ3pFLGtEQUFrRCwwQkFBMEI7O0FBRTVFO0FBQ0EsMEJBQTBCLHdDQUF3QztBQUNsRTtBQUNBOztBQUVBLDBCQUEwQix3Q0FBd0M7QUFDbEU7QUFDQTs7QUFFQSwwQkFBMEIsd0NBQXdDO0FBQ2xFO0FBQ0E7QUFDQTs7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTm9EOztBQUVwRCxpRUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2ludGVyYWN0LXdpdGgtYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHsgZmV0Y2hMb2NhdGlvbiB9O1xuXG5mdW5jdGlvbiBmZXRjaExvY2F0aW9uKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlcXVlc3QgPSBmZXRjaChcbiAgICBgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT1lMWY2NjRkNzdkZDc0MTRhODg2ODExMDAyMzIwMDkmcT0ke2xvY2F0aW9ufSZkYXlzPTNgXG4gICk7XG5cbiAgcmVxdWVzdFxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTG9jYXRpb24gd2FzIG5vdCBmb3VuZCcpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLnRoZW4oKG9iamVjdCkgPT4gY29uc29sZUxvZ0RhdGEob2JqZWN0KSlcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XG59XG5cbmZ1bmN0aW9uIGNvbnNvbGVMb2dEYXRhKGRhdGFPYmplY3QpIHtcbiAgY29uc29sZS5sb2coZGF0YU9iamVjdCk7XG4gIGNvbnNvbGUubG9nKGBDb3VudHJ5OiAke2RhdGFPYmplY3QubG9jYXRpb24uY291bnRyeX1gKTtcbiAgY29uc29sZS5sb2coYENpdHk6ICR7ZGF0YU9iamVjdC5sb2NhdGlvbi5uYW1lfWApO1xuICBjb25zb2xlLmxvZyhgTG9jYWx0aW1lOiAke2RhdGFPYmplY3QubG9jYXRpb24ubG9jYWx0aW1lfWApO1xuXG4gIGNvbnNvbGUubG9nKGBDdXJyZW50IGNvbmRpdGlvbjogJHtkYXRhT2JqZWN0LmN1cnJlbnQuY29uZGl0aW9uLnRleHR9YCk7XG4gIGNvbnNvbGUubG9nKGBUZW1wZXJhdHVyZSBpbiBDZWxzaXVzIChub3cpOiAke2RhdGFPYmplY3QuY3VycmVudC50ZW1wX2N9YCk7XG4gIGNvbnNvbGUubG9nKGBUZW1wZXJhdHVyZSBpbiBGYWhyZW5oZWl0IChub3cpOiAke2RhdGFPYmplY3QuY3VycmVudC50ZW1wX2Z9YCk7XG5cbiAgY29uc29sZS5sb2coJ0ZvcmVjYXN0IGZvciBuZXh0IDMgZGF5cycpO1xuICBjb25zb2xlLmxvZyhgMSkgRGF0ZTogJHtkYXRhT2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmRhdGV9YCk7XG4gIGNvbnNvbGUubG9nKCdJbmZvIGFib3V0IGRheTonKTtcbiAgY29uc29sZS5sb2coZGF0YU9iamVjdC5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5kYXkpO1xuXG4gIGNvbnNvbGUubG9nKGAyKSBEYXRlOiAke2RhdGFPYmplY3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMV0uZGF0ZX1gKTtcbiAgY29uc29sZS5sb2coJ0luZm8gYWJvdXQgZGF5OicpO1xuICBjb25zb2xlLmxvZyhkYXRhT2JqZWN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzFdLmRheSk7XG5cbiAgY29uc29sZS5sb2coYDMpIERhdGU6ICR7ZGF0YU9iamVjdC5mb3JlY2FzdC5mb3JlY2FzdGRheVsyXS5kYXRlfWApO1xuICBjb25zb2xlLmxvZygnSW5mbyBhYm91dCBkYXk6Jyk7XG4gIGNvbnNvbGUubG9nKGRhdGFPYmplY3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMl0uZGF5KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZmV0Y2hMb2NhdGlvbiB9IGZyb20gJy4vaW50ZXJhY3Qtd2l0aC1hcGknO1xuXG5mZXRjaExvY2F0aW9uKCdQcmFndWUnKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==