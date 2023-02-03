const input = document.querySelector(".input")
// const selict = document.querySelector('.srlict')
// const option = document.querySelector(".option")
const btn = document.querySelector('.btn')
const box = document.querySelector('.box')


// let dushanba = "dushanba"
// let seshanba = "seshanba"
// let chorshanba = "chorshanba"
// let payshanba = "payshanba"
// let juma = "juma"
// let shanba = "shanba"
// let yakshanba = "yakshanba"


btn.addEventListener('click', function () {
    if (input.value == 1) {
        return box.textContent = "dushanba"
    }if (input.value == 2) {
        return box.textContent = "seshanba"
    }if (input.value == 3) {
        return box.textContent = "chorshanba"
    }if (input.value == 4) {
        return box.textContent = "payshanba"
    }if (input.value == 5) {
        return box.textContent = "juma"
    }if (input.value == 6) {
        return box.textContent = "shanba"
    }if (input.value == 7) {
        return box.textContent = "yakshanba"
    }else if (input.value > 7 || input.value == 0) {
        return box.textContent = "1-7 kirting"
    }
})

