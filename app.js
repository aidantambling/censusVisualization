// link to svg data
let countyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json'

// read JSON file to get the api data
let keywordToInfo
async function loadData() {
    try {
        const response = await fetch("./apis.json");
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        keywordToInfo = data.Buttons;
        console.log("keywordToInfo loaded:", keywordToInfo);
    } catch (error) {
        console.error("Unable to fetch data:", error);
    }
}

// initial read of the data
import { generateAgeGroupSchema, generateRaceGroupSchema } from "./interfaceHandling.js";
d3.json(countyURL).then(async (data) => {
    try {
        if (data) {
            await loadData()
            countyData = topojson.feature(data, data.objects.counties).features
            dataTarget = keywordToInfo["All"]["populationDataBtn"];
            renderDataset(dataTarget)
            const maleAgeGroups = generateAgeGroupSchema('Male', 26);
            keywordToInfo["Gender"]["maleDataBtn"] = Object.assign({}, keywordToInfo["Gender"]["maleDataBtn"], maleAgeGroups);
    
            const popAgeGroups = generateAgeGroupSchema('American', 2);
            keywordToInfo["All"]['populationDataBtn'] = Object.assign({}, keywordToInfo["All"]['populationDataBtn'], popAgeGroups);
            console.log(keywordToInfo["All"]['populationDataBtn'])
            
            const femaleAgeGroups = generateAgeGroupSchema('Female', 50);
            keywordToInfo["Gender"]['femaleDataBtn'] = Object.assign({}, keywordToInfo["Gender"]['femaleDataBtn'], femaleAgeGroups);
            
            const hispanicRaceGroups = generateRaceGroupSchema('Hispanic');
            keywordToInfo["Race"]['hispanicBtn'] = Object.assign({}, keywordToInfo["Race"]['hispanicBtn'], hispanicRaceGroups);
        }
    } catch (error) {
        console.error("Error initial read of data")
    }
})

let countyData
let populationData
let cutoffs
let dataTarget // the dataset our page is currently targeting
var slider = document.getElementById("slider")
var output = document.getElementById("sliderValue")
let threshold = 0

let canvas = d3.select('#canvas')
let tooltip = d3.select('#tooltip-county')
let tooltip2 = d3.select('#tooltip-stat')

function getMax(data){
    const values = data.map(d => +d[2]).sort((a, b) => a - b);    
    return [values.length - 1];
}

// re-configure the legend whenever the dataset is changed or map is re-colored
function updateLegend(data) {
    const legend = d3.select("#legend-labels");
    legend.selectAll('*').remove();
    let colors;
    const values = data.map(d => +d[2]).sort((a, b) => a - b);

    if (quartileMode){
        let quantiles = [];
        colors = ['tomato', 'orange', 'lightgreen', 'limegreen'];
        for (let i = 1; i < 4; i++) {
            const q = d3.quantile(values, i / 4) - d3.quantile(values, i / 4) % (percentMode ? 0.05 : dataTarget.round);
            quantiles.push(q);
        }
        
        cutoffs = [0, ...quantiles, values[values.length - 1]];
    }
    else {
        cutoffs = [0, threshold, values[values.length - 1]]
        colors = ['tomato', 'limegreen'];
    }
    console.log(cutoffs);
    cutoffs.forEach((cutoff, index) => {
        if (index < colors.length) {
            const li = legend.append('li');
            li.attr('id', 'legend-element');
            li.append('span')
                .style('background-color', colors[index])
                .style('display', 'flex')
                .style('width', '2rem')
                .style('height', '2rem')
                .style('margin-right', '10%');
            
            let keyMessage;
            if (index == 0){
                keyMessage = `Less than ${cutoffs[index + 1]?.toLocaleString()}`;
            }
            else if (index == colors.length-1){
                keyMessage = `More than ${cutoff.toLocaleString()}`;
            }
            else {
                keyMessage = `${cutoff.toLocaleString()} to ${cutoffs[index + 1]?.toLocaleString()}`;
            }
            li.append('span')
                .text(keyMessage)

        }
    });

    const li = legend.append('li');
    li.attr('id', 'legend-element');
    li.append('span')
        .style('background-color', 'black')
        .style('display', 'flex')
        .style('width', '2rem')
        .style('height', '2rem')
        .style('margin-right', '10%')

    li.append('span')
        .text(`No Data`)
}

