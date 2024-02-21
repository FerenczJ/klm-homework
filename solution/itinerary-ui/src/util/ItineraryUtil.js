export const titleCase = str => {
    if (!str) return str;

    return str.split(' ')
        .map(w => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(' ');
}