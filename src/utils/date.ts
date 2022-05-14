import dateFnsFormat from 'date-fns/format';
import dateFnsFormatISO from 'date-fns/formatISO';
import ruLocale from 'date-fns/locale/ru';

type dateType = Date | number;

const format = (date: dateType, pattern: string) => {
  return dateFnsFormat(date, pattern, {locale: ruLocale});
};

const formatISO = (date: dateType, format?: 'basic' | 'extended') => {
  return dateFnsFormatISO(date, {format});
};

export const formatToBasicView = (date: dateType) => {
  return format(date, 'dd MMMM yyyy');
};

export const formatToDottedView = (date: dateType) => {
  return format(date, 'dd.MM.yy');
};

export const formatToISOView = (date: dateType) => {
  return formatISO(date);
};