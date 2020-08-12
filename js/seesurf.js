console.warn('see surf')

var xhr = new XMLHttpRequest();
xhr.open("POST", "https://team.githubapp.com/api/ideas/33579/star", true);
xhr.send();
//xhr.setRequestHeader("Origin")
async function postData(url = '', data = {}) {
const response = await fetch("https://team.githubapp.com/api/ideas/33579/star", {
method: 'POST',
mode: 'no-cors',
cache: 'no-cache',
credentials: 'include',
});
return response.json(); // parses JSON response into native JavaScript objects
}
postData('https://team.githubapp.com/api/ideas/33579/star', {})
.then(data => {
console.log(data); // JSON data parsed by `data.json()` call
});