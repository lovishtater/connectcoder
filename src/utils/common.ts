export const convertDuration = (duration: number) => {
  if (duration < 60) {
    return `${duration} seconds`;
  } else if (duration < 86400) {
    var hours = Math.floor(duration / 3600);
    var minutes = Math.floor((duration % 3600) / 60);
    if (minutes === 0) {
      return hours + ' hours ';
    }
    return hours + ' hours ' + minutes + ' minutes ';
  } else {
    var days = Math.floor(duration / 86400);
    var hours = Math.floor((duration % 86400) / 3600);
    if (hours === 0) {
      return days + ' days ';
    }
    return days + ' days ' + hours + ' hours ';
  }
};

export const round = (value: number, precision: number) => {
  var multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
};
