import * as moment from 'moment';

const dateFormat = 'DD/MM/YYYY';

export function resolveDate(
  payload: string | undefined,
  defaultValue?: string,
): string {
  const value = payload ?? defaultValue;

  if (!value) return moment().format(dateFormat);

  return value;
}
