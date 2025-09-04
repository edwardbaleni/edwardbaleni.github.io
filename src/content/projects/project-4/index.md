---
title: "Wine Not"
description: "A blending optimisation problem contextualised for the wine industry."
date: "Mar 18 2024"
repoURL: "https://github.com/edwardbaleni/WineNot.git"
---

## Introduction

Wine assemblage consists of blending a number of different wine varieties together to create a preferred new wine. This method of wine making is one of the oldest techniques used to create rich and fine bodied wines from various types of base wines, to attain certain features wanted by drinkers. Wine makers have historically performed this technique using taste, smell and their expert knowledge to find the best combination, however, there is only so much wine that wine makers can taste in a day before they begin to experience sensory specific satiety, taste saturation; taste saturation is a deteriorating pleasure in the consumption of a substance often from excessive consumption. To remedy this this problem has been solved by means of neural networks, mixed integer non-linear programming and other such methods. 

This study will be looking into a more simplified method to optimise the process of wine assemblage than. A mixed integer linear programming (MILP) approach will be used to optimise the wine blending problem. Metaheuristic approaches will be also be utilised to search the solution space for a good-enough solution. Wine assemblage is a complex problem as it over-constrains, often the boundaries are quite tight and contradictory as will be shown below. It is possible that the linear program in such a scenario does not manage to find the solution. However, by relaxing the necessity to find the optimal solution, metaheuristics can be use to find an optimal solution. Along with the classical MILP, simulated annealing (SA) and genetic algorithms (GA) will also be utilised to find these near-optimal solutions.

Often in this blending problem, wine makers would have more than one goal when producing their blend. Below, a multi-objective goal programming (MOGP) strategy is used to attempt to achieve the goals of the wine maker. For the classical linear program, minimizing cost is the only objective; for the MOGP: cost, surplus and phenols are to be minimized; tannins and anthocyanins are to maximised; alcohol level, chroma, residual sugar and titrable acidity have specific goals that must be met. 

In this study, the target audience is your everyday individual, not wine makers or oenophiles. The aim is to provide wine lovers at home a blending guideline, that they are able to use to blend their cheapest wines in hopes to create a better wine, or a wine of their preference. For the MILP and metaheuristics, the measurements are specified so that you are transporting proportions of each base wine bottle into an empty wine bottle, these proportions will be the make-up of the wine. For the MOGP approach, you will no longer be constrained to one wine bottle and will be able to make a number of wines, from a number of base wine bottles. When creating the blend, the user should not use an opened wine to minimise oxidization (only open when you are ready to blend), after blending wine you should immediately bottle it in a glass bottle and store in a dark place at 10°C. If oxidization was not minimised, the blend should be ready in about 2 weeks, however, for the ideal blend and if oxidization was minimised the blend will be ready in 1 to 2 months.

## Findings

The optimal blend of wine that satisfies the requirements is given by **CS:CR:ME:CF**=0.33:0:0.41:0.26 with no food additives. Majority of the algorithms have lead to this result, or something close. 

SA with a Geometric cooling schedule and with a Logarithmic cooling schedule had different levels of desire to explore the solution space over times. In our case, both cooling schedules lead to the same result, but the Logarithmic cooling schedule explored the solution space more and it seems to be more likely to find a global optimal. 

In GA, it was found that rank selection did not work well with the problem. Otherwise, an appropriate solution was found. However, this solution was sub-optimal in comparison to all other methods used in this study.

To solve the multi-objective Goal problem, we implemented the Archimedean and Preemeptive approaches. Archimedean achieved a better optimized weighted objective value but on the other hand, Preemeptive had a lower cost which is our most prioritised goal. Preemeptive focused most on the prioritised goal and subsequently compromised on the other goals. Archimedean gives a  more balanced solution. Users should choose them carefully by what is most important to them.

Overall, it would seem that a MILP is sufficient to study this level of wine assemblage. SA and MOGP both gave similar results and MOGP was more robust in optimizing many goals. GA is a poor chose in the modelling of wine assemblage as it was incapable of finding the global optima.  

