let levelNumber = 5;
let childCount = 2;

let list = [];

for (let i = 0; i < levelNumber; i++) {
    let level = i;
    let memberCount = 2 ** i;
    let item = {
        id: i,
        parentId: i !== 0 ? i - 1 : null
    }

    list.push(item);
}