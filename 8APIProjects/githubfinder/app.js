// Init Github, UI
const github = new Github();
const ui = new UI();

// Search Input
const searchUser = document.getElementById('search-user');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
  // Get input text
  const userText = e.target.value;

  if (userText !== '') {
    // Make HTTP call
    github.getUser(userText)
      .then(data => {
        console.log(data.profile.message)
        if (data.profile.message === 'Not Found') {
          // show alert
          ui.showAlert('User not found', 'alert bg-danger');

        } else {
          // show profile
          ui.showProfile(data.profile);
          ui.showRepos(data.repos);
        }
      })
  } else {
    // Clear profile
    ui.clearProfile();
  }
})