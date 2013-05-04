function clickedDay(date, allDay, jsEvent, view) {

    if (allDay) {
            // log('Clicked on the entire day: ' + date);
        }else{
            // log('Clicked on the slot: ' + date);
        }

        // log('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        // log('Current view: ' + view.name);

        var newDay = $.fullCalendar.formatDate(date, "MMM.dd.yyyy");

        Session.set("currentDay", newDay);

       

} //clickedDay()

Template.MonthCalendar.rendered = function(){
	$('#month-calendar').fullCalendar({
		weekends: true,
		theme: true,
		dayClick: clickedDay
    });

    $('.switch')['switch']();
 $('#addEvent').modal();
	
};