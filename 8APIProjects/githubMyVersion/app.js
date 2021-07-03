const git = new Git();
const ui = new UI();

document.getElementById('w-input').addEventListener('keyup', (e) => {
  console.log(e.target.value);
  if (e.target.value !== '') {
    git.getUser(e.target.value)
      .then(data => {
        if (data.profile.message === 'Not Found') {
          ui.showAlert('User not found', 'bg-red-600');
          ui.ClearDiv();

        } else {
          ui.showProfile(data.profile);
          ui.showRepo(data.repo);
        }
      });
  } else {
    ui.clearDiv();
  }


});