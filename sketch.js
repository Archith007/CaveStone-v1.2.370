var gameState = "pause";
var character = "caveStone"
var a = 1;
var b = 0;
var c = 1;
var d = 1;
var jump = 0;
var death = 0;
var time = 0;
var time2 = 0;
var time3 = 0;

var half, block, trophy;
var start, start1, start3, jumpstart;

var form, platform, plat;
var form1, platform1, plat1;
var form2, platform2, plat2, platform2_1;
var form3, platform3, plat3;
var form4, platform4, plat4;
var form5, platform5, plat5;

var startImage, starImage, spotImage
var boxAnimation, blockAnimation, lavaAnimation

var chosen, chosenImage

var jumpSound, dieSound, checkSound, starSound, clickSound

var edges

var pause, pauseImage, pauseG

var playImage, leaderBoard, leaderBoardI

var caveStoneB, coveStoneB

var logoC, logoCAnimtion, logo, logoAnimation, Coming

var border1, border2, border3, border4

var sideLength

var main


function preload() {

  boxAnimation = loadAnimation("Images/CaveStone/horiz_0.png", "Images/CaveStone/horiz_1.png", "Images/CaveStone/horiz_2.png");

  blockAnimation = loadAnimation("Images/CaveStone/vert_0.png", "Images/CaveStone/vert_1.png", "Images/CaveStone/vert_2.png");

  bubbleAnimation = loadAnimation("Images/CoveStone/download (33).png", "Images/CoveStone/download (34).png", "Images/CoveStone/download (35).png", "Images/CoveStone/download (36).png", "Images/CoveStone/download (37).png", "Images/CoveStone/download (38).png", "Images/CoveStone/download (39).png", "Images/CoveStone/download (40).png");

  bubblyAnimation = loadAnimation("Images/CoveStone/download (4).png", "Images/CoveStone/download (5).png", "Images/CoveStone/download (6).png", "Images/CoveStone/download (7).png");

  normAnimation = loadAnimation("Images/CloveStone/norm_0.png", "Images/CloveStone/norm_1.png", "Images/CloveStone/norm_2.png")

  sadAnimation = loadAnimation("Images/CloveStone/sad_0.png", "Images/CloveStone/sad_1.png", "Images/CloveStone/sad_2.png", "Images/CloveStone/sad_3.png", "Images/CloveStone/sad_4.png", "Images/CloveStone/sad_5.png", "Images/CloveStone/sad_4.png", "Images/CloveStone/sad_5.png")

  smallAnimation = loadAnimation("Images/CloveStone/small_0.png", "Images/CloveStone/small_1.png", "Images/CloveStone/small_2.png", "Images/CloveStone/small_3.png", "Images/CloveStone/small_4.png", "Images/CloveStone/small_5.png")

  airAnimation = loadAnimation("Images/CliveStone/air_0.png", "Images/CliveStone/air_1.png", "Images/CliveStone/air_2.png")

  floorAnimation = loadAnimation("Images/CliveStone/floor_0.png", "Images/CliveStone/floor_1.png", "Images/CliveStone/floor_2.png", "Images/CliveStone/floor_3.png")

  lavaAnimation = loadAnimation("Images/LavaStone/lava1.png", "Images/LavaStone/lava2.png", "Images/LavaStone/lava3.png", "Images/LavaStone/lava4.png", "Images/LavaStone/lava5.png", "Images/LavaStone/lava6.png");

  logoCAnimation = loadAnimation("Images/LogoStone/sprite_0.png", "Images/LogoStone/sprite_1.png", "Images/LogoStone/sprite_2.png", "Images/LogoStone/sprite_0.png", "Images/LogoStone/sprite_1.png", "Images/LogoStone/sprite_5.png", "Images/LogoStone/sprite_0.png", "Images/LogoStone/sprite_1.png", "Images/LogoStone/sprite_2.png");

  starImage = loadImage("Images/OtherStone/star.png");
  startImage = loadImage("Images/OtherStone/start.png");
  spotImage = loadImage("Images/OtherStone/spot.png");
  pauseImage = loadImage("Images/OtherStone/pause_0.png");
  playImage = loadImage("Images/OtherStone/play_0.png");
  chosenImage = loadImage("Images/OtherStone/chose_0.png")
  logoAnimation = loadImage("Images/LogoStone/sprite_0-1.png")
  warnImage = loadImage("Images/OtherStone/warn_0.png")
  lockImage = loadImage("Images/OtherStone/LOCK0.png")
  x2Image = loadImage("Images/OtherStone/x2_0.png")
  
  
  Coming = loadFont("ComingSoon-Regular.ttf");

  jumpSound = loadSound("Sounds/bounce3.mp3");
  starSound = loadSound("Sounds/star.mp3");
  dieSound = loadSound("Sounds/fire.mp3");
  checkSound = loadSound("Sounds/check.mp3");
  bubblySound = loadSound("Sounds/mixkit-cartoon-bubbles-pop-729.wav")
  clickSound = loadSound("Sounds/select.mp3")

  leaderBoardI = loadImage("Images/OtherStone/leader0.png")
}


