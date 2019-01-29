/*
const template = data => `
  <div class="github-repo-container">
    <a class="github-repo-name" href="${data.html_url}" target="_blank">${data.name}</a>
    <p class="github-repo-desc">${data.description}</p>

    <div class="github-repo-meta">
      <p class="github-repo-info"><img class="github-repo-icon" src="images/icons/star.svg">${data.stargazers_count}</p>
      <p class="github-repo-info"><img class="github-repo-icon" src="images/icons/fork.svg">${data.forks_count}</p>
    </div>
  </div>
`;
 */

export default function() {
  fetch("https://api.github.com/users/Bartozzz/repos")
    .then(response => response.json())
    .then(response => {
      response.forEach(datum => {
        const repo = document.querySelector(`[data-repo-name="${datum.name}"]`);

        if (repo) {
          const stars = repo.querySelector(`[data-repo-stars]`);
          const forks = repo.querySelector(`[data-repo-forks]`);

          stars.innerHTML = `<img class="icon" src="/assets/images/icons/star.svg" aria-label="star">${datum.stargazers_count}`;
          forks.innerHTML = `<img class="icon is-balanced" src="/assets/images/icons/fork.svg" aria-label="fork">${datum.forks_count}`;
        }
      });

      /*
      const elem = document.createDocumentFragment();

      response.forEach(datum => {
        const wrap = document.createElement("div");

        wrap.classList.add("github-repo");
        wrap.innerHTML = template(datum);

        elem.appendChild(wrap);
      });

      document.querySelector("#repos").appendChild(elem);
      */
    })
    .catch(error => {
      console.error("Could not load GitHub repos", error);
    });
}
