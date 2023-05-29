'use strict'

export function getOrderDate(){

    const now = new Date();

    const fullYear = now.getFullYear();
    const month = now.getMonth();
    const monthStr = (month + 1) < 10 ? `0${month + 1}` : month + 1;
    const day = now.getDate();
    const dayStr = day < 10 ? `0${day}` : day;
    const hours = now.getHours();
    const hoursStr = hours < 10 ? `0${hours}` : hours;
    const minutes = now.getMinutes();
    const minutesStr = minutes < 10 ? `0${minutes}` : minutes;

    const orderDate = `${dayStr}.${monthStr}.${fullYear} ${hoursStr}:${minutesStr}`;

    return orderDate;
}