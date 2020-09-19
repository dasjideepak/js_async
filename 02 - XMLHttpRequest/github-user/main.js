let searchOutput = document.querySelector(".search-output");
document.querySelector('.btn').addEventListener("click", findInfo)

function findInfo(el) {
    var input = document.querySelector("input").value;    
    function getUserInfo(user) {
        let userDetails = `
        <div class="out-sec"> 
            <img src="${user.avatar_url}" alt="User Image">
            <ul>
                <li>Name: ${user.name}</li>
                <li>ID: ${user.id}</li>
                <li>Bio: ${user.bio}</li>
            </ul>
        <div>`
        searchOutput.innerHTML = userDetails;
        return searchOutput;
    }

    let xhr = new XMLHttpRequest();
    xhr.open('GET',`https://api.github.com/users/${input}`,true);
    xhr.onload = function() {
        if (xhr.status != 200) { 
        alert("Error"); 
        } else { 
            JSON.parse(xhr.response);
            const response= JSON.parse(this.response);
            getUserInfo(response)
        }
    };
    xhr.send();
}

