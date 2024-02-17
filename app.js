// links to data
let countyURL = 'https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json'

let keywordToInfo = {
    'populationDataBtn' : {
        // 'api' : 'DP1_0001C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0001C&for=county:*',
        'title' : 'Population',
        'description' : 'Population data for the general population.',
        'round' : 5000,
        'sliderConfig' : {
            'max' : "100000",
            'step' : "5000",
        }
    },
    'maleDataBtn' : {
        // 'api' : 'DP1_0025C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0025C&for=county:*',
        'title' : 'Male Population',
        'description' : 'Population data for males.',
        'round' : 5000,
        'sliderConfig' : {
            'max' : "100000",
            'step' : "5000",
        }
    },
    'femaleDataBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0049C&for=county:*',
        'title' : 'Female Population',
        'description' : 'Population data for females.',
        'round' : 5000,
        'sliderConfig' : {
            'max' : "100000",
            'step' : "5000",
        }
    },
    'medianAgeBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0073C&for=county:*',
        'title' : 'Median Age',
        'description' : 'Median age of general population.',
        'round' : 1,
        'sliderConfig' : {
            'max' : "70",
            'step' : "1",
        }
    },
    'femaleMedianAgeBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0075C&for=county:*',
        'title' : ' Female Median Age',
        'description' : 'Median age of female population.',
        'round' : 1,
        'sliderConfig' : {
            'max' : "70",
            'step' : "1",
        }
    },
    'maleMedianAgeBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0074C&for=county:*',
        'title' : 'Male Median Age',
        'description' : 'Median age of male population.',
        'round' : 1,
        'sliderConfig' : {
            'max' : "70",
            'step' : "1",
        }
    },
    'whiteBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0078C&for=county:*',
        'title' : 'White Population',
        'description' : 'Population data for White people.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "100000",
            'step' : "5000",
        }
    },
    'blackBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0079C&for=county:*',
        'title' : 'Black Population',
        'description' : 'Population data for Black people.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "75000",
            'step' : "2500",
        }
    },
    'amerindianBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0080C&for=county:*',
        'title' : 'American Indian and Alaska Native Population',
        'description' : 'Population data for American Indian and Alaska Native people.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "40000",
            'step' : "2000",
        }
    },
    'asianBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0081C&for=county:*',
        'title' : 'Asian Population',
        'description' : 'Population data for Asian people.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "75000",
            'step' : "2500",
        }
    },
    'islanderBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0082C&for=county:*',
        'title' : 'Native Hawaiian and Other Pacific Islander Population',
        'description' : 'Population data for Native Hawaiian and Other Pacific Islanders.',
        'round' : 1,
        'sliderConfig' : {
            'max' : "25000",
            'step' : "1000",
        }
    },
    'otherRaceBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0083C&for=county:*',
        'title' : 'Some Other Race Population',
        'description' : 'Population data for those who identified as "some other race."',
        'round' : 5,
        'sliderConfig' : {
            'max' : "50000",
            'step' : "2500",
        }
    },
    'twoRacesBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0084C&for=county:*',
        'title' : 'Two or More Races Population',
        'description' : 'Population data for those who identified as "two or more races."',
        'round' : 5,
        'sliderConfig' : {
            'max' : "50000",
            'step' : "2500",
        }
    },
    'hispanicBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0096C&for=county:*',
        'title' : 'Hispanic (of Any Race) Population',
        'description' : 'Population data for Hispanics.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "100000",
            'step' : "5000",
        }
    },
    'oppSpouseBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0115C&for=county:*',
        'title' : 'Population with an Opposite-Sex Spouse',
        'description' : 'Population data for residents with an opposite-sex spouse.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "100000",
            'step' : "5000",
        }
    },
    'oppSpouseBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0115C&for=county:*',
        'title' : 'Population with an Opposite-Sex Spouse',
        'description' : 'Population data for residents with an opposite-sex spouse.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "100000",
            'step' : "5000",
        }
    },
    'sameSpouseBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0116C&for=county:*',
        'title' : 'Population with a Same-Sex Spouse',
        'description' : 'Population data for residents with an opposite-sex spouse.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "5000",
            'step' : "250",
        }
    },
    'oppPartnerBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0117C&for=county:*',
        'title' : 'Population with an Opposite-Sex Partner',
        'description' : 'Population data for residents with an unmarried opposite-sex partner.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "50000",
            'step' : "2500",
        }
    },
    'samePartnerBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0118C&for=county:*',
        'title' : 'Population with a Same-Sex Partner',
        'description' : 'Population data for residents with an unmarried same-sex partner.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "2500",
            'step' : "100",
        }
    },
    'instiBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0126C&for=county:*',
        'title' : 'Institutionalized Population',
        'description' : 'Population data for residents who are institutionalized in group quarters.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "10000",
            'step' : "500",
        }
    },
    'maleInstiBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0127C&for=county:*',
        'title' : 'Male Institutionalized Population',
        'description' : 'Population data for male residents who are institutionalized in group quarters.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "10000",
            'step' : "500",
        }
    },
    'femaleInstiBtn' : {
        // 'api' : 'DP1_0049C',
        'url' : 'https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0128C&for=county:*',
        'title' : 'Female Institutionalized Population',
        'description' : 'Population data for female residents who are institutionalized in group quarters.',
        'round' : 5,
        'sliderConfig' : {
            'max' : "10000",
            'step' : "500",
        }
    },
}

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

