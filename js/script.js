// Overview with username variables
const overview = document.querySelector(".overview");
const username = "ljoseph13";

const gitUserInfo = async function () {
    const userInfo = await fetch(`https://api.github.com/users/ljoseph13`);
    const data = await userInfo.json();
    displayUserInfo(data);
};

gitUserInfo();

// GitHub user info from JSON api source:
const displayUserInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `<figure><img alt="user avatar" src=${data.avatar_url} /></figure>
    <div>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`;
overview.append(div);
};