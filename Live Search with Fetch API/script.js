input = document.getElementById("searchInput")
result = document.getElementById("result")


const listItems = []

input.addEventListener('input', (e) => {
    filterData(e.target.value)
})


const makeGetRequest = async (url) => {
    const res = await fetch(url);
    if (!res.ok) {
      const message = `Error: ${res.status} occourd`;
      throw new Error(message);
    }
    data = await res.json();
    return data;
  };
  
  const getData = (url) => {
    makeGetRequest(url)
      .then((res) => {

        //console.log(typeof(res))

        result.innerHTML = ''

        res = res.results

        res.forEach(user => {
            const li = document.createElement('li') 
            li.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first}" />
            <div class="user-info">
              <h4>${user.name.first} ${user.name.last}</h4>
              <p>${user.location.state}, ${user.location.country}</p>
            </div>`

            result.appendChild(li)

            listItems.push(li)


        });
  
  
      }).catch((err) => console.log(err));
  };
  
  getData('https://randomuser.me/api?results=100')



 function filterData(searchText){
    listItems.forEach(item => {
        if(item.innerText.toLowerCase().includes(searchText.toLowerCase())){
            item.classList.remove('hide')
        }

        else{
            item.classList.add('hide')
        }
    })
 } 

 

