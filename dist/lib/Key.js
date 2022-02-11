"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateKey = exports.Key = void 0;
const node_rsa_1 = __importDefault(require("node-rsa"));
class Key extends node_rsa_1.default {
    getPublicKey() {
        return this.exportKey('public');
    }
    getPrivateKey() {
        return this.exportKey('private');
    }
    publicEquals({ publicKey }) {
        const p = new Key(publicKey).getPublicKey();
        const _p = this.getPublicKey();
        return p == _p;
    }
}
exports.Key = Key;
class PrivateKey extends Key {
    constructor(_) {
        super(new node_rsa_1.default(_).exportKey('private'));
    }
}
exports.PrivateKey = PrivateKey;
