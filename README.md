# Trey Zhong's personal Website

This is the code of my personal website. The website is modified from michaelcereda.com.
I was having issue with heroku, because the host port number can't be changed. Then I found this article about [hosting Gatsby](https://www.aerobatic.com/blog/gatsbyjs). It solves the problem (the article did miss a "}" in the description, so just refer to [this](https://bitbucket.org/aerobatic/gatsby-demo/src/800d64ef2795eb87159663e39d2c38d6dfe4a3a4/package.json?at=master&fileviewer=file-view-default) file for the package.json file script. 

With **aerobatic** the hosting service, I can only do 5 deployments a day with the free account. Just keep that in mind.
 
The only thing is I have to host my code in bitBucket. Here is the link of the files: https://bitbucket.org/trey_zhong/michaelcereda.com/overview

Some basic git commond for the bitBucket: (Very similar to the github one, missing mention of**add .** in the article) 
https://confluence.atlassian.com/bitbucket/copy-your-git-repository-and-add-files-746520876.html

The other thing is that I tried different version of personal website and realize that the web hosting doesn't like if I upload the node_module file to the repo. 

# Run: (local host) 

make sure you have gatsby installed: 
```
npm install
npm run dev
```
Then the app will be available at http://localhost:8000/

# Todo 
- Need to change the main project content and side project content once I have them.
- Maybe get a better picture for the header image. 
