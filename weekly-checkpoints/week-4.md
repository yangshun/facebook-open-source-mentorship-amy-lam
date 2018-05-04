## Week 4

Date: 05/04/2018

Please answer yes/no to the following:

* I feel like I got a good amount of work done this week - yes/no, week was back and forth, but trending upward!
* There are things which are blocking me from progressing - no.
* I'm enjoying the program so far - yes!

## Status Update

* I filed an issue [Feature request: Add ability to change default language](https://github.com/facebook/Docusaurus/issues/586) based on the discussion in the Discord. I reproduced the issue using [reasonml/reasonml.github.io](https://github.com/reasonml/reasonml.github.io), which has a lot of existing translations. This may be a good issue for me to work on in the future.

* PR'd [Update deprecated GitHub Buttons data-count-api](https://github.com/facebook/Docusaurus/pull/616), noticed while working on the copy feature, got it merged

* PR'd [On mobile, hide title if logo exists](https://github.com/facebook/Docusaurus/pull/629) and got it merged.

In progress:

* I started to work on the [copy feature](https://github.com/facebook/Docusaurus/issues/500).
  * Here was my first [WIP PR](https://github.com/amyrlam/Docusaurus/pull/1).
  * Attempted again in a second [WIP PR](https://github.com/amyrlam/Docusaurus/pull/3) which literally ports over the functionality from babeljs/website.
  * Joel mentioned at F8 to feel free to just post WIP's on the main Docusaurus. Also, the new preview feature is awesome! Posted my [WIP PR](https://github.com/facebook/Docusaurus/pull/634) here with questions.
  * 👉 Need to follow up on the comments here.

* I started to work on the [LiveReload feature](https://github.com/facebook/Docusaurus/issues/234). Here is my [WIP PR](https://github.com/amyrlam/Docusaurus/pull/2). Learned that I was wrong about LiveReload all along (think it may have been human error than a system-wide LiveReload issue).
  * 👉 Need to look into: "Refer to https://github.com/livereload/livereload-js for how to add code on the client side."

## Plan

* Just focus on the most important tasks: copy functionality and LiveReload. Then adding tests. To me at the moment, these seem like the ones that provide an opportunity to learn.
* Audit our spreadsheet when those are done.
* Learn more about how Docusaurus works for other repos.
