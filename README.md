# Human Rights First: Police Brutality Across America

You can find the deployed project at [Human Rights First - Police Brutality Across America](https://hrf-d-api.herokuapp.com/).

![postman](documentation/postman_logo.png)
[Postman documenation link](https://documenter.getpostman.com/view/11996006/TVeiCqJq)

## Contributors

| [Rob Bennett](https://github.com/RobDBennett) | [Sasana Kongjareon](https://github.com/popkdodge) | [Royer Adames](https://github.com/royeradames) | [Bikesh Maharjan](https://github.com/bikesh-maharjan) | [Heath Scott](https://github.com/Scotth72) |
| :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/64490045?s=460&u=85f903c0baf6ae8fcab0ae2d1686a434ce90be6b&v=4" width = "200" />](https://github.com/RobDBennett) | [<img src="https://avatars1.githubusercontent.com/u/62583069?s=460&u=2ce19efe9d7d8a39d3c2dc64b7a1b764b6d3c79c&v=4" width = "200" />](https://github.com/popkdodge) | [<img src="https://avatars1.githubusercontent.com/u/16887907?s=460&u=abefba57b8b58084d4df6c8a666873ed0986eea6&v=4" width = "200" />](https://github.com/royeradames) | [<img src="https://avatars2.githubusercontent.com/u/55510668?s=460&u=971839c4635847249a9c6ffc1d3b855f05910041&v=4" width = "200" />](https://github.com/bikesh-maharjan) | [<img src="https://avatars1.githubusercontent.com/u/59752102?s=460&u=bdcb67dfd73148cd7e867bd7d0448f75f45c5d3c&v=4" width = "200" />](https://github.com/Scotth72) |
| Data Scientist | Data Scientist | Back-End Developer | Front-End Developer | Front-End Developer |
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RobDBennett) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/popkdodge) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/royeradames) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bikesh-maharjan) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Scotth72) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/robdbennett-tech/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sasana-kongjareon-2618281a6/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/royer-adames/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/bikeshmaharjan91/) |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/heath-l-scott/) |            

<br>
## Description

We were approached to undertake this project by Human Rights First, a non-profit, nonpartisan organization dedicated to fighting for human rights and race equality. They have been working diligently for over 40 years, with a strong presence across the country, from Washington D.C. and Los Angeles. They have been on the forefront of this struggle for a long time, and they are very good at what they do.
The purpose of this app is to better track and report acts of police use of force. There are wild inconsistencies regarding how these acts are reported, and the information is thin no matter where you look. Using various APIs and datasets, we pooled and shaped these sources and rendered them onto an easily navigated map of the US as well as multiple graphs pointing out discrepancies. Each datapoint on the map is clickable and will give the metrics for what it represents. The goal was to have a single source of truth on this matter.
Moving forward, the app could benefit from more social media API data, and possibly an NLP model to assess this data to find relevant incidents.

## Project Overview

