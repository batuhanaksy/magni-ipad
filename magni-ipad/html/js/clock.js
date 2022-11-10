var Foccusedclock = null;

$(document).on('click', '.clock-app-account', function(e){
    var copyText = document.getElementById("iban-account");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");


});


$(document).on('click', '#clear-clock', function(event){
    $(".transactions-item-div").remove()

    $.post("http://qb-phone/ClearclockData");
})

var CurrentTab = "accounts";

$(document).on('click', '#new-alarm', function(e){
    e.preventDefault();

});

$(document).on('click', '.alarm-item > i', function(e){
    e.preventDefault();
    var id = $(this).data("id")
    $.post("http://qb-phone/DeleteAlarm", JSON.stringify({id: id}));
    $("#alarm-item-"+ id).animate({
        "margin-left": -50+"vh"
    }, 350, function(){
        $("#alarm-item-"+id).remove();

    });
});

$(document).on('click', '.clock-app-header-button', function(e){
    e.preventDefault();

    var PressedObject = this;
    var PressedTab = $(PressedObject).data('headertype');
    // console.log(PressedObject)
    if (CurrentTab != PressedTab) {
        var PreviousObject = $(".clock-app-header").find('[data-headertype="'+CurrentTab+'"]');

        // if (PressedTab == "invoices") {
        //     $(".clock-app-"+CurrentTab).animate({
        //         left: -30+"vh"
        //     }, 250, function(){
        //         $(".clock-app-"+CurrentTab).css({"display":"none"})
        //     });
        //     $(".clock-app-"+PressedTab).css({"display":"block"}).animate({
        //         left: 0+"vh"
        //     }, 250);
        // } else if (PressedTab == "accounts") {
        //     $(".clock-app-"+CurrentTab).animate({
        //         left: 30+"vh"
        //     }, 250, function(){
        //         $(".clock-app-"+CurrentTab).css({"display":"none"})
        //     });
        //     $(".clock-app-"+PressedTab).css({"display":"block"}).animate({
        //         left: 0+"vh"
        //     }, 250);
        // } else if (PressedTab == "transfer") {
            
        // }
        $(".clock-app-"+CurrentTab).animate({
            left: 30+"vh"
        }, 250, function(){
            $(".clock-app-"+CurrentTab).css({"display":"none"})
        });
        $(".clock-app-"+PressedTab).css({"display":"block"}).animate({
            left: 0+"vh"
        }, 250);

        $(PreviousObject).removeClass('clock-app-header-button-selected');
        $(PressedObject).addClass('clock-app-header-button-selected');
        setTimeout(function(){ CurrentTab = PressedTab; }, 300)
    }
})



function LoadClock(data) {
    $(".clock-transactions-item-div").html("");
    // $("#incoming-main-div").html('');

    $.each(data, function (k, v) { 
        if (v != undefined || v != null) {
            var content = '<div id="alarm-item-'+ k +'" class="alarm-item"><p class="alarm-clock">'+v+'</p><br><p style="height: 0; margin-top: -3.5vh; margin-left: .25vh; color: rgb(185, 185, 185);">Alarm</p><i data-id="' + k + '" class="fas fa-times-circle"></i></div>'
            $(".clock-transactions-item-div").append(content);
        }
    });
}

var Cronometer = {
    started: false,
}
$(document).on('click', '.start-stop', function(e){
    if (!Cronometer.started) {
        $(".start-stop").html("STOP")
        $(".reset-tur").html("TOUR")
        $(".start-stop").css({
            "background-color": "#701729",
            color: "#fc3158"
        })
        // if (Cronometer.tempTimer == 0) {
        Cronometer.baseTimer = Date.now()
        // }
        myFunction()
    } else {
        $(".start-stop").html("START")
        if (tourCount != 1) {
            $(".reset-tur").html("RESET")
        }

        $(".start-stop").css({
            "background-color": "rgb(21, 87, 37)",
            color: "rgb(39, 184, 75)"
        })
        myStopFunction()
    }
    Cronometer.started = !Cronometer.started
});

var tourCount = 1
$(document).on('click', '.reset-tur', function(e){
    var currentTime = $("#cronometer").html();
    if (currentTime != "00:00,00") {
        $(".clock-app-invoices-list").append('<div class="clock-app-invoice"><p>'+tourCount+' Tour&nbsp </p><span>'+ currentTime +'</span></div>');
        tourCount += 1    
    }
    if ($(".reset-tur").html() == "RESET") {
        $("#cronometer").html("00:00,00")
        $(".reset-tur").html("TOUR")
        $(".clock-app-invoices-list").html("")
        tourCount = 1
    }
});

var myVar = 0;
var count = 0;
function myFunction() {
    myVar =  setTimeout(function(){ 
        myFunction(); 
        let nowTimer = Date.now()
        var text = "00:00,00"; 
        var diffrence = Math.floor((nowTimer - Cronometer.baseTimer) / 10)
        var salise = diffrence < 100 ? diffrence : diffrence % 100
        var saniye = saniye < 60 ? Math.floor(diffrence / 100) : Math.floor(diffrence / 100) % 60
        var dakika = dakika < 60 ? Math.floor(diffrence / 6000) : Math.floor(diffrence / 6000) % 60
        var saat = Math.floor(dakika / 60)
        saniye = saniye < 10 ? "0" + saniye : saniye
        dakika = dakika < 10 ? "0" + dakika : dakika
        saat = saat < 10 ? "0" + saat : saat
        text = saat == 0 ? dakika + ":" + saniye + "," + salise : saat + ":" + dakika + ":" + saniye
        $("#cronometer").html(text)
    }, 10);
}

function myStopFunction() {
    clearTimeout(myVar);
}