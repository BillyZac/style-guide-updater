# Style Guide Updater

This is a work in progress, but here's the idea:

This is a small web server that hangs out next to the deployed style guide and responds to git pushes to the two repositories that feed into the Style Guide. Whenever someone pushes to one of these repos, Github fires a web hook, which is received by this server. The commit info is extracted and then passed as arguments to a bash script. The bash script does a git pull and rebuild of the Style Guide, passing along the commit info (somehow). This commit info can then be used by webpack (I think) to be displayed on the user facing Style Guide. So viewers of the Style Guide can see when the last commit was made, who did it, maybe a link to the commit or an avatar. Stuff like that.

Notes:
I'm stuck on how to pass the commit info to the Style Guide. If I can get it into env variables, then I'm good. But `export` is not working in my Bash scripts.

I could also write it to a file, as I'm doing in restart.js, then import the json during the build step for the Style Guide. I don't love this because the file will be awkwardly located with respect to one or both scripts.

Hm...
