FlowRouter.route('/', {
  name: "Home",
  action: function(params, queryParams) {
    BlazeLayout.render('home');

    }
});
