
/*
*	Scripts for The Site 
*/

$(function() {
	// lets check if we are using mobile
    var mob = false;

    if($('#only_for_small').css('display') == 'block') mob = true;
    
    // if using mobile make menu item with submenu clickable
    if(mob){
        $('.has_sub_menu').click(function(event) {
        	/* Act on the event */
            
            // When menu item clicked show/hide submenu 
        	if($(this).find('.submenu').hasClass('visible')){
        		$(this).find('.submenu').removeClass('visible');
        	}else{
        		$(this).find('.submenu').addClass('visible');
        	}
            return false;
        	
        });
    }


    /**
    *	Form validation
    */

    $('#posting_form').submit(function(event) {
    	/* Act on the event */
    	var nameField = $('#person_name');
    	var surnameField = $('#person_surname');
    	var messageField = $('#person_message');

    	var name = $(nameField).val();
    	var surname = $(surnameField).val();
    	var message = $(messageField).val();

    	// reset fields with errors
    	$('.error').removeClass('error');
    	var error_count = 0;

    	// check if name is entered
    	if(name == '' || name == null){
    		error_count++;
    		throw_error(nameField,'Please enter your name.');
    	}

    	// check if surname is entered
    	if(surname == '' || surname == null){
    		error_count++;
    		throw_error(surnameField,'Please enter your surname.');
    	}

    	// check if message is entered
    	if(message == '' || message == null){
    		error_count++;
    		throw_error(messageField,'Please enter your message.');
    	}

        // do not send form if error was found
    	if(error_count>0) return false;
    });

    /**
    *   Function to put error message next to invalid form field
    *   
    *   @param el (invalid input field)
    *   @param msg (error message to display)
    *   
    */
    function throw_error(el,msg){
    	$(el).addClass('error');
    	$(el).parent().find('.error_box').html(msg).addClass('error');
    }

});