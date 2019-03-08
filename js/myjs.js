$(function () {
    $("#panel").slideDown("slow");
});


$(function () {
    $("#contactbutton").click(function () {
        $("#contactform").slideToggle("slow");
    });
})

$(function () {
    $('ul.navbar-nav > li').click(function () {
        $('ul.navbar-nav > li').removeClass('nav-item active');
        $(this).addClass('nav-item active');
    });
});

$(function () {
    $('#forpanel2').click(function switchVisible() {
        $("#panel").hide('slow');
        $("#panel3").hide("slow");
        $("#other").hide('slow');
        $("#panel2").slideDown("slow");

    })
})

$(function () {
    $('#forpanel3').click(function switchVisible() {
        $("#panel").hide('slow');
        $("#panel2").hide("slow");
        $("#other").hide('slow');
        $("#panel3").slideDown("slow");
    })
})

$(function () {
    $('#forintro').click(function switchVisible() {
        $("#panel").slideDown('slow');
        $("#panel2").hide("slow");
        $("#panel3").hide("slow");
        $("#other").hide('slow');

    })
})


$(function () {
    $('#forother').click(function switchVisible() {
        $("#panel").hide('slow');
        $("#panel2").hide("slow");
        $("#panel3").hide("slow");
        $("#other").slideDown("slow");
    })
})



function initMap() {
    var myLatlng = {lat: 45.420421, lng: -75.692432};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatlng
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Click to zoom'
    });

    map.addListener('center_changed', function() {
        // 3 seconds after the center of the map has changed, pan back to the
        // marker.
        window.setTimeout(function() {
            map.panTo(marker.getPosition());
        }, 3000);
    });

    marker.addListener('click', function() {
        map.setZoom(8);
        map.setCenter(marker.getPosition());
    });
}


<!-- mail JS -->
document.getElementById('status').innerHTML = "Sending...";
formData = {
    'name'     : $('input[name=name]').val(),
    'email'    : $('input[name=email]').val(),
    'subject'  : $('input[name=subject]').val(),
    'message'  : $('textarea[name=message]').val()
};


$.ajax({
    url : "mail.php",
    type: "POST",
    data : formData,
    success: function(data, textStatus, jqXHR)
    {

        $('#status').text(data.message);
        if (data.code) //If mail was sent successfully, reset the form.
            $('#contact-form').closest('form').find("input[type=text], textarea").val("");
    },
    error: function (jqXHR, textStatus, errorThrown)
    {
        $('#status').text(jqXHR);
    }
});
