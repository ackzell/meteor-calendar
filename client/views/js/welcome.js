Template.Welcome.events({
  'click input' : function () {
    // template data, if any, 
    // is available in 'this'
    if (typeof console !== 'undefined')
      console.log("You pressed the button");
  }
});