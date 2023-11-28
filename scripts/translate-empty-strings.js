const fs = require('fs');
const https = require('https');

const filePath = './src/translations/es.json';

function findEmptyStringsInTranslations(obj, result) {
  for (const key in obj) {
    if (obj[key] === '') {
      result.push(key);
    }
  }
}

function checkFile(filePath, result) {
  const data = fs.readFileSync(filePath);
  const json = JSON.parse(data);
  findEmptyStringsInTranslations(json, result);
}

const translate = async (text, sourceLang, targetLang) => {
  const params = new URLSearchParams({
    client: 'gtx',
    sl: sourceLang,
    tl: targetLang,
    dt: 't',
    q: text,
  });

  return new Promise((resolve, reject) => {
    https.get(
      `https://translate.googleapis.com/translate_a/single?${params.toString()}`,
      response => {
        let data = '';

        response.on('data', chunk => {
          data += chunk;
        });

        response.on('end', () => {
          const translatedText = JSON.parse(data)[0][0][0];
          resolve(translatedText);
        });

        response.on('error', error => {
          reject(error);
        });
      },
    );
  });
};

const translateEmptyStrings = async () => {
  const translations = await Promise.all(
    emptyStrings.map(text => translate(text, 'en', 'es')),
  );
  // map translations to emptyStrings
  const translationsMap = emptyStrings.reduce((acc, curr, index) => {
    acc[curr] = translations[index];
    return acc;
  }, {});

  console.log(JSON.stringify(translationsMap, null, '  '));

  // write translations to es.json
  fs.readFile(filePath, 'utf8', (error, data) => {
    if (error) {
      console.error(error);
      return;
    }

    const existingTranslations = JSON.parse(data);
    const updatedTranslations = { ...existingTranslations, ...translationsMap };

    fs.writeFile(
      filePath,
      JSON.stringify(updatedTranslations, null, 2),
      error => {
        if (error) {
          console.error(error);
          return;
        }

        console.log('Translations written to file successfully.');
      },
    );
  });
};

const emptyStrings = [];
checkFile(filePath, emptyStrings);

console.log(JSON.stringify(emptyStrings, null, '\t'));

translateEmptyStrings();
