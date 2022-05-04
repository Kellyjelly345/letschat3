function add_user(){
    username = document.getElementById("login_input").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html"

}