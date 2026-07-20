import dayjs from "dayjs";

const form = document.querySelector("form");
const clientName = document.getElementById("client");
const selectedDate = document.getElementById("date");

// data atual para formatar o input
const inputToday = dayjs(new Date()).format("YYYY-MM-DD");

// carrega a data atual e bloqueia datas anteriores
selectedDate.value = inputToday;
selectedDate.min = inputToday;

form.onsubmit = (event) => {
  event.preventDefault();

  try {
    // recuperando o nome do cliente
    const name = clientName.value.trim();

    if (!name) {
      return alert("Informe o nome do cliente!");
    }

    // recupera o horário selecionado
    const hourSelected = document.querySelector(".hour-selected");
    console.log(hourSelected);

    if (!hourSelected) {
      return alert("Selecione um horário para o agendamento.");
    }

    // recupera somente a hora
    const [hour] = hourSelected.innerText.split(":");

    // insere a hora na data
    const when = dayjs(selectedDate.value).add(hour, "hour");

    // gera um ID
    const id = new Date().getTime();

    console.log({
      id,
      name,
      when,
    });
  } catch (error) {
    alert("Não foi possível realizar o agendamento");
    console.log(error);
  }
};