// call to render a new map from some different API
function renderDataset(target) {
    // we need to update the stored data, update the legend, update the text, update the slider, and update the map to reflect the newly stored data
    dataTarget = target
    let {url, title, description} = dataTarget
    if (percentMode){
        console.log('changing url....')
        url = url.replace('C&for', 'P&for');
    }
    else {
        console.log('keeping url as is.')
    }
    //TODO: If (Percentage variable) -> replace DP_XXXXC with DP_XXXXP
    d3.json(url).then(
        (data, error) => {
            if (error) {
                console.log(error);
            } else {
                populationData = data.slice(1);
                threshold = 0;
                updateLegend(populationData);
                document.getElementById('canvasTitle').textContent = title;
                document.getElementById('description').textContent = description;
                
                if (dataTarget.sliderConfig.max == "any"){
                    slider.max = getMax(data);
                }
                else {
                    slider.max = dataTarget.sliderConfig.max;
                }
                if (percentMode){
                    slider.step = 1;
                    slider.max = 100;
                }
                else {
                    slider.step = dataTarget.sliderConfig.step;
                }
                slider.value = 0;
                output.innerHTML = threshold;

                canvas.selectAll('path').remove();
                colorMap();
            }
        }
    );
}

// re-color the map whenever a new dataset is loaded or legend is updated
let colorMap = () => {
    canvas.selectAll('path')
        .data(countyData)
        .enter()
        .append('path')
        .attr('d', d3.geoPath())
        .attr('class', 'county')
        .attr('fill', (countyDataItem) => {
            let id = countyDataItem['id'].toString()
            let county = populationData.find((item) => {
                let fipsCode = item[1].slice(-5)
                if (fipsCode.startsWith('0')){
                    fipsCode = fipsCode.substring(1)
                }
                return fipsCode === id
            })
            let percentage = -1
            if (county != undefined){
                percentage = parseFloat(county[2])
            }
            if (percentage == -1){
                return 'black'
            }
            // Quartile View
            if (quartileMode){
                if (percentage <= cutoffs[1]){
                    return 'tomato'
                }else if (percentage <= cutoffs[2]){
                    return 'orange'
                }else if (percentage <= cutoffs[3]){
                    return 'lightgreen'
                }else{
                    return 'limegreen'
                }
            }
            // Slider View
            else {
                if (percentage < threshold){
                    return 'tomato'
                }
                else if (percentage => threshold){
                    return 'limegreen'
                }
            }
        })
        .on('mouseover', (countyDataItem) => {
            tooltip.transition()
                .style('visibility', 'visible')
            
            tooltip2.transition()
                .style('visibility', 'visible')
            
            let id = countyDataItem['id'].toString()
            let county = populationData.find((item) => {
                let fipsCode = item[1].slice(-5)
                if (fipsCode.startsWith('0')){
                    fipsCode = fipsCode.substring(1)
                }
                return fipsCode === id
            })
            if (county != undefined){
                tooltip.text(county[0])
                tooltip2.text(county[2])
            } else {
                console.log('Undefined county')
            }
        })
        .on('mouseout', (countyDataItem) => {
            tooltip.transition()
                .style('visibility', 'hidden')
            tooltip2.transition()
                .style('visibility', 'hidden')
        })
}
// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
let activeButton = null;

// Switch between quartile mode and slider mode
const quartileButton = document.getElementById("quartileButton");
const sliderButton = document.getElementById("sliderButton");
const sliderBox = document.getElementById("sliderBox");
let quartileMode = true;

quartileButton.addEventListener('click', function() {
    canvas.selectAll('path').remove();
    quartileMode = true;
    sliderBox.style.display = 'none';

    colorMap();
    updateLegend(populationData);
    setButtonBackgroundColors();
});

sliderButton.addEventListener('click', function() {
    canvas.selectAll('path').remove();
    quartileMode = false;
    sliderBox.style.display='flex';
    
    threshold = 0;
    slider.value = 0;
    output.innerHTML = threshold;

    colorMap();
    updateLegend(populationData);
    setButtonBackgroundColors();
});

