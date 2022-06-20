let rectangle=function (width,height){
    this.width= width;
    this.height=height;
    this.getWidth=function (){
        return width;
    }
    this.getheight=function (){
        return height;
    }
    this.getArea=function (){
        return width*height;
    }
    this.getperimeter=function (){
        return (width+height)*2;
    }
}
let result=new rectangle(14,20);
let width=result.getWidth();
let height=result.getheight();
let area=result.getArea();
let perimeter=result.getperimeter();
alert('Chiều rộng = '+ width + ', chiều dài = '+height+', S = '+ area + ', chu vi = '+perimeter);


function drawrect(){
    let canvas= document.getElementById('mycanvas');
    let ctx =canvas.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(200,100);
    ctx.stroke();
}
drawrect();

