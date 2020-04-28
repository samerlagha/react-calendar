
export const validationIntersect = ({ startDate, endDate, startEvent, endEvent }, events, deleteEvent) => {

    const eventsForIntersect = events.filter(event => event.startEvent !== deleteEvent)
    const format = 'YYYY-MM-DD-HH:mm';
    const begin = `${startDate}-${startEvent}`;
    const end = `${endDate}-${endEvent}`;

    const isIntersect = eventsForIntersect.find(event => {
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
        return isIntersect
    }
}