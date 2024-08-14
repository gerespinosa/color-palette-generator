const chars = ['A', 'B', 'C', 'D', 'E', 'F']

let positions = []
let randomIndex

function getChar() {
    randomIndex = Math.floor(Math.random() * 6);
    return chars[randomIndex]
}

function getNumber() {
    return (Math.random() * 10).toString().substring(0, 1)
}

export function getCode() {

    for (let i = 0; i < 6; i++) {
        let charOrNumber = Math.floor((Math.random() * 2))
        positions[i] = (charOrNumber != 1 ? getNumber() : getChar())
    }

    const codeString = `#${positions[0]}${positions[1]}${positions[2]}${positions[3]}${positions[4]}${positions[5]}`

    console.log(codeString)
    return codeString
}

