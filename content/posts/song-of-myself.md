---
date: 2019-07-22T22:44:38.000+00:00
title: 'Tutorial: How to Push To GitHub'
author: Ralph Waldo Emerson
hero_image: "/content/images/ren-ran-bBiuSdck8tU-unsplash.jpg"

---
To push a to repository in GitHub, you must first need to have git version control installed on your system. To do this, visit [git-scm.com](http://git-scm.com/) to begin the install process.

_As a side note: A repository is also commonly called and known as a “repo” for short._

Once you have git installed and configured, navigate to the directory/folder/repo you want to push to GitHub.

Once your in the directory, run the command:

| git add -A

git add, allows you to add/stage files for pushing. The -A flag indicates you’re wanting to push all of the files within that repo/directory. You could also chose to stage single files, like index.html. To do this simply use the git add command with the file.

| git add index.html

Once files are staged, you need to commit the changes. To do this use the command:

| git commit

Most commonly, developers use a commit message to briefly describe what the commit is about and what was changed. For Example: If the page title was changed to “Hello, World”. you may want to add a commit message like: “Changed the title to say Hello, World” You can do this by using the git commit command with a -m flag to add a message. For Example:

| git commit -m "Changed page title to; Hello, World."

Once your files are committed use the git push command or git push -u origin master; to push your changes to GitHub.