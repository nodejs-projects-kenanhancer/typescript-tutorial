export declare type NotArray = (object | string | bigint | number | boolean) & {
    length?: never;
};
export declare type OptionalReturnValues2<T1 extends NotArray, T2> = T1 | [T1 | undefined, T2];
export {};
//# sourceMappingURL=app23.d.ts.map