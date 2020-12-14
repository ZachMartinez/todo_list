/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var Model = function Model() {
  data = [];
  observers = [];

  var newList = function newList() {
    var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Todo List';
    data.push(todoList(title));
  };

  var removeList = function removeList(i) {
    data.splice(i, 1);
  };

  var getList = function getList(i) {
    return data[i];
  };

  var getLists = function getLists() {
    return data;
  };

  var notify = function notify() {
    observers.forEach(function (observer) {
      observer.update(data);
    });
  };

  var addObserver = function addObserver(observers) {
    observers.push(observer);
  };

  return {
    newList: newList,
    removeList: removeList,
    getList: getList,
    getLists: getLists,
    notify: notify,
    addObserver: addObserver
  };
};

var todoList = function todoList() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Todo List';
  var items = [];

  var newItem = function newItem(title) {
    var item = todoItem(title);
    items.push(item);
  };

  var removeItem = function removeItem(i) {
    items.splice(i, 1);
  };

  var getItem = function getItem(i) {
    return items[i];
  };

  var getItems = function getItems() {
    return items;
  };

  return {
    title: title,
    newItem: newItem,
    removeItem: removeItem,
    getItem: getItem,
    getItems: getItems
  };
};

var todoItem = function todoItem() {
  var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Todo Item';
  var desc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'A todo item.';
  return {
    title: title,
    desc: desc,
    dueDate: dueDate,
    priority: 'low',
    complete: false
  };
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Model);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__(0);
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvX2xpc3QvLi9zcmMvbW9kZWwuanMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG9fbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kb19saXN0L3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJNb2RlbCIsImRhdGEiLCJvYnNlcnZlcnMiLCJuZXdMaXN0IiwidGl0bGUiLCJwdXNoIiwidG9kb0xpc3QiLCJyZW1vdmVMaXN0IiwiaSIsInNwbGljZSIsImdldExpc3QiLCJnZXRMaXN0cyIsIm5vdGlmeSIsImZvckVhY2giLCJvYnNlcnZlciIsInVwZGF0ZSIsImFkZE9ic2VydmVyIiwiaXRlbXMiLCJuZXdJdGVtIiwiaXRlbSIsInRvZG9JdGVtIiwicmVtb3ZlSXRlbSIsImdldEl0ZW0iLCJnZXRJdGVtcyIsImRlc2MiLCJkdWVEYXRlIiwicHJpb3JpdHkiLCJjb21wbGV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsS0FBSyxHQUFHLFNBQVJBLEtBQVEsR0FBTTtBQUNoQkMsTUFBSSxHQUFHLEVBQVA7QUFFQUMsV0FBUyxHQUFHLEVBQVo7O0FBRUEsTUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsR0FBdUI7QUFBQSxRQUF0QkMsS0FBc0IsdUVBQWhCLFdBQWdCO0FBQ25DSCxRQUFJLENBQUNJLElBQUwsQ0FBVUMsUUFBUSxDQUFDRixLQUFELENBQWxCO0FBQ0gsR0FGRDs7QUFJQSxNQUFNRyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDQyxDQUFELEVBQU87QUFD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b2RlbCA9ICgpID0+IHtcbiAgICBkYXRhID0gW11cblxuICAgIG9ic2VydmVycyA9IFtdXG5cbiAgICBjb25zdCBuZXdMaXN0ID0gKHRpdGxlPSdUb2RvIExpc3QnKSA9PiB7XG4gICAgICAgIGRhdGEucHVzaCh0b2RvTGlzdCh0aXRsZSkpXG4gICAgfVxuXG4gICAgY29uc3QgcmVtb3ZlTGlzdCA9IChpKSA9PiB7XG4gICAgICAgIGRhdGEuc3BsaWNlKGksIDEpXG4gICAgfVxuICAgIFxuICAgIGNvbnN0IGdldExpc3QgPSAoaSkgPT4ge1xuICAgICAgICByZXR1cm4gZGF0YVtpXVxuICAgIH1cblxuICAgIGNvbnN0IGdldExpc3RzID0gKCkgPT4gZGF0YVxuXG4gICAgY29uc3Qgbm90aWZ5ID0gKCkgPT4ge1xuICAgICAgICBvYnNlcnZlcnMuZm9yRWFjaChvYnNlcnZlciA9PiB7XG4gICAgICAgICAgICBvYnNlcnZlci51cGRhdGUoZGF0YSlcbiAgICAgICAgfSlcbiAgICB9ICBcblxuICAgIGNvbnN0IGFkZE9ic2VydmVyID0gKG9ic2VydmVycykgPT4ge1xuICAgICAgICBvYnNlcnZlcnMucHVzaChvYnNlcnZlcilcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBuZXdMaXN0LFxuICAgICAgICByZW1vdmVMaXN0LFxuICAgICAgICBnZXRMaXN0LFxuICAgICAgICBnZXRMaXN0cyxcbiAgICAgICAgbm90aWZ5LFxuICAgICAgICBhZGRPYnNlcnZlclxuICAgIH1cbn1cblxuY29uc3QgdG9kb0xpc3QgPSAodGl0bGU9J1RvZG8gTGlzdCcpID0+IHtcbiAgICBjb25zdCBpdGVtcyA9IFtdXG5cbiAgICBjb25zdCBuZXdJdGVtID0gKHRpdGxlKSA9PiB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSB0b2RvSXRlbSh0aXRsZSlcbiAgICAgICAgaXRlbXMucHVzaChpdGVtKVxuICAgIH1cblxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoaSkgPT4ge1xuICAgICAgICBpdGVtcy5zcGxpY2UoaSwgMSlcbiAgICB9XG5cbiAgICBjb25zdCBnZXRJdGVtID0gKGkpID0+IHtcbiAgICAgICAgcmV0dXJuIGl0ZW1zW2ldXG4gICAgfSBcblxuICAgIGNvbnN0IGdldEl0ZW1zID0gKCkgPT4gaXRlbXNcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBuZXdJdGVtLFxuICAgICAgICByZW1vdmVJdGVtLFxuICAgICAgICBnZXRJdGVtLFxuICAgICAgICBnZXRJdGVtcyxcbiAgICB9XG59XG5cbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlPSdUb2RvIEl0ZW0nLCBkZXNjPSdBIHRvZG8gaXRlbS4nKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2MsXG4gICAgICAgIGR1ZURhdGUsXG4gICAgICAgIHByaW9yaXR5OiAnbG93JyxcbiAgICAgICAgY29tcGxldGU6IGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBNb2RlbCIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbiJdLCJzb3VyY2VSb290IjoiIn0=