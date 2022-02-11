"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scripts = void 0;
exports.scripts = {
    config: {
        scripts: 'ts-node ./config/scripts'
    },
    lint: {
        fix: 'eslint --fix --ext .ts,.tsx .',
        run: 'eslint --ext .ts,.tsx .'
    },
    build: {
        tsc: {
            clean: 'tsc --build --clean && tsc --build',
            clear: 'tsc --build --clean',
            noargs: 'tsc',
            version: 'tsc --version'
        }
    }
};
