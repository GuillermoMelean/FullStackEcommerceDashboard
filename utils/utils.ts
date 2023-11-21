import { format } from "date-fns";
import pt from "date-fns/locale/pt";

export const formatDate: React.FC<Date> = (date) => {
  return format(date, "dd MMM yyyy", { locale: pt });
};
