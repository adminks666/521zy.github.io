const domain1 = 'hack-gov.com.cn/';
const domain2 = 'hack-gov.cn/';

const randomIndex = Math.floor(Math.random() * 2); // Generate a random number 0 or 1
const chosenDomain = randomIndex === 0 ? domain1 : domain2;

window.location.href = 'https://' + chosenDomain;
