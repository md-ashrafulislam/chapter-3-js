/* let firstName = "";
let lastName = "";
let nickName = "SuperCoder";

alert( firstName || lastName || nickName || "Anonymous"); // SuperCoder */

/* alert( 1 || 0 ); // 1 (1 is truthy)

alert( null || 1 ); // 1 (1 is the first truthy value)
alert( null || 0 || 1 ); // 1 (the first truthy value)

alert( undefined || null || 0 ); // 0 (all falsy, returns the last value) */

/* let hour = 12;
let isWeekend = true;

if (hour < 10 || hour > 18 || isWeekend) {
  alert( 'The office is closed.' ); // it is the weekend
} */
/* alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false */

/* true || alert("not printed");
false || alert("printed"); */

// alert( alert(1) || 2 || alert(3) );

// console.log(null || 2 && 8 || 9)

/* * DLHour = DeadLineHour
 * DLMinute = DeadLineMinute
 * CrHour = CurrentHour
 * CrMinute = CurrentMinute
 */
const Timer = (DLHour, DLMinute) => {
  //* Generate Current Hours & Minutes
  const date = new Date(),
    CrHour = date.getHours(),
    CrMinute = date.getMinutes();
  //* Normal Calculation
  let hour = DLHour - CrHour,
    minute = DLMinute - CrMinute;
  //* Hour & Minute Generator
  if (DLMinute < CrMinute) {
    minute = DLMinute + 60 - CrMinute;
    DLHour < CrHour || (DLHour === CrHour && DLMinute < CrMinute)
      ? (hour = DLHour + 23 - CrHour)
      : (hour = DLHour - 1 - CrHour);
  } else if (DLHour < CrHour) {
    hour = DLHour + 24 - CrHour;
  }
  return `Left Time -> ${hour} hour ${minute} minutes
Dead Line -> ${DLHour}:${DLMinute === 0 ? "00" : DLMinute}
Current Time -> ${CrHour}:${CrMinute}`;
};
console.log(Timer(14, 10)); // 24 - hour clock
(edited)
:heart:
1


Tarikul Islam  6:18 PM
Thanks vai
:heart:
1


Fahim Faisal  6:19 PM
You are always welcome brother and thank you also
Tarikul Islam
Thanks vai
Posted in #frontend-development | Yesterday at 6:18 PM | View message

Fahim Faisal  9:45 PM
/*
 * dlHour = DeadLineHour
 * dlMinute = DeadLineMinute
 * dlFormat = DeadLineFormat -> am / pm
 * crHour = CurrentHour
 * crMinute = CurrentMinute
 * crFormat = CurrentFormat -> am / pm
*/
const Timer = (dlHour, dlMinute, dlFormat) => {
  //* Generate Current Hours & Minutes
  const date = new Date(),
    crMinute = date.getMinutes();
  let crHour = date.getHours();
  crFormat = "am";
  //* am & pm generator
  if (crHour > 11) {
    crHour === 12 ? crHour : (crHour -= 12);
    crFormat = "pm";
  } else {
    crHour === 0 ? (crHour += 12) : crHour;
  }
  //* Switch to 0 - 24 hour [0, 12, 24]
  let Switch = 0;
  if (
    (crFormat === "pm" && dlFormat === "pm") ||
    (crFormat === "am" && dlFormat === "am")
  ) {
    if (dlHour === 12) {
      Switch += 12;
    } else {
      dlHour > crHour ? Switch : (Switch += 24);
    }
  } else if (
    (crFormat === "pm" && dlFormat === "am") ||
    (crFormat === "am" && dlFormat === "pm")
  ) {
    dlHour === 12 && dlFormat === "am" ? Switch : (Switch += 12);
  }
  //* Normal Calculation
  let hour = dlHour + Switch - crHour,
    minutes = dlMinute - crMinute;
  //* Hour & Minute Generator
  if (dlMinute < crMinute) {
    minutes = dlMinute + 60 - crMinute;
    dlHour < crHour || (dlHour === crHour && dlMinute < crMinute)
      ? (hour = dlHour + Switch - 1 - crHour)
      : (hour = dlHour + Switch - 1 - crHour);
  } else if (dlHour < crHour) {
    hour = dlHour + Switch - crHour;
  }
  return `Left Time -> ${hour} hour ${minutes} minutes
Dead Line -> ${dlHour}:${dlMinute === 0 ? "00" : dlMinute} ${dlFormat}
Current Time -> ${crHour}:${crMinute} ${crFormat}`;
}; .*/