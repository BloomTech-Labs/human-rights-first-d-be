# Human Rights First Police Use of Force Map - Back End
## About
Our team is developing an interactive map that identifies potential instances of police use of force across the United States of America for Human Rights First, an independent advocacy and action organization. We are also developing additional graphics to track and display police brutality trends.
## The Team
- [Hira Khan](https://github.com/Hira63S) - Team Project Lead
- [Cedric Winbush](https://github.com/caw442000) - Team Project Lead
- [Virginia Davenport](https://github.com/virginia-d90) - Back End Engineer
- [Juan Rivera](https://github.com/Juan-Rivera) - Back End Engineer
- [Barbara Moore](https://github.com/barbaralois) - Front End Engineer
- [Blayze Stone](https://github.com/blayzestone) - Front End Engineer
- [Marta Krawczyk](https://github.com/MartaKode) - Front End Engineer
- [David Cruz](https://github.com/DAVIDCRUZ0202) - Data Science Engineer
- [Johann Augustine](https://github.com/DataLovecraft) - Data Science Engineer

## Contributing

## Base URL for deployed site
- https://labs27-d-hrf-api.herokuapp.com

## Endpoints
| Request | URL | Description |
| ------- | --- | ----------- |
| GET | /data/proxy | connects directly to DS API if problems arise populating tables |
| GET | /data/populate | adds data from the DS API to backend tables |
|GET|/incidents| returns all incidents in the database|
|GET|/incidents/:id|returns incident with given id|
|GET|/incidents/dummy|returns seeded dummy data from previous team(currently connected to front end) **NOTE: different data schema than other endpoints|

## Table Schema