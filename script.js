let data = [];
const resultElement = document.getElementById("result");

function analyzeStudents(event) {
    event.preventDefault();
    if(data.length != 0){
        const countInCategory = {
            "Відмінник": 0,
            "Хорошист": 0,
            "Неуспішний": 0,
        };
        const unsuccessfulStudents = [];
    
        for (let i = 0; i < data.length; i++) {
            if (data[i].grades.every((grade) => grade === 5)) {
                countInCategory["Відмінник"]++;
            }
            else if (data[i].grades.some((grade) => grade === 2 || grade === 3)) {
                countInCategory["Неуспішний"]++;
                unsuccessfulStudents.push(data[i].surname);
            }
            else if (data[i].grades.every((grade) => grade === 5 || grade === 4)) {
                countInCategory["Хорошист"]++;
            }
            
        }
    
        let result = `<p>Кількість відмінників: ${countInCategory["Відмінник"]}</p>` 
            + `<p>Кількість хорошистів: ${countInCategory["Хорошист"]}</p>` 
            + `<p>Кількість неуспішних: ${countInCategory["Неуспішний"]}</p>`;
    
        result += `<strong><p>Список неуспішних:</p></strong>`;
        for (let i = 0; i < unsuccessfulStudents.length; i++) {
            result += `<p>${unsuccessfulStudents[i]}</p>`;
        }
    
        resultElement.innerHTML = result;
    }
}

function insertData(event) {
    event.preventDefault();
    const surname = document.getElementById("surname").value;
    const grades = Array.from(document.querySelectorAll(".grade")).map((node) => parseInt(node.value));

    data.push({ surname, grades });
}

function clearData(event){
    event.preventDefault();
    document.getElementById("studentForm").reset();
    resultElement.innerHTML = "";
    data = [];
}