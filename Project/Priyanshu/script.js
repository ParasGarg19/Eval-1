//Validation of the regisration form of the user

$(document).ready(function () {
$(".quizSection").hide(); //Hide quizSection
    $(".answerPage").hide();
    $("#userSubmitBtn").click(function () {
        var first_name = /^[a-zA-Z]+$/,
            last_name = /^[a-zA-Z]+$/,
            eMail = /^(([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5}){1,25})+([;.](([a-zA-Z0-9_\-\.]+)@{[a-zA-Z0-9_\-\.]+0\.([a-zA-Z]{2,5}){1,25})+)*$/,
            phoneno = /^\d{10}$/,
            firstName = $("#firstname").val(),
            lastName = $("#lastname").val(),
            email = $("#email").val(),
            mobileNo = $("#mobileno").val();
        //Check the firstname
        if (firstName === "" || first_name.test(firstName) === false) {
            document.getElementById("fname").innerHTML = "*Insert First Name";
            return 0;
        }
        //check lastname
        else if (lastName == "" || last_name.test(lastName) == false) {
            document.getElementById("lname").innerHTML ="*Insert Last Name";
            return 0;
        }
        else if (email == "" || eMail.test(email) === false) {
            document.getElementById("emailid").innerHTML = "*Insert valid emailId";
            return 0;
        }
        else if (mobileNo == "" || phoneno.test(mobileNo) === false) {
            document.getElementById("phoneno").innerHTML = "*Insert valid MobileNo";
            return 0;
        }
        else {
            $(".wrapper").hide();
            $(".quizSection").show(); //Show Hidden quizSection
            questionPage(); //Call Question Page
        }
        
        
        
    });
    
    $(".choices").on("click", ".option", function(){
        $(this).addClass("active");
            $(".option").on("click", function() {
            $(".option").removeClass("active");
        });
    })
});




               



    document.getElementById('phoneno').innerHTML = "";
});
