import dayjs from "dayjs";
import { openingHours } from "../../utils/opening-hours.js";
import { hoursClick } from "../form/hours-click.js";

const hours = document.getElementById("hours")

export function hoursLoad({ date }) {
  // limpa a lista de horários
  hours.innerHTML = ""

  const opening = openingHours.map((hour) => {
    // recupera somente a hora
    const [scheduleHour] = hour.split(":");

    // adiciona a hora na date e verifica se está no passado
    const isHourPast = dayjs(date).add(Number(scheduleHour), "hour").isBefore(dayjs());

    return {
      hour,
      available: !isHourPast,
    };
  });

  // renderiza os horários
  opening.forEach(({ hour, available}) => {
    const li = document.createElement("li")

    li.classList.add("hour")
    li.classList.add(available ? "hour-available" : "hour-unavailable")

    li.textContent = hour

    if (hour === "9:00"){
      hourHeaderAdd("Manhã")
    } else if (hour === "12:00"){
      hourHeaderAdd("Tarde")
    } else if (hour === "18:00"){
      hourHeaderAdd("Noite")
    }

    hours.append(li)
  })

  // adiciona o evento de click nos horários disponíves
  hoursClick()
}

// adiciona o header de período do dia
function hourHeaderAdd(title) {
  const header = document.createElement("li")
  header.classList.add("hour-period")
  header.textContent = title

  hours.append(header)
}