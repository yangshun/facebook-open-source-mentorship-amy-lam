## Week 5

Date: 05/11/2018

Please answer yes/no to the following:

* I feel like I got a good amount of work done this week - yes and no.
* I know what to do next week - yes.
* There are things which are blocking me from progressing - no.
* I'm enjoying the program so far - yes, I think that I can keep contributing to Docusaurus after the program. Before the program, getting started in open source seemed like an insurmountable task.

## Status Update

* PR to react-native-website [Replace authorImage with authorImageURL](https://github.com/facebook/react-native-website/pull/314) finally got merged! Nice to help out a real user of Docusaurus.
* I submitted a follow-on PR [Use authorImageURL, authorImage is deprecated in Docusaurus](https://github.com/facebook/react-native-website/pull/354) to react-native-website and it was merged.
* Opened a PR to react-native-website [Update broken profile images](https://github.com/facebook/react-native-website/pull/356). It seems like the way that we handle images in Docusaurus is not foolproof.
  * If people use Twitter, the icon URL changes when they change their profile picture.
  * If people use FBID, the profile picture doesn't always work. Maybe when it's not a square? Change in Docusaurus?
  * I wrote up more info on this re: https://github.com/facebook/react-native-website/issues/316
  * Suggest Gravatar as a potentially less error prone solution?
* I worked on [LiveReload](https://github.com/amyrlam/Docusaurus/pull/4) and submitted another WIP PR on my repo. I'm not sure what's wrong with the gaze / tiny-lr setup from looking at [Yangshun's mini Docusaurus](https://github.com/yangshun/facebook-open-source-mentorship-amy-lam/pull/10/files) example? (This example was super helpful BTW, since there didn't seem to be much explanation on the web on how to implement this.)
* Realized that changes to the [F8 app](https://www.facebook.com/groups/ossmentorship/learning_content/?filter=162143457744403) were already posted in PR's, just they are on the Docusaurus `/next` URL and not live yet. So updated this task as a Won't Fix in [our spreadsheet](https://docs.google.com/spreadsheets/d/1lVCN7IUgQEo-tSkKP0-P6LtCW25Olnqj7KT-faUYRFI/edit#gid=0).

## Plan

* Let's talk about [LiveReload](https://github.com/amyrlam/Docusaurus/pull/4) today, sorry this has taken me so long.
* Revisit the [copy task](https://github.com/facebook/Docusaurus/pull/634) or keep on hold?
* Start working on a test task re: [Add tests](https://github.com/facebook/Docusaurus/issues/263)?
