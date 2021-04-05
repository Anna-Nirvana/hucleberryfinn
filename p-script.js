//IMPORT DATA SET & SET UP [NEW] SVG CANVAS

d3.csv("./data/EPA-data.csv").then(function(data) {

    const chartwidth = document.querySelector("#container").clientWidth;
    const chartheight = document.querySelector("#container").clientHeight;

    console.log(chartwidth)
    console.log(chartheight)

    const margin = {top: 15, left: 65, right: 25, bottom: 85};

    const svg = d3.select("#chart1")
        .append("svg")
        .attr("width", chartwidth)
        .attr("height", chartheight);
        
    const yr2015 = data.filter(function(d) {
        return d.year == 2015;
        });

    const yr2016 = data.filter(function(d) {
        return d.year == 2016;
        });

    const yr2017 = data.filter(function(d) {
        return d.year == 2017;
        });

    const yr2018 = data.filter(function(d) {
        return d.year == 2018;
        });

    const yr2019 = data.filter(function(d) {
        return d.year == 2019;
        });

    const yr2020 = data.filter(function(d) {
        return d.year == 2020;
        });

//SCALES

    const xScale = d3.scaleBand()
        .domain(data.map(function(d) {return d.region; }))
        .range([margin.left, chartwidth-margin.right])
        .padding(0.5);

    const yScale = d3.scaleLinear()
        .domain([0,21]) // home-brewed unit: pollution score (ln TWPE)
        .range([chartheight-margin.bottom, margin.top]);

//AXES

    const xAxis = svg.append("g")
        .attr("class", "axis")
        .attr("transform",`translate(0,${chartheight-margin.bottom})`)
        .call(d3.axisBottom().scale(xScale))
            .selectAll("text")
            .attr("transform", "translate(-2,2)rotate(-25)")
            .style("text-anchor", "end");

    const yAxis = svg.append("g")
        .attr("class", "axis")
        .attr("transform",`translate(${margin.left},0)`)
        .call(d3.axisLeft().scale(yScale))
            .selectAll("text")
            .attr("transform", "translate(2,-5)rotate(-25)")
            .style("text-anchor", "end");

// AXIS LABELS
// X - removed this for styling purposes; regions are apparent via axis itself and context <p> above
    //      svg.append("text")
        //     .attr("class", "axisLabel")
        //     .attr("x", chartwidth/2)
        //     .attr("y", chartheight - 3)
        //     .attr("text-anchor", "middle")
        //     .text("Watershed Region");

// Y 
    svg.append("text")
        .attr("class","axisLabel")
        .attr("x", -chartheight/2)
        .attr("y", 30)
        .attr("text-anchor","middle")
        .attr("transform","rotate(-90)")
        .text("Priority pollutant discharge \n (toxic-weighted lbs, log scale) —>");

// MARKS - START W/ 2020

    let bar = svg.selectAll("rect")
        .data(yr2020)
        .enter()
        .append("rect")
            .attr("x", function(d) { return xScale(d.region); })
            .attr("y", function(d) { return yScale(d.pPlog); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return chartheight - margin.bottom - yScale(d.pPlog); })
            .attr("fill","#660033");

// TOOLTIP

    let tooltip = d3.select("#chart1")
        .append("div")
        .attr("class","tooltip");

    svg.selectAll("rect").on("mouseover", function(e, d) {

        let x = +d3.select(this).attr("x"); 
        let y = +d3.select(this).attr("y");

        console.log(x, y); 
        console.log(d);

        tooltip.style("visibility", "visible") 
            .style("left", `${x}px`) 
            .style("top", `${y}px`) 
            .html(`${d.region} <br> <b> pollution score:</b> ${d.pPlog}`);

        d3.select(this)
            .attr("stroke", "#00ffcc")
            .attr("stroke-width", 6);

    }).on("mouseout", function() {

        tooltip.style("visibility", "hidden");

        d3.select(this)
            .attr("stroke", "none")
            .attr("stroke-width", 0);

    });

// DATA UPDATE
// 2015
    d3.select("#show2015").on("click", function() {

        let b = svg.selectAll("rect")
        .data(yr2015, function(d) { return d.region; });

            b.transition()
                .duration(1750)
                .attr("x", function(d) { return xScale(d.region); })
                .attr("y", function(d) { return yScale(d.pPlog); })
                .attr("width", xScale.bandwidth())
                .attr("height", function(d) { return chartheight - margin.bottom - yScale(d.pPlog); })
                .attr("fill","#660033");

            d3.select("#graphtitle").html("2015");
    });

// 2016
    d3.select("#show2016").on("click", function() {

    let b = svg.selectAll("rect")
        .data(yr2016, function(d) { return d.region; });

        b.transition()
            .duration(1750)
            .attr("x", function(d) { return xScale(d.region); })
            .attr("y", function(d) { return yScale(d.pPlog); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return chartheight - margin.bottom - yScale(d.pPlog); })
            .attr("fill","#660033");
        
        d3.select("#graphtitle").html("2016");
    });

// 2017
    d3.select("#show2017").on("click", function() {
    let b = svg.selectAll("rect")
        .data(yr2017, function(d) { return d.region; });

        b.transition()
            .duration(1750)
            .attr("x", function(d) { return xScale(d.region); })
            .attr("y", function(d) { return yScale(d.pPlog); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return chartheight - margin.bottom - yScale(d.pPlog); })
            .attr("fill","#660033");
        
        d3.select("#graphtitle").html("2017");
    });


// 2018
    d3.select("#show2018").on("click", function() {

    let b = svg.selectAll("rect")
        .data(yr2018, function(d) { return d.region; });

        b.transition()
            .duration(1750)
            .attr("x", function(d) { return xScale(d.region); })
            .attr("y", function(d) { return yScale(d.pPlog); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return chartheight - margin.bottom - yScale(d.pPlog); })
            .attr("fill","#660033");
        
        d3.select("#graphtitle").html("2018");
    });


// 2019
    d3.select("#show2019").on("click", function() {

    let b = svg.selectAll("rect")
        .data(yr2019, function(d) { return d.region; });

        b.transition()
            .duration(1750)
            .attr("x", function(d) { return xScale(d.region); })
            .attr("y", function(d) { return yScale(d.pPlog); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return chartheight - margin.bottom - yScale(d.pPlog); })
            .attr("fill","#660033");
        
        d3.select("#graphtitle").html("2019");
    });



// Back to 2020
    d3.select("#show2020").on("click", function() {

    let b = svg.selectAll("rect")
        .data(yr2020, function(d) { return d.region; });

        b.transition()
            .duration(1750)
            .attr("x", function(d) { return xScale(d.region); })
            .attr("y", function(d) { return yScale(d.pPlog); })
            .attr("width", xScale.bandwidth())
            .attr("height", function(d) { return chartheight - margin.bottom - yScale(d.pPlog); })
            .attr("fill","#660033");
        
        d3.select("#graphtitle").html("2020");
    });

});