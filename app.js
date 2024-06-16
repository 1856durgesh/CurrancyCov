const base_url="https://api.currencyapi.com/v3/latest?apikey=cur_live_PAndrGIv3yzXHlPWmg3dHCkOUKF1BZmjPRO5p64l"



const dropdowns = document.querySelectorAll(".dropdown select");
console.log(dropdowns)
const countryList = {
  AED: "AE",
  AFN: "AF",
  XCD: "AG",
  ALL: "AL",
  AMD: "AM",
  ANG: "AN",
  AOA: "AO",
  AQD: "AQ",
  ARS: "AR",
  AUD: "AU",
  AZN: "AZ",
  BAM: "BA",
  BBD: "BB",
  BDT: "BD",
  XOF: "BE",
  BGN: "BG",
  BHD: "BH",
  BIF: "BI",
  BMD: "BM",
  BND: "BN",
  BOB: "BO",
  BRL: "BR",
  BSD: "BS",
  NOK: "BV",
  BWP: "BW",
  BYR: "BY",
  BZD: "BZ",
  CAD: "CA",
  CDF: "CD",
  XAF: "CF",
  CHF: "CH",
  CLP: "CL",
  CNY: "CN",
  COP: "CO",
  CRC: "CR",
  CUP: "CU",
  CVE: "CV",
  CYP: "CY",
  CZK: "CZ",
  DJF: "DJ",
  DKK: "DK",
  DOP: "DO",
  DZD: "DZ",
  ECS: "EC",
  EEK: "EE",
  EGP: "EG",
  ETB: "ET",
  EUR: "FR",
  FJD: "FJ",
  FKP: "FK",
  GBP: "GB",
  GEL: "GE",
  GGP: "GG",
  GHS: "GH",
  GIP: "GI",
  GMD: "GM",
  GNF: "GN",
  GTQ: "GT",
  GYD: "GY",
  HKD: "HK",
  HNL: "HN",
  HRK: "HR",
  HTG: "HT",
  HUF: "HU",
  IDR: "ID",
  ILS: "IL",
  INR: "IN",
  IQD: "IQ",
  IRR: "IR",
  ISK: "IS",
  JMD: "JM",
  JOD: "JO",
  JPY: "JP",
  KES: "KE",
  KGS: "KG",
  KHR: "KH",
  KMF: "KM",
  KPW: "KP",
  KRW: "KR",
  KWD: "KW",
  KYD: "KY",
  KZT: "KZ",
  LAK: "LA",
  LBP: "LB",
  LKR: "LK",
  LRD: "LR",
  LSL: "LS",
  LTL: "LT",
  LVL: "LV",
  LYD: "LY",
  MAD: "MA",
  MDL: "MD",
  MGA: "MG",
  MKD: "MK",
  MMK: "MM",
  MNT: "MN",
  MOP: "MO",
  MRO: "MR",
  MTL: "MT",
  MUR: "MU",
  MVR: "MV",
  MWK: "MW",
  MXN: "MX",
  MYR: "MY",
  MZN: "MZ",
  NAD: "NA",
  XPF: "NC",
  NGN: "NG",
  NIO: "NI",
  NPR: "NP",
  NZD: "NZ",
  OMR: "OM",
  PAB: "PA",
  PEN: "PE",
  PGK: "PG",
  PHP: "PH",
  PKR: "PK",
  PLN: "PL",
  PYG: "PY",
  QAR: "QA",
  RON: "RO",
  RSD: "RS",
  RUB: "RU",
  RWF: "RW",
  SAR: "SA",
  SBD: "SB",
  SCR: "SC",
  SDG: "SD",
  SEK: "SE",
  SGD: "SG",
  SKK: "SK",
  SLL: "SL",
  SOS: "SO",
  SRD: "SR",
  STD: "ST",
  SVC: "SV",
  SYP: "SY",
  SZL: "SZ",
  THB: "TH",
  TJS: "TJ",
  TMT: "TM",
  TND: "TN",
  TOP: "TO",
  TRY: "TR",
  TTD: "TT",
  TWD: "TW",
  TZS: "TZ",
  UAH: "UA",
  UGX: "UG",
  USD: "US",
  UYU: "UY",
  UZS: "UZ",
  VEF: "VE",
  VND: "VN",
  VUV: "VU",
  YER: "YE",
  ZAR: "ZA",
  ZMK: "ZM",
  ZWD: "ZW",
};

const btn = document.querySelector("form button")

const fromCurr=document.querySelector(".from select");
const toCurr=document.querySelector(".to select");
const msg=document.querySelector(".msg")


for(let select of dropdowns){
  for(currCode in countryList){
    let newOptions = document.createElement("option");
    newOptions.innerText=currCode;
    newOptions.value=currCode;
    if(select.name==='from' && currCode==='USD'){
      newOptions.selected="selected"
    }
    else if(select.name==='to' && currCode==='INR'){
      newOptions.selected="selected"
    }
    select.append(newOptions);
    }

    select.addEventListener("change",(evt)=>{// it gives us the select 
      updataFlage(evt.target); // evt.target gives where change hua hai 
    })
}

const updataFlage = (element) =>{
  // extract the currency code  
  console.log(element)
  let currCode=element.value;
  console.log(currCode)
  let contryCode=countryList[currCode];
  let newSrc=`https://flagsapi.com/${contryCode}/flat/64.png`
  let img=element.parentElement.querySelector("img");
  img.src=newSrc
}

btn.addEventListener("click",(evt)=>{
  evt.preventDefault();
  let ammount=document.querySelector(".ammount input");
  amtVal=ammount.value;
  if(amtVal==="" || amtVal<1)  {
    amtVal=1;
    ammount.value="1";
  }

  fetch(base_url)
  .then((responce)=>{
    return responce.json();
  }).then((responce)=>{
   return responce[Object.keys(responce)[1]];
  }).then((responce)=>{
    let fromVal=responce[fromCurr.value].value;
    let toVal=responce[toCurr.value].value;
    let ammount=document.querySelector(".ammount input");
    amtVal=ammount.value;
    let final=(toVal*amtVal/fromVal);
    let result=`${amtVal} ${fromCurr.value}=${final} ${toCurr.value}`
    document.querySelector('.msg').innerHTML=result
  })
})