function setup() {


  if(displayWidth > displayHeight){
    sideLength = displayHeight
  } else {
    sideLength = displayWidth
  }

  main = (sideLength/800)*0.9







  console.log(sideLength)
  console.log(displayWidth)
  console.log(displayHeight)
  console.log(main)

  
  
  createCanvas(800*main, 800*main);


  half = createSprite(600*main, 400*main, 0.2*main, 800*main);
  start1 = createSprite(120*main, 650*main, 180*main, 20*main);
  block = createSprite(120*main, 600*main, 40*main, 40*main);
  start3 = createSprite(120*main, 654*main, 160*main, 48*main);
  jumpstart = createSprite(120*main, 644*main, 160*main, 32*main);
  jumpstart.visible = false
  trophy = createSprite(random(40*main, 660*main), 95*main, 40*main, 40*main);

  
  leaderBoard = createSprite(55*main, 700*main, 20,20 )
  leaderBoard.addImage(leaderBoardI)
  leaderBoard.scale = 0.04*main


  pause = createSprite(752*main, 44*main)
  pause.addImage(pauseImage)
  pause.scale = 0.075*main


  pauseG = new Group()

  form = createSprite(random(0*main, 800*main), 520*main, 20*main, 20*main);
  platform = createSprite(form.x, 521*main, 120*main, 32*main);
  plat = createSprite(form.x, 509*main, 120*main, 10*main);

  form1 = createSprite(random(0*main, 600*main), 420*main, 20*main, 20*main);
  platform1 = createSprite(form1.x, 421*main, 120*main, 32*main);
  plat1 = createSprite(form1.x, 409*main, 120*main, 10*main);

  form2 = createSprite(700*main, 420*main, 20*main, 20*main);
  platform2 = createSprite(form2.x, 421*main, 120*main, 32*main);
  plat2 = createSprite(form2.x, 405*main, 120*main, 0.2*main);
  platform2_1 = createSprite(form2.x, 412*main, 130*main, 10*main);

  form3 = createSprite(random(0*main, 800*main), 320*main, 20*main, 20*main);
  platform3 = createSprite(form3.x, 321*main, 120*main, 32*main);
  plat3 = createSprite(form3.x, 309*main, 120*main, 10*main);

  form4 = createSprite(random(0*main, 800*main), 220*main, 20*main, 20*main);
  platform4 = createSprite(form4.x, 221*main, 120*main, 32*main);
  plat4 = createSprite(form4.x, 209*main, 120*main, 10*main);

  form5 = createSprite(random(0*main, 800), 720*main, 20*main, 20*main);
  platform5 = createSprite(form5.x, 721*main, 120*main, 32*main);
  plat5 = createSprite(form5.x, 709*main, 120*main, 10*main);

  lava = createSprite(384*main, 770*main, 40*main, 40*main);
  lava2 = createSprite(128*main, 770*main, 40*main, 40*main);
  lava3 = createSprite(640*main, 770*main, 40*main, 40*main);
  lava4 = createSprite(896*main, 770*main, 40*main, 40*main);

  edges = createEdgeSprites()
  
  



  block.debug = false;
  half.debug = false;
  start1.debug = false;
  start3.debug = false;
  jumpstart.debug = true;
  trophy.debug = false;

  form.debug = false;
  platform.debug = false;
  plat.debug = false;

  form1.debug = false;
  platform1.debug = false;
  plat1.debug = false;

  form2.debug = false;
  platform2.debug = false;
  plat2.debug = false;
  platform2_1.debug = false;

  form3.debug = false;
  platform3.debug = false;
  plat3.debug = false;

  form4.debug = false;
  platform4.debug = false;
  plat4.debug = false;

  form5.debug = false;
  platform5.debug = false;
  plat5.debug = false;

  lava.debug = false;
  lava2.debug = false;
  lava3.debug = false;
  lava4.debug = false;


  form.velocityX = a * 0.650*main;
  plat.velocityX = a * 0.650*main;
  platform.velocityX = a * 0.650*main;

  form1.velocityX = a * -1 * 0.5*main;
  plat1.velocityX = a * -1 * 0.5*main;
  platform1.velocityX = a * -1 * 0.5*main;

  form3.velocityX = a * 1*main;
  plat3.velocityX = a * 1*main;
  platform3.velocityX = a * 1*main;

  form4.velocityX = a * -0.650*main;
  plat4.velocityX = a * -0.650*main;
  platform4.velocityX = a * -0.650*main;

  form5.velocityX = a * -1*main;
  plat5.velocityX = a * -1*main;
  platform5.velocityX = a * -1*main;




  start1.addImage(startImage);
  start1.scale = 0.2*main;
  trophy.addImage(starImage);
  trophy.scale = 0.50*main;


  form.addImage(spotImage);
  form.scale = 0.15*main;

  form1.addImage(spotImage);
  form1.scale = 0.15*main;

  form2.addImage(startImage);
  form2.scale = 0.15*main;

  form3.addImage(spotImage);
  form3.scale = 0.15*main;

  form4.addImage(startImage);
  form4.scale = 0.15*main;

  form5.addImage(spotImage);
  form5.scale = 0.15*main;

  lava.addAnimation("lava", lavaAnimation);
  lava.scale = 2.7*main;

  lava2.addAnimation("lava", lavaAnimation);
  lava2.scale = 2.7*main;

  lava3.addAnimation("lava", lavaAnimation);
  lava3.scale = 2.7*main;

  lava4.addAnimation("lava", lavaAnimation);
  lava4.scale = 2.7 * main;

  block.addAnimation("box1", blockAnimation)
  block.addAnimation("block", boxAnimation)
  block.addAnimation("box2", bubbleAnimation);
  block.addAnimation("box3", bubblyAnimation);
  block.addAnimation("box4", sadAnimation);
  block.addAnimation("box5", smallAnimation);
  block.addAnimation("box6", normAnimation);
  block.addAnimation("box7", airAnimation);
  block.addAnimation("box8", floorAnimation);
  block.scale = 0.6*main

  logoC = createSprite(535*main, 140*main)
  logoC.addAnimation("hi", logoCAnimation)
  logoC.scale = 0.75*main

  logo = createSprite(400*main, 130*main)
  logo.addImage(logoAnimation)
  logo.scale = 1*main

  play = createSprite(405*main, 650*main)
  play.addImage(playImage)
  pauseG.add(play)
  play.scale = main

  caveStoneB = createSprite(135*main, 372*main);
  caveStoneB.addAnimation("box2", blockAnimation)
  caveStoneB.scale = 0.8*main
  pauseG.add(caveStoneB)

  coveStoneB = createSprite(335*main, 365*main);
  coveStoneB.addAnimation("box3", bubbleAnimation)
  coveStoneB.scale = 0.8*main
  pauseG.add(coveStoneB)

  cloveStoneB = createSprite(515*main, 350*main);
  cloveStoneB.addAnimation("box7", normAnimation)
  cloveStoneB.scale = 0.8*main
  pauseG.add(coveStoneB)

  cliveStoneB = createSprite(685*main, 372*main);
  cliveStoneB.addAnimation("box8", floorAnimation)
  cliveStoneB.scale = 1*main
  pauseG.add(coveStoneB)


  chosen = createSprite(135*main, 455*main)
  chosen.addImage(chosenImage)
  chosen.scale = 0.33*main
  pauseG.add(chosen)

  warn = createSprite(280*main, 550*main);
  warn.addImage(warnImage)
  warn.scale = 0.5*main
  warn.visible = false

  lock = createSprite(335*main, 450*main);
  lock.addImage(lockImage)
  lock.scale = 0.2*main

  lock1 = createSprite(515*main, 450*main);
  lock1.addImage(lockImage)
  lock1.scale = 0.2*main

  lock2 = createSprite(685*main, 450*main);
  lock2.addImage(lockImage)
  lock2.scale = 0.2*main

  border1 = createSprite(400*main,0*main,800*main,10*main)
  border1.shapeColor = "#000000"

  border2 = createSprite(400*main,800*main,800*main,10*main)
  border2.shapeColor = "#000000"

  border3 = createSprite(800*main,400*main,10*main,800*main)
  border3.shapeColor = "#000000"

  border4 = createSprite(0*main,400*main,10*main,800*main)
  border4.shapeColor = "#000000"
}


