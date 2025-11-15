// --- 1. HOTSPOT TRANSLATIONS ---
// Central object for all hotspot text
const HOTSPOT_TEXTS = {
    en: {
        'a1_to_a2': "Go to District Disability Rehabilitation Centre (DDRC)",
        'a2_to_a6': "Go to Sub-Entrance",
        'a2_to_a1': "Exit",
        'a2_to_a3': "Go to Prime Minister's Divyang (Disability) Check-up Center",
        'a3_to_a4': "Go to Prime Minister's Divyang (Disability) Check-up Center",
        'a3_to_a5': "Go to Prime Minister's Divyang (Disability) Check-up ",
        'a3_to_a2': "Go to Entrance",
        'a4_to_a3': "Go Back to Corridor",
        'a5_to_a3': "Go Back to Corridor",
        'a6_to_a2': "Exit",
        'a6_to_a28': "Go to Reception",
        'a6_to_a8': "Go to District Disability Rehabilitation Center and Aadhar Center",
        'a6_to_a7': "Special Olympics Bharat - Maharashtra Ahmednagar Office-bearers",
        'a7_to_a6': "Go back to Sub-Entrance",
        'a8_to_a6': "Go Back to Sub-Entrance",
        'a10_to_a28': "Go to Reception",
        'a11_to_a10': "Adult Physiotherapy Department",
        'a11_to_a12': "Go to Physiotherapy Specialist and Medical Services",
        'a11_to_a16': "Go to Prosthetic Limb Manufacturing Department",
        'a11_to_a28': "Reception",
        'a11_to_a15': "Go to Medical Expert",
        'a12_to_a13': "Go to Medical Services",
        'a12_to_a14': "Go to Physiotherapy Specialist",
        'a12_to_a11': "Go To Reception",
        'a13_to_a12': "Go Back to Lobby",
        'a14_to_a12': "Go Back to Lobby",
        'a15_to_a11': "Exit",
        'a16_to_a18': "Go to Accessible Toilet",
        'a16_to_a11': "Go to Reception",
        'a16_to_a17': "Go to Prosthetic Limb Manufacturing Department",
        'a17_to_a16': "Go back to Corridor",
        'a18_to_a19': "Go to Accesible Toilet",
        'a18_to_a16': "Go to Prosthetic Limb Store",
        'a19_to_a18': "Go back to Accessible Toilet",
        'a19_to_a20': "Go to Hearing Test Department (Audiology)",
        'a20_to_a21': "Go to Hearing Test Department (Audiology) and Speech Therapy Department",
        'a20_to_a24': "Go back to Reception",
        'a20_to_a19': "Go back to Accessible Toilet",
        'a21_to_a23': "Go to Hearing Test Department (Audiology)",
        'a21_to_a22': "Go to Speech Therapy unit",
        'a21_to_a20': "Go back to Corridor",
        'a22_to_a21': "Go Back to Corridor",
        'a23_to_a21': "Go Back to Corridor",
        'a24_to_a20': "Go to Hearing Test Department (Audiology) and Speech Therapy Department",
        'a24_to_a28': "Go to Reception",
        'a24_to_a25': "Go to Occupational Therapy and Counseling Room",
        'a25_to_a27': "Enter To Counseling Room",
        'a25_to_a24': "Go To Reception",
        'a25_to_a26': "Enter Occupational Therapy Unit",
        'a26_to_a25': "Exit",
        'a27_to_a25': "Exit",
        'a28_to_a6': "Exit",
        'a28_to_a29': "Go to Waiting Area",
        'a28_to_a30': "Go to Pediatric Physiotherapy, Early Diagnosis and Treatment",
        'a28_to_a24': "Go to Occupational Therapy and Counselling Unit ",
        'a28_to_a11': "Go to Physiotherapy Specialist and Medical Services",
        'a28_to_a10': "Adult Physiotherapy Department",
        'a29_to_a31': "Go to Material Distribution and Wheelchair Training",
        'a29_to_a28': "Go to Reception",
        'a30_to_a28': "Go to Reception",
        'a31_to_a29': "Go to Waiting Area"
    },
    mr: {
        'a1_to_a2': "जिल्हा दिव्यांग पुनर्वसन केंद्राकडे (DDRC) जा",
        'a2_to_a6': "उप-प्रवेशद्वाराकडे जा",
        'a2_to_a1': "बाहेर पडा",
        'a2_to_a3': "पंतप्रधान दिव्यांग तपासणी केंद्राकडे जा",
        'a3_to_a4': "पंतप्रधान दिव्यांग तपासणी केंद्राकडे जा",
        'a3_to_a5': "पंतप्रधान दिव्यांग तपासणी केंद्राकडे जा",
        'a3_to_a2': "प्रवेशद्वाराकडे जा",
        'a4_to_a3': "कॉरिडॉरकडे परत जा",
        'a5_to_a3': "कॉरिडॉरकडे परत जा",
        'a6_to_a2': "बाहेर पडा",
        'a6_to_a28': "रिसेप्शनकडे जा",
        'a6_to_a8': "जिल्हा दिव्यांग पुनर्वसन केंद्र आणि आधार केंद्राकडे जा",
        'a6_to_a7': "विशेष ऑलिंपिक भारत - महाराष्ट्र अहमदनगर पदाधिकारी कार्यालयाकडे जा",
        'a7_to_a6': "उप-प्रवेशद्वाराकडे परत जा",
        'a8_to_a6': "उप-प्रवेशद्वाराकडे परत जा",
        'a10_to_a28': "रिसेप्शनकडे जा",
        'a11_to_a10': "प्रौढ फिजिओथेरपी विभागाकडे जा",
        'a11_to_a12': "फिजिओथेरपी विशेषज्ञ आणि वैद्यकीय सेवांकडे जा",
        'a11_to_a16': "कृत्रिम अवयव उत्पादन विभागाकडे जा",
        'a11_to_a28': "रिसेप्शनकडे जा",
        'a11_to_a15': "वैद्यकीय तज्ञाकडे जा",
        'a12_to_a13': "वैद्यकीय सेवांकडे जा",
        'a12_to_a14': "फिजिओथेरपी तज्ञाकडे जा",
        'a12_to_a11': "रिसेप्शनकडे जा",
        'a13_to_a12': "लॉबीकडे परत जा",
        'a14_to_a12': "लॉबीकडे परत जा",
        'a15_to_a11': "बाहेर पडा",
        'a16_to_a18': "दिव्यांग शौचालयाकडे जा",
        'a16_to_a11': "रिसेप्शनकडे जा",
        'a16_to_a17': "कृत्रिम अवयव उत्पादन विभागाकडे जा",
        'a17_to_a16': "कॉरिडॉरकडे परत जा",
        'a18_to_a19': "दिव्यांग शौचालयाकडे जा",
        'a18_to_a16': "कृत्रिम अवयव भांडार (स्टोअर) कडे जा",
        'a19_to_a18': "दिव्यांग शौचालयाकडे परत जा",
        'a19_to_a20': "श्रवण तपासणी विभागाकडे (ऑडिओलॉजी) जा",
        'a20_to_a21': "श्रवण तपासणी (ऑडिओलॉजी) आणि स्पीच थेरपी विभागाकडे जा",
        'a20_to_a24': "रिसेप्शनकडे परत जा",
        'a20_to_a19': "दिव्यांग शौचालयाकडे परत जा",
        'a21_to_a23': "श्रवण तपासणी विभागाकडे (ऑडिओलॉजी) जा",
        'a21_to_a22': "स्पीच थेरपी युनिटकडे जा",
        'a21_to_a20': "कॉरिडॉरकडे परत जा",
        'a22_to_a21': "कॉरिडॉरकडे परत जा",
        'a23_to_a21': "कॉरिडॉरकडे परत जा",
        'a24_to_a20': "श्रवण तपासणी (ऑडिओलॉजी) आणि स्पीच थेरपी विभागाकडे जा",
        'a24_to_a28': "रिसेप्शनकडे जा",
        'a24_to_a25': "ऑक्युपेशनल थेरपी आणि समुपदेशन कक्षाकडे जा",
        'a25_to_a27': "समुपदेशन कक्षात प्रवेश करा",
        'a25_to_a24': "रिसेप्शनकडे जा",
        'a25_to_a26': "ऑक्युपेशनल थेरपी युनिटमध्ये प्रवेश करा",
        'a26_to_a25': "बाहेर पडा",
        'a27_to_a25': "बाहेर पडा",
        'a28_to_a6': "बाहेर पडा",
        'a28_to_a29': "प्रतीक्षा कक्षाकडे जा",
        'a28_to_a30': "बालरोग फिजिओथेरपी, लवकर निदान आणि उपचार केंद्राकडे जा",
        'a28_to_a24': "ऑक्युपेशनल थेरपी आणि समुपदेशन युनिटकडे जा",
        'a28_to_a11': "फिजिओथेरपी विशेषज्ञ आणि वैद्यकीय सेवांकडे जा",
        'a28_to_a10': "प्रौढ फिजिओथेरपी विभागाकडे जा",
        'a29_to_a31': "साहित्य वितरण आणि व्हीलचेअर प्रशिक्षणाकडे जा",
        'a29_to_a28': "रिसेप्शनकडे जा",
        'a30_to_a28': "रिसेप्शनकडे जा",
        'a31_to_a29': "प्रतीक्षा कक्षाकडे जा"
    }
};

