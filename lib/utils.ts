import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { format } from "date-fns";
import pt from "date-fns/locale/pt";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const dateFormatter = new Intl.DateTimeFormat("pt-pt", {
  dateStyle: "medium",
  timeZone: "UTC",
});

export const currencyFormatter = new Intl.NumberFormat("pt-pt", {
  style: "currency",
  currency: "EUR",
});

// Define a function that takes a date as an argument
// and returns a string that represents how long ago the date was
export const timeAgo = (date: Date) => {
  const seconds = Math.floor((new Date().valueOf() - date.valueOf()) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return dateFormatter.format(date);
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 12) {
    return dateFormatter.format(date);
  }

  if (interval > 1) {
    return "há " + interval + " meses";
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return "há " + interval + " dias";
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return "há " + interval + " horas";
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return "há " + interval + " minutos";
  }

  if (seconds < 10) return "agora mesmo";

  return "há " + Math.floor(seconds) + " segundos";
};
