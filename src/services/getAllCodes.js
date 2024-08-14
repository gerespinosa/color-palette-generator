export const getAllCodes = () => {
    const codeText = document.querySelectorAll('.codetext')
    const allCodes = []
    let allCodesString = ''
    codeText.forEach(codeTextColor => {
        allCodes.push(codeTextColor.innerText)
        allCodesString = `${allCodes[0]},${allCodes[1]},${allCodes[2]},${allCodes[3]},${allCodes[4]},${allCodes[5]}`
        navigator.clipboard.writeText(allCodesString)
        const alert = document.getElementById('alert')
        setTimeout(() => {
            alert.classList.remove('copied')
        }, 2000)
        alert.classList.add('copied')
    });
}
