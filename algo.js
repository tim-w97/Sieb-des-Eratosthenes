function start() {
    const numberRows = document.getElementById("numberRows")
    const n = parseInt(document.getElementById("numberInput").value)

    const numbers = []

    let currentDivider = 2

    let currentDividerChanged = true

    if(numberRows.hasChildNodes()) {
        numberRows.innerHTML = ""
    }

    // Initialisierung des Arrays
    for (let i = 2; i <= n; i++) {
        numbers.push(i)
    }

    // Zeige den Initialzustand des Arrays auf dem Bildschirm
    printNumbersToScreen()

    while(currentDividerChanged) {
        // Streiche alle Vielfachen von „currentDivider“ heraus (Setze sie auf 0)
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % currentDivider == 0 && numbers[i] - currentDivider > 0) {
                numbers[i] = 0
            }
        }

        currentDividerChanged = false

        // Finde die nächstgrößere nicht gestrichene Zahl und weise sie „currentDivider“ zu
        for (let i = 0; !currentDividerChanged && i < numbers.length; i++) {
            if (numbers[i] != 0 && numbers[i] > currentDivider) {
                currentDivider = numbers[i]
                currentDividerChanged = true
            }
        }

        // Zeige jede Iteration auf dem Bildschirm
        printNumbersToScreen()
    }

    function printNumbersToScreen() {
        const numberRow = document.createElement("p")
        numberRow.textContent = JSON.stringify(numbers)
        numberRows.appendChild(numberRow)
    }
}