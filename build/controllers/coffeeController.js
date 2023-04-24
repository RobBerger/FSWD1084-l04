"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oneCoffee = exports.allCoffee = exports.defaultCoffee = void 0;
const coffeeList_js_1 = __importDefault(require("./coffeeList.js"));
const defaultCoffee = (req, res, next) => {
    res.redirect('/coffee');
};
exports.defaultCoffee = defaultCoffee;
const allCoffee = (req, res, next) => {
    res.render('all-coffee', {
        coffeeList: coffeeList_js_1.default
    });
};
exports.allCoffee = allCoffee;
const oneCoffee = (req, res, next) => {
    // get the route parameter called "name"
    let itemName = req.params.name;
    // use the find method to get the coffee item that matches the provided name
    let foundCoffee = coffeeList_js_1.default.find(coffee => {
        return coffee.name === itemName;
    });
    // if the name was not found, return not found
    if (!foundCoffee) {
        return res.render('error', {
            message: "This is not the URL you are looking for!"
        });
    }
    // render the view with the found coffee item
    res.render('coffee-detail', {
        foundCoffee
    });
};
exports.oneCoffee = oneCoffee;
