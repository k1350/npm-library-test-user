import { sum } from "@k1350/npm-library-test/test";
import { TEST, type TestType } from "@k1350/npm-library-test/test2";
import { Test3Child } from "@k1350/npm-library-test/test3/child";

export function HelloWorld() {
    const result = sum(4, 2);
    console.log(result);
    console.log(TEST);
    const test: TestType = "3";
    console.log('Hello World', test)
    console.log( Test3Child());
}

HelloWorld();
