declare module 'nervous-array' {
  export function zeros(size: number): Array<number>;
  export function sum(a1: Array<number>): number;
  export function squareSum(a1: Array<number>): number;
  export function mean(a1: Array<number>): number;
  export function rootMeanSquare(a1: Array<number>): number;
  export function add(...arrays: number[][]): Array<number>;
  export function addScalar(a1: Array<number>, s: number): Array<number>;
  export function sub(...arrays: number[][]): Array<number>;
  export function multiply(...arrays: number[][]): Array<number>;
  export function multiplyByScalar(a1: Array<number>, scalar: number): Array<number>;
  export function shuffle (array: Array<number>): Array<number>;
}