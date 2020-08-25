const mapping = {
  jan: 1,
  fev: 2,
  mar: 3,
  abr: 4,
  mai: 5,
  jun: 6,
  jul: 7,
  ago: 8,
  set: 9,
  out: 10,
  nov: 11,
  dez: 12,
}

export default function dateOrdinate(a, b) {
  if (a.year < b.year) {
    return -1;
  }

  if (a.year > b.year) {
    return 1;
  }

  if (mapping[a.month] < mapping[b.month]) {
    return -1;
  }

  if (mapping[a.month] > mapping[b.month]) {
    return 1;
  }

  return 0;
}
