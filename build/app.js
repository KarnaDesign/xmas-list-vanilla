(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.handleCreateWishlist = handleCreateWishlist;
exports.handleAddWishItem = handleAddWishItem;
function handleCreateWishlist() {
    document.querySelector(".wishlistCreator").classList.remove("hidden");
    document.querySelector(".listCreator").classList.add("hidden");

    var name = document.getElementById("inputName").value;
    var suffixedName = name;

    var lastCharacter = name[name.length - 1];
    if (lastCharacter !== "s") {
        suffixedName += "s";
    }

    document.getElementById("outputName").innerHTML = suffixedName;
}

function handleAddWishItem(e) {
    if (e.keyCode === 13) {
        var wish = document.querySelector(".wishlistItem").value;
        var ul = document.getElementById("wishlist");
        var newListitem = document.createElement("li");
        var textSpan = document.createElement("span");
        textSpan.innerHTML = wish;
        newListitem.appendChild(textSpan);
        var deleteSpan = document.createElement("span");
        deleteSpan.className = "fa fa-trash";
        deleteSpan.addEventListener("click", function () {
            ul.removeChild(newListitem);
        });
        newListitem.appendChild(deleteSpan);
        ul.appendChild(newListitem);

        var inputListItem = document.querySelector(".input");
        ul.appendChild(inputListItem);

        var newInput = document.querySelector(".wishlistItem");
        newInput.value = "";
        newInput.focus();
    }
}

},{}],2:[function(require,module,exports){
"use strict";

var _actionHandler = require("./actionHandler");

// Add click event to button
document.getElementById("createButton").addEventListener("click", _actionHandler.handleCreateWishlist);

// Add event on enter
document.querySelector(".wishlistItem").addEventListener("keydown", _actionHandler.handleAddWishItem);

},{"./actionHandler":1}]},{},[2]);
