// narrow down objects
type Founder =
  | {
      name: 'John Founder';
      car: 'Audi';
    }
  | {
      name: 'Bill Bicycle';
      bike: 'Wheels';
    };

function meetTheFounder(founder: Founder) {
  console.log(`Meet your founder ${founder.name}`);
  if (founder.name === 'John Founder') {
    console.log(`I drive a ${founder.car}`);
  }
  if (founder.name === 'Bill Bicycle') {
    console.log(`I don't drive so I use my bike called ${founder.bike}`);
  }
}

console.log(
  meetTheFounder({
    name: 'John Founder',
    car: 'Audi',
  })
);
// OUTPUT : Meet your fonder John Founder
// OUTPUT I drive a Audi

console.log(
  meetTheFounder({
    name: 'Bill Bicycle',
    bike: 'Wheels',
  })
);
// OUTPUT : Meet your fonder Bill Bicycle
// OUTPUT I don't drive so I use my bike called Wheels

