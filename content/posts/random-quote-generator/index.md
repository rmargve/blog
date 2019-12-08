---
path: "/random-quote-generator"
date: "2019-12-08T17:19:51.291Z"
title: "Building random quote generator"
tags: ["react", "gatsby", "tailwindcss", "netlify"]
---

I've been wanting to do something with gatsby & tailwindcss for a long time so I decided to build a random quote generator. Before we start, let me tell you why I like those two.

[GatsbyJS](https://www.gatsbyjs.org/) is blazing fast and well optimized, internally it uses react & graphql, has rich plugin system and is good for static content(random quote generator is so static content).  
Basically, when you generate a site, you get files as an output. Instead of hosting app/webpage on your server, you just host those files on CDN(which is blazing fast too). Not only building blog on gatsby is fast & optimized, it's resource effective too, imagine your blog going popular on hackernews and reddit. If you have it on wordpress, chances are it'll go not only popular but down too.

[Tailwindcss](https://tailwindcss.com/) is amazing, really! I never liked working with css and that was one of my main reasons why I was not into full-stack projects.
It gives you utilities instead of fully powered buttons and carousels and cards which may be over or undercustomized for you. You dont have to create new classes, you dont have to think about names, You just look at their documentation and assign tailwind created utilities(css classes basically) to html elements.

I'm gonna talk about steps I made during this project and difficulties I came across. Before we dive in, you should have basic understanding of gatsby & tailwind (they both have amazing documentation). You are encouraged to write your own code, fail and learn on your mistakes. If you want to compare your results to mine, you can check my project source [here](https://github.com/romMidnight/random-quote-generator)

I started with cloning default gatsby starter and removed plugins(gatsby-config.js) and files which were not really that necessary for showing random quotes, go ahead and do it yourself too :)

We want to generate random quotes, and we can choose from two options: fetch from quote API from client-side using plugin: gatsby-source-graphql or get some json file with quotes and import it into react element from server-side using gatsby-transformer-json.

Webpage should do two things really, display a quote and a button to show a new quote. As a sugar on the top, you can display initial random quote without a button click. I hosted this little project on netlify(it is really easy, you just have to connect github repo to it and it will automatically deploy on commit). But beware of a monster out there! Gatsby can do development build (gatsby develop) and production build (gatsby build). On development build locally everything worked fine, but whenever I opened netlify hosted webpage It was redrawing quickly with another quote(not on button click, but on initial load).

Getting two quotes on load? EASY! REACT COMPONENT BEING RENDERED TWICE, RIGHT?!

Gatsby build generates index.html, which will be filled with random quote(provided that you show quote on homepage and initially without a click). Turns out, that randomly generated quote was being embedded statically in index.html and netlify was SERVING that index.html, which itself showed one quote, but after react component render, new randomly chosen one was being shown. I still don't have a final solution, but what I did was an css "bounce" animation, so that quote box won't be shown instantly and quote redrawing won't be noticeable.

That was it for today, and don't forget about responsive design, tailwind has a really good support for it, you just go mobile-first approach and if you don't like anything on bigger screen you overload utility classes, for example

```css
<className="m-8 lg:m-24">
```

will declare its margin as 2rem("m-8") and overload 6rem on large screens(>= 1024px).
