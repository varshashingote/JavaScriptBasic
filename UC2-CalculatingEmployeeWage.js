const IS_PART_TIME=1;
const Is_Full_Time=2;
const PART_TIME_HOURS=4;
const FULL_TIME_HOURS=8;
const WAGE_PER_HOURS=20;
let empHrs =0;
empcheck=Math.floor(Math.random()*10)%3;
switch(empcheck)
{
    case IS_PART_TIME:
    empHrs=PART_TIME_HOURS;
    break;
    case Is_Full_Time:
        empHrs=FULL_TIME_HOURS;
        break;
    default:
        empHrs=0;
}
let empWage=empHrs*WAGE_PER_HOURS;
console.log("EmpWage" +empWage);