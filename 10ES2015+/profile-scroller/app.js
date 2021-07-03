const data = [
  {
    name: 'Mohamed Raaneem Ahmed',
    age: 26,
    gender: 'male',
    lookingfor: 'female',
    location: 'Fuvahmulah, Maldives',
    image: 'https://randomuser.me/api/portraits/med/men/82.jpg'
  },
  {
    name: 'Aminath Shabeen Ali',
    age: 24,
    gender: 'female',
    lookingfor: 'male',
    location: 'Fuvahmulah, Maldives',
    image: 'https://randomuser.me/api/portraits/med/women/82.jpg'
  },
  {
    name: 'Fathimath Rasheeda Ali',
    age: 29,
    gender: 'female',
    lookingfor: 'male',
    location: 'Fuvahmulah, Maldives',
    image: 'https://randomuser.me/api/portraits/med/women/83.jpg'
  }
];

const profiles = profileIterator(data);
nextProfile();

// next event
document.getElementById('next').addEventListener('click', nextProfile);

function nextProfile() {
  const currentProfile = profiles.next().value;

  if (currentProfile !== undefined) {
    document.querySelector('#profileDisplay').innerHTML = `
    <ul class='list-group'>
      <li class='list-group-item'>Name: ${currentProfile.name}</li>
      <li class='list-group-item'>Age: ${currentProfile.age}</li>
      <li class='list-group-item'>Gender: ${currentProfile.gender}</li>
      <li class='list-group-item'>Preference: ${currentProfile.lookingfor}</li>
      <li class='list-group-item'>Location: ${currentProfile.location}</li>
    </ul>`;

    document.getElementById('imageDisplay').innerHTML = `<img src='${currentProfile.image}'>`;
  } else {
    window.location.reload();
  }
}

// Profile Scroller
function profileIterator(profiles) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    }
  }
}