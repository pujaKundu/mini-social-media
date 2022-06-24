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

//current location
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

//video
const uploadVideo = document.getElementById("uploadedVideo");

const playBtn = document.getElementById("moreVideoes");
const videoContainer = document.getElementById("video-container");
uploadVideo.addEventListener("change", readVideo);

let videos = []

function readVideo(event) {
    const video = document.getElementById("video");
    const videoSource = document.getElementById("source");

    const file = event.target.files[0]
    if (event.target.files && file) {
    var reader = new FileReader();
  
    reader.onload = function (e) {
      
      videos.push(e.target.result);
      console.log(videos)
      videos.map(video => {
      
      videoContainer.innerHTML += `
        <video width="300" height="200" id="video" controls>
            <source src=${video} id="source" type="video/mp4">
        </video>
      `;
        
      })
      video.load();
    }
    
      reader.readAsDataURL(file);
      videoContainer.innerHTML = "";
  }
}

//image
const uploadImage = document.getElementById("upload-image");

const imageContainer = document.getElementById('image-container')

let images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9nApEIhxYfur3PI2dZLNVrq0Q9t7as2A5Q&usqp=CAU",
  "https://img.freepik.com/free-vector/alone-concept-illustration_114360-2393.jpg?w=2000",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgmbSR_S04x6ju4roIndnto4RmHg5isjGtw&usqp=CAU",
];

const showImage = () => {
  images.map((image) => {
    imageContainer.innerHTML += `
        <div>
            <img src=${image} class="uploadedImage">
        </div>
        `;
  });
}
showImage()
uploadImage.addEventListener("change", function f() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    images.push(uploaded_image);
    console.log(images)
    showImage()
    
  });
  imageContainer.innerHTML = "";
  reader.readAsDataURL(this.files[0]);
});








