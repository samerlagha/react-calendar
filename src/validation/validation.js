import moment from "moment"

export const validation = ({ dateEvent, endDateEvent, startEvent, endEvent, endTimeEvent,
    timeEvent }, events, deleteEvent, isDelete) => {
    const format = 'YYYY-MM-DD-HH:mm';
    if (dateEvent !== endDateEvent) {
        alert('Date of begin and end of Event must be same')
        return false
    }

    if (moment(startEvent, format) >= moment(endEvent, format)) {
        alert('End event must be big then start event');
        return false
    }

    if (moment(endEvent, format) - moment(startEvent, format) > 6 * 60 * 60 * 1000) {
        alert('Event can`t be more then 6 hours');
        return false
    }

    const eventsForIntersect = events.filter(event => event.startEvent !== deleteEvent)
    const begin = `${dateEvent}-${startEvent}`;
    const end = `${endDateEvent}-${endEvent}`;

    const isIntersect = isDelete ? false : eventsForIntersect.find(event => {
        let inside = false;
        let across = 0;
        if (moment(end, format).isBetween(moment(event.startEvent, format), moment(event.endEvent, format)) ||
            moment(begin, format).isBetween(moment(event.startEvent, format), moment(event.endEvent, format))) {
            inside = true;
        }
        if (moment(end, format) >= moment(event.endEvent, format)) {
            across += 1;
        }
        if (moment(begin, format) <= moment(event.startEvent, format)) {
            across += 1;
        }

        if (across == 2 || inside) {
            return true
        }
    })
    if (isIntersect) {
        alert('You have event for this time')
        return false
    }

    return true;
}