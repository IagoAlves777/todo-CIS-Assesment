import moment from "moment";
import momentTimezone from "moment-timezone";

import "moment/locale/pt-br";
moment.locale("pt-br");

export const formatDate = (date: Date) => {
  return moment(date).format("DD/MM/YYYY");
};

export const formatHour = (date: Date) => {
  return moment(date).format("HH:mm");
};

export const formatDateAndHour = (date: Date) => {
  return `${formatDate(date)} ${formatHour(date)}`;
};

export const formatToIso = (date: Date) => {
  return moment(date).format("YYYY-MM-DD");
};

export const formatTimezone = (date: Date) => {
  return momentTimezone(date).tz("America/Sao_Paulo").format();
};
