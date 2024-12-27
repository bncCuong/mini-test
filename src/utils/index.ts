/** @format */

import { MONTHNAME } from "../constant";

export const formatDateTime = (date: number) => {
  const _date = new Date(date * 1000);
  return `${_date.getDate()} ${
    MONTHNAME[_date.getMonth()]
  } ${_date.getFullYear()}`;
};

export const formatDateMonth = (data: number) => {
  const _date = new Date(data * 1000);
  const day = String(_date.getDate()).padStart(2, "0");
  const month = String(_date.getMonth() + 1).padStart(2, "0"); // Tháng bắt đầu từ 0
  return `${day}/${month}`;
};
