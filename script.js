fetch("https://api.github.com/users/ilifar/repos")
.then(repos => repos.json())
.then(repos => {
    console.log(repos);

    for (let i = 0; i < repos.length; i++) {
        let gitubRepos = document.getElementById("github-repos");

        gitubRepos.insertAdjacentHTML("beforeend", "<ul><li><a href= '"+ repos[i].html_url +"' target='_blank'>" + repos[i].name + "</a></li></ul>")
        
    }
})