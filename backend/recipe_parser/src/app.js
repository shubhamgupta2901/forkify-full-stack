const arr = [];
for(let i =0; i<20; i++){
    arr.push(i);
}

const set = new Set();
for(let i = 0;i<400; i++)
    set.add(Math.floor(Math.random()*20));

console.log(set.size)

const iterator = set.entries();

for (let entry of iterator) {
  console.log(entry);
}