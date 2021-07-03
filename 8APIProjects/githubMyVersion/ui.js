class UI {
  constructor() {
    this.profile = document.querySelector('#profile');
  }

  showProfile(user) {
    console.log(user);
    console.log(this.profile)
    this.profile.innerHTML = `
      <div class="container p-5 mt-3 border border-gray-300 rounded-lg mt-2 sm:flex sm:justify-between">
      <div class="flex flex-col items-center justify-center">
        <img src="${user.avatar_url}" alt="" class='rounded-3xl h-auto w-60'>
          <a href=""
            class='inline-block mt-2 text-center bg-blue-500 px-4 py-2 rounded text-white hover:bg-blue-400' src='${user.html_url}'>View
            Profile</a>
        </div>
        <div class='px-2 mt-4 flex-grow flex items-center flex-wrap justify-center sm:block'>
          <span class='bg-blue-500 text-white py-2 sm:px-5 px-1 mr-1 my-1 inline-block rounded'>Public Repos: ${user.public_repos}</span>
          <span class='bg-gray-500 text-white py-2 sm:px-5 px-1 mr-1 my-1 inline-block rounded'>Public Gists: ${user.public_gists}</span>
          <span class='bg-green-500 text-white py-2 sm:px-5 px-1 mr-1 my-1 inline-block rounded'>Public Followers: ${user.followers}</span>
          <span class='bg-yellow-500 text-white py-2 sm:px-5 px-1 mr-1 my-1 inline-block rounded'>Public Following: ${user.following}</span>
          <ul class='border rounded mt-4 flex-grow'>
            <li class='p-1 border border-gray-100'>User ID: ${user.login}</li>
            <li class='p-1 border border-gray-100'>Company: ${user.company}</li>
            <li class='p-1 border border-gray-100'>Website/Blog: ${user.blog}</li>
            <li class='p-1 border border-gray-100'>Location: ${user.location}</li>
            <li class='p-1 border border-gray-100'>Member Since: ${user.created_at}</li>
          </ul>
        </div>
      </div>
      <h3 class='text-black text-2xl font-bold sm:text-3xl mt-2'>Latest Repos</h3>
      <div id='repos' class='mt-2'>
      </div>
    `
  }

  showRepo(repos) {
    const repoDiv = document.querySelector('#repos');
    for (let repo of repos) {
      repoDiv.innerHTML += `
          <div class='border border-gray-300 rounded-lg mt-3 py-4 px-4'>
            <div class="">
              <div>
                <a href='${repo.html_url}' target='_blank' class='text-xl inline-block my-2'>${repo.name}</a>
              </div>
              <div class='p-2'>
                <span class='bg-blue-500 text-xs text-white py-2 px-5 mr-1 my-1 inline-block rounded'>Stars:
                  ${repo.stargazers_count}</span>
                <span class='bg-gray-500 text-xs text-white py-2 px-5 mr-1 my-1 inline-block rounded'>Watchers:
                  ${repo.watchers_count}</span>
                <span class='bg-green-500 text-xs text-white py-2 px-5 mr-1 my-1 inline-block rounded'>Open Issues:
                  ${repo.open_issues}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      `
    }

  }

  showAlert(msg, cls) {
    if (document.querySelector('.warning-div'))
      document.querySelector('.warning-div').remove();

    const div = document.createElement('div');
    div.className = cls + ' p-2 rounded text-white warning-div';
    div.appendChild(document.createTextNode(msg));
    const searchDiv = document.querySelector('#search');
    const container = document.querySelector('.search-container');
    searchDiv.insertBefore(div, container);

    setTimeout(() => div.remove(), 2000);
  }

  clearDiv() {
    this.profile.innerHTML = '';
  }
}