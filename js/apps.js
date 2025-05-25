const containerEl = document.createElement("div");
document.body.append(containerEl);
containerEl.style.cssText = `
background-color: #1F1F1F;
width: 384px;
height: 611px;
display: flex;
flex-direction: column;
padding: 40px;
gap: 8px;
margin: 0 auto;
`
const imgEl = document.createElement("img");
document.body.append(imgEl);
imgEl.src = "./imags/1.png";
containerEl.append(imgEl);
imgEl.style.cssText = `
width: 88px;
height: 88px;
margin: 0 auto;
`

const titleEl = document.createElement("h1");
titleEl.innerText = "Jessica Randall";
containerEl.append(titleEl);
titleEl.style.cssText = `
color: white;
font-size: 24px;
margin: 0 auto;
margin-top: 20px;
`

const h2El = document.createElement("h2");
containerEl.append(h2El);
h2El.innerText = "London, United Kingdom";
h2El.style.cssText = `
color: #C4F82A;
margin: 0 auto;
margin-top: 4px;
font-size: 14px;
`

const pEl = document.createElement("p");
pEl.innerText = "Front - end developer and avid reader.";
containerEl.append(pEl);
pEl.style.cssText = `
font-size: 14px;
color: #FFFFFF;
margin: 0 auto;
margin-top: 8px;
`

const buttonEl = document.createElement("button");
buttonEl.innerText = "github";
containerEl.append(buttonEl);
buttonEl.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
border: none;
color: #FFFFFF;
cursor: pointer;
font-size: 16px;
`

const buttonEl3 = document.createElement("button");
buttonEl3.innerText = "Frontend Mentor";
containerEl.append(buttonEl3);
buttonEl3.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
border: none;
color: #FFFFFF;
cursor: pointer;
font-size: 16px;
`
const buttonEl4 = document.createElement("button");
buttonEl4.innerText = "LinkedIn";
containerEl.append(buttonEl4);
buttonEl4.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
border: none;
color: #FFFFFF;
cursor: pointer;
font-size: 16px;
`
const buttonEl5 = document.createElement("button");
buttonEl5.innerText = "twitter";
containerEl.append(buttonEl5);
buttonEl5.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
border: none;
color: #FFFFFF;
cursor: pointer;
font-size: 16px;
`
const buttonEl6 = document.createElement("button");
buttonEl6.innerText = "instagram";
containerEl.append(buttonEl6);
buttonEl6.style.cssText = `
background-color: #333333;
border-radius: 8px;
padding: 12px;
margin-top: 24px;
border: none;
color: #FFFFFF;
cursor: pointer;
font-size: 16px;
`

