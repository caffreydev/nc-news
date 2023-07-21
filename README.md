## NC News - Joe McCaffrey

## Links

[Hosted React app](https://www.joemccaffrey.dev/nc-news/)

[Public Github repo](https://github.com/caffreydev/nc-news)

[Backend Github repo](https://github.com/caffreydev/nc_news_beProj)

[Check out my portfolio site](https://www.joemccaffrey.dev/projects)


## Overview
This is a React JS project piece, the front end of a social news website that allows users to view, up and down vote, and comment on articles.  

The user has substantial options for interacting with and filtering the data provided.  Dynamic feedback - e.g. loading and success messages, and temporary disabling of buttons - and optimistic rendering provide the user with reassurance that their request is being processed to give a better UX and address risk of users accidentally performing actions multiple times.  This is all effectively managed through React state and useParams/useSearchParams combined with dynamic rendering of html, css classes, and components.  

I have also built a hosted backend api server that supports this front end, the public repo for this is linked above, and its readme has substantial detail including how you can reproduce your own api server build.  This has a variety of endpoints, parameters, and queries that largely correspond with the options on this web app.  You can also directly query the api server for JSON responses, links to this are provided in the repo referenced.

Feel free to explore the app in your browser, alternately for instructions on building your own version, read on for development details.

# Instructions for Developers
This repo contains all the data, code, and instructions necessary to work locally in a development environment, or to host your own production version if desired.  You can also use either my hosted back end server, or see the repo for that project for instructions on building and hosting your own backend.

## Branch Structure
1. A main branch with the source code
2. A gh-pages branch that serves the hosted web app on github pages, the `deploy.yml` file ensures the app is automatically rebuilt and deployed to this branch on every push to main

## Running Locally
To run locally you will need only to fork or copy the repo, clone to your machine and run an `npm install`, followed by `npm run dev` to get a local development server on your machine.

That should be all you need to run locally, but read on if interested in hosting your own version

## Hosting Your Own Version
As mentioned above, this is hosted through github pages, with the auto deploy script keeping the gh-pages branch updated on each push.

You can of course host it through a different provider and ignore most of these steps, but you will still want to follow steps 3, 5, 6, 7 and modify or delete your version of the `deploy.yml` file.

If you want to host your own version on github pages, you will need to follow a few more steps:

1. In your own repo, enable write access for github actions in settings
2. After your first push, a gh-pages branch will be created - set up github pages to deploy from this branch in the repository settings
3. Change the home page in the `package.json` file to your own site, (if you don't have a custom url setup , this will likely be in the format of `<username>.github.io/<reponame>`)
4. If you choose a name other than `nc-news` for the repo, you will also need to change the base in the `vite.config.js` file to reflect this
5. Change the `base` constant in the `404.html` file to reflect the path of your own site and not mine
6. Write your own readme file, and please do credit me
7. (optional) Build your own version of the backend api server, and change the `api.js` file to reference this instead of mine - see the repo linked above for details