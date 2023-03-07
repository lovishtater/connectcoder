export const convertDuration = (duration: number) => {
  if (duration < 60) {
    return `${duration} seconds`;
  } else if (duration < 86400) {
    var hours = duration / 3600;
    var minutes = (duration % 3600) / 60;
    if (minutes === 0) {
      return hours + ' hours ';
    }
    return hours + ' hours ' + minutes + ' minutes ';
  } else {
    var days = duration / 86400;
    var hours = (duration % 86400) / 3600;
    if (hours === 0) {
      return days + ' days ';
    }
    return days + ' days ' + hours + ' hours ';
  }
};
