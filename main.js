//post
const postContent = document.getElementById('post');
const postBtn = document.getElementById('post-btn')

const newPost = document.getElementById('new-post');
const showPost = document.getElementById("show-post");
//showPost.textContent = postContent.value;

const allPosts = document.getElementById('all-posts')
let c = 0;
postBtn.addEventListener('click', () => {
    

    let newPost = postContent.value;
    
    allPosts.innerHTML += `
        <div id="new-post" class='newPost'>
            <p id="show-post">${newPost}</p>
            <small>Likes: ${c}</small>
            <button id='likeHandler'>Like</button>
        </div>
    `;
    postContent.value = "";
   // console.log(postContent.value);
        
})

//video
const uploadVideo = document.getElementById("uploadedVideo");

const playBtn = document.getElementById("moreVideoes");
const videoContainer = document.getElementById("video-container");
uploadVideo.addEventListener("change", readVideo);

function readVideo(event) {
    const video = document.getElementById("video");
    const videoSource = document.getElementById("source");
    console.log(event.target.files);
    const file = event.target.files[0]
    if (event.target.files && file) {
    var reader = new FileReader();

    reader.onload = function (e) {
      console.log("loaded");
      videoSource.src = e.target.result;
      video.load();
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



