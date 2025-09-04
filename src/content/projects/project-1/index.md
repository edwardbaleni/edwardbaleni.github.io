---
title: "CycleSim"
description: "A road cycling simulator to enable managers to make decisions."
date: "Sep 12 2023"
# demoURL: "https://astro-sphere-demo.vercel.app"
repoURL: "https://github.com/edwardbaleni/ABM-CycleSim.git"
---

Road cycling is a popular sport where a group of riders start together, often with a rolling start - a race that begins whilst the cyclists are already in motion, contrasting a standing start where they commence at a standstill. The cyclists race one another to the finish line to win the race. Throughout the year, cyclists participate in many prestigious events known as classics, with some of the most renowned being: The Grand Tours (i.e. Tour de France, Giro d'Italia, Vuelta a Espana), The Monument Classics (i.e. Milan-Sanremo, Tour of Flanders, Paris-Roubaix, Liege-Bastogne-Liege, Giro di Lombardia) and The World Championships. The focus of this simulation is on the Monument Classics, which are intense one-day races, typically spanning 200km to 300km.

Cycling races often encompass both individual and team dynamics. On an individual level, there can only be one winner. However, when operating as a team sport, there are intricate strategies that revolve around the lead rider, who is typically the strongest cyclist in the team, and the domestiques who provide vital support. These efforts are strategically combined to propel the lead rider towards a winning position.

It is a sport that manages to illustrate complex systems as a result of dynamic behaviours and energy considerations. As cyclists accelerate they are faced with air resistance, which results in a substantial increase in energy expenditure. To mitigate this energy loss, cyclists often form strategic alliances with riders from rival teams. In these alliances, each cyclist takes turns leading the group while others tuck into the slipstream, thereby using a technique known as drafting. It's worth noting that cyclists in a drafting position expend 30-40% less energy compared to when they are in the leading position. This cooperation often leads to the formation of a peloton, a large group of riders. By forming a peloton, cyclists often exhibit flocking behaviour similar to a flock of birds or a school of fish. However, not all cyclists are cooperative, some may not take their turn leading whilst others may proceed to leave the pack altogether in a breakaway - an attempt to either conserve energy for the end of the race or gain a strategic position.

This simulation emphasizes the managerial role in the context of road cycling. During the race managers are allowed to consult the cyclists in their team and facilitate real-time information and strategic guidance. To make this more engaging, this simulation has been turned into a game. In this game, the user assumes the role of the team manager, with the ability to dispense crucial instructions and devise race-winning strategies while monitoring the energy levels of their team members.

If the user runs the simulation without playing the game, then their team will act as regular agents.

  * Simulating peloton dynamics through migratory and flocking behaviour, the interface allows users to dispense crucial instructions and race-winning strategies while monitoring rider power output, collaboration, energy consumption and drafting coefficient of the team. 
  * A sensitivity analysis identified superior configurations, informing strategic decisions for the manager. Providing analytical information on strategies dependent on the overall strength of the team.




<!-- ![Astro Sphere Lighthouse Score](/astro-sphere.jpg)

Astro Sphere is a static, minimalist, lightweight, lightning fast portfolio and blog theme based on my personal website.

It is primarily Astro, Tailwind and Typescript, with a very small amount of SolidJS for stateful components.

## 🚀 Deploy your own

<div class="flex gap-2">
  <a target="_blank" aria-label="Deploy with Vercel" href="https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-sphere">
    <img src="/deploy_vercel.svg" />
  </a>
  <a target="_blank" aria-label="Deploy with Netlify" href="https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-sphere">
    <img src="/deploy_netlify.svg" />
  </a>
</div>

## 📋 Features

- ✅ 100/100 Lighthouse performance
- ✅ Responsive
- ✅ Accessible
- ✅ SEO-friendly
- ✅ Typesafe
- ✅ Minimal style
- ✅ Light/Dark Theme
- ✅ Animated UI
- ✅ Tailwind styling
- ✅ Auto generated sitemap
- ✅ Auto generated RSS Feed
- ✅ Markdown support
- ✅ MDX Support (components in your markdown)
- ✅ Searchable content (posts and projects)

## 💯 Lighthouse score
![Astro Sphere Lighthouse Score](/lighthouse.png)

## 🕊️ Lightweight
All pages under 100kb (including fonts)

## ⚡︎ Fast
Rendered in ~40ms on localhost

## 📄 Configuration

The blog posts on the demo serve as the documentation and configuration.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## 🏛️ License

MIT -->