[Trello Board](https://trello.com/b/83IbvyuM/team-d-labs28)

[Technical Architecture and Userflow](https://whimsical.com/6sbCR4nnzvyxYy7UEbn5fz)

![Hierarchy](/documentation/hierarchy/11_18_20.PNG)

Our team is developing an interactive map that identifies instances of police use of force across the United States of America for Human Rights First, an independent advocacy and action organization.

## Deployed Product
- Front-End Deployment- This is the user version for the current product deployment.
https://d-fe.humanrightsfirst.dev/
- Back-End App- This is the back end app that pulls from the DS API and wires into the front-end. However, there isn't a splash page.
https://hrf-d-api.herokuapp.com/
- Data-Science API- This is the API that pulls from the various data sources, cleans/shapes the data, and reports various visualizations.
http://hrf-ds16.eba-fmbjvhg4.us-east-1.elasticbeanstalk.com/#/

## Linked Repos
- Front-End Repo- This repo contains all of the documentation and files for the front end deployment
https://github.com/Lambda-School-Labs/human-rights-first-d-fe
- Back-End Repo- This repo contains all of the documentation and files for the back end deployment
https://github.com/Lambda-School-Labs/human-rights-first-d-be
- Data-Science Repo- This repo contains all of the documentation and files for the data science api deployment
https://github.com/Lambda-School-Labs/human-rights-first-d-ds

## Getting Started (Back-end)

### Start repo
* Clone this repo
* npm i - install all dependencies
* npm run server - run the developer server
* npm test - run all testing

![Files](documentation/Files.png)
### Inheritance 
* No previous team code was inherited. There API was not connected, and we decided to go with another set of data provided by the stakeholder.
* The legacy code of previous team can be found on the folder that say not_use.
  
### Adding new code
Add new routers in the api folder.

## Tech Stack Used (BE)

* jest.js -Testing library
* express - web framework for Node.js
* express-validatior - back-end valitation 
* nodemon - restart your server after each file save 
* cross-env - avoids platform errors with environmentals variables
* pg - Non-blocking PostgresSQL client for Node.js
* logger - logs out every server response 
* cors - provides a Connect/Express middleware that can be used to enable CORS with various options.
* helmet - secure your Express apps by setting various HTTP headers.

## User Flows 
The user goes to the front-end website. They are greeted with the non-lethal incidents data. There are two graphs. The left-most graph is the progression of incidents over time. The play button should automatically advance time, but you can also drag the slider to a specific date. Each point will populate on the map with details and a clickable link to the stories they are associated with.

The right-most graph is a line graph with the same information, but displayed over time to easy show spikes of activity.
![User1](/documentation/User-Flow1.JPG)

Along the top of the screen you will have a few tabs. Clicking on the 'Incidents of Killing' tab will give you the second batch of graphs.
On this screen the user should see four graphs. The upper left graph is a map of the US with historical data of police lethal use of force, including off-duty incidents. The default filter is for the full time of the data, but there is a filter tab on the upper right that will allow the user to dial in on the specific timeframe they wish to see displayed. On the US map, each point is a specific instance that can be hovered over for more data. The map can zoom and pan effectively, and each datapoint is represented as close to the address that it occured as possible.

The upper-right graph is a bar graph displaying the different states with their number of incidents. This data has been normalized so that the population of the state is taken into account with the number of incidents. The purpose of this is to illustrate that the general public tends to associate police use of force with big cities, but the extremely troubling trend is that more rural areas like New Mexico have a substantively higher lethal force per capita.

The lower-left graph is a breakdown of the victim's race displayed on a pie-chart.

The lower-right graph is the breakdown of the national racial demographics for the US to illustrate differences in lethal force.
![User2](/documentation/User-Flow2.JPG)

The final user option is to go to the About page, which has some information regarding the Human Rights First organization.
![User3](/documentation/User-Flow3.JPG)

## Architecture
The flow for visualizations and descriptions between the user and the back end are detailed below.

![FE-Wire](/documentation/Front-End-Wire-Frame.JPG)

The base architecture for the Back-end API is displayed below.

![Hierarchy](/documentation/hierarchy/11_18_20.PNG)

The base architecture for the Data-Science API is displayed below.

![DS-Wire](/documentation/DS-Wire-Frame.JPG)

Within the Repo, all files related to the app are within the Project folder. Our notebooks are in the notebook folder, which is where we tested code, APIs, and visualizations. 

The original design was to pull data from various sources, clean and store it in a database. Then pull for modeling, visualizations and push it to the back end for front end deployment. Due to time constraints, we didn't deploy a model or database, but explored all of our options listed in the primary architecture image shown above. 

The deployed app pulls data from two api sources- however, we truncated this step by doing the geocoding separately and storing that file in the repo to ease up on the front-end. They had crashing issues when we were pulling it live. 

## Updates To Repo in Labs 28 (BE)
Remove all routers from the previous team, and connected the ds_server router. 

![Files](documentation/Files.png)


## End Points (BE)
us_demo_pie - This returns racial breakdown by state. Default is 'US' which returns the national breakdowns.

us_map - This returns the US map graph populated with incidents based on filter selection. Can select Armed/Unarmed, Demographic (racial), Gender, as well as date ranges. Default is Demographic with full time range.

us_bar - This shows a bar graph of demographic information by filter. Can select State, National, Zipcode, or City. Normalizes data for incidents to population. Default is National.

us_pie_vic - This shows a pie chart of the demographic information of the victims within a given time range. Can select States, National, Zipcode, City, and sort by Geography, Body Camera, Alleged Threat Level, Symptoms of mental illness, Unarmed/Did Not Have an Actual Weapon, Alleged Weapon, Victim's gender, Victim's race. Defaults to National, full time range, and Victim's Race.

us_non_lethal - This shows a US map of non-lethal incidents drawn from social media sources. There is a 'play' button on the graph that automatically advances time and displays only the incidents on that date. The slider can also be dragged to specific location. Map can zoom; each incident has clickable link to story it relates to. This is a GET request- there is no filter to select.

us_non_lethal_line - This shows a line graph of the non-lethal data over the timerange of the found data. Hovering over the line gives a link to each incident. This is a GET request- there is no filter to select.

top_x_list - This returns the highest frequency of incidents filtered by Police Violence or Killings, State or City, and the top X of the specified filters where X is the value you wish to see. Example- Selecting Killings, State, 5 will give you the 5 states with the highest killings in the given data.


## Issues (BE, FE, or DS specific)
* The Front-End wasn't able to fully deploy the filter functions for the US_Demo_Pie, US_pie_vic, us_map, and US_bar graphs. The DS endpoints have a lot of depth that was never fully utilized. It is possible that these filters could be added in the future to allow for greater graph returns.

## Future Features (DS)
* Database that holds all income DS data
* New Data Science endpoints after DS is done building them.

## Support (DS)
For advise understanding this project, questions about the code, or concerns about our approach, please contact the following-


| [Rob Bennett](https://github.com/RobDBennett) | [Sasana Kongjareon](https://github.com/popkdodge) | [Royer Adames](https://github.com/royeradames) | [Bikesh Maharjan](https://github.com/bikesh-maharjan) | [Heath Scott](https://github.com/Scotth72) |
| :---: | :---: | :---: | :---: | :---: |
| [<img src="https://avatars1.githubusercontent.com/u/64490045?s=460&u=85f903c0baf6ae8fcab0ae2d1686a434ce90be6b&v=4" width = "200" />](https://github.com/RobDBennett) | [<img src="https://avatars1.githubusercontent.com/u/62583069?s=460&u=2ce19efe9d7d8a39d3c2dc64b7a1b764b6d3c79c&v=4" width = "200" />](https://github.com/popkdodge) | [<img src="https://avatars1.githubusercontent.com/u/16887907?s=460&u=abefba57b8b58084d4df6c8a666873ed0986eea6&v=4" width = "200" />](https://github.com/royeradames) | [<img src="https://avatars2.githubusercontent.com/u/55510668?s=460&u=971839c4635847249a9c6ffc1d3b855f05910041&v=4" width = "200" />](https://github.com/bikesh-maharjan) | [<img src="https://avatars1.githubusercontent.com/u/59752102?s=460&u=bdcb67dfd73148cd7e867bd7d0448f75f45c5d3c&v=4" width = "200" />](https://github.com/Scotth72) |
| Data Scientist | Data Scientist | Back-End Developer | Front-End Developer | Front-End Developer |
|[<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/RobDBennett) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/popkdodge) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/royeradames) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/bikesh-maharjan) | [<img src="https://github.com/favicon.ico" width="15"> ](https://github.com/Scotth72) |
| [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/robdbennett-tech/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/sasana-kongjareon-2618281a6/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/royer-adames/) | [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/bikeshmaharjan91/) |  [ <img src="https://static.licdn.com/sc/h/al2o9zrvru7aqj8e1x2rzsrca" width="15"> ](https://www.linkedin.com/in/heath-l-scott/) |            

<br>

All necessary information to send us messages should be included in the Contributor's section of this ReadMe.
      

