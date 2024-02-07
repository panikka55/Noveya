function generateProgrammingText() {
    const name = document.getElementById('name').value;
    const alias = document.getElementById('alias').value;
    const age = document.getElementById('age').value;

    const programmingText = `Name: ["${name}"], Alias: ["${alias}"], Age: ["${age}"]`;

    document.getElementById('output').innerHTML = programmingText;
}
