"use strict";
// import * as adminRepo from "../repositories/admin.repository";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
//#region interfaces
const result = (data = {}, message = status[500], code = 500, success = false) => {
    return {
        code,
        message,
        data,
        success,
    };
};
//#endregion
class Controller {
    Set(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return result(body, "", 200, true);
        });
    }
    Get() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
exports.default = Controller;
