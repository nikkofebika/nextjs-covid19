export const sum = (key, props) => {
  if (props.isGlobal) {
    switch (key) {
      case "positif":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Active;
        }, 0);
        break;
      case "sembuh":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Recovered;
        }, 0);
        break;
      case "meninggal":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Deaths;
        }, 0);
        break;
      case "dirawat":
        return props.data.reduce((sum, a) => {
          return sum + a.attributes.Confirmed;
        }, 0);
        break;
      default:
        break;
    }
  } else {
    switch (key) {
      case "positif":
        return props.data[0].positif;
        break;
      case "sembuh":
        return props.data[0].sembuh;
        break;
      case "meninggal":
        return props.data[0].meninggal;
        break;
      case "dirawat":
        return props.data[0].dirawat;
        break;
      default:
        break;
    }
  }
};

export const lineChrt = (props) => {
  const monthLabel = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "Mei",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Des",
  ];
  let nowDate = new Date();
  let day = null;
  let month = null;
  let year = null;
  let label = [];
  let positif = [];
  let sembuh = [];
  let meninggal = [];
  let active = [];
  let data = [];
  for (let value of props.statistik) {
    nowDate = new Date(value.Date);
    day = nowDate.getDay();
    month = nowDate.getMonth();
    year = nowDate.getFullYear();
    label.push(day + " " + monthLabel[Math.abs(month)]);
    positif.push(value.Confirmed);
    sembuh.push(value.Recovered);
    meninggal.push(value.Deaths);
    active.push(value.Active);
  }
  data = {
    label: label,
    positif: positif,
    sembuh: sembuh,
    meninggal: meninggal,
    active: active,
  };
  return data;
};
