import { isValid, parseISO, parse, isBefore, isEqual, isAfter } from "date-fns";
import { id } from "date-fns/locale";
import { DateRange } from "react-day-picker";
import { format as formatter } from "date-fns-tz";

const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

export const getDate = (date: Date | string) => {
  if (!date) return undefined;
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  if (!isValid(parsedDate)) return undefined;
  return parsedDate;
};

export const formatDate = (
  date: Date | string,
  format: string = "dd MMMM yyyy", // how to format: https://date-fns.org/v3.6.0/docs/format
  invalidText: string = "Invalid date"
) => {
  const parsedDate = getDate(date);
  if (!parsedDate) return invalidText;
  return formatter(parsedDate, format, { locale: id, timeZone: userTimezone });
};

export const formatStringDate = (
  value: string,
  valueFormat: string = "MM-yyyy",
  returnFormat: string = "MMMM yyyy",
  invalidText: string = "Invalid date"
) => {
  if (value) {
    const parseStringDate = parse(value, valueFormat, new Date());
    return formatter(parseStringDate, returnFormat, {
      locale: id,
      timeZone: userTimezone,
    });
  }
  return invalidText;
};

export const formatDateRange = (date?: DateRange, format?: string) => {
  const value = `${!!date?.from ? formatDate(date.from, format) : ""} ${!!date?.to ? `- ${formatDate(date.to, format)}` : ""
    }`.trim();
  return value;
};

export const isSameOrBefore = (
  date: Date | string,
  dateToCompare: Date | string
) => {
  const parsedDate = getDate(date);
  const parsedDateToCompare = getDate(dateToCompare);
  if (!parsedDate) throw new Error(`isSameOrBefore: Unsupported date: ${date}`);
  if (!parsedDateToCompare)
    throw new Error(
      `isSameOrBefore: Unsupported date to compare: ${dateToCompare}`
    );

  return (
    isBefore(parsedDate, parsedDateToCompare) ||
    isEqual(parsedDate, parsedDateToCompare)
  );
};

export const isSameOrAfter = (
  date: Date | string,
  dateToCompare: Date | string
) => {
  const parsedDate = getDate(date);
  const parsedDateToCompare = getDate(dateToCompare);
  if (!parsedDate) throw new Error(`isSameOrAfter: Unsupported date: ${date}`);
  if (!parsedDateToCompare)
    throw new Error(
      `isSameOrAfter: Unsupported date to compare: ${dateToCompare}`
    );

  return (
    isAfter(parsedDate, parsedDateToCompare) ||
    isEqual(parsedDate, parsedDateToCompare)
  );
};
