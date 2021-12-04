interface OptionsHourRamdom {
    hmin?: number;
    hmax?: number;
    mmin?: number;
    mmax?: number;
    isPm: boolean
}

export const randomHour = (options: OptionsHourRamdom = {isPm: false}) => {
    let hourpmin = options.isPm ? 0 : 1;
    let hourpmax = options.isPm ? 23 : 12;
    let HMIN = options.hmin ? options.hmin : hourpmin
    let HMAX = options.hmax ? options.hmax : hourpmax


    let MMIN = options.mmin ? options.mmin : 1;
    let MMAX = options.mmax ? options.mmax : 59;

    const hour = Math.floor(Math.random() * (HMAX - HMIN)) + HMIN;

    if (options.hmin && options.hmin !== hour) {
        MMIN = 1
    }
    const mins = Math.floor(Math.random() * (MMAX - MMIN)) + MMIN;
    console.log(`${hour}:${mins}`)

    const hourTime = hour * 60 * 60 * 1000
    const minTime = mins * 60 * 1000
    const time = hourTime + minTime

    return {
        hour: `${hour}:${mins}`,
        time,
        hourTime,
        minTime,
    }
}