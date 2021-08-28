class Security {

    constructor(){

        this.access1 = createInput("Code1")
        this.access1.position(100,90);
        this.access1.style('background', 'white');  

        this.button1 = createButton('Check');
        this.button1.position(100,120);
        this.button1.style('background', 'lightgrey'); 

        this.access2 = createInput("Code2")
        this.access2.position(100,190);
        this.access2.style('background', 'white');  

        this.button2 = createButton('Check');
        this.button2.position(100,220);
        this.button2.style('background', 'lightgrey');

        this.access3 = createInput("Code3")
        this.access3.position(100,420);
        this.access3.style('background', 'white');  

        this.button3 = createButton('Check');
        this.button3.position(100,450);
        this.button3.style('background', 'lightgrey');

        this.access4 = createInput("Code4")
        this.access4.position(100,300);
        this.access4.style('background', 'white');  

        this.button4 = createButton('Check');
        this.button4.position(100,330);
        this.button4.style('background', 'lightgrey');

        this.access5 = createInput("Code5")
        this.access5.position(100,540);
        this.access5.style('background', 'white');  

        this.button5 = createButton('Check');
        this.button5.position(100,570);
        this.button5.style('background', 'lightgrey');

        this.access6 = createInput("Code1")
        this.access6.position(400,90);
        this.access6.style('background', 'white');  

        this.button6 = createButton('Check');
        this.button6.position(400,120);
        this.button6.style('background', 'lightgrey');

        this.access7 = createInput("Code2")
        this.access7.position(400,190);
        this.access7.style('background', 'white');  

        this.button7 = createButton('Check');
        this.button7.position(400,220);
        this.button7.style('background', 'lightgrey');

        this.access8 = createInput("Code3")
        this.access8.position(400,300);
        this.access8.style('background', 'white');  

        this.button8 = createButton('Check');
        this.button8.position(400,330);
        this.button8.style('background', 'lightgrey');

        this.access9 = createInput("Code4")
        this.access9.position(400,420);
        this.access9.style('background', 'white');  

        this.button9 = createButton('Check');
        this.button9.position(400,450);
        this.button9.style('background', 'lightgrey');

        this.access10 = createInput("Code5")
        this.access10.position(400,540);
        this.access10.style('background', 'white');  

        this.button10 = createButton('Check');
        this.button10.position(400,570);
        this.button10.style('background', 'lightgrey');

        this.button11 = createButton('Play');
        this.button11.position(600,90);
        this.button11.style('background', 'white');

        this.button12 = createButton('Play');
        this.button12.position(600,190);
        this.button12.style('background', 'white');

        this.button13 = createButton('Play');
        this.button13.position(600,300);
        this.button13.style('background', 'white');

        this.button14 = createButton('Play');
        this.button14.position(600,420);
        this.button14.style('background', 'white');

        this.button15 = createButton('Play');
        this.button15.position(600,540);
        this.button15.style('background', 'white');

        this.button16 = createButton('View More');
        this.button16.position(275,650);
        this.button16.style('background', 'white');

        

      
     
        
    }

   
    display(){

        this.button1.mousePressed(() => {
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++;
            }
        });

        this.button2.mousePressed(() => {
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++;
            }
        });

        this.button3.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button3.hide();
                this.access3.hide();
                score++;
            }
        });

        this.button4.mousePressed(() => {
            if(system.authenticate(accessCode4,this.access4.value())){
                this.button4.hide();
                this.access4.hide();
                score++;
            }
        });

        this.button5.mousePressed(() => {
            if(system.authenticate(accessCode5,this.access5.value())){
                this.button5.hide();
                this.access5.hide();
                score++;
            }
        });

        this.button6.mousePressed(() => {
            if(system.authenticate(accessCode6,this.access6.value())){
                this.button6.hide();
                this.access6.hide();
                this.button11.hide();
                earscore++;
            }
        });

        this.button7.mousePressed(() => {
            if(system.authenticate(accessCode7,this.access7.value())){
                this.button7.hide();
                this.access7.hide();
                this.button12.hide();
                earscore++;
            }
        });

        this.button8.mousePressed(() => {
            if(system.authenticate(accessCode8,this.access8.value())){
                this.button8.hide();
                this.access8.hide();
                this.button13.hide();
                earscore++;
            }
        });

        this.button9.mousePressed(() => {
            if(system.authenticate(accessCode9,this.access9.value())){
                this.button9.hide();
                this.access9.hide();
                this.button14.hide();
                earscore++;
            }
        });

        this.button10.mousePressed(() => {
            if(system.authenticate(accessCode10,this.access10.value())){
                this.button10.hide();
                this.access10.hide();
                this.button15.hide();
                earscore++;
            }
        });

        this.button11.mousePressed(() => {
        
            sound1.play();
             
        });

        this.button12.mousePressed(() => {
        
            sound2.play();
             
        });

        this.button13.mousePressed(() => {
        
            sound3.play();
             
        });

        this.button14.mousePressed(() => {
        
            sound4.play();
             
        });

        this.button15.mousePressed(() => {
        
            sound5.play();
             
        });

       

       
       
        
    }
}