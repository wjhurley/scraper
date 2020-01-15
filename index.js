const axios = require('axios');
const cheerio = require('cheerio');

(async () => {
  const html = await axios.get('http://www.kingcoathletics.com/index.php?pid=0.7.90.3.320').then(response => response.data);
  const $ = cheerio.load(html);
  
  const gameDates = $('#schedule-panel > table:nth-child(7) > tbody > tr:not(:nth-child(1)) > td:nth-child(2)')
    .toArray()
    .map(element => $(element).text())
    .filter(element => element.trim() !== '');
  console.log(gameDates);
})();
