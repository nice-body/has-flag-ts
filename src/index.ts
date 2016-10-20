"use strict";

/**
 * 检查一个选项是否存在于命令行参数数组中，-- 以后的参数不进行检测
 *
 * @export
 * @param {string} flag - 命令行选项
 * @param {Array<string>} [argv=process.argv] - 命令行参数数组
 * @returns {boolean}  - 选项是否在参数数组中
 */
export function hasFlag(flag: string, argv: Array<string> = process.argv): boolean {
    const terminatorPos: number = argv.indexOf("--");
    const prefix: string = /^-{1,2}/.test(flag) ? "" : "--";
    const pos: number = argv.indexOf(prefix + flag);

    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
}
