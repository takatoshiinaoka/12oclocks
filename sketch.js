let timer;
let period;

function  setup() {
    createCanvas(600, 600);
    timer = new Timer();
    period = new Period();
}

function  draw() {
    background('black');
    push();
    timer.setTime();
    timer.show();
    pop();

    period.setTime();
    period.show();
}

class Clock{
    constructor(){
        this.time = '';
        this.sign = 1;
        this.color = 'white';
    }

    setTime(){}

    move(){
        let angle = map(millis() % 2000, 0, 2000, 0, PI * 2);
        rotate(sin(angle) * 0.5 * this.sign);
        translate(0, 200)
    }
    show(){
        fill(this.color);
        textSize(40)
        textAlign(CENTER);
        translate(width / 2, height / 2);
        this.move(); 
        text(this.time, 0, 0)
    }
}

class Timer extends Clock{
    constructor(...args){
        super(args);
    }
    setTime(){
        let hr = hour();
        if(hr > 12){
            hr -= 12;
        }
        this.time = hr + ':' + minute();
    }
}

class Period extends Clock{
    constructor(...args){
        super(args);
        this.sign = -1;
        this.color = 'gray';
    }
    setTime(){
        let hr = hour();
        if(hr > 12){
            this.time = 'pm';
        }else{
            this.time = 'am';
        }
    }
}