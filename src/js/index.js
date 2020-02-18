import axios from 'axios';

async function getResults(query) {
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const key = '2815623487516924351942351465';
  try {
    const res = await axios(`http://food2fork.com/api/search?key=${key}&q=${query}`);
    const recipes = res.data.recipes;
    console.log(recipes);
  } catch (error) {
    alert(error);
  }
}

getResults('pizza');