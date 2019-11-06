let levelNumber = 5;
let childCount = 2;
let idStart = 0;

let list = [];

for (let level = 0; level < levelNumber; level++) {

    let memberCount = childCount ** level;

    for (let j = 0; j <= memberCount; j++ , idStart++) {
        let item = {
            id: idStart,
            parentId: level !== 0 ? level - 1 : null
        }
        list.push(item);
    }




}

console.log(list);