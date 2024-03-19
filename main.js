(function($){

	setTimeout(function(){ $('html').css({"opacity":"1","transition": ".3s"}); }, 200);

	setTimeout(function(){ $('.elements-left').removeClass( "fx-intro" ); }, 400);
	setTimeout(function(){ $('.elements-right').removeClass( "fx-intro" ); }, 400);


	$(window).on("load resize scroll",function(e){
    	var cw = $('.glider-slide .img, .list-last-properties .img ').width();
		$('.glider-slide .img, .list-last-properties .img').css({'height':cw+'px'});
	});

	// Sticky
	$(window).scroll(function () {
		if ($(this).scrollTop() > 5) {
			$('header, .elements-right .bloc-top, .elements-right .bloc-bottom .sub-title, .bt-enter, .heading').addClass( "sticky" );
			$('.widget-alert, .bt-widget-alert').addClass( "visible" );
		} else {
			$('header, .elements-right .bloc-top, .elements-right .bloc-bottom .sub-title, .bt-enter, .heading').removeClass( "sticky" );
			$('.widget-alert, .bt-widget-alert').removeClass( "visible" );
		}
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 5) {
			$('.elements-left, .elements-right').addClass( "fx-intro" );
		} else {
			$('.elements-left, .elements-right').removeClass( "fx-intro" );
		}
	});

	$(document).ready(function() {

		var step1;
		var step2;
		var step4;

		step1 = setTimeout(function(){ 
			$( "#button-one" ).addClass( "active" ); $( "#button-two, #button-three" ).addClass( "no-active" ); $( "#button-three" ).removeClass( "active" );
		 }, 1);
		step2 = setTimeout(function(){ 
			$( "#button-one" ).removeClass( "active" ); $( "#button-two" ).removeClass( "no-active" ); $( "#button-two" ).addClass( "active" ); $( "#button-one" ).addClass( "no-active" );
		 }, 4000);
		step3 = setTimeout(function(){ 
			$( "#button-two" ).removeClass( "active" ); $( "#button-three" ).removeClass( "no-active" ); $( "#button-three" ).addClass( "active" ); $( "#button-two" ).addClass( "no-active" );
		 }, 8000);

		step4 = setInterval(function(){
			step1 = setTimeout(function(){ 
				$( "#button-one" ).removeClass( "no-active" ); $( "#button-one" ).addClass( "active" ); $( "#button-two, #button-three" ).addClass( "no-active" ); $( "#button-three" ).removeClass( "active" );
			 }, 1);
			step2 = setTimeout(function(){ 
				$( "#button-one" ).removeClass( "active" ); $( "#button-two" ).removeClass( "no-active" ); $( "#button-two" ).addClass( "active" ); $( "#button-one" ).addClass( "no-active" );
			 }, 4000);
			step3 = setTimeout(function(){ 
				$( "#button-two" ).removeClass( "active" ); $( "#button-three" ).removeClass( "no-active" ); $( "#button-three" ).addClass( "active" ); $( "#button-two" ).addClass( "no-active" );
			 }, 8000);
		}, 12300);

		$(".button-bloc").mouseenter(function(){ 
			$( "#button-one, #button-two, #button-three" ).removeClass( "active" );
			clearTimeout(step1);
			clearTimeout(step2);
			clearTimeout(step3);
			clearInterval(step4);
		}).mouseleave(function(){
			step1 = setTimeout(function(){ 
				$( "#button-one" ).addClass( "active" ); $( "#button-two, #button-three" ).addClass( "no-active" ); $( "#button-three" ).removeClass( "active" );
			 }, 1);
			step2 = setTimeout(function(){ 
				$( "#button-one" ).removeClass( "active" ); $( "#button-two" ).removeClass( "no-active" ); $( "#button-two" ).addClass( "active" ); $( "#button-one" ).addClass( "no-active" );
			 }, 4000);
			step3 = setTimeout(function(){ 
				$( "#button-two" ).removeClass( "active" ); $( "#button-three" ).removeClass( "no-active" ); $( "#button-three" ).addClass( "active" ); $( "#button-two" ).addClass( "no-active" );
			 }, 8000);

			step4 = setInterval(function(){
				step1 = setTimeout(function(){ 
					$( "#button-one" ).removeClass( "no-active" ); $( "#button-one" ).addClass( "active" ); $( "#button-two, #button-three" ).addClass( "no-active" ); $( "#button-three" ).removeClass( "active" );
				 }, 1);
				step2 = setTimeout(function(){ 
					$( "#button-one" ).removeClass( "active" ); $( "#button-two" ).removeClass( "no-active" ); $( "#button-two" ).addClass( "active" ); $( "#button-one" ).addClass( "no-active" );
				 }, 4000);
				step3 = setTimeout(function(){ 
					$( "#button-two" ).removeClass( "active" ); $( "#button-three" ).removeClass( "no-active" ); $( "#button-three" ).addClass( "active" ); $( "#button-two" ).addClass( "no-active" );
				 }, 8000);
			}, 12300);

		});


		$("#button-one").mouseenter(function(){ 
		    $( "#button-one" ).addClass( "active" );
		    $( "#button-two, #button-three" ).addClass( "no-active" );
		}).mouseleave(function(){
		    $( "#button-one" ).removeClass( "active" );
		    $( "#button-two, #button-three" ).removeClass( "no-active" );
		});
		$("#button-two").mouseenter(function(){ 
		    $( "#button-two" ).addClass( "active" );
		    $( "#button-one, #button-three" ).addClass( "no-active" );
		}).mouseleave(function(){
		    $( "#button-two" ).removeClass( "active" );
		    $( "#button-one, #button-three" ).removeClass( "no-active" );
		});
		$("#button-three").mouseenter(function(){ 
		    $( "#button-three" ).addClass( "active" );
		    $( "#button-one, #button-two" ).addClass( "no-active" );
		}).mouseleave(function(){
		    $( "#button-three" ).removeClass( "active" );
		    $( "#button-one, #button-two" ).removeClass( "no-active" );
		});

    });


	setTimeout(function(){ $('.step-1').addClass( "active" ); $('.step-8').removeClass( "active" ); }, 1);
	setTimeout(function(){ $('.step-2').addClass( "active" ); $('.step-1').removeClass( "active" ); }, 1000);
	setTimeout(function(){ $('.step-3').addClass( "active" ); $('.step-2').removeClass( "active" ); }, 2000);
	setTimeout(function(){ $('.step-4').addClass( "active" ); $('.step-3').removeClass( "active" ); }, 3000);
	setTimeout(function(){ $('.step-5').addClass( "active" ); $('.step-4').removeClass( "active" ); }, 4000);
	setTimeout(function(){ $('.step-6').addClass( "active" ); $('.step-5').removeClass( "active" ); }, 5000);
	setTimeout(function(){ $('.step-7').addClass( "active" ); $('.step-6').removeClass( "active" ); }, 6000);
	setTimeout(function(){ $('.step-8').addClass( "active" ); $('.step-7').removeClass( "active" ); }, 7000);
	setInterval(function(){
		setTimeout(function(){ $('.step-1').addClass( "active" ); $('.step-8').removeClass( "active" ); }, 1);
		setTimeout(function(){ $('.step-2').addClass( "active" ); $('.step-1').removeClass( "active" ); }, 1000);
		setTimeout(function(){ $('.step-3').addClass( "active" ); $('.step-2').removeClass( "active" ); }, 2000);
		setTimeout(function(){ $('.step-4').addClass( "active" ); $('.step-3').removeClass( "active" ); }, 3000);
		setTimeout(function(){ $('.step-5').addClass( "active" ); $('.step-4').removeClass( "active" ); }, 4000);
		setTimeout(function(){ $('.step-6').addClass( "active" ); $('.step-5').removeClass( "active" ); }, 5000);
		setTimeout(function(){ $('.step-7').addClass( "active" ); $('.step-6').removeClass( "active" ); }, 6000);
		setTimeout(function(){ $('.step-8').addClass( "active" ); $('.step-7').removeClass( "active" ); }, 7000);
	}, 8000);

	// Scroll to
	$(document).ready(function() {
		$('a.scrollto').on('click', function() {
			var page = $(this).attr('href');
			var speed = 750;
			$('html, body').animate( { scrollTop: $(page).offset().top/2 }, speed );
			return false;
		});
	});

	// Bt nav 
	$(".bt-open-nav").click(function() {
		$(".nav-mobile").addClass("open-nav");
		$("body").addClass("active-nav");
		$("#main-page").addClass("close-nav");
	});

	$(".bt-close-nav, .active-nav #main-page:after").click(function() {
		$(".nav-mobile").removeClass("open-nav");
		$("body").removeClass("active-nav");
		$("#main-page").removeClass("close-nav");
	});

	// Clone nav
    $(function(){
      	var $colle = $('.nav-desktop nav > ul').clone();
      	$('.nav-mobile .inner nav.main-nav').html($colle);
    });

    // Mobile arrow sub nav & open 
	$(document).ready(function() {
	    $('.nav-mobile ul li').each(function() {
	        if ($(this).children('ul').length > 0) {
			    $(this).addClass( "sub-nav" ).append(
				    $('<div>').prop({
				      className: 'bt-open-sub-nav',
				      innerHTML: '<i class="las la-plus"></i>'
				    })
				  );
			};
	    });
	    $(".bt-open-sub-nav").click(function() {
	    	
			$(this).parent().children('ul').css({"display":"block"});
		});
		$(".bt-close-nav").click(function() {
			$('li.sub-nav').children('ul').css({"display":"none"});
		});
	});


	// Bt popup
	$(".bt-widget-blog").click(function() {
		$(".widget-blog").addClass("open-widget-blog");
		$(".bt-widget-blog").addClass("active");
	});

	$(".bt-close-widget-blog").click(function() {
		$(".widget-blog").removeClass("open-widget-blog");
		$(".bt-widget-blog").removeClass("active");
	});

	// Bt widget alert
	$(".bt-widget-alert").click(function() {
		$(".widget-alert").removeClass("open-widget-alert").removeClass("hide-widget-alert");
		$(".bt-widget-alert").removeClass("active").removeClass("hide-widget-alert");
	});

	$(".bt-close-widget-alert").click(function() {
		$(".widget-alert").addClass("open-widget-alert");
		$(".bt-widget-alert").addClass("active");
	});


	// Top scroll
	$(window).scroll(function () {
		if ($(this).scrollTop() > window.innerHeight) {
			$('a.top-scroll').css({"right":"20px","transition": ".4s"});
		} else {
			$('a.top-scroll').css({"right":"-100px","transition": ".4s"});
		}
	});

	$("a.top-scroll").click(function() {
	    $("html, body").animate({ scrollTop: 0 }, "slow");
	    return false;
	});

	$('.submit input').each(function(){
  		$(this).addClass('btn');
	});

	$('.form-content .submit').each(function(){
  		$(this).addClass('col').addClass('col-6');
	});

	// Bt popup form sale rent
	$(".bt-open-popup-form").click(function() {
		$("body").addClass("popup-active");
		setTimeout(function(){ $('.popup-content').addClass( "fx-intro" ); }, 400);
	});

	$(".bt-close-popup").click(function() {
		$('.popup-content').removeClass( "fx-intro" );
		setTimeout(function(){ $("body").removeClass("popup-active"); }, 400);
	});

	$(".step-link-sale").click(function() {
		$(".step-buy, .step-link-buy").removeClass("active");
		$(".step-sale, .step-link-sale").addClass("active");
	});

	$(".step-link-buy").click(function() {
		$(".step-sale, .step-link-sale").removeClass("active");
		$(".step-buy, .step-link-buy").addClass("active");
	});

	$(".popup-area-bottom .bt-open-help").click(function() {
		$(".help-content").addClass("active");
	});

	$(".bt-close-help").click(function() {
		$(".help-content").removeClass("active");
	});

	$(".form-estimate .bt-slide-form input").click(function() {
		$(".form-estimate-content .inner").addClass("active");
		$(".form-estimate .bt-slide-form").addClass("active");
		$(".form-estimate .col, .form-estimate .captcha, .form-estimate .submit").addClass("active");
	});
	

		// Bt popup form 
	$(".bt-open-popup-sale-rent").click(function() {
		$(".popup-sale-rent").addClass("active");
	});

	$(".bg-close-popup-sale-rent").click(function() {
		$(".popup-sale-rent").removeClass("active");
	});
         
        //Ajax call after each step
	//step 1
    $(".popup-sale-rent .bt-next-step-1").click(function () {
        if ($('input#popup-gdpr-validation').is(':checked')) {
            $('input#popup-gdpr-validation').parent().removeClass("error-red");
            $("#step-1").addClass("d-none");
            $("#step-2").removeClass("d-none").addClass("step-active");
            //Save current state into the database

        } else {
            $('input#popup-gdpr-validation').parent().addClass("error-red");
        }
    });

    //step 2
    //Saving the id
    let saved_information = {opened: false, returned_id: -1 };
       
    $("#step-2 label").click(function () {
        $('#step-2 label').removeClass("error-red");
    });

    $("#step-2 .option-1").click(function () {
        $('.radio-button').removeClass("check");
        $('input[type=radio]').not(this).prop('checked',false);
        
    	if ($("#step-2 .option-1").is(":checked")) {
    		$('#step-2 label').removeClass("check");
    		$('#step-2 .option-1').parent().addClass("check");
                saved_information["will"] = 0;
    	}
    });

    $("#step-2 .option-2").click(function () {
    	$('.radio-button').removeClass("check");
    	$('input[type=radio]').not(this).prop('checked',false);
    	if ($("#step-2 .option-2").is(":checked")) {
    		$('#step-2 label').removeClass("check");
    		$('#step-2 .option-2').parent().addClass("check");
                saved_information["will"] = 1;
    	}
    });

    $(".bt-next-step-2").click(function () {
        $.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "2",will: saved_information["will"],opened: saved_information.opened, returned_id: saved_information["returned_id"]}
          }).done(function(data) {
            saved_information["opened"] = true;
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
    	$( "#step-2 label" ).each(function( i ) {
	        if ($("#step-2 .option-1").parent().hasClass( "check" )) {
	            $("#step-2").addClass("d-none").removeClass("step-active");
	            $("#step-3").removeClass("d-none").addClass("step-active");
	        } else if ($("#step-2 .option-2").parent().hasClass( "check" )) {
	            $("#step-2").addClass("d-none").removeClass("step-active");
	            $("#step-3-2").removeClass("d-none").addClass("step-active");
	        } else {
	            $('#step-2 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-2").click(function () {
        $("#step-2").addClass("d-none").removeClass("step-active");
        $("#step-1").removeClass("d-none");
    });

    //step 3
    
    $("#step-3 label").click(function () {
       $('#step-3 label').removeClass("error-red");
    });

    $("#step-3 .option-1").click(function () {
    	if ($("#step-3 .option-1").is(":checked")) {
    		$('#step-3 label').removeClass("check");
    		$('#step-3 .option-1').parent().addClass("check");
                saved_information["when_action"] = 0;
    	}
    });

    $("#step-3 .option-2").click(function () {
    	if ($("#step-3 .option-2").is(":checked")) {
    		$('#step-3 label').removeClass("check");
    		$('#step-3 .option-2').parent().addClass("check");
                saved_information["when_action"] = 1;
    	}
    });

    $("#step-3 .option-3").click(function () {
    	if ($("#step-3 .option-3").is(":checked")) {
    		$('#step-3 label').removeClass("check");
    		$('#step-3 .option-3').parent().addClass("check");
                saved_information["when_action"] = 2;
    	}
    });

    $("#step-3 .option-4").click(function () {
    	if ($("#step-3 .option-4").is(":checked")) {
    		$('#step-3 label').removeClass("check");
    		$('#step-3 .option-4').parent().addClass("check");
                saved_information["when_action"] = 3;
    	}
    });

    $(".popup-sale-rent .bt-next-step-3").click(function () {
    	$.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "3",when_action: saved_information["when_action"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
        $( "#step-3 label" ).each(function( i ) {
	        if ($("#step-3 label").hasClass( "check" )) {
	            $("#step-3").addClass("d-none").removeClass("step-active");
	            $("#step-4").removeClass("d-none").addClass("step-active");
	        } else {
	            $('#step-3 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-3").click(function () {
        $("#step-3").addClass("d-none").removeClass("step-active");
        $("#step-2").removeClass("d-none").addClass("step-active");
    });


    //step 3-2
   
    $("#step-3-2 label").click(function () {
        $('#step-3-2 label').removeClass("error-red");
    });

    $("#step-3-2 .option-1").click(function () {
    	if ($("#step-3-2 .option-1").is(":checked")) {
    		$('#step-3-2 label').removeClass("check");
    		$('#step-3-2 .option-1').parent().addClass("check");
                saved_information["when_action"] = 0;
    	}
    });

    $("#step-3-2 .option-2").click(function () {
    	if ($("#step-3-2 .option-2").is(":checked")) {
    		$('#step-3-2 label').removeClass("check");
    		$('#step-3-2 .option-2').parent().addClass("check");
                saved_information["when_action"] = 1;
    	}
    });

    $("#step-3-2 .option-3").click(function () {
    	if ($("#step-3-2 .option-3").is(":checked")) {
    		$('#step-3-2 label').removeClass("check");
    		$('#step-3-2 .option-3').parent().addClass("check");
                saved_information["when_action"] = 2;
    	}
    });

    $("#step-3-2 .option-4").click(function () {
    	if ($("#step-3-2 .option-4").is(":checked")) {
    		$('#step-3-2 label').removeClass("check");
    		$('#step-3-2 .option-4').parent().addClass("check");
                saved_information["when_action"] = 4;
    	}
    });

    $(".popup-sale-rent .bt-next-step-3-2").click(function () {
        $.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "3",when_action: saved_information["when_action"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
    	$( "#step-3-2 label" ).each(function( i ) {
	        if ($("#step-3-2 label").hasClass( "check" )) {
	            $("#step-3-2").addClass("d-none").removeClass("step-active");
	            $("#step-4-2").removeClass("d-none").addClass("step-active");
	        } else {
	            $('#step-3-2 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-3-2").click(function () {
        $("#step-3-2").addClass("d-none").removeClass("step-active");
        $("#step-2").removeClass("d-none").addClass("step-active");
    });

    //step 4
    
    $("#step-4 label").click(function () {
        $('#step-4 label').removeClass("error-red");
    });

    $("#step-4 .option-1").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( '-300.000 €' );
    	$(".step-5-price-2").append( '300.000€ - 400 000€' );
    	$(".step-5-price-3").append( '400.000€ - 500.000€' );
    	$(".step-5-price-4").append( '500.000€+' );
    	if ($("#step-4 .option-1").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-1').parent().addClass("check");
                saved_information["property_type"] = 0;
    	}
    });

    $("#step-4 .option-2").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( '-200.000 €' );
    	$(".step-5-price-2").append( '200.000€ - 275 000€' );
    	$(".step-5-price-3").append( '275.000€ - 350.000€' );
    	$(".step-5-price-4").append( '350.000€+' );
    	if ($("#step-4 .option-2").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-2').parent().addClass("check");
                saved_information["property_type"] = 1;
    	}
    });

    $("#step-4 .option-3").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( 'âˆ’750.000 €' );
    	$(".step-5-price-2").append( '750.000€ - 1 000 000€' );
    	$(".step-5-price-3").append( '1.000.000€ - 1.250.000€' );
    	$(".step-5-price-4").append( '1.250.000€+' );
    	if ($("#step-4 .option-3").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-3').parent().addClass("check");
                saved_information["property_type"] = 2;
    	}
    });

    $("#step-4 .option-4").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( 'âˆ’200.000 €' );
    	$(".step-5-price-2").append( '200.000€ - 500 000€' );
    	$(".step-5-price-3").append( '500.000€ - 800.000€' );
    	$(".step-5-price-4").append( '800.000€+' );
    	if ($("#step-4 .option-4").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-4').parent().addClass("check");
                saved_information["property_type"] = 3;
    	}
    });

    $("#step-4 .option-5").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( 'âˆ’200.000 €' );
    	$(".step-5-price-2").append( '200.000€ - 500 000€' );
    	$(".step-5-price-3").append( '500.000€ - 800.000€' );
    	$(".step-5-price-4").append( '800.000€+' );
    	if ($("#step-4 .option-5").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-5').parent().addClass("check");
                saved_information["property_type"] = 4;
    	}
    });

    $("#step-4 .option-6").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( 'âˆ’200.000 €' );
    	$(".step-5-price-2").append( '200.000€ - 300 000€' );
    	$(".step-5-price-3").append( '300.000€ - 400.000€' );
    	$(".step-5-price-4").append( '400.000€+' );
    	if ($("#step-4 .option-6").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-6').parent().addClass("check");
                saved_information["property_type"] = 5;
    	}
    });

    $("#step-4 .option-7").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( 'âˆ’500.000 €' );
    	$(".step-5-price-2").append( '500.000€ - 1 000 000€' );
    	$(".step-5-price-3").append( '1.000.000€ - 1.500.000€' );
    	$(".step-5-price-4").append( '1.500.000€+' );
    	if ($("#step-4 .option-7").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-7').parent().addClass("check");
                saved_information["property_type"] = 6;
    	}
    });

    $("#step-4 .option-8").click(function () {
    	$("#step-5 b").html('');
    	$(".step-5-price-1").append( 'âˆ’25.000 €' );
    	$(".step-5-price-2").append( '25.000€ - 30 000€' );
    	$(".step-5-price-3").append( '30.000€ - 35.000€' );
    	$(".step-5-price-4").append( '35.000€+' );
    	if ($("#step-4 .option-8").is(":checked")) {
    		$('#step-4 label').removeClass("check");
    		$('#step-4 .option-8').parent().addClass("check");
                saved_information["property_type"] = 7;
    	}
    });

    $(".popup-sale-rent .bt-next-step-4").click(function () {
    	$.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "4",property_type: saved_information["property_type"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
        $( "#step-4 label" ).each(function( i ) {
	        if ($("#step-4 label").hasClass( "check" )) {
	            $("#step-4").addClass("d-none").removeClass("step-active");
	            $("#step-5").removeClass("d-none").addClass("step-active");
	        } else {
	            $('#step-4 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-4").click(function () {
        $("#step-4").addClass("d-none").removeClass("step-active");
        $("#step-3").removeClass("d-none").addClass("step-active");
    });

    //step 4-2

    $("#step-4-2 label").click(function () {
        $('#step-4-2 label').removeClass("error-red");
    });

    $("#step-4-2 .option-1").click(function () {
    	$("#step-5-2 b").html('');
    	$(".step-5-2-price-1").append( '-1.500 €' );
    	$(".step-5-2-price-2").append( '1.500€ - 1 800€' );
    	$(".step-5-2-price-3").append( '1.800€ - 2.100€' );
    	$(".step-5-2-price-4").append( '2.100€+' );
    	if ($("#step-4-2 .option-1").is(":checked")) {
    		$('#step-4-2 label').removeClass("check");
    		$('#step-4-2 .option-1').parent().addClass("check");
                saved_information["property_type"] = 0;
    	}
    });

    $("#step-4-2 .option-2").click(function () {
    	$("#step-5-2 b").html('');
    	$(".step-5-2-price-1").append( '-900 €' );
    	$(".step-5-2-price-2").append( '900€ - 1 200€' );
    	$(".step-5-2-price-3").append( '1.200€ - 1.500€' );
    	$(".step-5-2-price-4").append( '1.500€+' );
    	if ($("#step-4-2 .option-2").is(":checked")) {
    		$('#step-4-2 label').removeClass("check");
    		$('#step-4-2 .option-2').parent().addClass("check");
                saved_information["property_type"] = 1;
    	}
    });

    $("#step-4-2 .option-3").click(function () {
    	$("#step-5-2 b").html('');
    	$(".step-5-2-price-1").append( '-1000 €' );
    	$(".step-5-2-price-2").append( '1.000€ - 2 500€' );
    	$(".step-5-2-price-3").append( '2.500€ - 4.000€' );
    	$(".step-5-2-price-4").append( '4.000€+' );
    	if ($("#step-4-2 .option-3").is(":checked")) {
    		$('#step-4-2 label').removeClass("check");
    		$('#step-4-2 .option-3').parent().addClass("check");
                saved_information["property_type"] = 3;
    	}
    });

    $("#step-4-2 .option-4").click(function () {
    	$("#step-5-2 b").html('');
    	$(".step-5-2-price-1").append( '-1000 €' );
    	$(".step-5-2-price-2").append( '1.000€ - 2 500€' );
    	$(".step-5-2-price-3").append( '2.500€ - 4.000€' );
    	$(".step-5-2-price-4").append( '4.000€+' );
    	if ($("#step-4-2 .option-4").is(":checked")) {
    		$('#step-4-2 label').removeClass("check");
    		$('#step-4-2 .option-4').parent().addClass("check");
                saved_information["property_type"] = 5;
    	}
    });

    $("#step-4-2 .option-5").click(function () {
    	$("#step-5-2 b").html('');
    	$(".step-5-2-price-1").append( '-1000 €' );
    	$(".step-5-2-price-2").append( '1.000€ - 2 500€' );
    	$(".step-5-2-price-3").append( '2.500€ - 4.000€' );
    	$(".step-5-2-price-4").append( '4.000€+' );
    	if ($("#step-4-2 .option-5").is(":checked")) {
    		$('#step-4-2 label').removeClass("check");
    		$('#step-4-2 .option-5').parent().addClass("check");
                saved_information["property_type"] = 6;
    	}
    });

    $(".popup-sale-rent .bt-next-step-4-2").click(function () {
    	$.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "4",property_type: saved_information["property_type"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
        $( "#step-4-2 label" ).each(function( i ) {
	        if ($("#step-4-2 label").hasClass( "check" )) {
	            $("#step-4-2").addClass("d-none").removeClass("step-active");
	            $("#step-5-2").removeClass("d-none").addClass("step-active");
	        } else {
	            $('#step-4-2 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-4-2").click(function () {
        $("#step-4-2").addClass("d-none").removeClass("step-active");
        $("#step-3-2").removeClass("d-none").addClass("step-active");
    });

    //step 5
    
    $("#step-5 label").click(function () {
        $('#step-5 label').removeClass("error-red");
    });

    $("#step-5 .option-1").click(function () {
    	if ($("#step-5 .option-1").is(":checked")) {
    		$('#step-5 label').removeClass("check");
    		$('#step-5 .option-1').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 0;
                        break;
                    case 1:
                        saved_information["price_range"] = 4;
                        break;
                    case 2:
                        saved_information["price_range"] = 8;
                        break;
                    case 3:
                        saved_information["price_range"] = 12;
                        break;
                    case 4:
                        saved_information["price_range"] = 12;
                        break;
                    case 5:
                        saved_information["price_range"] = 4;
                        break;
                    case 6:
                        saved_information["price_range"] = 19;
                        break;
                    case 7:
                        saved_information["price_range"] = 23;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $("#step-5 .option-2").click(function () {
    	if ($("#step-5 .option-2").is(":checked")) {
    		$('#step-5 label').removeClass("check");
    		$('#step-5 .option-2').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 1;
                        break;
                    case 1:
                        saved_information["price_range"] = 5;
                        break;
                    case 2:
                        saved_information["price_range"] = 9;
                        break;
                    case 3:
                        saved_information["price_range"] = 13;
                        break;
                    case 4:
                        saved_information["price_range"] = 13;
                        break;
                    case 5:
                        saved_information["price_range"] = 16;
                        break;
                    case 6:
                        saved_information["price_range"] = 20;
                        break;
                    case 7:
                        saved_information["price_range"] = 24;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $("#step-5 .option-3").click(function () {
    	if ($("#step-5 .option-3").is(":checked")) {
    		$('#step-5 label').removeClass("check");
    		$('#step-5 .option-3').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 2;
                        break;
                    case 1:
                        saved_information["price_range"] = 6;
                        break;
                    case 2:
                        saved_information["price_range"] = 10;
                        break;
                    case 3:
                        saved_information["price_range"] = 14;
                        break;
                    case 4:
                        saved_information["price_range"] = 14;
                        break;
                    case 5:
                        saved_information["price_range"] = 17;
                        break;
                    case 6:
                        saved_information["price_range"] = 21;
                        break;
                    case 7:
                        saved_information["price_range"] = 25;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $("#step-5 .option-4").click(function () {
    	if ($("#step-5 .option-4").is(":checked")) {
    		$('#step-5 label').removeClass("check");
    		$('#step-5 .option-4').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 3;
                        break;
                    case 1:
                        saved_information["price_range"] = 7;
                        break;
                    case 2:
                        saved_information["price_range"] = 11;
                        break;
                    case 3:
                        saved_information["price_range"] = 15;
                        break;
                    case 4:
                        saved_information["price_range"] = 15;
                        break;
                    case 5:
                        saved_information["price_range"] = 18;
                        break;
                    case 6:
                        saved_information["price_range"] = 22;
                        break;
                    case 7:
                        saved_information["price_range"] = 26;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $(".popup-sale-rent .bt-next-step-5").click(function () {
    	$.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "5",price_range: saved_information["price_range"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
        $( "#step-5 label" ).each(function( i ) {
	        if ($("#step-5 label").hasClass( "check" )) {
	            $("#step-5").addClass("d-none").removeClass("step-active");
	            $("#step-6").removeClass("d-none").addClass("step-active");
	        } else {
	            $('#step-5 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-5").click(function () {
        $("#step-5").addClass("d-none").removeClass("step-active");
        $("#step-4").removeClass("d-none").addClass("step-active");
    });

    //step 5-2

    $("#step-5-2 label").click(function () {
        $('#step-5-2 label').removeClass("error-red");
    });

    $("#step-5-2 .option-1").click(function () {
    	if ($("#step-5-2 .option-1").is(":checked")) {
    		$('#step-5-2 label').removeClass("check");
    		$('#step-5-2 .option-1').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 27;
                        break;
                    case 1:
                        saved_information["price_range"] = 31;
                        break;
                    case 3:
                        saved_information["price_range"] = 35;
                        break;
                    case 5:
                        saved_information["price_range"] = 35;
                        break;
                    case 6:
                        saved_information["price_range"] = 35;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $("#step-5-2 .option-2").click(function () {
    	if ($("#step-5-2 .option-2").is(":checked")) {
    		$('#step-5-2 label').removeClass("check");
    		$('#step-5-2 .option-2').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 28;
                        break;
                    case 1:
                        saved_information["price_range"] = 32;
                        break;
                    case 3:
                        saved_information["price_range"] = 36;
                        break;
                    case 5:
                        saved_information["price_range"] = 36;
                        break;
                    case 6:
                        saved_information["price_range"] = 36;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $("#step-5-2 .option-3").click(function () {
    	if ($("#step-5-2 .option-3").is(":checked")) {
    		$('#step-5-2 label').removeClass("check");
    		$('#step-5-2 .option-3').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 29;
                        break;
                    case 1:
                        saved_information["price_range"] = 33;
                        break;
                    case 3:
                        saved_information["price_range"] = 37;
                        break;
                    case 5:
                        saved_information["price_range"] = 37;
                        break;
                    case 6:
                        saved_information["price_range"] = 37;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $("#step-5-2 .option-4").click(function () {
    	if ($("#step-5-2 .option-4").is(":checked")) {
    		$('#step-5-2 label').removeClass("check");
    		$('#step-5-2 .option-4').parent().addClass("check");
                switch(saved_information["property_type"]){
                    case 0:
                        saved_information["price_range"] = 30;
                        break;
                    case 1:
                        saved_information["price_range"] = 34;
                        break;
                    case 3:
                        saved_information["price_range"] = 38;
                        break;
                    case 5:
                        saved_information["price_range"] = 38;
                        break;
                    case 6:
                        saved_information["price_range"] = 38;
                        break;
                    default:
                        saved_information["price_range"] = -1;
                }
    	}
    });

    $(".popup-sale-rent .bt-next-step-5-2").click(function () {
    	$.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "5",price_range: saved_information["price_range"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
        $( "#step-5-2 label" ).each(function( i ) {
	        if ($("#step-5-2 label").hasClass( "check" )) {
	            $("#step-5-2").addClass("d-none").removeClass("step-active");
	            $("#step-6-2").removeClass("d-none").addClass("step-active");
	        } else {
	            $('#step-5-2 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-5-2").click(function () {
        $("#step-5-2").addClass("d-none").removeClass("step-active");
        $("#step-4-2").removeClass("d-none").addClass("step-active");
    });

    //step 6
    
    $("#step-6 label").click(function () {
        $('#step-6 label').removeClass("error-red");
    });

    $("#step-6 .option-1").click(function () {
    	if ($("#step-6 .option-1").is(":checked")) {
    		$('#step-6 label').removeClass("check");
    		$('#step-6 .option-1').parent().addClass("check");
                saved_information["most_important_element"] = 0;
    	}
    });

    $("#step-6 .option-2").click(function () {
    	if ($("#step-6 .option-2").is(":checked")) {
    		$('#step-6 label').removeClass("check");
    		$('#step-6 .option-2').parent().addClass("check");
                saved_information["most_important_element"] = 1;
    	}
    });

    $("#step-6 .option-3").click(function () {
    	if ($("#step-6 .option-3").is(":checked")) {
    		$('#step-6 label').removeClass("check");
    		$('#step-6 .option-3').parent().addClass("check");
                saved_information["most_important_element"] = 2;
    	}
    });

    $("#step-6 .option-4").click(function () {
    	if ($("#step-6 .option-4").is(":checked")) {
    		$('#step-6 label').removeClass("check");
    		$('#step-6 .option-4').parent().addClass("check");
                saved_information["most_important_element"] = 3;
    	}
    });

    $(".popup-sale-rent .bt-next-step-6").click(function () {
    	$.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "6",most_important_element: saved_information["most_important_element"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
        $( "#step-6 label" ).each(function( i ) {
	        if ($("#step-6 label").hasClass( "check" )) {
	            $("#step-6").addClass("d-none").removeClass("step-active");
	            $("#step-7").removeClass("d-none").addClass("step-active sale");
	        } else {
	            $('#step-6 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-6").click(function () {
        $("#step-6").addClass("d-none").removeClass("step-active");
        $("#step-5").removeClass("d-none").addClass("step-active");
    });

    //step 6-2

    $("#step-6-2 label").click(function () {
        $('#step-6-2 label').removeClass("error-red");
    });

    $("#step-6-2 .option-1").click(function () {
    	if ($("#step-6-2 .option-1").is(":checked")) {
    		$('#step-6-2 label').removeClass("check");
    		$('#step-6-2 .option-1').parent().addClass("check");
                saved_information["most_important_element"] = 4;
    	}
    });

    $("#step-6-2 .option-2").click(function () {
    	if ($("#step-6-2 .option-2").is(":checked")) {
    		$('#step-6-2 label').removeClass("check");
    		$('#step-6-2 .option-2').parent().addClass("check");
                saved_information["most_important_element"] = 1;
    	}
    });

    $("#step-6-2 .option-3").click(function () {
    	if ($("#step-6-2 .option-3").is(":checked")) {
    		$('#step-6-2 label').removeClass("check");
    		$('#step-6-2 .option-3').parent().addClass("check");
                saved_information["most_important_element"] = 5;
    	}
    });

    $("#step-6-2 .option-4").click(function () {
    	if ($("#step-6-2 .option-4").is(":checked")) {
    		$('#step-6-2 label').removeClass("check");
    		$('#step-6-2 .option-4').parent().addClass("check");
                saved_information["most_important_element"] = 3;
    	}
    });

    $(".popup-sale-rent .bt-next-step-6-2").click(function () {
    	$.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "6",most_important_element: saved_information["most_important_element"],id: saved_information["returned_id"]}
          }).done(function( data ) {
            saved_information["returned_id"] = $.parseJSON(data);
        });
        
        $( "#step-6-2 label" ).each(function( i ) {
	        if ($("#step-6-2 label").hasClass( "check" )) {
	            $("#step-6-2").addClass("d-none").removeClass("step-active");
	            $("#step-7").removeClass("d-none").addClass("step-active rent");
	        } else {
	            $('#step-6-2 label').addClass("error-red");
	        }
	    });
    });

    $(".bt-back-step-6-2").click(function () {
        $("#step-6-2").addClass("d-none").removeClass("step-active");
        $("#step-5-2").removeClass("d-none").addClass("step-active");
    });

    //step 7

    $(".bt-back-step-7").click(function () {
    	if ($("#step-7").hasClass( "sale" )) {
	        $("#step-7").addClass("d-none").removeClass("step-active sale rent");
	        $("#step-6").removeClass("d-none").addClass("step-active");
	    } else if ($("#step-7").hasClass( "rent" )) {
	        $("#step-7").addClass("d-none").removeClass("step-active sale rent");
	        $("#step-6-2").removeClass("d-none").addClass("step-active");
	    }
    });
    
    //Manages sent forms
    $("#send-button").click(function() {
        //Gets user informations and makes the related verifications
        const property_address = $("input[name='property_address']").val();
        const first_name = $("input[name='first_name']").val();
        const last_name = $("input[name='last_name']").val();
        const email = $("input[name='email']").val();
        const phone = $("input[name='phone']").val();        
                   
        $.ajax({
            method: "POST",
            url: "forms_implementation/save_forms.php",
            data: {step: "7", property_address: property_address, first_name: first_name, last_name: last_name, email: email, phone: phone, id: saved_information["returned_id"]}
          }).done(function(data){

          let errors = $.parseJSON(data);
              if(Array.isArray(errors)){
                  for(let error of errors){
                    switch(error){
                      case 1:
                          $("input[name='property_address']").attr("class","error-input");
                          break;
                      case 2:
                          $("input[name='first_name']").attr("class","error-input");
                          break;
                      case 3:
                          $("input[name='last_name']").attr("class","error-input");
                          break;
                      case 4:
                          $("input[name='email']").attr("class","error-input");
                          break;
                      case 5:
                          $("input[name='phone']").attr("class","error-input");
                          break;
                      default:
                          throw new Error("unexpected behavior");
                    }
                }
              }
              else{
                  //No error in the form --> step 8 (TO DO)
                    $("#step-7").addClass("d-none").removeClass("step-active");
                    $("#step-8").removeClass("d-none").addClass("step-active");
              } 
          });
    });
    
    //Removes the error classes while typing
    $("input[name='property_address'],input[name='first_name'],input[name='last_name'],input[name='email'],input[name='phone']").on("keypress",function(){
       if($(this).val().length > 0){
            $(this).removeClass('error-input');
        }
    });
    
    
    //Step 8 (front part) --> To do
    
    $(".bt-next-step-8").click(function () {
        $('.radio-button').removeClass("check");
        $('input[type=radio]').not(this).prop('checked',false);
        $("#step-8").addClass("d-none").removeClass("step-active");
        $("#step-1").removeClass("d-none").addClass("step-active");
        $(".popup-sale-rent").removeClass("active");
    });

})(jQuery);