// --- 2. GLOBAL VARIABLES ---
let viewer;
let currentLang = 'en'; // Track the current language (English default)
let currentLocationKey = 'a1'; // Track the currently loaded location

// --- 3. HELPER FUNCTION ---
// Gets the correct translated text for a hotspot
function getHotspotText(key) {
    return HOTSPOT_TEXTS[currentLang][key] || key; // Fallback to the key
}

// --- 4. SCENE DEFINITIONS ---
// All "text" fields are now dynamic using getHotspotText()
const SCENES = {
    // 1. MAIN ENTRANCE
    a1: {
        panorama: "images/1.jpg", 
        hotSpots: [
            {
                "pitch": -38,
                "yaw": 6,
                "type": "scene",
                "text": getHotspotText('a1_to_a2'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a2" } 
            }
        ]
    },
    a2: { panorama: "images/2.jpg", hotSpots: [
        {
            "pitch": -30,
            "yaw": 0,
            "type": "scene",
            "text": getHotspotText('a2_to_a6'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a6" } 
        },
        {
            "pitch": -30,
            "yaw": 180,
            "type": "scene",
            "text": getHotspotText('a2_to_a1'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a1" } 
        },
        {
            "pitch": -35,
            "yaw": 455,
            "type": "scene",
            "text": getHotspotText('a2_to_a3'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a3" } 
        },
    ] },
    a3: { panorama: "images/3.jpg", hotSpots: [
        {
            "pitch": -38,
            "yaw": 25,
            "type": "scene",
            "text": getHotspotText('a3_to_a4'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a4" } 
        },
        {
            "pitch": -40,
            "yaw": -22,
            "type": "scene",
            "text": getHotspotText('a3_to_a5'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a5" } 
        },
        {
            "pitch": -30,
            "yaw": -440,
            "type": "scene",
            "text": getHotspotText('a3_to_a2'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a2" } 
        },
    ] },
    a4: { panorama: "images/4.jpg", hotSpots: [
        {
            "pitch": -40,
            "yaw": -145,
            "type": "scene",
            "text": getHotspotText('a4_to_a3'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a3" } 
        },
    ] },
    a5: { panorama: "images/5.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": -102,
            "type": "scene",
            "text": getHotspotText('a5_to_a3'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a3" } 
        },
    ] },
    a6: { panorama: "images/6.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": 185,
            "type": "scene",
            "text": getHotspotText('a6_to_a2'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a2" } 
        },
        {
            "pitch": -35,
            "yaw": 0,
            "type": "scene",
            "text": getHotspotText('a6_to_a28'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a28" } 
        },
        {
            "pitch": -42,
            "yaw": -450,
            "type": "scene",
            "text": getHotspotText('a6_to_a8'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a8" } 
        },
        {
            "pitch": -36,
            "yaw": 452,
            "type": "scene",
            "text": getHotspotText('a6_to_a7'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a7" } 
        },
    ] },
    a7: { panorama: "images/7.jpg", hotSpots: [
        {
            "pitch": -42,
            "yaw": 440,
            "type": "scene",
            "text": getHotspotText('a7_to_a6'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId),
            "clickHandlerArgs": { "sceneId": "a6" }
        }
    ] },
    a8: { panorama: "images/8.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": -448,
            "type": "scene",
            "text": getHotspotText('a8_to_a6'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a6" } 
        },
    ] },
    a9: { panorama: "images/9.jpg", hotSpots: [] },
    a10: { panorama: "images/10.jpg", hotSpots: [
        {
            "pitch": -30,
            "yaw": 150,
            "type": "scene",
            "text": getHotspotText('a10_to_a28'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a28" } 
        }
    ] },
    a11: {
        panorama: "images/11.jpg", 
        hotSpots: [ 
            {
                "pitch": -25,
                "yaw": 180,
                "type": "scene",
                "text": getHotspotText('a11_to_a10'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a10" } 
            },
            {
                "pitch": -30,
                "yaw": -90,
                "type": "scene",
                "text": getHotspotText('a11_to_a12'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a12" } 
            },
            {
                "pitch": -25,
                "yaw": 5,
                "type": "scene",
                "text": getHotspotText('a11_to_a16'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a16" } 
            },
            {
                "pitch": -35,
                "yaw": 115,
                "type": "scene",
                "text": getHotspotText('a11_to_a28'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a28" } 
            },
            {
                "pitch": -40,
                "yaw": -23,
                "type": "scene",
                "text": getHotspotText('a11_to_a15'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a15" }
            },
    ]},
    a12: { panorama: "images/12.jpg", hotSpots: [
        {
            "pitch": -40,
            "yaw": -25,
            "type": "scene",
            "text": getHotspotText('a12_to_a13'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a13" } 
        },
        {
            "pitch": -40,
            "yaw": 25,
            "type": "scene",
            "text": getHotspotText('a12_to_a14'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a14" } 
        },
        {
            "pitch": -30,
            "yaw": -80,
            "type": "scene",
            "text": getHotspotText('a12_to_a11'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a11" } 
        },
    ] },
    a13: { panorama: "images/13.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": 105,
            "type": "scene",
            "text": getHotspotText('a13_to_a12'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a12" } 
        },
    ] },
    a14: { panorama: "images/14.jpg", hotSpots: [
        {
            "pitch": -45,
            "yaw": 155,
            "type": "scene",
            "text": getHotspotText('a14_to_a12'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a12" } 
        },
    ] },
    a15: { panorama: "images/15.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": 150,
            "type": "scene",
            "text": getHotspotText('a15_to_a11'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a11" },
        },
    ] },
    a16: { panorama: "images/16.jpg", hotSpots: [
        {
            "pitch": -30,
            "yaw": 5,
            "type": "scene",
            "text": getHotspotText('a16_to_a18'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a18" } 
        },
        {
            "pitch": -30,
            "yaw": 195,
            "type": "scene",
            "text": getHotspotText('a16_to_a11'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a11" } 
        },
        {
            "pitch": -40,
            "yaw": -435,
            "type": "scene",
            "text": getHotspotText('a16_to_a17'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a17" } 
        },
    ] },
    a17: { panorama: "images/17.jpg", hotSpots: [
        {
            "pitch": -30,
            "yaw": -55,
            "type": "scene",
            "text": getHotspotText('a17_to_a16'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a16" } 
        },
    ] },
    a18: { panorama: "images/18.jpg", hotSpots: [
        {
            "pitch": -30,
            "yaw": -2,
            "type": "scene",
            "text": getHotspotText('a18_to_a19'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a19" } 
        },
        {
            "pitch": -30,
            "yaw":-270,
            "type": "scene",
            "text": getHotspotText('a18_to_a16'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a16" } 
        },
    ] },
    a19: { panorama: "images/19.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": 95,
            "type": "scene",
            "text": getHotspotText('a19_to_a18'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a18" } 
        },
        {
            "pitch": -30,
            "yaw":5,
            "type": "scene",
            "text": getHotspotText('a19_to_a20'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a20" } 
        },
    ] },
    a20: { panorama: "images/20.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": -90,
            "type": "scene",
            "text": getHotspotText('a20_to_a21'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a21" } 
        },
        {
            "pitch": -30,
            "yaw":0,
            "type": "scene",
            "text": getHotspotText('a20_to_a24'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a24" } 
        },
        {
            "pitch": -30,
            "yaw":-180,
            "type": "scene",
            "text": getHotspotText('a20_to_a19'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a19" } 
        },
    ] },
    a21: { panorama: "images/21.jpg", hotSpots: [
        {
            "pitch": -38,
            "yaw": 20,
            "type": "scene",
            "text": getHotspotText('a21_to_a23'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a23" } 
        },
        {
            "pitch": -38,
            "yaw": -25,
            "type": "scene",
            "text": getHotspotText('a21_to_a22'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a22" } 
        },
        {
            "pitch": -30,
            "yaw": -80,
            "type": "scene",
            "text": getHotspotText('a21_to_a20'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a20" } 
        },
    ] },
    a22: { panorama: "images/22.jpg", hotSpots: [
        {
            "pitch": -45,
            "yaw": 180,
            "type": "scene",
            "text": getHotspotText('a22_to_a21'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a21" } 
        },
    ] },
    a23: { panorama: "images/23.jpg", hotSpots: [
        {
            "pitch": -38,
            "yaw": 230,
            "type": "scene",
            "text": getHotspotText('a23_to_a21'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a21" } 
        },
    ] },
    a24: { panorama: "images/24.jpg", hotSpots: [
        {
            "pitch": -30,
            "yaw": -90,
            "type": "scene",
            "text": getHotspotText('a24_to_a20'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a20" } 
        },
        {
            "pitch": -40,
            "yaw": 90,
            "type": "scene",
            "text": getHotspotText('a24_to_a28'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a28" } 
        },
        {
            "pitch": -30,
            "yaw":0,
            "type": "scene",
            "text": getHotspotText('a24_to_a25'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a25" } 
        },
    ] },
    a25: { panorama: "images/25.jpg", hotSpots: [
        {
            "pitch": -35,
            "yaw": 25,
            "type": "scene",
            "text": getHotspotText('a25_to_a27'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a27" } 
        },
        {
            "pitch": -35,
            "yaw": -80,
            "type": "scene",
            "text": getHotspotText('a25_to_a24'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a24" } 
        },
        {
            "pitch": -35,
            "yaw": -25,
            "type": "scene",
            "text": getHotspotText('a25_to_a26'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a26" } 
        },
    ] },
    a26: { panorama: "images/26.jpg", hotSpots: [
        {
            "pitch": -40,
            "yaw": 170,
            "type": "scene",
            "text": getHotspotText('a26_to_a25'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a25" } 
        },
    ] },
    a27: { panorama: "images/27.jpg", hotSpots: [
        {
            "pitch": -40,
            "yaw": 210,
            "type": "scene",
            "text": getHotspotText('a27_to_a25'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a25" } 
        },
    ] },
    a28: {
        panorama: "images/28.jpg",
        hotSpots: [
            {
                "pitch": -25,
                "yaw": 185,
                "type": "scene",
                "text": getHotspotText('a28_to_a6'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a6" } 
            },
            {
                "pitch": -25,
                "yaw": 450,
                "type": "scene",
                "text": getHotspotText('a28_to_a29'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a29" } 
            },
            {
                "pitch": -33,
                "yaw": 140,
                "type": "scene",
                "text": getHotspotText('a28_to_a30'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a30" } 
            },
            {
                "pitch": -30,
                "yaw": 40,
                "type": "scene",
                "text": getHotspotText('a28_to_a24'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a24" } 
            },
            {
                "pitch": -25,
                "yaw": -47,
                "type": "scene",
                "text": getHotspotText('a28_to_a11'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a11" } 
            },
            {
                "pitch": -30,
                "yaw": -125,
                "type": "scene",
                "text": getHotspotText('a28_to_a10'),
                "cssClass": "custom-hotspot-icon",
                "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
                "clickHandlerArgs": { "sceneId": "a10" } 
            }
        ]
    },
    a29: { panorama: "images/29.jpg", hotSpots: [
        {
            "pitch": -30,
            "yaw": -18,
            "type": "scene",
            "text": getHotspotText('a29_to_a31'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a31" } 
        },
        {
            "pitch": -27,
            "yaw": -170,
            "type": "scene",
            "text": getHotspotText('a29_to_a28'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a28" } 
        },
    ] },
    a30: { panorama: "images/30.jpg", hotSpots: [
        {
            "pitch": -28,
            "yaw": -130,
            "type": "scene",
            "text": getHotspotText('a30_to_a28'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a28" },
        },
    ] },
    a31: { panorama: "images/31.jpg", hotSpots: [
        {
            "pitch": -23,
            "yaw": -115,
            "type": "scene",
            "text": getHotspotText('a31_to_a29'),
            "cssClass": "custom-hotspot-icon",
            "clickHandlerFunc": (e, args) => loadView(args.sceneId), 
            "clickHandlerArgs": { "sceneId": "a29" } 
        },
    ] },
};

// --- 5. STATIC TRANSLATIONS (Sidebar, Headers, and Bottom Bar) ---
// I have merged your `translations` and `locationKeysToNames` and
// corrected all the names.
const translations = {
    en: {
        'nav-header': "District Disability Rehabilitation Centre (DDRC)",
        'nav-subheader': "360° Virtual Tour",
        'location-suffix': " — 360° Interactive View",

        // Sidebar Buttons (from your code)
        'nav-1': "Main Entrance",
        'nav-2': "2", // Hidden corridor
        'nav-3': "3", // Hidden corridor
        'nav-4': "PM Divyang Check-up (Room 1)",
        'nav-5': "PM Divyang Check-up (Room 2)",
        'nav-6': "Sub-Entrance",
        'nav-7': "Special Olympics Bharat Office",
        'nav-8': "DDRC and Aadhar Center",
        'nav-10': "Adult Physiotherapy Dept",
        'nav-11': "11", // Hidden corridor
        'nav-12': "12", // Hidden corridor
        'nav-13': "Medical Services",
        'nav-14': "Physiotherapy Specialist",
        'nav-15': "Medical Expert",
        'nav-16': "Prosthetics & Toilet Area",
        'nav-17': "Prosthetic Limb Mfg Dept",
        'nav-18': "18", // Hidden corridor
        'nav-19': "19", // Hidden corridor
        'nav-20': "20", // Hidden corridor
        'nav-21': "21", // Hidden corridor
        'nav-22': "Speech Therapy Unit",
        'nav-23': "Hearing Test Dept (Audiology)",
        'nav-24': "24", // Hidden corridor
        'nav-25': "25", // Hidden corridor
        'nav-26': "Occupational Therapy Unit",
        'nav-27': "Counseling Room",
        'nav-28': "Reception",
        'nav-29': "Waiting Area", // Changed from "Skill Development" to match hotspot
        'nav-30': "Pediatric Physiotherapy",
        'nav-31': "Material Distribution",

        // Location Names for Bottom Bar (FIXED)
        'location-a1': "Main Entrance",
        'location-a2': "Entrance Corridor",
        'location-a3': "PM Divyang Center Corridor",
        'location-a4': "PM Divyang Check-up (Room 1)",
        'location-a5': "PM Divyang Check-up (Room 2)",
        'location-a6': "Sub-Entrance",
        'location-a7': "Special Olympics Bharat Office",
        'location-a8': "DDRC and Aadhar Center",
        'location-a9': "Scene 9 (Not Used)",
        'location-a10': "Adult Physiotherapy Dept",
        'location-a11': "Physiotherapy Lobby",
        'location-a12': "Medical Services Lobby",
        'location-a13': "Medical Services",
        'location-a14': "Physiotherapy Specialist",
        'location-a15': "Medical Expert",
        'location-a16': "Prosthetics & Toilet Area",
        'location-a17': "Prosthetic Limb Mfg Dept",
        'location-a18': "Accessible Toilet Hallway",
        'location-a19': "Audiology Hallway Entrance",
        'location-a20': "Audiology/Speech Therapy Corridor",
        'location-a21': "Audiology/Speech Therapy Lobby",
        'location-a22': "Speech Therapy Unit",
        'location-a23': "Hearing Test Dept (Audiology)",
        'location-a24': "Occupational Therapy Corridor",
        'location-a25': "Occupational/Counseling Lobby",
        'location-a26': "Occupational Therapy Unit",
        'location-a27': "Counseling Room",
        'location-a28': "Reception",
        'location-a29': "Waiting Area",
        'location-a30': "Pediatric Physiotherapy",
        'location-a31': "Material Distribution"
    },
    mr: {
        'nav-header': "जिल्हा अपंग पुनर्वसन केंद्र (DDRC)",
        'nav-subheader': "३६०° व्हर्च्युअल टूर",
        'location-suffix': " — ३६०° इंटरॅक्टिव्ह व्ह्यू",
        
        // Sidebar Buttons (from your code)
        'nav-1': "मुख्य प्रवेशद्वार",
        'nav-2': "२", // Hidden corridor
        'nav-3': "३", // Hidden corridor
        'nav-4': "पंतप्रधान दिव्यांग तपासणी (रूम १)",
        'nav-5': "पंतप्रधान दिव्यांग तपासणी (रूम २)",
        'nav-6': "उप-प्रवेशद्वार",
        'nav-7': "विशेष ऑलिंपिक भारत कार्यालय",
        'nav-8': "DDRC आणि आधार केंद्र",
        'nav-10': "प्रौढ फिजिओथेरपी विभाग",
        'nav-11': "११", // Hidden corridor
        'nav-12': "१२", // Hidden corridor
        'nav-13': "वैद्यकीय सेवा",
        'nav-14': "फिजिओथेरपी विशेषज्ञ",
        'nav-15': "वैद्यकीय तज्ञ",
        'nav-16': "कृत्रिम अवयव आणि शौचालय परिसर",
        'nav-17': "कृत्रिम अवयव उत्पादन विभाग",
        'nav-18': "१८", // Hidden corridor
        'nav-19': "१९", // Hidden corridor
        'nav-20': "२०", // Hidden corridor
        'nav-21': "२१", // Hidden corridor
        'nav-22': "स्पीच थेरपी युनिट",
        'nav-23': "श्रवण तपासणी विभाग (ऑडिओलॉजी)",
        'nav-24': "२४", // Hidden corridor
        'nav-25': "२५", // Hidden corridor
        'nav-26': "ऑक्युपेशनल थेरपी युनिट",
        'nav-27': "समुपदेशन कक्ष",
        'nav-28': "रिसेप्शन",
        'nav-29': "प्रतीक्षा कक्ष", // Changed from "Skill Development"
        'nav-30': "बालरोग फिजिओथेरपी",
        'nav-31': "साहित्य वितरण",

        // Location Names for Bottom Bar (FIXED)
        'location-a1': "मुख्य प्रवेशद्वार",
        'location-a2': "प्रवेशद्वार कॉरिडॉर",
        'location-a3': "पंतप्रधान दिव्यांग केंद्र कॉरिडॉर",
        'location-a4': "पंतप्रधान दिव्यांग तपासणी (रूम १)",
        'location-a5': "पंतप्रधान दिव्यांग तपासणी (रूम २)",
        'location-a6': "उप-प्रवेशद्वार",
        'location-a7': "विशेष ऑलिंपिक भारत कार्यालय",
        'location-a8': "DDRC आणि आधार केंद्र",
        'location-a9': "देखावा ९ (वापरात नाही)",
        'location-a10': "प्रौढ फिजिओथेरपी विभाग",
        'location-a11': "फिजिओथेरपी लॉबी",
        'location-a12': "वैद्यकीय सेवा लॉबी",
        'location-a13': "वैद्यकीय सेवा",
        'location-a14': "फिजिओथेरपी विशेषज्ञ",
        'location-a15': "वैद्यकीय तज्ञ",
        'location-a16': "कृत्रिम अवयव आणि शौचालय परिसर",
        'location-a17': "कृत्रिम अवयव उत्पादन विभाग",
        'location-a18': "दिव्यांग शौचालय हॉलवे",
        'location-a19': "ऑडिओलॉजी हॉलवे प्रवेश",
        'location-a20': "ऑडिओलॉजी/स्पीच थेरपी कॉरिडॉर",
        'location-a21': "ऑडिओलॉजी/स्पीच थेरपी लॉबी",
        'location-a22': "स्पीच थेरपी युनिट",
        'location-a23': "श्रवण तपासणी विभाग (ऑडिओलॉजी)",
        'location-a24': "ऑक्युपेशनल थेरपी कॉरिडॉर",
        'location-a25': "ऑक्युपेशनल/समुपदेशन लॉबी",
        'location-a26': "ऑक्युपेशनल थेरपी युनिट",
        'location-a27': "समुपदेशन कक्ष",
        'location-a28': "रिसेप्शन",
        'location-a29': "प्रतीक्षा कक्ष",
        'location-a30': "बालरोग फिजिओथेरपी",
        'location-a31': "साहित्य वितरण"
    }
};

// --- 6. CORE FUNCTIONS ---

// (Your locationKeysToNames object is no longer needed and has been removed)

// FIXED initViewer → HFOV taken from sceneData provided by loadView
function initViewer(sceneData) {
    if (viewer) viewer.destroy();

    // Dynamically get hotspot text for the current scene
    const dynamicHotspots = sceneData.hotSpots.map(spot => {
        // Find the key (e.g., 'a1_to_a2') based on the target sceneId
        const key = `${currentLocationKey}_to_${spot.clickHandlerArgs.sceneId}`;
        return {
            ...spot,
            "text": getHotspotText(key) // Set the translated text
        };
    });

    viewer = pannellum.viewer("viewer", {
        type: "equirectangular",
        panorama: sceneData.panorama,
        autoLoad: true,
        autoRotate: -5,
        hfov: sceneData.hfov,
        hotSpots: dynamicHotspots, // Use the dynamically translated hotspots
        default: {
            sceneFadeDuration: 1000,
            type: "scene"
        }
    });
}


// **UPDATED** Update bottom location text
function updateLocationText(locationKey) {
    // Uses the new 'translations' object
    const locationName = translations[currentLang]['location-' + locationKey];
    if (!locationName) {
        console.warn(`No location name found for key: ${locationKey}`);
        return;
    }
    const suffix = translations[currentLang]['location-suffix'];
    document.getElementById("location-text").innerText = locationName + suffix;
}


// Sidebar active button
function setActiveButton(locationKey) {
    document.querySelectorAll('.sidebar button').forEach(btn => {
        btn.classList.remove('active-nav');
    });
    const currentBtn = document.querySelector(`[onclick="loadView('${locationKey}')"]`);
    if (currentBtn) currentBtn.classList.add('active-nav');
}


// **UPDATED** Language change
function setLanguage(lang) {
    currentLang = lang;
    const langData = translations[lang];
    
    // Update all static HTML elements
    for (const key in langData) {
        if (!key.startsWith('location-')) { // Don't try to find 'location-a1' as an ID
            const element = document.getElementById(key);
            if (element) element.innerHTML = langData[key];
        }
    }
    
    // Update language buttons
    document.getElementById('lang-en').classList.remove('active-lang');
    document.getElementById('lang-mr').classList.remove('active-lang');
    document.getElementById(`lang-${lang}`).classList.add('active-lang');
    
    // Update bottom bar text
    updateLocationText(currentLocationKey);
    
    // **CRITICAL FIX**: Reload the view to update hotspot text
    loadView(currentLocationKey);
}


// CRITICAL FIXED FUNCTION
function loadView(location) {
    currentLocationKey = location;
    const sceneData = SCENES[location];
    if (!sceneData) return;

    updateLocationText(location);
    setActiveButton(location);

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    sceneData.hfov = isMobile ? 50 : 120;

    // This will now re-create the viewer with the correct translated hotspots
    initViewer(sceneData); 

    const sidebar = document.querySelector('.sidebar');
    if (sidebar.classList.contains('sidebar-open')) {
        toggleSidebar();
    }
}


function resetView() {
    if (viewer) {
        viewer.setYaw(0);
        viewer.setPitch(0);
        viewer.startAutoRotate();
    }
}

function toggleFullscreen() {
    if (viewer) viewer.toggleFullscreen();
}


// Initial load
window.onload = () => {
    // Set language *before* loading the first view
    setLanguage('en'); 
    loadView("a1");
};


function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-open');
}

// This re-calculates HFOV on resize
window.addEventListener("resize", () => {
    loadView(currentLocationKey);
});