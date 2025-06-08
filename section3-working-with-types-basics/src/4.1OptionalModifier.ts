// 4.1 Optional Modifier
// Optional modifier allows you to define properties that may or may not be present in an object. using optional modifier `?` question mark after the property name.
type bonusPercent = 10 | 20 | 30;

type Salary = {
  amount: number;
  currency: 'USD' | 'EUR';
  yearlyBonus?: bonusPercent; // This property is optional, it may or may not be present
};

type Employee = {
  name: string;
  salary: Salary;
};

const JohnSalary: Salary = {
  amount: 60000,
  currency: 'USD',
  yearlyBonus: 10,
};

const john: Employee = {
  name: 'John',
  salary: {
    amount: 60000,
    currency: 'USD',
  },
};

// extraWork is an optional parameter string | undefined
// function paySalary(empl: Employee, extraWork: string| undefined) {
function paySalary(empl: Employee, extraWork?: string) {
  console.log(`Payed ${empl.salary.amount} ${empl.salary.currency} to ${empl.name}`);
  if (empl.salary.yearlyBonus) {
    console.log(`${empl.name} received a bonus of ${empl.salary.yearlyBonus}`);
  }
  if (extraWork) {
    console.log(`${empl.name} received an EXTRA bonus because of hard work in ${extraWork}`);
  }
}

paySalary(john, undefined);
paySalary(john, 'Code reviews');

