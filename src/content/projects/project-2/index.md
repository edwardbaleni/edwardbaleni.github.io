---
title: "Predict the President"
description: "NLP problem of stylometry, analyzing the State of the Nation Addresses of South African presidents to identify the unique writing style of each president."
date: "Oct 19 2023"
demoURL: "https://edwardbaleni.github.io/Predict-the-President/"
repoURL: "https://github.com/edwardbaleni/Predict-the-President.git"
---

## Abstract

In this study, the primary objective was to develop a classifier capable of attributing sentences to specific South African presidents. This is to be done with three different classifiers To achieve this, the research delved into a critical task of feature set selection, exploring a range of potential options, including lexical, character-based, and TF-IDF features set. Among the array of feature set options explored, two feature sets stood out as the most promising choices for the final models: TF-IDF and a character set consisting of 4500 features. Notably, the Feedforward Neural Network (FFNN) consistently outperformed other classifiers in this study. However, it is essential to acknowledge that TF-IDF exhibited a certain degree of variability in its performance as a feature set. In light of these findings, it is recommended that future research considers employing the FFNN in conjunction with a complete TF-IDF feature set, as this combination displayed superior performance when compared to other models under investigation. This insight serves as a valuable contribution to the development of classifiers for sentence attribution to specific authors, and it highlights the potential for further refinement in this fascinating domain of study.

## Introduction and Literature Review

South Africa's State of the Nation Address (SONA) is an annual event where the president of the country gives a report on the status of the nation. This status entails highlighting the key challenges and achievements witnessed in the past year as well as a mentioning of the government's goals and objectives for the foreseable future. A number of presidents have taken office between the years of 1994 and 2023. These presidents being FW De Klerk, Nelson Mandela, Thabo Mbeki, Kgalema Motlanthe, Jacob Zuma and Cyril Ramaphosa. The purpose of this study is to create a text classification task that identifies which president was the source of a given sentence. Such a task is often called authorship attribution. In such a task it is important that one is able to characterize each author, or speaker, in some way that is able to capture the style or ideas of each president.

There are are a number of ways to characterise authors. In this study a comparison between a topic-based text classification and a style-based text classification will be explored. Text-based text classification, attempts to not use functional words in the classification of texts, this is to find the general ideas, meaning or to identify topics associated with a given text; this provides semantic information. Style-based classification, Stylometry, makes strong use of function words in classification. Function words are used to aid in the syntax of a sentence rather than the meaning. These features are not consciously used within a text and as such usage varies between authors; this lack of control over function words have made them ideal for modelling, more specifically in modelling function word frequencies to create an effective attribution technique. Although, the points addressed within each speech is slightly different, the main topic is that of a political address, therefore it is worthwhile to view this research in the context of a style-based text classification as well as a topic-based text classification for comparison.

Many approaches will be assessed in this report. An exploratory data analysis (EDA) is first performed to aid in gaining some understanding about the data. Following this, the data is pre-processed in a number of ways. This is explained in more depth in the bulk of the research. Following this, it was essential to pick a final feature set to use for modelling or to narrow down the options, this was done by separating the data into a training, validation and test set for each potential feature set; at this stage only the training and validation data was used to look for the best set. Thereafter, after selecting a good feature set, hyperparameter tuning is conducting on all the models being used: Naive Bayes (NB), support vector machine (SVM) and feed-forward neural network (FFNN). After obtaining the hyperparameters for the best models, the training and validation sets are combined and used to build each model, this would serve as the final models for the datasets remaining. These final models can thereafter be used to assess the out-of-sample (OOS) performance with the test set.

## Findings
The study aimed to identify a classifier for attributing sentences to specific presidents. To do this, the study needed to define the most suitable feature space, considering lexical, character, and TF-IDF features as potential options. A limitation was encountered due to a scarcity of candidate authors and insufficient data for some of them, a concern addressed in previous research. Consequently, the two presidents with imbalanced data were excluded.

In certain scenarios, feature extraction can significantly enhance model performance. An insightful extension of this study could involve the application of recursive feature elimination (RFE) in conjunction with SVM, utilizing the rfe() function provided by the package. This approach can help us pinpoint the best features across all feature types. Instead of RFE, we employed bags of words with varying word frequencies to construct new feature sets at each stage.From the array of options explored, two feature sets, specifically TFIDF and a character set containing 4500 features, emerged as the most suitable choices for the final models. Ultimately, the FFNN consistently performed well in comparison to the other two classifiers. However, it's worth noting that TFIDF demonstrated a degree of inconsistency in its performance as a feature set. With this in mind I would suggest using FFNN in conjunction with a full TFIDF feature set as this had significantly better performance than all the other models present.


<!-- 
![Astro Nano](/astro-nano.png)

Astro Nano is a static, minimalist, lightweight, lightning fast portfolio and blog theme.

Built with Astro, Tailwind and Typescript, an no frameworks.

It was designed as an even more minimal theme than my popular theme [Astro Sphere](https://github.com/markhorn-dev/astro-sphere)

## 🚀 Deploy your own

<div class="flex gap-2">
  <a target="_blank" aria-label="Deploy with Vercel" href="https://vercel.com/new/clone?repository-url=https://github.com/markhorn-dev/astro-nano">
    <img src="/deploy_vercel.svg" />
  </a>
  <a target="_blank" aria-label="Deploy with Netlify" href="https://app.netlify.com/start/deploy?repository=https://github.com/markhorn-dev/astro-nano">
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

## 💯 Lighthouse score
![Astro Nano Lighthouse Score](/lighthouse.png)

## 🕊️ Lightweight
No frameworks or added bulk

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
| `npm run dev:network`     | Starts local dev server on local network         |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Preview build on local network                   |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

## 🏛️ License

MIT -->