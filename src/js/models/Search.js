const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${this.query}`);

// for recipe.js  const res = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);