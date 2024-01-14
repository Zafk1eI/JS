let elem = document.getElementById('elem');
let nodes = elem.childNodes;

for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].nodeType === 1 || nodes[i].nodeType === 3) {
        console.log(nodes[i]);
    }
}