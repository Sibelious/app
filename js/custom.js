//jquery!!!!!

 // Initialize
        Parse.initialize("gRgG6rXH59W6J19MrqWtiAWAdEGqjoZjEs0GsH6H", "viwxKM3bX10rDDpGpdc3U0kDCr9eJm4WDhhrlPR3");


$(document).ready(function() {
   







// Start up animations     
$('#mainContent').hide();
$('#splashText').hide();
$('.login').hide();
$('#homeContainer').hide();
$('.login').fadeIn( 800 );
$( '#splashText' ).fadeIn( 400 );






//Function to sign in
$(".loginButton").click(function(event){
            event.preventDefault();
            signIn();
        });
      
        
        function signIn(){
            
            var username = document.getElementById("usr").value;
            var password = document.getElementById("psw").value;
            
            window.Usersname = username;

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


       // Function to go Home
       function goHome(){
          $('.login').fadeOut( 800 );
          $('#splashText').fadeOut( 500 );
          $('#homeContainer').fadeIn( 800 );
          $('#mainContent').fadeIn( 800 );
          
       
       };
      

        // function to get homework
        $('#refreshButton').click(function()
        {

          var Homework = Parse.Object.extend("Homework");
          var query = new Parse.Query(Homework);
          query.equalTo("UserName", Usersname);
          query.find
          ({
            success: function(results) 
            {
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) { 
            var object = results[i];
            //alert(object.id + ' - ' + object.get('UserName') + " " + object.get('Subject') + " " + object.get('Content') + " " + object.createdAt);
            $('#hlBox').append( '<div id="hlContent">' + object.get('Subject') + " " + object.get('Content') + " " + object.createdAt + '</div>' )
            
            }
            },
            error: function(error) 
            {
            alert("Error: " + error.code + " " + error.message);
            }
        });



        });
        

//Function for Event update get   




});






