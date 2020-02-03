<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>

<h1 align="center">Land of Hop</h1>

I learn web development by creating online beer catalog since 2017 🍻. I was hurry on first months, I needed simple SPA just to be able to add beverages to a database. Data was my priority, because is it foundation of every application. I have choose React and I created [first version](https://github.com/tomekrozalski/landofhop) of my app. It was CRA with Formik, Styled Components and other libraries which I found usefull 🔨.  
  
I knew Create React App is temporary solution. I was looking for something better, more performant, easier to maintain. Of course I have tried other frameworks, like [Svelte with Sapper](https://github.com/tomekrozalski/landofhop-svelte). I had (and still have) huge dilemmas about type systems. The choice was basically doomed from the beginning, I went TypeScript.  
  
Then I faced an even greater choice. I asked myself: alright, I want to write the app in React with TypeScript, I want it to work performant, it should be PWA, what shall I choose: NextJS or Gatsby? When we look closer, it is really uneasy choice. I tried NextJS, twice, but I found it hard in one key aspect: how to build multilingual application. Alright, it is possible, but in my opinion it is not as easy as it is in Gatsby. On the other hand Gatsby has one pitfall, I has no dynamic rendering. I asked myself: what if I want to change something in my database and I would like to see that change instantly in my Gatsby app? It was hard for me to mentally understand that in Gatsby we can update data dynamically on the front-end. Create React App has no server side rendering, NextJS has everything server side rendered. These are two extremes. I need server side rendering, but it doesn't have to be absolutely complete. This is how I settled the mind that Gatsby is the right way.  
  
Of course it wasn't end of my struggles. I have tried gatsby-image and I absolutely loved how it works. But after some time I figured out I can do that even better. Anyway, web development is constant fight. Overall I am happy how Gatsby works. It has perfect SEO optimization and absolutely blazing performance 🚀.

Another story is my back-end API. From the beginning I kept it in [separate repository](https://github.com/tomekrozalski/landofhop-back) and I believe it was very good decision. I knew that my front-end could change. Maybe it will change again in the future. But the back-end API should be independent and more persistant. When I decided to use TypeScript on the front-end, I also want it on the back-end. It was good moment to switch from ExpressJS to [Nest JS](https://github.com/tomekrozalski/landofhop-back-nest), which supports TS out of the box.
  
The most persistent part of the app is my Mongo database 💾 which I keep on external, Atlas server. Of course I modify it a little from time to time, but the collections order is unchanged since 2017.
  
Naturally work is still in progress 🚧. I hope to finish the most crucial functionalities in 2020.  
  
Live preview: [landofhop.com](https://landofhop.com)  