function colorize() {
    // TODO

    let tableElements = document.querySelectorAll("table tr:nth-of-type(2n)");

    for (const tableElement of tableElements) {
        tableElement.style.background = 'teal'
    }

}