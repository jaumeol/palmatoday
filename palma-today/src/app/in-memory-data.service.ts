import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const news =
    {
      "response": {
        "status": "ok",
        "userTier": "developer",
        "total": 2278764,
        "startIndex": 1,
        "pageSize": 10,
        "currentPage": 1,
        "pages": 227877,
        "orderBy": "newest",
        "results": [
          {
            "id": "football/live/2021/jul/03/euro-2020-ukraine-v-england-buildup-italy-joy-and-more-live",
            "type": "liveblog",
            "sectionId": "football",
            "sectionName": "Football",
            "webPublicationDate": "2021-07-03T11:24:27Z",
            "webTitle": "Euro 2020: Jadon Sancho in line to start for England against Ukraine – live!",
            "webUrl": "https://www.theguardian.com/football/live/2021/jul/03/euro-2020-ukraine-v-england-buildup-italy-joy-and-more-live",
            "apiUrl": "https://content.guardianapis.com/football/live/2021/jul/03/euro-2020-ukraine-v-england-buildup-italy-joy-and-more-live",
            "isHosted": false,
            "pillarId": "pillar/sport",
            "pillarName": "Sport"
          },
          {
            "id": "sport/live/2021/jul/03/tour-de-france-2021-stage-eight-takes-race-into-mountains-live-alps-cycling",
            "type": "liveblog",
            "sectionId": "sport",
            "sectionName": "Sport",
            "webPublicationDate": "2021-07-03T11:23:31Z",
            "webTitle": "Tour de France 2021: stage eight takes race into the Alps – live!",
            "webUrl": "https://www.theguardian.com/sport/live/2021/jul/03/tour-de-france-2021-stage-eight-takes-race-into-mountains-live-alps-cycling",
            "apiUrl": "https://content.guardianapis.com/sport/live/2021/jul/03/tour-de-france-2021-stage-eight-takes-race-into-mountains-live-alps-cycling",
            "isHosted": false,
            "pillarId": "pillar/sport",
            "pillarName": "Sport"
          },
          {
            "id": "sport/live/2021/jul/03/afl-2021-hawthorn-vs-port-adelaide-live-scores-teams-hawks-v-power-premiership-season-round-16-fixture-team-news-start-time-tonight-footy-updates",
            "type": "liveblog",
            "sectionId": "sport",
            "sectionName": "Sport",
            "webPublicationDate": "2021-07-03T11:21:16Z",
            "webTitle": "AFL 2021 round 16: Hawthorn v Port Adelaide – live!",
            "webUrl": "https://www.theguardian.com/sport/live/2021/jul/03/afl-2021-hawthorn-vs-port-adelaide-live-scores-teams-hawks-v-power-premiership-season-round-16-fixture-team-news-start-time-tonight-footy-updates",
            "apiUrl": "https://content.guardianapis.com/sport/live/2021/jul/03/afl-2021-hawthorn-vs-port-adelaide-live-scores-teams-hawks-v-power-premiership-season-round-16-fixture-team-news-start-time-tonight-footy-updates",
            "isHosted": false,
            "pillarId": "pillar/sport",
            "pillarName": "Sport"
          },
          {
            "id": "sport/live/2021/jul/03/wimbledon-2021-cirstea-v-raducanu-federer-v-norrie-and-more-live",
            "type": "liveblog",
            "sectionId": "sport",
            "sectionName": "Sport",
            "webPublicationDate": "2021-07-03T11:19:35Z",
            "webTitle": "Wimbledon 2021: Cirstea v Raducanu, Federer v Norrie and more – live!",
            "webUrl": "https://www.theguardian.com/sport/live/2021/jul/03/wimbledon-2021-cirstea-v-raducanu-federer-v-norrie-and-more-live",
            "apiUrl": "https://content.guardianapis.com/sport/live/2021/jul/03/wimbledon-2021-cirstea-v-raducanu-federer-v-norrie-and-more-live",
            "isHosted": false,
            "pillarId": "pillar/sport",
            "pillarName": "Sport"
          },
          {
            "id": "world/live/2021/jul/03/coronavirus-live-news-doctors-call-for-england-to-keep-some-restrictions-after-19-july-indonesia-in-partial-lockdown",
            "type": "liveblog",
            "sectionId": "world",
            "sectionName": "World news",
            "webPublicationDate": "2021-07-03T11:10:08Z",
            "webTitle": "Coronavirus live news: Iran fears fifth wave due to Delta variant; keep some restrictions in England after 19 July, doctors urge",
            "webUrl": "https://www.theguardian.com/world/live/2021/jul/03/coronavirus-live-news-doctors-call-for-england-to-keep-some-restrictions-after-19-july-indonesia-in-partial-lockdown",
            "apiUrl": "https://content.guardianapis.com/world/live/2021/jul/03/coronavirus-live-news-doctors-call-for-england-to-keep-some-restrictions-after-19-july-indonesia-in-partial-lockdown",
            "isHosted": false,
            "pillarId": "pillar/news",
            "pillarName": "News"
          },
          {
            "id": "sport/live/2021/jul/03/england-v-india-third-womens-odi-live-cricket",
            "type": "liveblog",
            "sectionId": "sport",
            "sectionName": "Sport",
            "webPublicationDate": "2021-07-03T11:09:16Z",
            "webTitle": "England v India: third women’s ODI – live!",
            "webUrl": "https://www.theguardian.com/sport/live/2021/jul/03/england-v-india-third-womens-odi-live-cricket",
            "apiUrl": "https://content.guardianapis.com/sport/live/2021/jul/03/england-v-india-third-womens-odi-live-cricket",
            "isHosted": false,
            "pillarId": "pillar/sport",
            "pillarName": "Sport"
          },
          {
            "id": "politics/2021/jul/03/byelections-and-labour-what-can-keir-starmer-learn-from-results",
            "type": "article",
            "sectionId": "politics",
            "sectionName": "Politics",
            "webPublicationDate": "2021-07-03T11:05:21Z",
            "webTitle": "Byelections and Labour: what can Keir Starmer learn from results?",
            "webUrl": "https://www.theguardian.com/politics/2021/jul/03/byelections-and-labour-what-can-keir-starmer-learn-from-results",
            "apiUrl": "https://content.guardianapis.com/politics/2021/jul/03/byelections-and-labour-what-can-keir-starmer-learn-from-results",
            "isHosted": false,
            "pillarId": "pillar/news",
            "pillarName": "News"
          },
          {
            "id": "music/2021/jul/03/angela-hewitt-love-songs-review-elegy-toby-hughes-double-bass-benjamin-powell-inside-music-fenella-humphreys",
            "type": "article",
            "sectionId": "music",
            "sectionName": "Music",
            "webPublicationDate": "2021-07-03T11:00:50Z",
            "webTitle": "Classical home listening: Angela Hewitt and a recital rarity",
            "webUrl": "https://www.theguardian.com/music/2021/jul/03/angela-hewitt-love-songs-review-elegy-toby-hughes-double-bass-benjamin-powell-inside-music-fenella-humphreys",
            "apiUrl": "https://content.guardianapis.com/music/2021/jul/03/angela-hewitt-love-songs-review-elegy-toby-hughes-double-bass-benjamin-powell-inside-music-fenella-humphreys",
            "isHosted": false,
            "pillarId": "pillar/arts",
            "pillarName": "Arts"
          },
          {
            "id": "lifeandstyle/2021/jul/03/i-see-people-ageing-i-dont-always-see-us-one-family-30-years-30-photographs",
            "type": "article",
            "sectionId": "lifeandstyle",
            "sectionName": "Life and style",
            "webPublicationDate": "2021-07-03T11:00:50Z",
            "webTitle": "‘I see people ageing - I don’t always see us’: one family, 30 years, 30 photographs",
            "webUrl": "https://www.theguardian.com/lifeandstyle/2021/jul/03/i-see-people-ageing-i-dont-always-see-us-one-family-30-years-30-photographs",
            "apiUrl": "https://content.guardianapis.com/lifeandstyle/2021/jul/03/i-see-people-ageing-i-dont-always-see-us-one-family-30-years-30-photographs",
            "isHosted": false,
            "pillarId": "pillar/lifestyle",
            "pillarName": "Lifestyle"
          },
          {
            "id": "society/2021/jul/03/allowing-people-in-england-with-covid-both-jabs-to-skip-quarantine-will-cause-resentment",
            "type": "article",
            "sectionId": "society",
            "sectionName": "Society",
            "webPublicationDate": "2021-07-03T10:51:27Z",
            "webTitle": "Letting fully vaccinated skip quarantine in England ‘will cause resentment’",
            "webUrl": "https://www.theguardian.com/society/2021/jul/03/allowing-people-in-england-with-covid-both-jabs-to-skip-quarantine-will-cause-resentment",
            "apiUrl": "https://content.guardianapis.com/society/2021/jul/03/allowing-people-in-england-with-covid-both-jabs-to-skip-quarantine-will-cause-resentment",
            "isHosted": false,
            "pillarId": "pillar/news",
            "pillarName": "News"
          }
        ]
      }
    }
    return { news };
  }
}
