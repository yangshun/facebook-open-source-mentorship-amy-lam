## Week 2

Date: 04/11/2018

Please answer yes/no to the following:

* I feel like I got a good amount of work done this week - yes and no - it was an improvement over last week and getting more familiar with the repo and contributions landed. But some investigation of the issues took awhile!
* I know what to do next week - yes, I have been updating [the task tracking spreadsheet](https://docs.google.com/spreadsheets/d/1lVCN7IUgQEo-tSkKP0-P6LtCW25Olnqj7KT-faUYRFI/edit#gid=0). 
* There are things which are blocking me from progressing - no, but I would like to work on more React things as I'm still getting familiar with React.
* I'm enjoying the program so far - yes! Thanks for being so helpful and prompt! 

## Status Update

Please mention the work you did this week. A good status update will mention the things you learned, the things you tried (both what worked and what didn't); and the things you did. 

> This week I worked on Docusaurus a11y based on Joel's experience with Pa11y in [Issue #462](https://github.com/facebook/Docusaurus/issues/462). Wasn't familiar with Pa11y before, is a cool tool! I made my first WIP [PR #528](https://github.com/facebook/Docusaurus/pull/528). I wasn't sure about how to solve some of the a11y errors, so I thought a WIP PR was the best way to get unstuck. I also took a stab at implementing eslint and an eslint a11y linter. I thought that an eslint a11y linter would give more insight on  how to solve the issue. (This could be something that we implement later, if Joel / Docusaurus wants to move forward with it.) Yangshun gave me feedback that unblocked me to move forward! I also agreed with Yangshun's feedback that it would have been better to address those items separately.

> For the same Pa11y issue, I then got [PR #529](https://github.com/facebook/Docusaurus/pull/529) and [PR #542](https://github.com/facebook/Docusaurus/pull/542). These PR's closed out the issue. There is more that could be done re: a11y, but this was a good first pass at the issue. There also may be a bug with Pa11y, which I noted in the spreadsheet. The Pa11y repo sounds interesting to dig into, but I may punt that til after the program, since I'd like to focus on Docusaurus / learning React for now. 

> I then investigated [Issue #433](https://github.com/facebook/Docusaurus/issues/433) on docs versioning - current, past (e.g. v0.52), and next (the master branch). Once I started reading over the documentation in detail, it seemed like a doc fix wasn't needed. But I submitted [PR #545](https://github.com/facebook/Docusaurus/pull/545) to clean up the documentation. I will submit another PR with an explanatory table that should completely close out Issue 433.

## Plan

Summarize what you plan on learning or working on in the next week, and if there are any concerns you have about the plan. 

> I want to investigate the default language issue that came in on Discord today if possible. I will chime in on Discord and/or file an issue if needed.

> I want to add an explanatory table to close out [Issue #433](https://github.com/facebook/Docusaurus/issues/433) and make the versioning documentation more clear.

> I'd like to focus on some feature / React work this week so that I can learn more about React. It seems like could take on:
* [Issue #500](https://github.com/facebook/Docusaurus/issues/500) - new feature: add support to copy the example code. I saw Yangshun's comment pointing at an example in another repo so I could look at that for ideas.
* [Issue #263](https://github.com/facebook/Docusaurus/issues/263) - add tests. At first glance it doesn't seem like any tests are running CI but I may just not be familiar with it in React? Could discuss today for insight.
* [Issue #234](https://github.com/facebook/Docusaurus/issues/234) - adding live reload also seems like a "killer" feature that would make development a lot easier. But I am not sure how to tackle this yet. I guess in Ember it's a part of ember-cli.
* Also open to any issues that you suggest. Let's discuss today!
