import { format } from 'date-fns'

export function formatDateBackend(date) {
    try {
        if (date) {
            var formattedDate = format(new Date(date), 'yyyy-MM-dd');
            return formattedDate
        }
    } catch (error) {
        return date
    }
}
