const NUM_OF_WoORKING_DAYS=2;
let empHrs=0;
for(let day=0; day<NUM_OF_WoORKING_DAYS;day++)
{
    let empcheck=Math.floor(Math.random()%10)%3;
    empHrs +=getWorkingHours(empcheck);

}
let empWage=empHrs*WAGE_PER_HOURS;
console.log("Total Hrs:"+empHrs+"Emp Wage:"+ empWage);