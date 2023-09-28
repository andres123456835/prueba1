document.addEventListener("DOMContentLoaded", function () {
    const shapeForm = document.getElementById("shapeForm");
    const baseInput = document.getElementById("base");
    const alturaInput = document.getElementById("altura");
    const calculateButton = document.getElementById("calculate");
    const resultInput = document.getElementById("area");
    const clearButton = document.getElementById("clear");

    calculateButton.addEventListener("click", function () {
        const shape = shapeForm.shape.value; 
        const base = parseFloat(baseInput.value);
        const altura = parseFloat(alturaInput.value);

        let area = 0;

        if (shape === "triangulo") {
            area = (base * altura) / 2;
        } else if (shape === "rectangulo") {
            area = base * altura;
        }

        resultInput.value = area.toFixed(2);
    });

    clearButton.addEventListener("click", function () {
        baseInput.value = "";
        alturaInput.value = "";
        resultInput.value = "";
    });
});
