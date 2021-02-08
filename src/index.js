// Async function with error handling
const getGithubReposOfUser = async (userName) => {
    let response;
    try {
      response = await fetch(`https://www.sodexo.fi/ruokalistat/output/daily_json/152/YYYY-MM-DD`);
      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }
    } catch (error) {
      console.error('getGithubReposOfUser error', error.message);
    }
    let repos = await response.json();
    return repos;
  };
  getGithubReposOfUser('mattpe')
    .then(data => console.log(data));


// Basic fetch as async function
const getGithubReposOfUser = async (userName) => {
  let response = await fetch(`https://api.github.com/users/${userName}/repos`);
  let repos = await response.json();
  return repos;
};
getGithubReposOfUser('mattpe')
  .then(data => console.log(data));