export function getAppState(data) {
  const count = data.length;
  const width = (1260 - 20 * (count + 1)) / count;
  const maxAmount = Math.max(
    ...data.map((item) => {
      let out = item.amount;
      if (typeof item.amount2 !== "undefined") {
        out = Math.max(item.amount, item.amount2);
      }
      return out;
    })
  );
  const maxTickLabelY =
    maxAmount + 5 * Math.pow(10, Math.floor(Math.log10(maxAmount)) - 1);
  const step = Math.floor(maxTickLabelY / 5);

  const tickLabelsYArray = Array(6)
    .fill(0)
    .map((v, i) => (v + step * i).toLocaleString());

  const heightBars = {};
  data.forEach((item) => {
    if (typeof item.amount2 !== "undefined") {
      heightBars[item.id] = {
        value1: Math.round((item.amount * 400) / maxTickLabelY),
        value2: Math.round((item.amount2 * 400) / maxTickLabelY),
      };
    } else {
      heightBars[item.id] = {
        value1: Math.round((item.amount * 400) / maxTickLabelY),
      };
    }
  });

  return {
    data: data,
    width: Math.round(width),
    tickLabelsY: tickLabelsYArray.reverse(),
    height: heightBars,
    isLoading: false,
    typeTransaction: "outgo",
    typeCategory: "",
    categories: {},
  };
}
