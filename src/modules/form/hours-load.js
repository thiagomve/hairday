import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";

export function hoursLoad({ date }) {
  const opening = openingHours.map((hour) => {
    // recupera somente a hora
    const [scheduleHour] = hour.split(":");

    // adiciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs());

    return {
      hour,
      available: !isHourPast,
    };
  });

  console.log(opening)
}
