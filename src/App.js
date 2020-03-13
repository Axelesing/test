import React from 'react';
import './App.css';
import dataTree from './result';
import Test from './test';

let str = '';
let arr = JSON.parse(JSON.stringify(dataTree));

function funcTreeToString(arr) {
    str += arr.hasOwnProperty('parent') ? '' : `${arr.id},-*`;
    for (let elem of arr.children) {
        arr.children.map(i => i.parent = arr.id);
        str = str + `${elem.id},${elem.parent}*`;
        if (typeof elem == 'object') {
            funcTreeToString(elem);
        }
    }
    return str
}

function funcStringToTree(str) {
    const arrayOfStrings = str.split('*');
    const newArrayOfStrings = arrayOfStrings.map(item => item.split(','));
    let newTree = {
        "id": newArrayOfStrings[0][0],
        "children": []
    };
    newArrayOfStrings.forEach(item => {
        findOfTree(newTree, item)
    });
    return newTree;
}

function findOfTree(obj, param) {
    obj.id === param[1] ? obj.children = [...obj.children, {
        "id": param[0],
        "children": []
    }] : obj.children.map(item => findOfTree(item, param))
}

function App() {
    console.log(dataTree);
    const str = funcTreeToString(arr);
    Test(str);
    console.log(str);
    const tree = funcStringToTree(str);
    Test(tree);
    console.log(tree);

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </div>
    );
}

export default App;
