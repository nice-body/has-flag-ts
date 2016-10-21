"use strict";
var src_1 = require("../src");
var ava_1 = require("ava");
ava_1.default("测试 hasFlag 函数", function (t) {
    t.true(src_1.hasFlag("option", ["--foo", "--bar", "--option"]));
    t.true(src_1.hasFlag("--option", ["--foo", "--option", "--bar"]));
    t.true(src_1.hasFlag("option=value", ["--foo", "--option=value", "--bar"]));
    t.true(src_1.hasFlag("option", ["--option", "--", "foo"]));
    t.true(src_1.hasFlag("-o", ["-f", "-o", "-b"]));
    t.true(src_1.hasFlag("-o", ["-o", "--", "-f"]));
    t.false(src_1.hasFlag("--option", ["--", "--option"]));
    t.false(src_1.hasFlag("option", ["--foo"]));
    t.false(src_1.hasFlag("o", ["-f", "-o", "-b"]));
});
//# sourceMappingURL=index.js.map