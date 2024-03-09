let sharingCloudOpener = document.getElementById('share-img')
let sharingCloudOpening = document.getElementById('share-to')
let isOpen = false;

sharingCloudOpener.addEventListener('click', () => {
  if(isOpen){
    sharingCloudOpening.classList.add('hidden')
    isOpen = false
    sharingCloudOpener.style.backgroundColor= 'hsl(210, 46%, 95%)'
    
  } else {
    sharingCloudOpening.classList.remove('hidden')
    sharingCloudOpener.style.backgroundColor= 'hsl(217, 19%, 35%)'
    isOpen = true
  }
})