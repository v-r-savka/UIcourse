'use strict';

const url = 'https://api.github.com/users/';
const form = document.getElementById('form');
const search = document.getElementById('search');
const card = document.getElementById('card');




addEventListener('submit', onSubmit);

function onSubmit(e) {
   e.preventDefault();
   const user = search.value;

   if (user) {
      getUser(user);
      search.value = '';
   }
}

async function getUser(user) {
   try {
      let githubResponse = await fetch(`https://api.github.com/users/${user}`);
      let githubUser = await githubResponse.json();
      createUserCard(githubUser);
      getRepos(user);
   } catch (e) {
      showErrMessage(e.message);
   }
}

function showErrMessage(msg) {
   const message = `
      <div class="error">
         <h1>${msg}</h1>
      </div>
   `;
   card.innerHTML = message;
}



function createUserCard(githubUser) {
   console.log(githubUser);

   const userCard = `
   <div class="card__avatar">
      <img src="${githubUser.avatar_url}" alt="User\'s avatar">
   </div>
   <div class="card__info">
      <h3>${githubUser.name || githubUser.login}</h3>
      <ul class="card__followers">
         <li>${githubUser.followers} <strong>Followers</strong></li>
         <li>${githubUser.following} <strong>Following</strong></li>
         <li>${githubUser.public_repos} <strong>Repos</strong></li>
      </ul>

      <div id="repos" class="card__repos">
         <ul id="list" class="card__list">
         </ul>
      </div>
   </div>
   `
   card.innerHTML = userCard;
}

async function getRepos(userName) {
   try {
      const responseRepos = await fetch(url + userName + `/repos?sort=created`);
      console.log(responseRepos);
      const repos = await responseRepos.json();
      console.log(repos);
      addReposToCard(repos);
   } catch (error) {
      console.log(e);
      showErrMessage(e.message)
   }
}

function addReposToCard(repos) {
   console.log(repos)
   const reposList = document.getElementById('list')
   repos.slice(0, 5).forEach(repo => {
      const li = document.createElement('li');
      console.log(repo);
      console.dir(repo)
      reposList.append(li);
      console.log(li);
      const repoLink = document.createElement('a');
      li.append(repoLink);
      repoLink.href = `https://github.com/${repo.full_name}`;
      repoLink.classList.add("card__link");
      repoLink.target = '_blank';
      repoLink.innerText = repo.name;

   })
}