function draw() {

  textSize(12*main)
  textFont(Coming)
  fill("#000000")
 
  
  half.visible = false

  if (gameState === "pause") {

    background("white");

    block.velocityY = 0*main


    block.visible = false;
    half.visible = false;
    start1.visible = false;
    start3.visible = false;
    trophy.visible = false;

    form.visible = false;
    platform.visible = false;
    plat.visible = false;

    form1.visible = false;
    platform1.visible = false;
    plat1.visible = false;

    form2.visible = false;
    platform2.visible = false;
    plat2.visible = false;
    platform2_1.visible = false;

    form3.visible = false;
    platform3.visible = false;
    plat3.visible = false;

    form4.visible = false;
    platform4.visible = false;
    plat4.visible = false;

    form5.visible = false;
    platform5.visible = false;
    plat5.visible = false;

    logo.visible = true
    logoC.visible = true

    play.visible = true
    chosen.visible = true

    caveStoneB.visible = true
    coveStoneB.visible = true
    cloveStoneB.visible = true
    cliveStoneB.visible = true

    lock.visible = true
    lock1.visible = true
    lock2.visible = true
    leaderBoard.visible = false


    if (b < 25) {
      text("Unlock with a highscore of ", 267*main, 505*main);
      text("250 or above", 300*main, 520*main)
    }

    if (b < 50) {
      text("Unlock with a highscore of ", 447*main, 505*main);
      text("500 or above", 480*main, 520*main)
    }


    if (b < 75) {
      text("Unlock with a highscore of ", 617*main, 505*main);
      text("750 or above", 650*main, 520*main)
    }



    if (b > 25) {
      lock.visible = false
    }

    if (b > 50) {
      lock1.visible = false
    }

    if (b > 75) {
      lock2.visible = false
    }



    if (mousePressedOver(coveStoneB) && (a === 1) && (death === 0) && (b > 25) && ( character !== "coveStone")) {

      block.changeAnimation("box2", bubbleAnimation)
      block.scale = 0.6*main
      character = "coveStone"
      clickSound.play()

    }

    if (mousePressedOver(caveStoneB) && (a === 1) && (death === 0) && ( character !== "caveStone")) {

      block.changeAnimation("box1", blockAnimation)
      block.scale = 0.6*main
      character = "caveStone"
      clickSound.play()
      

    }

    if (mousePressedOver(cloveStoneB) && (a === 1) && (death === 0) && (b > 50) && ( character !== "cloveStone")) {

      block.changeAnimation("box6", normAnimation)
      block.scale = 0.6*main
      character = "cloveStone"
      clickSound.play()

    }

    if (mousePressedOver(cliveStoneB) && (a === 1) && (death === 0) && (b > 75) && ( character !== "cliveStone")) {

      block.changeAnimation("box7", airAnimation)
      block.scale = 0.6*main
      character = "cliveStone"
      clickSound.play()

    }


    if (mousePressedOver(coveStoneB) && (a > 1)) {
      time2 = 0*main
      warn.visible = true

    }

    if (mousePressedOver(caveStoneB) && (a > 1)) {
      time2 = 0*main
      warn.visible = true

    }

    if (mousePressedOver(cloveStoneB) && (a > 1)) {
      time2 = 0*main
      warn.visible = true

    }

    if (mousePressedOver(cliveStoneB) && (a > 1)) {
      time2 = 0*main
      warn.visible = true

    }


    if (frameCount % 1 === 0) {
      time2 = time2 + 1
    }

    if (time2 % 100 === 0) {
      warn.visible = false
    }

    if (character === "caveStone") {
      chosen.x = 135*main
    }

    if (character === "coveStone") {
      chosen.x = 335*main
    }

    if (character === "cloveStone") {
      chosen.x = 515*main
    }

    if (character === "cliveStone") {
      chosen.x = 685*main
    }



    form.velocityX = 0
    plat.velocityX = 0
    platform.velocityX = 0

    form1.velocityX = 0
    plat1.velocityX = 0
    platform1.velocityX = 0

    form3.velocityX = 0
    plat3.velocityX = 0
    platform3.velocityX = 0

    form4.velocityX = 0
    plat4.velocityX = 0
    platform4.velocityX = 0;
    form5.velocityX = 0
    plat5.velocityX = 0
    platform5.velocityX = 0



    if ((mousePressedOver(play)) && (gameState = "pause")) {
      clickSound.play()

      block.visible = true;
      half.visible = true;
      start1.visible = true;
      start3.visible = true;
      trophy.visible = true;

      form.visible = true;
      form1.visible = true;
      form2.visible = true;
      form3.visible = true;
      form4.visible = true;
      form5.visible = true;


      logoC.visible = false
      logo.visible = false

      play.visible = false
      chosen.visible = false

      caveStoneB.visible = false
      coveStoneB.visible = false
      cloveStoneB.visible = false
      cliveStoneB.visible = false

      warn.visible = false

      lock.visible = false
      lock1.visible = false
      lock2.visible = false

      leaderBoard.visible = false

      gameState = "play"

      if (form.velocityX > 0) {
        form.velocityX = a * 0.65*main;
        plat.velocityX = a * 0.65*main;
        platform.velocityX = a * 0.65*main;
      } else {
        form.velocityX = a * -0.65*main;
        plat.velocityX = a * -0.65*main;
        platform.velocityX = a * -0.65*main;
      }

      if (form1.velocityX < 0) {
        form1.velocityX = a * -1 * 0.5*main;
        plat1.velocityX = a * -1 * 0.5*main;
        platform1.velocityX = a * -1 * 0.5*main;
      } else {
        form1.velocityX = a * 1 * 0.5*main;
        plat1.velocityX = a * 1 * 0.5*main;
        platform1.velocityX = a * 1 * 0.5*main;
      }

      if (form3.velocityX > 0) {
        form3.velocityX = a * 1*main;
        plat3.velocityX = a * 1*main;
        platform3.velocityX = a * 1*main;
      } else {
        form3.velocityX = a * -1*main;
        plat3.velocityX = a * -1*main;
        platform3.velocityX = a * -1*main;
      }

      if (form4.velocityX < 0) {
        form4.velocityX = a * -0.65*main;
        plat4.velocityX = a * -0.65*main;
        platform4.velocityX = a * -0.65*main;
      } else {
        form4.velocityX = a * 0.65*main;
        plat4.velocityX = a * 0.65*main;
        platform4.velocityX = a * 0.65*main;
      }

      if (form5.velocityX < 0) {
        form5.velocityX = a * -1*main;
        plat5.velocityX = a * -1*main;
        platform5.velocityX = a * -1*main;
      } else {
        form5.velocityX = a * 1*main;
        plat5.velocityX = a * 1*main;
        platform5.velocityX = a * 1*main;
      }

    }

  }


  if (gameState === "play") {

    block.debug = false

    if ((mousePressedOver(pause)) && (gameState = "play")) {
      gameState = "pause"
      clickSound.play()
      

    }


    if ((a % 10 == 0) && (block.isTouching(trophy))) {
      checkSound.play();
    }


    plat.x = form.x;
    platform.x = form.x;

    plat1.x = form1.x;
    platform1.x = form1.x;

    plat3.x = form3.x;
    platform3.x = form3.x;

    plat2.x = form2.x;
    platform2.x = form2.x;

    plat4.x = form4.x;
    platform4.x = form4.x;

    plat5.x = form5.x;
    platform5.x = form5.x;


    if (form.velocityX > 0) {
      form.velocityX = a * 0.65*main;
      plat.velocityX = a * 0.65*main;
      platform.velocityX = a * 0.65*main;
    } else {
      form.velocityX = a * -0.65*main;
      plat.velocityX = a * -0.65*main;
      platform.velocityX = a * -0.65*main;
    }

    if (form1.velocityX < 0) {
      form1.velocityX = a * -1 * 0.5*main;
      plat1.velocityX = a * -1 * 0.5*main;
      platform1.velocityX = a * -1 * 0.5*main;
    } else {
      form1.velocityX = a * 1 * 0.5*main;
      plat1.velocityX = a * 1 * 0.5*main;
      platform1.velocityX = a * 1 * 0.5*main;
    }

    if (form3.velocityX > 0) {
      form3.velocityX = a * 1*main;
      plat3.velocityX = a * 1*main;
      platform3.velocityX = a * 1*main;
    } else {
      form3.velocityX = a * -1*main;
      plat3.velocityX = a * -1*main;
      platform3.velocityX = a * -1*main;
    }

    if (form4.velocityX < 0) {
      form4.velocityX = a * -0.65*main;
      plat4.velocityX = a * -0.65*main;
      platform4.velocityX = a * -0.65*main;
    } else {
      form4.velocityX = a * 0.65*main;
      plat4.velocityX = a * 0.65*main;
      platform4.velocityX = a * 0.65*main;
    }

    if (form5.velocityX < 0) {
      form5.velocityX = a * -1*main;
      plat5.velocityX = a * -1*main;
      platform5.velocityX = a * -1*main;
    } else {
      form5.velocityX = a * 1*main;
      plat5.velocityX = a * 1*main;
      platform5.velocityX = a * 1*main;
    }


    background("white");
    block.velocityY = block.velocityY + 2.5*main;
    block.velocityX = 0;
    createEdgeSprites();

    block.collide(edges);
    block.collide(start3);
    block.collide(platform);
    block.collide(platform1);
    block.collide(platform2);
    block.collide(platform2_1);
    block.collide(platform3);
    block.collide(platform4);
    block.collide(platform5);

  
    textAlign(LEFT)

    textSize(24*main)
    text((a * 10) - 10, 657*main, 50*main);
    text("score:", 590*main, 50*main);

    textSize(24*main)
    text((b * 10) - 10, 143.5*main, 50*main);
    text("highscore:", 30*main, 50*main);

    textSize(24*main)
    text((c * 10) - 10, 454*main, 50*main);
    text("previous score:", 287.5*main, 50*main);

    if (a > b) {
      b = a;
    }



    //console.log(block.y);
    platform.visible = false;
    platform1.visible = false;
    platform2.visible = false;
    platform3.visible = false;
    platform4.visible = false;
    platform5.visible = false;
    start3.visible = false;
    half.visible = false;


    if (block.isTouching(jumpstart)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat1)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat2)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat3)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat4)) {
      block.velocityY = 0
    }

    if (block.isTouching(plat5)) {
      block.velocityY = 0
    }


    console.log(block.y)

    if (character === "caveStone") {


      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30*main
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65*main
        jumpSound.play();
        
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30*main;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65*main
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30*main;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65*main
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30*main;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65*main
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30*main;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65*main
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30*main;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65*main
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30*main;
        block.changeAnimation("block", boxAnimation)
        block.scale = 0.65*main
        jumpSound.play();
      }

      if ((keyWentUp("UP_ARROW")) || (keyWentUp("SPACE") || keyWentUp("W"))) {

        block.changeAnimation("box1", blockAnimation)
        block.scale = 0.6*main
      }





      if (keyDown("DOWN_ARROW") || keyDown("S")) {
        block.velocitX = 0*main;
        block.changeAnimation("box1", blockAnimation)
        block.scale = 0.6*main
      }


      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30*main;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30*main
      }
    }



    if (character === "coveStone") {


      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30*main;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30*main;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30*main;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30*main;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30*main;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30*main;
        jumpSound.play();
        jump = 0
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30*main;
        jumpSound.play();
        jump = 0
      }

      if (block.isTouching(jumpstart)) {
        jump = 0
      }

      if (block.isTouching(plat)) {
        jump = 0
      }

      if (block.isTouching(plat1)) {
        jump = 0
      }

      if (block.isTouching(plat2)) {
        jump = 0
      }

      if (block.isTouching(plat3)) {
        jump = 0
      }

      if (block.isTouching(plat4)) {
        jump = 0
      }

      if (block.isTouching(plat5)) {
        jump = 0
      }


      if ((keyWentDown("DOWN_ARROW") || keyDown("S")) && jump === 0) {
        block.velocityY = -35*main
        block.changeAnimation("box3", bubblyAnimation)
        block.scale = 0.90*main
        bubblySound.play()
        jump = jump + 1
      }



      if (keyWentUp("DOWN_ARROW") || keyWentUp("s")) {
        block.changeAnimation("box2", bubbleAnimation)
        block.scale = 0.575*main
        bubblySound.stop()
      }

      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30*main;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30*main
      }
    }



    if (character === "cloveStone") {

      block.changeAnimation("box6", normAnimation)
      block.scale = 0.6*main

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }



      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30*main;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30*main
      }
    }



    if (character === "cliveStone") {
      block.changeAnimation("box7", airAnimation);
      block.scale = 0.75*main


      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(jumpstart)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat1)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat2)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat3)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat4)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("UP_ARROW") || (keyDown("SPACE") || keyDown("W"))) && block.isTouching(plat5)) {
        block.velocityY = -30*main;
        jumpSound.play();
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat)) {
        block.velocityX = plat.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat1)) {
        block.velocityX = plat1.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat3)) {
        block.velocityX = plat3.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat4)) {
        block.velocityX = plat4.velocityX;
      }

      if ((keyDown("DOWN_ARROW") || keyDown("s")) && block.isTouching(plat5)) {
        block.velocityX = plat5.velocityX;

      }

      if (block.isTouching(plat) || block.isTouching(plat1) || block.isTouching(plat2) || block.isTouching(plat3) || block.isTouching(plat4) || block.isTouching(plat5) || block.isTouching(jumpstart)) {
        block.changeAnimation("box8", floorAnimation);
      }


      if (keyDown("RIGHT_ARROW") || keyDown("D")) {
        block.velocityX = 30*main;

      }


      if (keyDown("LEFT_ARROW") || keyDown("A")) {
        block.velocityX = -30*main
      }
    }





    if (block.y > 710*main) {
      dieSound.play();
    }

    if (block.y > 750*main && character === "caveStone") {
      death = 2;
    }

    if (block.y > 750*main && character === "coveStone") {
      death = 2;
    }

    if (block.y > 750*main && character === "cliveStone") {
      death = 2;
    }

    if (block.y > 750*main && character === "cloveStone") {
      death = death + 1;
      block.y = 600*main
      block.x = 160*main
    }

    if (death === 1) {

      if (frameCount % 1 === 0) {
        time = time + 1
      }

      if (time < 30) {
        block.changeAnimation("box4", sadAnimation)
      }

      if (time > 30) {
        block.changeAnimation("box5", smallAnimation)
        block.scale = 0.4*main
      }

    }


    if (death === 2) {

      death = 0;
      time = 0;
      block.y = 600*main;
      block.x = 160*main;
      c = a;
      a = 1;

      if (form.velocityX > 0) {
        form.velocityX = a * 0.65*main;
        plat.velocityX = a * 0.65*main;
        platform.velocityX = a * 0.65*main;
      } else {
        form.velocityX = a * -0.65*main;
        plat.velocityX = a * -0.65*main;
        platform.velocityX = a * -0.65*main;
      }

      if (form1.velocityX < 0) {
        form1.velocityX = a * -1 * 0.5*main;
        plat1.velocityX = a * -1 * 0.5*main;
        platform1.velocityX = a * -1 * 0.5*main;
      } else {
        form1.velocityX = a * 1 * 0.5*main;
        plat1.velocityX = a * 1 * 0.5*main;
        platform1.velocityX = a * 1 * 0.5*main;
      }

      if (form3.velocityX > 0) {
        form3.velocityX = a * 1*main;
        plat3.velocityX = a * 1*main;
        platform3.velocityX = a * 1*main;
      } else {
        form3.velocityX = a * -1*main;
        plat3.velocityX = a * -1*main;
        platform3.velocityX = a * -1*main;
      }

      if (form4.velocityX < 0) {
        form4.velocityX = a * -0.65*main;
        plat4.velocityX = a * -0.65*main;
        platform4.velocityX = a * -0.65*main;
      } else {
        form4.velocityX = a * 0.65*main;
        plat4.velocityX = a * 0.65*main;
        platform4.velocityX = a * 0.65*main;
      }

      if (form5.velocityX < 0) {
        form5.velocityX = a * -1*main;
        plat5.velocityX = a * -1*main;
        platform5.velocityX = a * -1*main;
      } else {
        form5.velocityX = a * 1*main;
        plat5.velocityX = a * 1*main;
        platform5.velocityX = a * 1*main;
      }

      plat.x = form.x;
      platform.x = form.x;

      plat1.x = form1.x;
      platform1.x = form1.x;

      plat3.x = form3.x;
      platform3.x = form3.x;

      plat2.x = form2.x;
      platform2.x = form2.x;

      plat4.x = form4.x;
      platform4.x = form4.x;

    }

    if (block.isTouching(trophy)) {
      a = a + 1;
      
      starSound.play();
      
      trophy.x = random(40*main, 760*main);

      if (form.velocityX > 0) {
        form.velocityX = a * 0.65*main;
        plat.velocityX = a * 0.65*main;
        platform.velocityX = a * 0.65*main;
      } else {
        form.velocityX = a * -0.65*main;
        plat.velocityX = a * -0.65*main;
        platform.velocityX = a * -0.65*main;
      }

      if (form1.velocityX < 0) {
        form1.velocityX = a * -1 * 0.5*main;
        plat1.velocityX = a * -1 * 0.5*main;
        platform1.velocityX = a * -1 * 0.5*main;
      } else {
        form1.velocityX = a * 1 * 0.5*main;
        plat1.velocityX = a * 1 * 0.5*main;
        platform1.velocityX = a * 1 * 0.5*main;
      }

      if (form3.velocityX > 0) {
        form3.velocityX = a * 1*main;
        plat3.velocityX = a * 1*main;
        platform3.velocityX = a * 1*main;
      } else {
        form3.velocityX = a * -1*main;
        plat3.velocityX = a * -1*main;
        platform3.velocityX = a * -1*main;
      }

      if (form4.velocityX < 0) {
        form4.velocityX = a * -0.65*main;
        plat4.velocityX = a * -0.65*main;
        platform4.velocityX = a * -0.65*main;
      } else {
        form4.velocityX = a * 0.65*main;
        plat4.velocityX = a * 0.65*main;
        platform4.velocityX = a * 0.65*main;
      }

      if (form5.velocityX < 0) {
        form5.velocityX = a * -1*main;
        plat5.velocityX = a * -1*main;
        platform5.velocityX = a * -1*main;
      } else {
        form5.velocityX = a * 1*main;
        plat5.velocityX = a * 1*main;
        platform5.velocityX = a * 1*main;
      }

      plat.x = form.x;
      platform.x = form.x;

      plat1.x = form1.x;
      platform1.x = form1.x;

      plat3.x = form3.x;
      platform3.x = form3.x;

      plat2.x = form2.x;
      platform2.x = form2.x;

      plat4.x = form4.x;
      platform4.x = form4.x;

    }

    form.bounceOff(edges);
    platform.bounceOff(edges);
    plat.bounceOff(edges);

    form1.bounceOff(edges);
    platform1.bounceOff(edges);
    plat1.bounceOff(edges);

    form1.bounceOff(half);
    platform1.bounceOff(half);
    plat1.bounceOff(half);

    form3.bounceOff(edges);
    platform3.bounceOff(edges);
    plat3.bounceOff(edges);

    form4.bounceOff(edges);
    platform4.bounceOff(edges);
    plat4.bounceOff(edges);

    form5.bounceOff(edges);
    platform5.bounceOff(edges);
    plat5.bounceOff(edges);



  }
  drawSprites();
}