export const toDateHeader = function(date, lang) {

  if (lang === 'en') {
    return date.toDateString();
  } else if (lang === 'vi') {

    const parseDay = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

    return `${parseDay[date.getDay()]} ngày ${date.getDate()} tháng ${date.getMonth()} năm ${date.getFullYear()}`;
  }
}