// THIS CODE IS PROTECTED UNDER THE COPYRIGHT, DESIGNS AND PATENTS ACT 1988.
// NOT AUTHORIZED FOR REDISTRIBUTION OR MODIFICATION UNDER ANY PARTIES OTHER THAN THE ORIGINAL CREATOR.
// UNAUTHORIZED MODIFICATION CAN RESULT IN LEGAL ACTION.

 // Initialize
        Parse.initialize("gRgG6rXH59W6J19MrqWtiAWAdEGqjoZjEs0GsH6H", "viwxKM3bX10rDDpGpdc3U0kDCr9eJm4WDhhrlPR3");


$(document).ready(function() {
   







// Start up animations     
$('#mainContent').hide();
$('#splashText').hide();
$('.login').hide();
$('#tutcontainer').hide();
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
        // End Homework Function
        // Function to get graph data 
        //End function
        //Function to get the schedule data
        $('.Sbutton').click(function(){
          var Schedule = Parse.Object.extend("Subject");
          var query = new Parse.Query(Schedule);
          query.equalTo("UserName", Usersname);
          query.find
          ({
            success: function(results)
            {
              for (var i = 0; i < results.length; i++){
                var object = results[i];
                $('#scheduleBox').append('<div id="scheduleContent">' + object.get('Subject') + " " + object.get('SubjectTime') + '</div>'+ '<hr>');
              }
            },
            error: function(error){
              alert("Error: " + error.code + " " + error.message);
            }
          
        });
        });
        //end function
        // function to get events
        $('.hlbref').click(function(){
          var Events = Parse.Object.extend("EventBoard");
          var query = new Parse.Query(Events);
          query.equalTo("UsrName", Usersname);
          query.find
          ({
            success: function(results)
            {
              for (var i = 0; i < results.length; i++){
                var object = results[i];
                $('#eventBox').append('<div id="bodylineBox">' + '<h3>' + object.get('eventHead') + '</h3>' + '<p>' + object.get('eventContent') + '</p>' + '</div>');
              }
            },
            error: function(error){
              alert("Error: " + error.code + " " + error.message);
            }
          
        });
        });
        //end function
        //Function to graph the term by term 
        //




 




});






