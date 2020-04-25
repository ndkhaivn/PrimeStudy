// Immutable empty obj to use as default value in hooks
export const emptyObj = Object.freeze({});

export function toDateHeader(date: Date, lang: string): string
{
    if (lang === 'vi')
    {
        const parseDay = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];
        return `${parseDay[date.getDay()]} ngày ${date.getDate()} tháng ${date.getMonth()} năm ${date.getFullYear()}`;
    }

    return date.toDateString();
}
