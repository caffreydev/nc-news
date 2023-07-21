## NC News - Joe McCaffrey

## Links

[Hosted React app](https://www.joemccaffrey.dev/nc-news/)

[Public Github repo](https://github.com/caffreydev/nc-news)

[Backend Github repo](https://github.com/caffreydev/nc_news_beProj)

[Check out my portfolio site](https://www.joemccaffrey.dev/projects)


## Overview
This is a React JS project piece, the front end of a social news website that allows users to view, up and down vote, and comment on articles.  

The user has substantial options for interacting with and filtering the data provided.  Dynamic feedback - e.g. loading and success messages, and temporary disabling of buttons - and optimistic rendering provide the user with reassurance that their request is being processed to give a better UX and address risk of users accidentally performing actions multiple times.  This is all effectively managed through React state and useParams/useSearchParams combined with dynamic rendering of html, css classes, and components.  

I have also built a hosted backend api server that supports this front end, the public repo for this is linked above, and its readme has substantial detail including how you can reproduce your own api server build.  This has a variety of endpoints, parameters, and queries that largely correspond with the options on this web app.  You can also directly query the api server for JSON responses, links to this are provided in the repo referenced, additionally 