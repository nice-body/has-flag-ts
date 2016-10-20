import {hasFlag} from "../src";
import test from "ava";

test("测试 hasFlag 函数", t => {
    t.true(hasFlag("option", ["--foo", "--bar", "--option"]));
    t.true(hasFlag("--option", ["--foo", "--option", "--bar"]));
    t.true(hasFlag("option=value", ["--foo", "--option=value", "--bar"]));
    t.true(hasFlag("option", ["--option", "--", "foo"]));
    t.true(hasFlag("-o", ["-f", "-o", "-b"]));
    t.true(hasFlag("-o", ["-o", "--", "-f"]));
    t.false(hasFlag("--option", ["--", "--option"]));
    t.false(hasFlag("option", ["--foo"]));
    t.false(hasFlag("o", ["-f", "-o", "-b"]));
});
