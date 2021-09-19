var issImg, spaceImg, sc1Img, sc2Img, sc3Img, sc4Img, rockImg
var iss, spacecraft, end
var hasDocked = false

function preload() {
  issImg = loadImage("assets/iss.png")
  spaceImg = loadImage("assets/spacebg.jpg")
  sc1Img = loadImage("assets/spacecraft1.png")
  sc2Img = loadImage("assets/spacecraft2.png")
  sc3Img = loadImage("assets/spacecraft3.png")
  sc4Img = loadImage("assets/spacecraft4.png")
  rockImg = loadImage("assets/spacerock.png")
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 175);
  iss.addImage(issImg)
  iss.scale = 0.7

  spacecraft = createSprite(random(300,500),300)
  spacecraft.addImage("1",sc1Img)
  spacecraft.addImage("2",sc2Img)
  spacecraft.addImage("3",sc3Img)
  spacecraft.addImage("4",sc4Img)
  spacecraft.scale = 0.10

  spacerock1 = createSprite(100,100)
  spacerock1.addImage(rockImg)
  spacerock1.scale = 0.1
  spacerock2 = createSprite(150,300)
  spacerock2.addImage(rockImg)
  spacerock2.scale = 0.1
  spacerock3 = createSprite(700,50)
  spacerock3.addImage(rockImg)
  spacerock3.scale = 0.1
  spacerock4 = createSprite(725,200)
  spacerock4.addImage(rockImg)
  spacerock4.scale = 0.1

  end = createSprite(365,180,40,40)
  end.visible = false
}

function draw() {
  background(spaceImg);  

  if (!hasDocked) {
    if (keyDown(LEFT_ARROW)) {
      spacecraft.changeImage("3")
      spacecraft.x -= 1
    }
    else if (keyDown(RIGHT_ARROW)) {
      spacecraft.changeImage("4")
      spacecraft.x += 1
    }
    else if (keyDown(UP_ARROW)) {
      spacecraft.y -= 1
    }
    else if (keyDown(DOWN_ARROW)) {
      spacecraft.changeImage("2")
    }

    if (spacecraft.collide(end)) {
      hasDocked = true
    }
  }

  if (hasDocked) {
    textSize(50)
    fill("white")
    text("Docking successful!",300,300)
  }

  drawSprites();
}