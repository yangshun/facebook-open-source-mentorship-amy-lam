## Week 3

Date: 04/18/2018

Please answer yes/no to the following:

* I feel like I got a good amount of work done this week - yes and no, would like to get more done on a daily basis in Week 4, as opposed to skipping a few days like this week.
* I know what to do next week - yes, but want to discuss some tasks, mentioned in the Plan section.
* There are things which are blocking me from progressing - no.
* I'm enjoying the program so far - yes, thanks to you and Joel for being so friendly and helpful!

Aside: Are you going to the F8 Conference? I may go just the second day, May 2, if you want to meet in person. No problem if not!

## Status Update

Please mention the work you did this week. A good status update will mention the things you learned, the things you tried (both what worked and what didn't); and the things you did. As an example:

* I worked on the default language issue from Discord. I tried to reproduce it in my own docusaurus-starter-kit, but didn't have all of the Crowdin translations set up. So, I then went about reproducing from [the user's repo](https://github.com/TheBestOrNothing/www.majorityattack.com). It was very confusing because the user's repo is a fork of Docusaurus instead of adding `docusaurus-init` via yarn/npm. I @'d the user in Discord for more info and will see if he responds. Yangshun also @'d the user to suggest that he not set up his repo as a fork of Docusaurus.

Yangshun: He didn't reply. We can pass on this task first.

* I worked on [Add table to clarify versioning documentation](https://github.com/facebook/Docusaurus/pull/573), which closed [Update docs to clarify latest and current versioning](https://github.com/facebook/Docusaurus/issues/433).

Yangshun: Very useful!

* I worked on [Allow customizing of blog author image URL](https://github.com/facebook/Docusaurus/pull/577), which is an issue that we discussed at the Week 2 meeting. It turns out this functionality existed, but I updated the documentation to make it clearer.
  * That also resulted in [Replace authorImage with authorImageURL PR](https://github.com/facebook/react-native-website/pull/314) on react-native-website.
  * Filed [Issue: Fix author images in blog](https://github.com/facebook/react-native-website/issues/316) - wanted to discuss super quickly with you.
  * Remove authorImage from Docusaurus in future.

Yangshun: What we could have done better was to first create an RFC issue with the project and gathered opinion about the task and got the green light before moving forward with implementing it. Although this feature task ended up being a migration one, we got to learn how to release new versions of software without breaking existing ones.

* I updated this plan as I went along this week, made it a lot easier. And the [Task Tracking spreadsheet](https://docs.google.com/spreadsheets/d/1lVCN7IUgQEo-tSkKP0-P6LtCW25Olnqj7KT-faUYRFI/edit#gid=0) is a good way to organize all the tasks.

Yangshun: Awesome! Glad you found it helpful!

## Plan

Summarize what you plan on learning or working on in the next week, and if there are any concerns you have about the plan. As an example:

* I'm starting to work on [Any plan to support copy the example code?](https://github.com/facebook/Docusaurus/issues/500) now. Meant to get it done in Week 3 but ran out of time.
* I'm starting to work on [Fix documentation for Unit 2, Parse stuf](https://www.facebook.com/groups/ossmentorship/learning_content/?filter=162143457744403) to improve the open source mentorship program for the next person.
* I think that the live reload project would be a good project for the second half of the mentorship program since it will have a lot of impact and make it easier to develop in Docusaurus in the future.
* Let's discuss the stories below the grey line of the [Task Tracking spreadsheet](https://docs.google.com/spreadsheets/d/1lVCN7IUgQEo-tSkKP0-P6LtCW25Olnqj7KT-faUYRFI/edit#gid=0).

## Meeting Notes

- Amy is now within the top 10 contributors of Docusaurus! 🎉
- Yangshun has done further research and realized that because Docusaurus is a static site and React is used more like a templating engine rather than a client-side view library. There isn't much value in pursuing React tasks/related work.
- We have decided on live reload being the bigger feature for the second half of the program.
- Amy will start researching on live reload by looking at https://github.com/napcs/node-livereload and try to integrate live reload in one of her own projects.
- Amy will attempt a testing issue - that's the only type of issue that hasn't being covered thus far.

## Deliverables for Week 4

- Work on remaining issues and get some new tests up.
- Do some preliminary research on live reload and try to set up a project that uses it.
