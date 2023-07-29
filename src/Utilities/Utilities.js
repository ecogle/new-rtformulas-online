export function ValidateNumber(value, callBack) {
  if (isNaN(value)) {
    alert("Only numeric values permitted in this field.");
  } else {
    callBack(value);
  }
}

export function ValidateNumberAs2DigitDecimal(value, callBack) {
  if (!isNaN(value)) {
    callBack(Math.round(value * 100) / 100);
  } else {
    alert("Only numeric values permitted in this field.");
  }
}

export function ValidateFiO2(value, callBack) {
  if (!isNaN(value) && parseFloat(value) > 1) {
    return value / 100;
  } else {
    return value;
  }
}
