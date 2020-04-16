const main = document.querySelector("main");
const searchIcon = document.querySelector(".search-icon")
const footer = document.querySelector("footer");
let showRepo = document.querySelector(".repo-list")
let showFollower = document.querySelector(".follower-list");


// Show User Details
function searchDetails() {
    var input = document.querySelector(".search-box").value;  
    const fetchPromise = fetch(`https://api.github.com/users/${input}`);
    fetchPromise.then(response => {
        if (response.status != 200) {
            let error = alert("Error")
            return error;
        } 
        else {
            main.style.display = "block";
            footer.style.display = "block";
            return response.json();            
        }
    }).then(obj => {

        const userImage = document.querySelector(".user-img");
        userImage.src = obj.avatar_url;
        
        const profileName = document.querySelector(".profile-name");
        profileName.innerText = obj.name;

        const userLogin = document.querySelector(".user-name");
        userLogin.innerText = `@${obj.login}`;

        const userBio = document.querySelector(".user-bio");
        
        if(obj.bio === null || obj.bio === "") {
            userBio.innerText = "Bio Not Available";
        } else {
            userBio.innerText = obj.bio;
        }
        
        const userCompany = document.querySelector(".user-org");

        if(obj.company === null || obj.company === "") {
            userCompany.innerText = "Company Info Not Available";
        } else {
            userCompany.innerText = obj.company;
        }

        const userLocation = document.querySelector(".user-location");
        
        if(obj.location === null || obj.location === "") {
            userLocation.innerText = "Location Not Available";
        } else {
            userLocation.innerText = obj.location;
        }
        
        const userWebsite = document.querySelector(".user-website");

        if(obj.blog === null || obj.blog === "") {
            userWebsite.innerText = "Website Not Available";
        } else {
            userWebsite.innerText = obj.blog;
        }
        
        const userFollower = document.querySelector(".user-followers");
        userFollower.innerText = obj.followers;

        const userFollowing = document.querySelector(".user-followings");
        userFollowing.innerText = obj.following;

        const userRepos = document.querySelector(".user-repo");
        userRepos.innerText = obj.public_repos;
    
        // Show User Repos
        function searchUserRepo() {
            const fetchPromise = fetch(`https://api.github.com/users/${input}/repos`);
            console.log(fetchPromise)
            fetchPromise.then(response => {
            return response.json();
            }).then(repos => {
                let reposList = "";
                for(let i = 0; i < 5; i++ ) {
                    reposList += `
                    <div class="single-repo">
                        <h3 class="repo-title">${repos[i].name}<span>(fork)</span></h3>
                        <h4 class="repo-des">${repos[i].description}</h4>
                        <div class="flex repo-icons">
                        <div class="flex">  
                            <div class="flex">
                            <i class="fas ic fa-star"></i>
                            <kbd>${repos[i].stargazers_count}</kbd>
                            </div>
                            <div class="flex">
                            <i class="fas ic fork-icon fa-code-branch"></i>
                            <kbd>${repos[i].forks}</kbd>
                            </div>
                        </div>
                        <div class="repo-date">
                            <h5>Last updated ${repos[i].updated_at}</h5>
                        </div>
                        </div>
                    </div>`
                }
                showRepo.innerHTML = reposList;
            });
        };        
        searchUserRepo();        

        // Show User Followers
        function userFollowers() {
            const fetchPromise = fetch(`https://api.github.com/users/${input}/followers`);
            fetchPromise.then(response => {
            return response.json();
            }).then(follower => {
                let followerList = "";
                for(let i = 0; i < 5; i++ ) {
                    followerList += `
                    <div class="single-follower flex">
                        <img class="follower-img" src="${follower[i].avatar_url}" alt="User Image">
                        <p class="follower-username">${follower[i].login}</p>
                    </div>`
                }
                showFollower.innerHTML = followerList;               
            });
        };    
        userFollowers();   

    }).catch(err => {
    alert("Error") 
    });
};        

// addEventListner on Click
searchIcon.addEventListener('click', searchDetails);
