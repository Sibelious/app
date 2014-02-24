//jquery!!!!!

 // Initialize
        Parse.initialize("gRgG6rXH59W6J19MrqWtiAWAdEGqjoZjEs0GsH6H", "viwxKM3bX10rDDpGpdc3U0kDCr9eJm4WDhhrlPR3");


$(document).ready(function() {
   
        


//Function to sign in
$("#signInbtn").click(function(event){
            event.preventDefault();
            signIn();
        });
   
        
        function signIn(){
            
            var username = document.getElementById("usr").value;
            var password = document.getElementById("psw").value;

           Parse.User.logIn(username, password, {
          success: function(user) {
            alert("Your'e signed in now.");
            goHome();
          },

          error: function(user, error) {
                
                alert("Error: " + error.code + " " + error.message);
              }
            });   
        };
       // End function to sign in
       //Function to go to home page
       
       function goHome (){
        $('body').fadeOut( 1000, homeRedir());
       };
       function homeRedir (){
        window.location.replace("home.html")
       };
       //End function 
       //Function to save a parse object
       /*
       $('#savetrigger').click(saveit());
       function saveit (){
       var tableObject = Parse.Object.extend("Subject");
       var tableobject = new tableObject();
 
        tableobject.set("Subject", "Mathematics");
        tableobject.set("UserName", "Sean Plott");
        tableobject.set("SubjectTime", "11:45");
 
        tableobject.save(null, {
          success: function(tableobject) {
            // Execute any logic that should take place after the object is saved.
            alert('New object created with objectId: ' + tableobject.id);
            var SubjectSaveId = tableobject.id 
          },
          error: function(tableobject, error) {
            // Execute any logic that should take place if the save fails.
            // error is a Parse.Error with an error code and description.
            alert('Failed to create new object, with error code: ' + error.description);
          }
        });
    };
    */
        //end function
        var tableObject = Parse.Object.extend("Subject");
        var query = new Parse.Query(tableObject);
        query.get("7NmDmjKkvr", {
          success: function(tableobject) {
            // The object was retrieved successfully.
            alert('retrieved')
          },
          error: function(object, error) {
            // The object was not retrieved successfully.
            // error is a Parse.Error with an error code and description.

            }   
        });
        //end function
});


