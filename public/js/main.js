import {accessToken} from './saved-token.js'



async function getProfileInfo(accessToken){
  try{
    const response = await axios.get('https://api.spotify.com/v1/me', {
      headers:{
        Authorization: 'Bearer ' + accessToken
      }
    })
    const name = response.data.display_name
  
    console.log(response.data);
    return name
  }catch(err){
    console.error(err);
  }
}




async function getTrack(accessToken){
  try{
    const containerItem = document.querySelector('.containerItems')

    const response = await axios.get('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=3', {
      headers:{
        Authorization: 'Bearer ' + accessToken
      }
    })
    const items = response.data.items

    const itemsMap = items.map(Element => {
      return  `        
      <div class="containerItem">
        <h1>${Element.name}</h1>
        <figure>
          <img src="${Element.album.images[0].url}" alt="">
        </figure>
      </div>`
    }).join('')
    containerItem.insertAdjacentHTML('beforeend', itemsMap)

    console.log(response.data.items);

  }catch(e){
    console.log(e);
  }
}


getProfileInfo(accessToken)
getTrack(accessToken)


















