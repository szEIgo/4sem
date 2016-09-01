var array = process.argv;
// process.argv tager input argumenter med ( enten fra terminal eller intern i programmet )
var sum = 0;
for (i = 2; i <= array.length-1; i++) {

    sum += parseInt(array[i]);

}
console.log(sum);

// console.log(process.argv);

