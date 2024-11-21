import { format } from 'date-fns'

export function formatDateBackend(date) {
    try {
        if (date) {
            // Разбиваем строку ДД/ММ/ГГГГ
            const [day, month, year] = date.split('/');

            // Создаем объект даты
            const parsedDate = new Date(year, month - 1, day); // Месяцы в JS 0-индексированы

            // Форматируем дату в YYYY-MM-DD
            return format(parsedDate, 'yyyy-MM-dd');
        }
    } catch (error) {
        console.error('Ошибка форматирования даты:', error);
        return date; // Возвращаем исходное значение в случае ошибки
    }
}

export const unMaskPhoneNumber = (phone) => phone.replace(/[+ ]/g, ''); // Убираем "+" и пробелы

export const handleFocus = (event) => event.target.select();