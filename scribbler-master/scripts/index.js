//Open Modals
function openSignupModal() {
  var signUpModal = document.getElementById("sign-up-modal");
  signUpModal.style.display = "block";
}

function openSigninModal() {
  document.getElementById("sign-in-modal").style.display = "block";
}

function enrouteToSignupModal() {
  document.getElementById("sign-in-modal").style.display = "none";
  openSignupModal();
}

function newPostModal() {
  document.getElementById("create-post-modal").style.display = "block";
}

//Close Modals
function closeSigninModal() {
  var signInModal = document.getElementById("sign-in-modal");
  signInModal.style.display = "none";
}

function closeSignupModal() {
  var signUpModal = document.getElementById("sign-up-modal");
  signUpModal.style.display = "none";
}

function closeNewPostModal() {
  var signUpModal = document.getElementById("create-post-modal");
  signUpModal.style.display = "none";
}

//Modals made responsive to foucs
window.onclick = function (event) {
  var modal = document.getElementsByClassName("modal");
  for (var i = 0; i < modal.length; i++) {
    if (event.target == modal[i]) {
      modal[0].style.display = "none";
      modal[1].style.display = "none";
      modal[2].style.display = "none";
    }
  }
};

//Open all posts page
function openAllPosts() {
  document.location.href = "html/postslist.html";
}