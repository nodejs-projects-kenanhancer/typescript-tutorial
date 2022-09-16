export type NotArray = (object | string | bigint | number | boolean) & { length?: never; };


export type OptionalReturnValues2<T1 extends NotArray, T2> = T1 | [T1 | undefined, T2];



export { };