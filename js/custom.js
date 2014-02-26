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
            
            
            alert('welcome '+ username);
            
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
        $('UsersName').text(username);
       };

       //End function 
       
        //end function
        /*
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
        */
        //end function

        // function to get homework
        $('#checkhlButton').click(function(){

          var Homework = Parse.Object.extend("Homework");
var query = new Parse.Query(Homework);
query.equalTo("UserName", "tester mcfarline");
query.find({
  success: function(results) {
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    for (var i = 0; i < results.length; i++) { 
      var object = results[i];
      alert(object.id + ' - ' + object.get('UserName') + " " + object.get('Subject') + " " + object.get('Content') + " " + object.createdAt);
    }
  },
  error: function(error) {
    alert("Error: " + error.code + " " + error.message);
  }
});
});
        










});


