interface OptionsHourRamdom {
    hmin?: number;
    hmax?: number;
    mmin?: number;
    mmax?: number;
    isPm: boolean;
}
export declare const randomHour: (options?: OptionsHourRamdom) => {
    hour: string;
    time: number;
    hourTime: number;
    minTime: number;
};
export {};
