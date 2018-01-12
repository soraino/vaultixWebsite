(function(){
  emailjs.init("user_aMjTlDgyFeewFUokzYWBf");

  var myform = $("form#myform");
  myform.submit(function(event){
  	event.preventDefault();

    // Change to your service ID, or keep using the default service
    var service_id = "default_service";
    var template_id = "vaultix";

    myform.find("button").text("Sending...");
    emailjs.sendForm(service_id,template_id,"myform")
    	.then(function(){
      	alert("Sent!");
         myform.find("button").text("Send");
         window.location.reload();
      }, function(err) {
         alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
         myform.find("button").text("Send");
      });
    return false;
  });
})();
