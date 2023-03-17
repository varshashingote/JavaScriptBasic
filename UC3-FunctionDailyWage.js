function getWorkingHours(empcheck)
{
    switch(empcheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            case Is_Full_Time:
                return FULL_TIME_HOURS;
                default:
                    return 0;
    }
}
let empHrs=0;
let empcheck=Math.floor(Math.random()* 10 ) % 3;
empHrs=getWorkingHours(empcheck);
let empWage=empHrs*WAGE_PER_HOURS;
console.log("Emp Wage:" + empWage);