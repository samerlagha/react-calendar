export const getCurrentDate = (data) => {
    let increaseDate = data;

    const startOfWeek = moment()
        .startOf("isoWeek")
        .add(increaseDate, "day")
        .format("D");

    const endOfWeek = moment()
        .endOf("isoWeek")
        .add(increaseDate, "day")
        .format("D");

    let dataByOneWeeks = () => {
        let format = "MMMM";
        let year = moment()
            .add(+increaseDate, "day")
            .year();

        if (+startOfWeek > +endOfWeek) {
            year = "";
            format = "MMM";
        }
        let monthNumber = moment()
            .add(+increaseDate, "day")
            .startOf("isoWeek")
            .format(format);

        return `${monthNumber}  ${year}`;
    };

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