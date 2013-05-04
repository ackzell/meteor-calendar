Template.ModalAddEvent.day = function(){
	return Session.get("currentDay");
};

Template.ModalAddEvent.rendered = function() {
	
	// adding an event that comes with the plugin
	$('#switchRepeatingEvent').on('switch-change', function (e, data) {
    	log(data.value);
	});

};

Template.ModalAddEvent.events(
{
	
}
);