// call with url to render a new map
function updateMap(target) {
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
                drawMap();
            }
        }
    );
}

let drawMap = () => {
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

// initial read of the data
d3.json(countyURL).then(
    (data, error) => {
        if(error){
            console.log(error)
        }else{
            countyData = topojson.feature(data, data.objects.counties).features
            dataTarget = keywordToInfo['populationDataBtn'];
            updateMap(dataTarget)
        }
    }
)

let activeButton = null;

// Dataset Selection Buttons
document.querySelectorAll('.datasetButton').forEach(button => {
    button.addEventListener('click', () => {
        handleDataset(button.id, keywordToInfo[button.id]);
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

// Switch between quartile mode and slider mode
const quartileButton = document.getElementById("quartileButton");
const sliderButton = document.getElementById("sliderButton");
const sliderBox = document.getElementById("sliderBox");
let quartileMode = true;

quartileButton.addEventListener('click', function() {
    canvas.selectAll('path').remove();
    quartileMode = true;
    updateLegend(populationData);
    drawMap();
    sliderBox.style.display = 'none';
    setButtonBackgroundColors();
});

sliderButton.addEventListener('click', function() {
    threshold = 0;
    slider.value = 0;
    output.innerHTML = threshold;
    sliderBox.style.display='flex';
    canvas.selectAll('path').remove();
    quartileMode = false;
    drawMap();
    updateLegend(populationData);
    setButtonBackgroundColors();
});

slider.oninput = function() {
    output.innerHTML = this.value;
    threshold = this.value;
    canvas.selectAll('path').remove();
    drawMap();
    updateLegend(populationData);
}

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

// Switch between count mode and percent mode
const countButton = document.getElementById("countButton");
const percentButton = document.getElementById("percentButton");
let percentMode = false;

countButton.addEventListener('click', function() {
    console.log('count');
    percentMode = false;
    updateMap(dataTarget);
    setButtonBackgroundColors();
});

percentButton.addEventListener('click', function() {
    console.log('percent');
    percentMode = true;
    updateMap(dataTarget);
    setButtonBackgroundColors();
});



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
        updateMap(dataTarget);
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
                updateMap(dataTarget);
            })
        }
    }
}

// Function to generate schema for age groups
function generateAgeGroupSchema(gender, offset) {
    const schema = {};
    for (let i = 0; i < 17; i++) {
        const ageStart = i * 5;
        const ageEnd = ageStart + 4;
        const key = `${ageStart}-${ageEnd}`;
        let roundValue = (i === 15 || i === 16) ? 100 : 250;
        schema[key] = {
            url: `https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_00${(offset + i).toString().padStart(2, '0')}C&for=county:*`,
            title: `${key} years old`,
            description: `Population data for ${gender.toLowerCase()}s ${key} years old.`,
            round: roundValue,
            sliderConfig : {
                max : 'any',
                step : 250,
            },
        };
    }
    return schema;
}

function generateRaceGroupSchema(race) {
    const schema = {};
    const races = ["White", "Black", "American Indian + Alaska Native", "Asian", "Native Hawaiian + Other Pacific Islander", "Some Other Race", "Two Or More Races"]
    for (let i = 0; i < races.length; i++) {

        const key = races[i];
        let roundValue = 1;
        let dPval
        let stepVal = (i === 4) ? 100 : 250;
        if (97 + i < 100){
            dPval = `https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_00${(97 + i).toString().padStart(0, '0')}C&for=county:*`
        }
        else {
            dPval = `https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_0${(97 + i).toString().padStart(0, '0')}C&for=county:*`
        }
        schema[key] = {
            url: dPval,
            title: `${key}`,
            description: `Population data for ${key} Hispanics`,
            round: roundValue,
            sliderConfig : {
                max : 'any',
                step : stepVal,
            },
        };
    }
    return schema;
}

// Generate male age group schema
const maleAgeGroups = generateAgeGroupSchema('Male', 26);
keywordToInfo['maleDataBtn'] = Object.assign({}, keywordToInfo['maleDataBtn'], maleAgeGroups);

const popAgeGroups = generateAgeGroupSchema('American', 2);
keywordToInfo['populationDataBtn'] = Object.assign({}, keywordToInfo['populationDataBtn'], popAgeGroups);

const femaleAgeGroups = generateAgeGroupSchema('Female', 50);
keywordToInfo['femaleDataBtn'] = Object.assign({}, keywordToInfo['femaleDataBtn'], femaleAgeGroups);

const hispanicRaceGroups = generateRaceGroupSchema('Hispanic');
keywordToInfo['hispanicBtn'] = Object.assign({}, keywordToInfo['hispanicBtn'], hispanicRaceGroups);
