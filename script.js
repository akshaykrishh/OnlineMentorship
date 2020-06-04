//Show Coaching Name
$('.ans').on('change', function () {
    if ($(this).val() === "yes") {
        $("#ifYes").show();
    }
    else {
        $("#ifYes").hide();
    }
});


//Smooth Scroll
$('a[href*="#section"]').on('click', function () {
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 2000);
});

//Form Registration
$('#registerForm').on('submit', function (e) {

    //Show Alert
    document.querySelector('.alert').style.display = "block";

    //Hide alert after 4 sec
    setTimeout(function () {
        document.querySelector('.alert').style.display = "none";
    }, 4000);

});

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCiTQa7jnHJY9FD5Y0z2WrmsKw3v9Lw2K0",
    authDomain: "tensorsonlinementorship.firebaseapp.com",
    databaseURL: "https://tensorsonlinementorship.firebaseio.com",
    projectId: "tensorsonlinementorship",
    storageBucket: "tensorsonlinementorship.appspot.com",
    messagingSenderId: "261109200684",
    appId: "1:261109200684:web:f175bec6b79553381cde89",
    measurementId: "G-9N6WGL97PX"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
firebase.analytics();

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

//Listen for form submit
document.getElementById('registerForm').addEventListener('submit', submitForm);


//submit form
function submitForm(e) {
    e.preventDefault();


    //Get values
    var Fname = getInputVal('Fname');
    var Lname = getInputVal('Lname');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var ans = getInputVal('ans');
    var Cname = getInputVal('Cname');
    var address = getInputVal('address');

    //Save Message
    saveMessage(Fname, Lname, email, phone, ans, Cname, address, checkbox)

    //Show Alert
    document.querySelector('.alert').style.display = "block";

    //Hide alert after 3 sec
    setTimeout(function () {
        document.querySelector('.alert').style.display = "none";
    }, 3000);
}

//Function to get form values

function getInputVal(id) {
    return document.getElementById(id).value;
}

//Save message to firebase
function saveMessage(Fname, Lname, email, phone, ans, Cname, address) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        Fname: Fname,
        Lname: Lname,
        email: email,
        phone: phone,
        ans: ans,
        Cname: Cname,
        address: address,
    });
}