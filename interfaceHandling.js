// import keywordToInfo from "./app.js"

var left = document.getElementById('slideLeft');
left.onclick = function () {
    var container = document.getElementById('buttonSelector');
    sideScroll(container, 'left', 25, 100, 10);
}
var right = document.getElementById('slideRight');
right.onclick = function () {
    var container = document.getElementById('buttonSelector');
    sideScroll(container, 'right', 25, 100, 10);
}

function sideScroll(element,direction,speed,distance,step){
    var scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}

// Function to generate schema for age group subsets of population
export function generateAgeGroupSchema(gender, offset) {
    const schema = {};
    for (let i = 0; i < 17; i++) {
        const ageStart = i * 5;
        const ageEnd = ageStart + 4;
        const key = `${ageStart}-${ageEnd}`;
        let roundValue = (i === 15 || i === 16) ? 100 : 250;
        schema[key] = {
            url: `https://api.census.gov/data/2020/dec/dp?get=NAME,GEO_ID,DP1_00${(offset + i).toString().padStart(2, '0')}C&for=county:*`,
            title: `${gender} population ${key} years old`,
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

// Function to generate schema for race group subsets of hispanic population
export function generateRaceGroupSchema(race) {
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