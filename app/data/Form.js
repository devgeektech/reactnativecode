// Dashboard
export const squadron = [
    
    { title: "100FS", key: 1 },
    { title: "104FS", key: 2 },
    { title: "107FS", key: 3 },
    { title: "110FS", key: 4 },
]
export const flightCallSign = [
    { title: "Select", key: 0 },
    { title: "Bolt", key: 1 },
    { title: "Cajun", key: 2 },
    { title: "Viper", key: 3 },
    { title: "Strike", key: 4 },
]
export const msnType = [
    { title: "Select", key: 0 },
    { title: "Instrument", key: 1 },
    { title: "BFM", key: 2 },
    { title: "ACM", key: 3 },
    { title: "TI", key: 4 },
]

export const flightPeriod = [
    { title: "1st Go", isSelected: false, key: 0 },
    { title: "2nd Go", isSelected: false, key: 1 },
    { title: "3rd Go", isSelected: false, key: 2 },
    { title: "4+", isSelected: false, key: 3 },
]

export const formationPosition = [
    { title: "1", isSelected: false, key: 0 },
    { title: "2", isSelected: false, key: 1 },
    { title: "3", isSelected: false, key: 2 },
    { title: "4", isSelected: false, key: 3 },
    { title: "5", isSelected: false, key: 4 },
]

// let MISSION_OPTIONS_VALUES = [3, 5, 3, 7,--- 3, 5, 5, 5,--- 3, 5, 7,--- 3, 5, 5, 5, 3, 3, 5, 5, 5,--- 5, 5, 5, 5, 5, 3];
//Mission
export const airCraft = [
    { title: "4 SHIP or MFFO (A/G primary MSN)", isSelected: false, key: 0, value: 3 },
    { title: "8 SHIP or equivalent (A/A primary MSN)", isSelected: false, key: 1, value: 5 },
    { title: "Dissimilar Involved in MSN", isSelected: false, key: 2, value: 3 },
    { title: "LFE, ORE, ORI, Flag, etc.", isSelected: false, key: 3, value: 7 },
]

export const missionChanges = [
    { title: "IP/FL Change <1 Hr prior to Brief", isSelected: false, key: 0, value: 3 },
    { title: "Flex to Alternate MSN after Brief", isSelected: false, key: 1, value: 5 },
    { title: "MSN Complexity Increased after Brief", isSelected: false, key: 2, value: 5 },
    { title: "Non-Standard Brief Time.", isSelected: false, key: 3, value: 5 },
]

export const multiple = [
    { title: "2 Sorties One Day / Flight-Tank-Flight", isSelected: false, key: 0, value: 3 },
    { title: "Demanding MSN (per Vol 1) on 2nd Sortie", isSelected: false, key: 1, value: 5 },
    { title: "3 Sorties and/or Duty Day Limits Reached", isSelected: false, key: 2, value: 7 },
]

export const msnImpact = [
    { title: "Day AAR", isSelected: false, key: 0, value: 3 },
    { title: "SCL / Mx Status Impacts MSN", isSelected: false, key: 1, value: 5 },
    { title: "New Hardware/Software (<5 Flights)", isSelected: false, key: 2, value: 5 },
    { title: "Night AAR", isSelected: false, key: 3, value: 5 },
    { title: "Strange Field Ops", isSelected: false, key: 4, value: 3 },
    { title: "Non-Std Airspace / No Airspace assigned", isSelected: false, key: 5, value: 3 },
    { title: "Severe Airspace Restrictions", isSelected: false, key: 6, value: 5 },
    { title: "FSWD (Live or Inert)", isSelected: false, key: 7, value: 5 },
    { title: "First 30 days of Deployed Ops", isSelected: false, key: 8, value: 5 },
]

export const missionSpecificRisk = [
    { title: "Low Altitude OPS (<300' AGL)", isSelected: false, key: 0, value: 5 },
    { title: "TGP LASDT (1000' AGL)", isSelected: false, key: 1, value: 5 },
    { title: "Ground Parties (w/ Actual Ordnance)", isSelected: false, key: 2, value: 5 },
    { title: "Visiting Unit Involved in MSN", isSelected: false, key: 3, value: 5 },
    { title: "CDO / GPS Jamming in MSN", isSelected: false, key: 4, value: 5 },
    { title: "R-2508", isSelected: false, key: 5, value: 3 },
]

