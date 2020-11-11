let i = 0;

let video;
let play;
let page;
let title;

function preload(){
loadImage("./assets/window.png");
loadImage("./assets/play_button.png");
loadImage("./assets/reload_button.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight)

  //browser window background image
  page = createImg("./assets/window.png");
  page.style("width", "auto");
  page.style("height", "auto");
  page.position(width / 2 - 1372, height / 2 - 775);

  //fake videoplayer (black screen + fake playbutton + video title)
  video = createDiv();
  video.style("width", "500px");
  video.style("height", "350px");
  video.center();
  video.style("background-color", "black");


  play = createImg("./assets/play_button.png", "");
  play.style("width", "50px");
  play.style("height", "50px");
  play.center();
  play.mouseClicked(changeIcon);


  title = createP("Very important video you absolutely must watch!");
  title.style("color", "black");
  title.style("font-family", "Arial");
  title.style("font-size", "20px");
  title.style("font-weight", "bold");
  title.position(windowWidth / 2 - 250, windowHeight / 2 + 200);

}

function draw() {}



//function to change the play/refresh icon in the player
function changeIcon() {
  if (i % 2 == 0) {
    play = createImg("./assets/reload_button.png", "");
    play.style("width", "50px");
    play.style("height", "50px");
    play.center();
    play.mouseClicked(changeIcon);
    i++
  } else {
    play = createImg("./assets/play_button.png", "");
    play.style("width", "50px");
    play.style("height", "50px");
    play.center();
    play.mouseClicked(changeIcon);
    i++
  }
}
