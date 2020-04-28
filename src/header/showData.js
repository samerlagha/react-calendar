//get Current Date
export const getCurrentDate = (date) => {
     // increase data
    let increaseDate = date;

   //start week day monday
    const startOfWeek = moment()
        .startOf("week")
        .add(increaseDate, "day")
        .format("D");

     // last day on week
    const endOfWeek = moment()
        .endOf("week")
        .add(increaseDate, "day")
        .format("D");

   // shwo data to one week
    let dataByOneWeeks = () => {
        let format = "MMMM";
        let year = moment()
            .add(+increaseDate, "day")
            .year();

        // if (+startOfWeek > +endOfWeek) {
        //     year = "";
        //     format = "MMM";
        // }
        //number of month
        let monthNumber = moment()
            .add(+increaseDate, "day")
            .startOf("isoWeek")
            .format(format);

        return `${monthNumber}  ${year}`;
    };
   // to show two week
    let dataByTwoWeeks = () => {
        if (+startOfWeek > +endOfWeek) {
            let nextMonth = moment()
                .add(+increaseDate + 7, "day")
                .format("MMM");

            let nextYear = moment()
                .add(+increaseDate + 7, "day")
                .year();
            return `- ${nextMonth}  ${nextYear}`;
        }
        return "";
    };



    return `${dataByOneWeeks()}  ${dataByTwoWeeks()}`
}