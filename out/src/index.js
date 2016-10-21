"use strict";
/**
 * 检查一个选项是否存在于命令行参数数组中，-- 以后的参数不进行检测
 *
 * @export
 * @param {string} flag - 命令行选项
 * @param {Array<string>} [argv=process.argv] - 命令行参数数组
 * @returns {boolean}  - 选项是否在参数数组中
 */
function hasFlag(flag, argv) {
    if (argv === void 0) { argv = process.argv; }
    var terminatorPos = argv.indexOf("--");
    var prefix = /^-{1,2}/.test(flag) ? "" : "--";
    var pos = argv.indexOf(prefix + flag);
    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
}
exports.hasFlag = hasFlag;
//# sourceMappingURL=index.js.map