async function search(){
  let userInput = document.getElementById('searchbar');
  let userInputValue = userInput.value;
  let data;  
  if(userInputValue != ''){
    let url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=${userInputValue}&key=AIzaSyBDfzpEUdss3yp6v9ml5KDuBG7FzUT8HAA`;
    let response = await fetch(url);
    data = await response.json();
    console.log(data);
  } else {
    // let errorDiv = document.getElementById('error');
    userInput.classList.add('red-placeholder-text')
    return
  }
  if (Object.keys(data).includes('items')) {
    let results = document.getElementById('results');
    for(item of data.items){
      let container = document.createElement('div');
      let image = document.createElement('img');
      let title = document.createElement('h3');
      let description = document.createElement('h5');
      // let statistics = document.createElement('ul');
      //   let fact = document.createElement('li');
      //   fact.innerHTML = item.statistics[stat];
      container.className = 'container';
      container.classList.add('grey')
      title.innerHTML = item.snippet.title;
      description.innerHTML = item.snippet.description;
      image.src = item.snippet.thumbnails.default.url;
      image.width = item.snippet.thumbnails.default.width;
      image.height = item.snippet.thumbnails.default.height;
      image.classList.add('circle');
      container.appendChild(image);
      container.appendChild(title);
      container.appendChild(description);
      results.appendChild(container);
      console.log('yo');
    }
  }


}

let searchBtn = document.getElementById('search');
searchBtn.addEventListener('click',()=>{
  search();
})

let input = document.getElementById('searchbar');
input.addEventListener('click',()=>{
  input.classList.remove('red-placeholder-text');
})