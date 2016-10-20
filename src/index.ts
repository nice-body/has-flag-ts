"use strict";

/**
 * 检查一个选项是否存在于命令行参数数组中，-- 以后的参数不进行检测
 * @module module:hasFlag
 */

/**
 * 检查一个选项是否存在于命令行参数数组中，-- 以后的参数不进行检测
 * @param {string} flag 命令行选项
 * @param {string[]} [argv=process.argv] 命令行参数数组
 * @return {boolean} 选项是否存在与参数数组中
 */
export function hasFlag(flag: string, argv: Array<string> = process.argv): boolean {
    const terminatorPos: number = argv.indexOf("--");
    const prefix: string = /^-{1,2}/.test(flag) ? "" : "--";
    const pos: number = argv.indexOf(prefix + flag);

    return pos !== -1 && (terminatorPos === -1 ? true : pos < terminatorPos);
}
