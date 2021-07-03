class Git {
  constructor() {
    this.client_id = 'd29dee0e9f12c8efb402';
    this.client_secret = 'd29dee0e9f12c8efb402';
    this.repos_count = 10;
    this.repons_sort = 'created: asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repo = await repoResponse.json();

    console.log(repo);
    return {
      profile,
      repo
    }
  }
}