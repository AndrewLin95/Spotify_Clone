import { format, parseISO } from 'date-fns';

const formatDate = (date: string) => {
  let formattedDate = format(new Date(parseISO(date)), 'PP')
  return formattedDate;
}

export default formatDate;