import * as d3 from 'd3';

export const usageToRadius = d3.scaleSqrt().domain([0, 10000]).range([0, 20]);

export const usageToColor = (usage) => {
    // Define a color scale
    const scale = d3.scaleThreshold()
        .domain([500, 1000, 5000, 10000])
        .range(["#FFFFDD", "#B0DDFF", "#6094FF", "#1034A6"]);
    return scale(usage);
};