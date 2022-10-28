
let hija1 = {}
let hija2 = {}

let celula = {
  key1: 666,
  key2: true,
  Key3: "Hola soy una cadena",
  mitosis() {
    for (let key in this) {
      hija1[key] = this[key]
      hija2[key] = this[key]

      delete this[key]
    }
  }
}

celula.mitosis()
console.log(celula)
console.log(hija1)
console.log(hija2)