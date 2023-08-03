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

export function ValidateBaseExcess(value, callBack) {
  debugger;
  if (!isNaN(parseInt(value))) {
    callBack(parseInt(value));
  } else {
    callBack("");
    alert("Not a valid value");
  }
}

export function HendersonHasselback(paco2, hco) {
  let temp = 6.1 + Math.log10(hco / (0.0308 * paco2));
  return Math.round(temp * 100) / 100;
}

export function OxygenContent(hgb, sao2, paco2) {
  let temp = 1.36 * hgb * (sao2 / 100) + 0.003 * paco2;
  return Math.round(temp * 10) / 10;
}

export function AlveolarAirEquation(fio2, paco2) {
  let temp = ValidateFiO2(fio2) * (760 - 47) - paco2 / 0.8;
  return Math.round(temp);
}

export function PFRatio(pao2, fio2) {
  let temp = pao2 / ValidateFiO2(fio2);
  return Math.round(temp);
}
