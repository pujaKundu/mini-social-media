//post
const postContent = document.getElementById('post');
const postBtn = document.getElementById('post-btn')

const newPost = document.getElementById('new-post');
const showPost = document.getElementById("show-post");
//showPost.textContent = postContent.value;

const allPosts = document.getElementById('all-posts')

let c = 1;

//date time

const today = new Date();

const date =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

const time =
  today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

//new post
postBtn.addEventListener('click', () => {
    
    let newPost = postContent.value;
    
    allPosts.innerHTML += `
        <div id="new-post" class='newPost'>
            <p id="show-post">${newPost}</p>
            <div class='likeContainer'>
            <button id="like-btn">Like</button>
            <div id='like'></div>
            
            </div>
            <small>Date: ${date} <span>Time: ${time}</span></small>
            
        </div>
    `;
  
  postContent.value = "";
  const like = document.getElementById("like-btn");
  const showLike = document.getElementById('like')
  like.addEventListener("click", inc);
  function inc() {
    console.log("d");
    showLike.innerHTML = `<span id="likes"><i class="material-icons">favorite</i> ${c++}</span>
    `;
  }
        
})


const  locateMe =()=> {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }


  if (!navigator.geolocation) {
    status.textContent = "Geolocation is not supported by your browser";
  } else {
    navigator.geolocation.getCurrentPosition(success, console.log);
  }
}
locateMe();
//document.querySelector("#find-me").addEventListener("onload", geoFindMe);


// const successfulLookup = position => {
//   const { latitude, longitude } = position.coords;
//   fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=1234`)
//     .then(response => response.json()
//       .then(console.log))
// }
// window.navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
    //locationTag.innerHTML = ``


//window.navigator.geolocation.getCurrentPosition(console.log, console.log);


//document.getElementById("like-btn").addEventListener("click", inc);
//video
const uploadVideo = document.getElementById("uploadedVideo");

const playBtn = document.getElementById("moreVideoes");
const videoContainer = document.getElementById("video-container");
uploadVideo.addEventListener("change", readVideo);

let videos = [];

function readVideo(event) {
    const video = document.getElementById("video");
    const videoSource = document.getElementById("source");
    //console.log(event.target.files);
    const file = event.target.files[0]
    if (event.target.files && file) {
    var reader = new FileReader();
  
    reader.onload = function (e) {
      
      videos.push(e.target.result);
      console.log(videos)
      videos.map(video => {
      videoContainer.innerHTML += `
       
        <video width="400" height="200" id="video" controls>
            <source src=${video} id="source" type="video/mp4">
        </video>
       
      `;
        //videoSource.src = video;
        
      })
      video.load();
      //videoContainer.innerHTML=''
    }

    reader.readAsDataURL(file);
  }
}

//image
const uploadImage = document.getElementById("upload-image");
//const imgUrl = URL.createObjectURL(uploadImage.files[0])
const imageContainer = document.getElementById('image-container')

uploadImage.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
      const uploaded_image = reader.result;
      imageContainer.innerHTML += `
        <div>
            <img src=${uploaded_image} class="uploadedImage">
        </div>
        `;
    // document.querySelector(
    //   "#display-image"
    // ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

const readImage = () => {
    const reader = new FileReader();
    reader.onload = () => {
        const uploadedImage = reader.result;
        imageContainer.innerHTML += `
        <div>
            <img src=${uploadedImage}>
        </div>
        `
        reader.readAsDataURL(this.files[0]);
    }
}

readImage()



