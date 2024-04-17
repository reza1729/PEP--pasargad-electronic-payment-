"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Controller_1 = __importDefault(require("../Controller/Controller"));
const router = express_1.default.Router();
router.post("/set", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new Controller_1.default();
        const response = yield controller.Set(req.body);
        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(551).send(error);
    }
}));
router.get("/get", (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const controller = new Controller_1.default();
        const response = yield controller.Get();
        return res.status(200).send(response);
    }
    catch (error) {
        return res.status(551).send(error);
    }
}));
exports.default = router;
