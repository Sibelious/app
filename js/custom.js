//jquery!!!!!

 // Initialize
        Parse.initialize("gRgG6rXH59W6J19MrqWtiAWAdEGqjoZjEs0GsH6H", "viwxKM3bX10rDDpGpdc3U0kDCr9eJm4WDhhrlPR3");


$(document).ready(function() {
   
$('#LogIn').hide();

//Function to sign in
$(".LogInBtn").click(function(event){
            event.preventDefault();
            signIn();
        });
   
        
        function signIn(){
            
            var username = document.getElementById("login").value;
            var password = document.getElementById("password").value;

           Parse.User.logIn(username, password, {
          success: function(user) {
            alert("Your'e signed in now.");
            var usersname = username
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
       

       //End function 
       
        

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
        // End function










});


