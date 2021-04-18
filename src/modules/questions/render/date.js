export default function date(utcDate) {
  var a = new Date(utcDate),
    date = a.toLocaleDateString(),
    time = a.toLocaleTimeString()

  return `${time} ${date}`;
}

