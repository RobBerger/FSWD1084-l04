"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
// GET /coffee - renders a list of coffee items
router.get('/');
// GET /coffee/:name - render the coffee item requested
router.get('/:name');
exports.default = router;
