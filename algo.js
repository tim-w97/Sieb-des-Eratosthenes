function start() {
    const numberRows = document.getElementById("numberRows")
    const n = parseInt(document.getElementById("numberInput").value)

    const numbers = []

    let currentDivider = 2

    let numberWasCrossedOut = true

    if(numberRows.hasChildNodes()) {
        numberRows.innerHTML = ""
    }

    // Initialisierung des Arrays
    for (let i = 2; i <= n; i++) {
        numbers.push(i)
    }

    while(numberWasCrossedOut) {
        // Zeige jede Iteration auf dem Bildschirm
        printNumbersToScreen()

        numberWasCrossedOut = false

        let currentDividerHasChanged = false

        // Streiche alle Vielfachen von „currentDivider“ heraus (Setze sie auf 0)
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] % currentDivider == 0 && numbers[i] - currentDivider > 0) {
                numbers[i] = 0
                numberWasCrossedOut = true
            }
        }

        // Finde die nächstgrößere nicht gestrichene Zahl und weise sie „currentDivider“ zu
        for (let i = 0; !currentDividerHasChanged && i < numbers.length; i++) {
            if (numbers[i] != 0 && numbers[i] > currentDivider) {
                currentDivider = numbers[i]
                currentDividerHasChanged = true
            }
        }
    }

    function printNumbersToScreen() {
        const numberRow = document.createElement("p")
        numberRow.textContent = JSON.stringify(numbers)
        numberRows.appendChild(numberRow)
    }
}