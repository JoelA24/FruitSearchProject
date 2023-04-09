const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

// Takes a string and returns an array of matching fruits
function search(str) {
  let results = [];

  // run a loop to check with submitted input
  for (let i = 0; i < fruit.length; i++) {
    if (fruit[i].toLowerCase().indexOf(str.toLowerCase()) !== -1) {
      results.push(fruit[i]);
    }
  }
  return results;
}

// Displays fruits with matching letters as a list
function searchHandler(e) {
  const inputVal = e.target.value;
  const results = search(inputVal);
  showSuggestions(results, inputVal);

  if(inputVal === "") {
    suggestions.style.display= 'none'
  }
}

// Displays the fruits in the suggestions element
function showSuggestions(results, inputVal) {
  let html = '';
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    const index = result.toLowerCase().indexOf(inputVal.toLowerCase());
    if (index !== -1) {
      html += `<li>${result.slice(0, index)}<strong>${result.slice(index, index + inputVal.length)}</strong>${result.slice(index + inputVal.length)}</li>`;
    }
  }
  suggestions.innerHTML = html;
  if (results.length > 0) {
    suggestions.style.display = 'block';
  } else {
    suggestions.style.display = 'none';
  }
}

// Allows you to click on a returneds item in the dropdown and fills the input box with clicked item
function useSuggestion(e) {
  if (e.target.nodeName === 'LI') {
    input.value = e.target.innerText;
    // clear suggestions list when emptied
    suggestions.innerHTML='';
  }
}

// Updates with each time the key goes up from being pressed
input.addEventListener('keyup', searchHandler);

// Updates and uses suggested item when li is clicked
suggestions.addEventListener('click', useSuggestion);
