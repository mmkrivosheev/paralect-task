export const cutNumber = num => {
    if (num < 1e3) return num;
    return num < 1e6
        ? (num / 1e3).toFixed(1) + "k"
        : (num / 1e6).toFixed(1) + "m";
};