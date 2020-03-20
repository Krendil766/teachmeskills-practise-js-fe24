// Создаем объект с именем shape, который имеет свойство type и метод getType ().

// Определяем функцию конструктора Triangle (), прототип которой - shape. Объекты, созданные с помощью Triangle (), должны иметь три собственных свойства - a, b и c, представляющих длины сторон треугольника.

// Добавить новый метод в прототип с именем getPerimeter ()

function Triangle(a, b, c) {
    this.a = a
    this.b = b
    this.c = c


}

let shape = {
    type: 'triangle',
    getType: function() {
        return this.type
    },
    __proto__: new Triangle


}
Triangle.prototype = shape;
Triangle.prototype.getPerimeter = function() {
    return this.a + this.b + this.c
}