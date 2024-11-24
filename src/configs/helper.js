import { format } from 'date-fns'


export function formatPhone(str) {
	if (str) {
		const paddedStr = str.padStart(9, '0');
		return paddedStr.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "+998 $1 $2 $3 $4");
	}
	return "";
}

export function formatDate(date) {
	if (date) {
		var formattedDate = format(new Date(date), 'dd.MM.yyyy');
		return formattedDate
	}
}

export function formatDateBackend(date) {
	try {
		if (date) {
			const [day, month, year] = date.split('/');
			const parsedDate = new Date(year, month - 1, day);

			// Форматируем дату в YYYY-MM-DD
			return format(parsedDate, 'yyyy-MM-dd');
		}
	} catch (error) {
		console.error('Ошибка форматирования даты:', error);
		return date; // Возвращаем исходное значение в случае ошибки
	}
}

export const unMaskPhoneNumber = (phone) => phone.replace(/[ ]/g, '');

export const handleFocus = (event) => event.target.select();