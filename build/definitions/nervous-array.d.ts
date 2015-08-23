declare module 'nervous-array' {
    function zeros(size: number): Array<number>;
    function sum(a1: Array<number>): number;
    function squareSum(a1: Array<number>): number;
    function mean(a1: Array<number>): number;
    function rootMeanSquare(a1: Array<number>): number;
    function add(...arrays: number[][]): Array<number>;
    function addScalar(a1: Array<number>, s: number): Array<number>;
    function sub(...arrays: number[][]): Array<number>;
    function multiply(...arrays: number[][]): Array<number>;
    function multiplyByScalar(a1: Array<number>, scalar: number): Array<number>;
    function shuffle<T>(array: Array<T>): Array<T>;
}
