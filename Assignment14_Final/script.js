

$(document).ready(function() {

    //Modal  
    $("#myModal").modal("show");

    $(".yes-btn").click(function(){
        $("input:text").attr("disabled",!this.checked);
    });

    $("form.needs-validation").submit(function(event){
        event.preventDefault();
  
        if($("input:text").val() === "" ){
          $("form.needs-validation").removeClass('needs-validation').addClass('was-validated');
        }
      })

    // Carousel
    $(".carousel").carousel({
        interval : 4000,
        keyboard : false
    });
});


