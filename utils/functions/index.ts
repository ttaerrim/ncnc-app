export const getSaleRate = (
    originalPrice: number,
    sellingPrice: number,
): number => {
    return Math.round(((originalPrice - sellingPrice) / originalPrice) * 100);
};

export const getExpiryDate = (input_date: string): string => {
    const date = new Date(input_date);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}.${month > 10 ? month : `0${month}`}.${
        day > 10 ? day : `0${day}`
    }`;
};

export const get3DigitsCost = (cost: number): string => {
    return cost.toLocaleString();
};
