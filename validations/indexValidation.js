const {check} = require("express-validator")

module.exports = [
check("nombre")
.notEmpty()
.withMessage("Ingrese un nombre").bail()
.isAlpha()
.withMessage("Ingrese un nombre valido"),

check("colores")
.notEmpty()
.withMessage("Elige un color"),


check("email")
.notEmpty()
.withMessage("Ingrese un email").bail()
.isEmail()
.withMessage("Ingrese un email valido"),

check("edad")
.isNumeric()
.withMessage("Ingrese un número")
]
