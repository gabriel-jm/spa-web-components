export function css(strings, ...values) {
  const fullCss = strings.reduce((acc, str, index) => {
    return acc + str + (values[index] || "");
  }, "")

  return fullCss
}
