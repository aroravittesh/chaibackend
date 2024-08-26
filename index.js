require('dotenv').config()
const express = require('express')
const app = express()

const port = 4000

const githubData=
    {
        "login": "aroravittesh",
        "id": 120556714,
        "node_id": "U_kgDOBy-Mqg",
        "avatar_url": "https://avatars.githubusercontent.com/u/120556714?v=4",
        "gravatar_id": "",
        "url": "https://api.github.com/users/aroravittesh",
        "html_url": "https://github.com/aroravittesh",
        "followers_url": "https://api.github.com/users/aroravittesh/followers",
        "following_url": "https://api.github.com/users/aroravittesh/following{/other_user}",
        "gists_url": "https://api.github.com/users/aroravittesh/gists{/gist_id}",
        "starred_url": "https://api.github.com/users/aroravittesh/starred{/owner}{/repo}",
        "subscriptions_url": "https://api.github.com/users/aroravittesh/subscriptions",
        "organizations_url": "https://api.github.com/users/aroravittesh/orgs",
        "repos_url": "https://api.github.com/users/aroravittesh/repos",
        "events_url": "https://api.github.com/users/aroravittesh/events{/privacy}",
        "received_events_url": "https://api.github.com/users/aroravittesh/received_events",
        "type": "User",
        "site_admin": false,
        "name": null,
        "company": null,
        "blog": "",
        "location": null,
        "email": null,
        "hireable": null,
        "bio": null,
        "twitter_username": null,
        "public_repos": 9,
        "public_gists": 0,
        "followers": 0,
        "following": 0,
        "created_at": "2022-12-14T08:41:47Z",
        "updated_at": "2024-08-26T08:45:45Z"
      }
``

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('aroravittesh');
})

app.get('/login', (req,res) => {
    res.send('<h1>pls login at chai aur code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>Chai aur code </h2>')
})

app.get('/github', (req,res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})