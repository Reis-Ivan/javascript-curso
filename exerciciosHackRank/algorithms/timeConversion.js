function timeConversion(s) {
  const am = s.includes('AM');
  const hour = [...s.split(':')];

  let horas = Number(hour.shift());
  let horasConvertidas = '';

  if (am) {
    horas = horas === 12 ? horas - 12 : horas;
    horas = horas >= 10 ? horas : `0${horas}`;
    horasConvertidas = [horas, ...hour].join(':');

    return horasConvertidas.slice(0, 8);
  }

  horas = horas === 12 ? horas : horas + 12;
  horas = horas >= 10 ? horas : `0${horas}`;
  horasConvertidas = [horas, ...hour].join(':');
  return horasConvertidas.slice(0, 8);
}

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('07:05:45AM'));

console.log(timeConversion('12:05:45PM'));
console.log(timeConversion('12:05:45AM'));
