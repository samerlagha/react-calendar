export const validateDelete = (deleteEvent) => {
    if (!deleteEvent) {
        return true
    }
    const format = 'YYYY-MM-DD-HH:mm';

    const beforeStart = moment() > moment(deleteEvent, format) ? true : moment(deleteEvent, format).diff(moment(), 'minutes') >= 15
    if (!beforeStart) {
        alert('You can`t delete Event before 15 minutes start')
        return false
    }
    return true
}

