/// <reference types="react" />
declare type WindowSize = {
    readonly innerHeight: number;
    readonly innerWidth: number;
    readonly outerHeight: number;
    readonly outerWidth: number;
};
export declare function useWindowSize(callback?: Function): WindowSize;
export declare function useAspectRatio(ratio: number): import("react").MutableRefObject<any>;
export {};