// let ENVIRONMENT_OPTIONS_VALUES = [3, 5, 3, 5,--- 5, 5, 5, 5,--- 3, 3, 3, 7,--- 3, 5, 5, 5,--- 3, 3, 3,--- 5];
//Environment
export const weatherAtField = [
    { title: "Cold or Hot Wx Ops (<32F / >100F)", isSelected: false, key: 0, value: 3 },
    { title: "< 1500/3", isSelected: false, key: 1, value: 5 },
    { title: "X Winds > 20 Knots", isSelected: false, key: 2, value: 3 },
    { title: "w/in 100FT or .5 Mile of Mins", isSelected: false, key: 3, value: 5 },
]

export const weatherEnrouteArea = [
    { title: "IMC", isSelected: false, key: 0, value: 5 },
    { title: "SFC Winds > 25 Knots", isSelected: false, key: 1, value: 5 },
    { title: "Factor TSTMS in Proxy / Icing", isSelected: false, key: 2, value: 5 },
    { title: "Severely Impacts MSN", isSelected: false, key: 3, value: 5 },
]

export const runway = [
    { title: "Non-Std RWY Ops / Config / Single Runway", isSelected: false, key: 0, value: 3 },
    { title: "NAVAID OTS", isSelected: false, key: 1, value: 3 },
    { title: "Wet", isSelected: false, key: 2, value: 3 },
    { title: "Snow or Ice", isSelected: false, key: 3, value: 7 },
]

export const night = [
    { title: "LOW ILLUM (Artificial Illum Available)", isSelected: false, key: 0, value: 3 },
    { title: "LOW ILLUM (No Artificial Illum)", isSelected: false, key: 1, value: 5 },
    { title: "Planned NVG ops w/in 1hr of Sunrise / Set", isSelected: false, key: 2, value: 5 },
    { title: "NVG Low Altitude", isSelected: false, key: 3, value: 5 },
]

export const other = [
    { title: "BASH Moderate", isSelected: false, key: 0, value: 3 },
    { title: "Over Water Ops", isSelected: false, key: 1, value: 3 },
    { title: "Over Water Ops (Anti-Exposure Suit Req)", isSelected: false, key: 2, value: 3 },
]

// let PERSON_OPTIONS_VALUES = [3, 5, 7, 10,--- 3, 5,--- 3, 3, 3,--- 3, 5, 7,--- 3, 5, 5, 5, 3, 5, 5, 5];
//Person
export const daysSinceLast = [
    { title: "7 - 14 Days", isSelected: false, key: 0, value: 3 },
    { title: "15 - 30 Days", isSelected: false, key: 1, value: 5 },
    { title: "31 - 60 Days", isSelected: false, key: 2, value: 7 },
    { title: "> 60 Days", isSelected: false, key: 3, value: 10 },
]

export const lookback = [
    { title: "RAP Probation (BMC)", isSelected: false, key: 0, value: 3 },
    { title: "Regression (N-BMC)", isSelected: false, key: 1, value: 5 },
]

export const impactOnMsn = [
    { title: "Out of Event / MSN Currency", isSelected: false, key: 0, value: 3 },
    { title: "Check ride", isSelected: false, key: 1, value: 3 },
    { title: "Upgrade", isSelected: false, key: 2, value: 3 },
]

export const notFlownMsn = [
    { title: "3-4 months", isSelected: false, key: 0, value: 3 },
    { title: "5-6 months", isSelected: false, key: 1, value: 5 },
    { title: ">6 months / NEVER", isSelected: false, key: 2, value: 7 },
]

export const circadianRhythm = [
    {
        title: "Show time Before 0400 / Land after 2200",
        isSelected: false, key: 0, value: 3
    },
    {
        title: "Change from Nights to Days or Days to Nights",
        isSelected: false, key: 1, value: 5
    },
    {
        title: "Land w/ > 10 hrs duty day",
        isSelected: false, key: 2, value: 5
    },
    {
        title: "< 18 hrs sleep over last 3 nights (6 hrs/night)",
        isSelected: false, key: 3, value: 5
    },
    {
        title: "Not eaten well within 3 hrs of takeoff",
        isSelected: false, key: 4, value: 3
    },
    {
        title: "Dehydrated (< 4L of fluid within the last 24 hrs)",
        isSelected: false, key: 5, value: 5
    },
    {
        title: "Increased Stress/Challenges at home or work",
        isSelected: false, key: 6, value: 5
    },
    {
        title: "Illness within last 3 days",
        isSelected: false, key: 7, value: 5
    },
]

//Submit
