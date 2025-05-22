export const convertDataTimeToUTC = (date: Date) => {
    const offset = date.getTimezoneOffset() * 60000;

    // console.log(date.getHours()); // converted to local time from DB
    // console.log(date.getUTCHours()); // original time from DB

    return new Date(date.getTime() + offset);
};

export const convertDataTimeToLocal = (date: Date) => {
    const offset = date.getTimezoneOffset() * 60000;

    // console.log(date.getHours()); // converted to local time from DB
    // console.log(date.getUTCHours()); // original time from DB

    return new Date(date.getTime() - offset);
};
