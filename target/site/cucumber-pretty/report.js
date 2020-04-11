$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("DarkSky.feature");
formatter.feature({
  "line": 3,
  "name": "Verify darksky",
  "description": "",
  "id": "verify-darksky",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.before({
  "duration": 14833378311,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyHomePage()"
});
formatter.result({
  "duration": 2123218082,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify timeline is displayed in correct format",
  "description": "",
  "id": "verify-darksky;verify-timeline-is-displayed-in-correct-format",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@timelineformat"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I entered Chicago in search box",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I verify timeline is displayed with two hours incremented",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chicago",
      "offset": 10
    }
  ],
  "location": "DarkSkyHomeSD.verifyChosenLocation(String)"
});
formatter.result({
  "duration": 5737456991,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyTimelineFormat()"
});
formatter.result({
  "duration": 3714308351,
  "status": "passed"
});
formatter.after({
  "duration": 376205705,
  "status": "passed"
});
formatter.before({
  "duration": 7059852752,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on DarkSky HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyHomePage()"
});
formatter.result({
  "duration": 1020089681,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Verify individual day temp timeline",
  "description": "",
  "id": "verify-darksky;verify-individual-day-temp-timeline",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@temptimeline"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "I expand today\u0027s timeline",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I verify lowest and highest temp is displayed correctly",
  "keyword": "Then "
});
formatter.match({
  "location": "DarkSkyHomeSD.expandToday()"
});
formatter.result({
  "duration": 129167043,
  "status": "passed"
});
formatter.match({
  "location": "DarkSkyHomeSD.verifyTempValues()"
});
formatter.result({
  "duration": 719338257,
  "status": "passed"
});
formatter.after({
  "duration": 310489439,
  "status": "passed"
});
});