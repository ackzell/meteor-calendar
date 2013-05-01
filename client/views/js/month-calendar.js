Template.MonthCalendar.rendered = function(){
	$('#month-calendar').fullCalendar({
		weekends: true,
		theme: true
    });

	$('td.ui-widget-content').on('click', function(){
		console.log('clicked');
	});
};

Template.MonthCalendar.events({
	// 'click .fc-day-content' : function () {
	// 	console.log('clicked a day!');
	// }
});