slider.oninput = function() {
    output.innerHTML = this.value;
    threshold = this.value;
    canvas.selectAll('path').remove();
    colorMap();
    updateLegend(populationData);
}
// ---------------------------------------------------------------------------------------------------------------------------------------------------------------
function setButtonBackgroundColors() {
    if (quartileMode) {
        sliderButton.classList.remove('active');
        quartileButton.classList.add('active');
    } else {
        quartileButton.classList.remove('active');
        sliderButton.classList.add('active');
    }

    if (percentMode){
        percentButton.classList.add('active');
        countButton.classList.remove('active');
    } else {
        percentButton.classList.remove('active');
        countButton.classList.add('active');
    }
}

document.querySelectorAll('.selectionButton').forEach(button => {
    button.addEventListener('click', () => {
        const buttonBox = document.getElementById("buttonBox");
        buttonBox.innerHTML = "";

        for (const key in keywordToInfo[button.id]){
            const button1 = document.createElement('button')
            button1.id = key;
            button1.className="datasetButton";
            button1.textContent = keywordToInfo[button.id][key].title;
            button1.addEventListener('click', () => {
                handleDataset(button1.id, keywordToInfo[button.id][button1.id]);
            })
    
            buttonBox.appendChild(button1);
        }
    })
})

// Dataset Selection Button
document.querySelectorAll('.datasetButton').forEach(button => {
    button.addEventListener('click', () => {
        handleDataset(button.id, keywordToInfo["All"][button.id]);
    })
})

function handleDataset(buttonID, dataTarget){
    const button = document.getElementById(buttonID);
    document.getElementById('ageGroupButtons').innerHTML = '';
    if (activeButton){
        activeButton.innerHTML = activeButton.innerHTML.substring(0, activeButton.innerHTML.length - 6);
        activeButton.classList.remove('active');
    }
    if (activeButton === button || buttonID === 'backButton'){
        activeButton = null;
    }
    else {
        button.classList.add('active');
        activeButton = button;
        button.innerHTML += ' -> ';
        generateAgeGroupButtons(dataTarget);
        document.getElementById('ageGroupButtons').style.display = 'block';
    }
}

function generateAgeGroupButtons(genderInfo){
    const ageGroupButtonsDiv = document.getElementById('ageGroupButtons');
    ageGroupButtonsDiv.innerHTML = '';
    const button = document.createElement('button');
    button.textContent = 'Go Back';
    button.id = 'backButton';
    button.className = 'subdatasetButton';
    ageGroupButtonsDiv.appendChild(button);
    button.addEventListener('click', () => {
        handleDataset(button.id, null);
    })

    const button2 = document.createElement('button');
    button2.textContent = genderInfo['title'] + " (All)";
    button2.id = 'allButton';
    button2.className = 'subdatasetButton';
    ageGroupButtonsDiv.appendChild(button2);
    button2.addEventListener('click', () => {
        const buttons = document.querySelectorAll('.subdatasetButton');
        buttons.forEach(button => {
            button.classList.remove('active');
        });
        button2.classList.add('active');
        dataTarget = genderInfo;
        renderDataset(dataTarget);
    })

    for (const key in genderInfo) {
        if (key !== 'url' && key != 'title' && key != 'description' && key != 'round' && key != 'sliderConfig'){
            const button = document.createElement('button');
            button.textContent = genderInfo['title'] + " (" + genderInfo[key].title + ")";
            button.id = key + 'Btn';
            button.className = 'subdatasetButton';
            ageGroupButtonsDiv.appendChild(button);

            button.addEventListener('click', () => {
                const buttons = document.querySelectorAll('.subdatasetButton');
                buttons.forEach(button => {
                    button.classList.remove('active');
                });
                const allButton = document.getElementById('allButton');
                if (allButton) {
                    allButton.classList.remove('active');
                }
                button.classList.add('active');
                dataTarget = genderInfo[key];
                renderDataset(dataTarget);
            })
        }
    }
}

// Switch between count mode and percent mode
const countButton = document.getElementById("countButton");
const percentButton = document.getElementById("percentButton");
let percentMode = false;

countButton.addEventListener('click', function() {
    percentMode = false;
    renderDataset(dataTarget);
    setButtonBackgroundColors();
});

percentButton.addEventListener('click', function() {
    percentMode = true;
    renderDataset(dataTarget);
    setButtonBackgroundColors();
});