class Rectangle
{
    constructor(height, width)
    {
        this.height = height;
        this.width = width;
    }

    getP()
    {
        return (this.width + this.height) * 2;
    }

    getS()
    {
        return this.width * this.height;
    }


}

let height = +prompt("nhập chiều cao");
let width = +prompt("nhập chiều rộng");
let rectangle = new Rectangle(height, width);

let perimeter = rectangle.getP();

let acreage = rectangle.getS();

document.write(perimeter + "," + acreage);


function createRectangle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = '#16cbc5';
    ctx.fillRect(50, 80, width, height);

}
createRectangle();
