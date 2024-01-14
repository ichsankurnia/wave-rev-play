export function IDRFormatter(value: number) {
    const formatter = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
    });
    return formatter.format(value);
}


export const wait = (ms: number) => new Promise((rs) => setTimeout(rs, ms))