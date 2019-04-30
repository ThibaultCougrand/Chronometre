class chrono {
    
    // constructeur
    constructor(){
        this.oneTenthSecond = 0;
        this.second = 0;
        this.minute = 0;
        this.interval;
    }
    
    /* ============================== */
    
    // fonction principale (gère le déroulement du temps)
    run() {
        this.oneTenthSecond++;
        if (this.oneTenthSecond === 10) {
            this.oneTenthSecond = 0;
            this.second++;
            if (this.second === 60) {
                this.second = 0;
                this.minute++;
            }
        }
        this.displayTime();
    }
    
    /* ============================== */
    
    displayTime() {
        $(".time").text(this.minute+":"+this.second+":"+this.oneTenthSecond);
    }
    
    /* ============================== */
    
    // lance le chrono
    start() {
        this.interval = setInterval(this.run.bind(this), 100);
    }
    // met le chrono sur pause
    pause() {
        clearInterval(this.interval);
    }
    // remet le chrono à zero
    stop() {
        clearInterval(this.interval);
        this.oneTenthSecond = 0;
        this.second = 0;
        this.minute = 0;
    }
}

let myChrono = new chrono();

myChrono.displayTime();

$(".button-start").on("click", function() {
    myChrono.start();
    $(this).prop("disabled", true);
});

$(".button-pause").on("click", function() {
    myChrono.pause();
    $(".button-start").prop("disabled", false);
});

$(".button-stop").on("click", function() {
    myChrono.stop();
    $(".button-start").prop("disabled", false);
    myChrono.displayTime();
});

