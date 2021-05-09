addHeader();

function addHeader() {
  var header = '<div id="header-logo">'
      + '<div id="logo">ScriBBler</div>'
      + '<div id="header-subheading">Explore, Imagine, Create</div>'
      + '</div>'
      + '<div id="header-buttons">'
      + '<button type="button" id="signup-btn" onclick="openSignupModal()" class="btn btn-primary">Sign Up</button>'
      + '<button type="button" id="signin-btn" onclick="openSigninModal()" class="btn btn-primary">Sign In</button>'
      + '</div>'
      + '<div id="sign-up-modal" class="modal">'
      + '<div class="modal-content">'
      + '<div style="border-bottom: 1px solid black;padding-bottom: 10px;">'
      + '<span class="close" onclick="closeSignupModal()">&times;</span>'
      + '<span class="model-heading">Get Started</span>'
      + '</div>'
      + '<form>'
      + '<div class="form-group">'
      + '<label for="name">Name</label>'
      + '<input type="text" class="form-control" id="name" placeholder="Enter your name" required>'
      + '</div>'
      + '<div class="form-group">'
      + '<label for="user-name">Username</label>'
      + '<input type="text" class="form-control" id="user-name" placeholder="Enter your username" required>'
      + '</div>'
      + '<div class="form-group">'
      + '<label for="password">Password</label>'
      + '<input type="password" class="form-control" id="password" placeholder="Enter your password" required>'
      + '</div>'
      + '<div class="form-group">'
      + '<label for="confirm-password">Confirm Password</label>'
      + '<input type="password" class="form-control" id="confirm-password" placeholder="Re-enter your password" required>'
      + '</div>'
      + '<button type="submit" class="btn btn-success">Sign Up</button>'
      + '</form>'
      + '</div>'
      + '</div>'
      + '<div id="sign-in-modal" class="modal">'
      + '<div class="modal-content">'
      + '<div style="border-bottom: 1px solid black;padding-bottom: 10px;">'
      + '<span class="close" onclick="closeSigninModal()">&times;</span>'
      + '<span class="model-heading">Welcome back!</span>'
      + '</div>'
      + '<form>'
      + '<div class="form-group">'
      + '<label for="user-name">Username</label>'
      + '<input type="text" class="form-control" id="user-name2" placeholder="Enter your username" required>'
      + '</div>'
      + '<div class="form-group">'
      + '<label for="password">Password</label>'
      + '<input type="password" class="form-control" id="password2" placeholder="Enter your password" required>'
      + '</div>'
      + '<button type="submit" class="btn btn-success">Sign In</button>'
      + '<p id="sign-in-disclosure">Not a member? <a href="javascript:enrouteToSignupModal()">Sign Up</a></p>'
      + '</form>'
      + '</div>'
      + '</div>';
  document.getElementById("header").innerHTML += header;
}