const form = document.querySelector('#searchForm');
form.addEventListener('submit',async function(e){
    e.preventDefault();
    const searchTerm = form.nodeValue;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?=${searchTerm}`);
    console.log(res.data[0].show.image.medium);
    const img = document.createElement('IMG');
    img.src=res.data[0].show.image.medium;
    document.body.append(img);
});