export default function ConvertToCurrency(number) {
    const formatter = new Intl.NumberFormat('vi-VN',{style: 'currency', currency: 'VND'});
    // Number(number).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return formatter.format(number);
}