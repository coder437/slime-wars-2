var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["44ce9481-ca6b-49c5-bee0-2865e7c6da7c","8426fce0-61ec-4d95-b5e3-3df73c30d91a","34560a2e-c1cb-45ce-a7d4-0d26b626e7b2","88da3027-d924-41a7-8f65-ef3a803770e4","f11b47dc-60bb-4c3e-9f91-24617df01a8e","99ffac5d-c07d-41c8-b13a-c0c8c185c855","228c840a-583f-4b5c-b2cc-86fa7778d9f3","0370f788-6e6a-4ccc-b615-91cd521e5480","8e92fd74-51f4-4010-9b22-82af0919b5f9","76a4d160-dc70-4cbf-b787-36885280e88b"],"propsByKey":{"44ce9481-ca6b-49c5-bee0-2865e7c6da7c":{"name":"player1","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"UBF5bOcVPp.Qv_ageGA2t9HKwaJesz7e","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/44ce9481-ca6b-49c5-bee0-2865e7c6da7c.png"},"8426fce0-61ec-4d95-b5e3-3df73c30d91a":{"name":"player2","sourceUrl":null,"frameSize":{"x":16,"y":16},"frameCount":1,"looping":true,"frameDelay":12,"version":"30e.z5R2y3O4dq77rr3.dcrTsF78_Wjr","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":16},"rootRelativePath":"assets/8426fce0-61ec-4d95-b5e3-3df73c30d91a.png"},"34560a2e-c1cb-45ce-a7d4-0d26b626e7b2":{"name":"bullet","sourceUrl":null,"frameSize":{"x":8,"y":8},"frameCount":1,"looping":true,"frameDelay":12,"version":"hWR9dAKouNwuMy3gaCV7SltKOfPfoMk2","loadedFromSource":true,"saved":true,"sourceSize":{"x":8,"y":8},"rootRelativePath":"assets/34560a2e-c1cb-45ce-a7d4-0d26b626e7b2.png"},"88da3027-d924-41a7-8f65-ef3a803770e4":{"name":"sword","sourceUrl":null,"frameSize":{"x":16,"y":6},"frameCount":1,"looping":true,"frameDelay":12,"version":"klVPFRTzZRlbfWJmvl3cpeBH3qBXuS9T","loadedFromSource":true,"saved":true,"sourceSize":{"x":16,"y":6},"rootRelativePath":"assets/88da3027-d924-41a7-8f65-ef3a803770e4.png"},"f11b47dc-60bb-4c3e-9f91-24617df01a8e":{"name":"ground","sourceUrl":null,"frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"KB81bM0J2VUv8s582Rx7sz1VzhWRNKaW","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/f11b47dc-60bb-4c3e-9f91-24617df01a8e.png"},"99ffac5d-c07d-41c8-b13a-c0c8c185c855":{"name":"platform1","sourceUrl":null,"frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":12,"version":"c256pYKYTepG27vhYZi4Rim3NzPPjUbN","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/99ffac5d-c07d-41c8-b13a-c0c8c185c855.png"},"228c840a-583f-4b5c-b2cc-86fa7778d9f3":{"name":"platform","sourceUrl":"assets/api/v1/animation-library/GyaNufHvKnwVy7HYbhkJhP9xXn2IGwfF/category_environment/ground_stone_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"GyaNufHvKnwVy7HYbhkJhP9xXn2IGwfF","loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/GyaNufHvKnwVy7HYbhkJhP9xXn2IGwfF/category_environment/ground_stone_broken.png"},"0370f788-6e6a-4ccc-b615-91cd521e5480":{"name":"razor","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"eicQN1F4.iOL9VgCcPtsBb4UoHYh886V","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/0370f788-6e6a-4ccc-b615-91cd521e5480.png"},"8e92fd74-51f4-4010-9b22-82af0919b5f9":{"name":"portal","sourceUrl":null,"frameSize":{"x":82,"y":228},"frameCount":1,"looping":true,"frameDelay":12,"version":"jSR_167mmunt_OUXF0EIGi1xSasjkdTO","loadedFromSource":true,"saved":true,"sourceSize":{"x":82,"y":228},"rootRelativePath":"assets/8e92fd74-51f4-4010-9b22-82af0919b5f9.png"},"76a4d160-dc70-4cbf-b787-36885280e88b":{"name":"coin","sourceUrl":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png","frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":2,"version":"TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75","loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TdRK.69bNZJmZSrrEjfa3Q83ABwRkj75/category_gameplay/coin_gold.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

World.frameRate = 45;
createEdgeSprites();
var bullet = createSprite(-50,-50);
bullet.setAnimation("bullet");
bullet.tint = "blue";

var portal = createSprite(randomNumber(0,400),randomNumber(0,250));
portal.setAnimation("portal");
portal.scale = 0.25;

var bullet1 = createSprite(-50,-50);
bullet1.setAnimation("sword");

var direction1 = 1;
var player1 = createSprite(60,100);
var player1char = 0;
player1.setAnimation("player1");
player1.debug = false;

var raz = createSprite(200,200);
raz.setAnimation("razor");
if (player1char==1){
player1.bounciness = 6;
}
if (player1char==0){
player1.bounciness = 2;
}

var direction2= -1;
var player2 = createSprite(340,100);
var player2char = 1;
player2.setAnimation("player2");
player2.debug = false;
if (player2char==1){
player2.bounciness = 6;
}
if (player2char==0){
player2.bounciness = 2;
}

var ground = createSprite(200,350);
ground.setAnimation("ground");
ground.width = 1200;
ground.height = 100;
ground.debug = false;

var platform1 = createSprite(200,250);
platform1.setAnimation("platform1");
platform1.width = 100;
platform1.height = 25;
platform1.tint = "rbga(255,0,0,0.5)";
platform1.debug = false;

var platform2 = createSprite(335,170);
platform2.setAnimation("platform");
platform2.width = 100;
platform2.height = 25;
platform2.tint = "red";
platform2.debug = false;

var platform3 = createSprite(65,170);
platform3.setAnimation("platform");
platform3.width = 100;
platform3.height = 25;
platform3.tint = "blue";
platform3.debug = false;

var platform4 = createSprite(200,100);
platform4.setAnimation("platform1");
platform4.width = 100;
platform4.height = 25;
platform4.debug = false;

var cn = createSprite(randomNumber(0,400),randomNumber(0,300));
cn.setAnimation("coin");
cn.scale = 0.5;

var p1s = 0;
var p2s = 0;

var friction2 = 0.25;
var friction = 0.25;
var jump = 12;
var speed = 1;
var grv = 0.5;
var speedcap = 6;

var onground1 = false;
var onground2 = false;

function above(x,y){
  if(x.y<=y.y+y.height/2&&x.isTouching(y)) {return true;}
}

function draw() {
  game();
}
  function game(){
    background("black");
    
    raz.x = World.mouseX;
    raz.y = World.mouseY;
    raz.rotation = raz.rotation+50;
    
    platform1.y = platform1.y-2;
    platform4.y = platform4.y-2;
    
    if(player1.isTouching(portal)) {
      player1.x = randomNumber(0,400);
      player1.y = randomNumber(0,250);
      player1.setVelocity(0,0);
      portal.x = randomNumber(0,400);
      portal.y = randomNumber(0,250);
    }
    if(player2.isTouching(portal)) {
      player2.x = randomNumber(0,400);
      player2.y = randomNumber(0,250);
      player2.setVelocity(0,0);
      portal.x = randomNumber(0,400);
      portal.y = randomNumber(0,250);
    }
    if(bullet.isTouching(portal)) {
      bullet.x = randomNumber(0,400);
      bullet.y = randomNumber(0,305);
    }
    
    if(platform1.y<=0) {
      platform1.y = 300;
    }
    if(platform4.y<=0) {
      platform4.y = 300;
    }
    if(player2.x>400 || player2.x<0 || player2.y>390) {
      player2.x = platform2.x;
      player2.y = platform2.y;
    }
    if(player1.x>400 || player1.x<0 || player1.y>390) {
      player1.x = platform3.x;
      player1.y = platform3.y;
    }
    if(keyDown("I")) {
      platform2.y = platform2.y-5;
    }
    if(keyDown("K")) {
      platform2.y = platform2.y+5;
    }
    if(keyDown("J")&&player2.isTouching(platform2)) {
      platform2.x = platform2.x-5;
      player2.x = platform2.x;
    }
    if(keyDown("L")&&player2.isTouching(platform2)) {
      platform2.x = platform2.x+5;
      player2.x = platform2.x;
    }
    if(keyDown("J")) {
      platform2.x = platform2.x-5;
    }
    if(keyDown("L")) {
      platform2.x = platform2.x+5;
    }
    if(keyDown("T")) {
      platform3.y = platform3.y-5;
    }
    if(keyDown("G")) {
      platform3.y = platform3.y+5;
    }
    if(keyDown("F")&&player1.isTouching(platform3)) {
      platform3.x = platform3.x-5;
      player1.x = platform3.x;
    }
    if(keyDown("H")&&player1.isTouching(platform3)) {
      platform3.x = platform3.x+5;
      player1.x = platform3.x;
    }
    if(keyDown("F")) {
      platform3.x = platform3.x-5;
    }
    if(keyDown("H")) {
      platform3.x = platform3.x+5;
    }
    if(keyWentDown("M")) {
      platform2.x = 335;
      platform2.y = 170;
    }
    if(keyWentDown("Z")) {
      platform3.x = 65;
      platform3.y = 170;
    }
    if(keyWentDown("R")) {
      player1.x = 65;
      player1.y = 150;
      player2.x = 335;
      player2.y = 150;
      platform1.x = 200;
      platform1.y = 250;
      platform2.x = 335;
      platform2.y = 170;
      platform3.x = 65;
      platform3.y = 170;
      platform4.y = 100;
      platform4.x = 200;
      ground.rotation = 0;
      platform1.rotation = 0;
      platform4.rotation = 0;
    }
    if(keyDown("V")) {
      ground.rotation = ground.rotation-1;
      platform1.rotation = platform1.rotation-1;
      platform4.rotation = platform4.rotation-1;
    }
    if(keyDown("N")) {
      ground.rotation = ground.rotation+1;
      platform1.rotation = platform1.rotation+1;
      platform4.rotation = platform4.rotation+1;
    }
    if(keyDown("1")) {
      platform1.x = 335;
      platform1.y = 100;
      platform4.x = 65;
      platform4.y = platform1.y;
      platform2.x = 200;
      platform2.y = 100;
      platform3.x = 200;
      platform3.y = 250;
    }
    if(keyDown("2")) {
      platform1.x = 65;
      platform1.y = 250;
      platform2.x = 200;
      platform2.y = 250;
      platform3.x = 200;
      platform3.y = 100;
      platform4.x = 65;
      platform4.y = 100;
    }
    if(keyDown("3")) {
      platform1.x = 335;
      platform1.y = 250;
      platform2.x = 200;
      platform2.y = 250;
      platform3.x = 200;
      platform3.y = 100;
      platform4.x = 335;
      platform4.y = 100;
    }
    if (above(player1,platform1)||
    above(player1,platform2)||
    above(player1,platform3)||
    above(player1,player2)||
    above(player1,raz)||
    above(player1,platform4)||
    player1.isTouching(ground)){
    onground1 = true;}
    else{onground1 = false;}
    
    if (above(player2,platform1)||
    above(player2,platform2)||
    above(player2,platform3)||
    above(player2,player1)||
    above(player2,raz)||
    above(player2,platform4)||
    player2.isTouching(ground)){
    onground2 = true;}
    else{onground2 = false}
    
    player1.collide(ground);
    player1.collide(platform1);
    player1.collide(platform2);
    player1.collide(platform3);
    player1.collide(platform4);
    player1.collide(raz);
    
    player2.collide(ground);
    player2.collide(platform1);
    player2.collide(platform2);
    player2.collide(platform3);
    player2.collide(platform4);
    player2.collide(raz);
    
    if (keyDown("D")){player1.velocityX+=speed; direction1=1;}
    else if (player1.velocityX>0) (player1.velocityX-=friction);
    if (keyDown("A")){player1.velocityX-=speed; direction1=-1;}
    else if (player1.velocityX<0) (player1.velocityX+=friction);
    if (keyWentDown("W")&&onground1==true){player1.velocityY-=jump;}
    if (player1char==0){
    if (keyWentDown("S"))(bullet.velocityX=10*direction1,bullet.x=player1.x,bullet.y=player1.y,bullet.visible=true);}
  
    
    if (keyDown("RIGHT")){player2.velocityX+=speed; direction2=1;}
    else if (player2.velocityX>0) (player2.velocityX-=friction2);
    if (keyDown("LEFT")){player2.velocityX-=speed; direction2=-1;}
    else if (player2.velocityX<0) (player2.velocityX+=friction2);
    if (keyWentDown("UP_ARROW")&&onground2==true){player2.velocityY-=jump;}
    if (player2char==0){
    if (keyWentDown("down"))(bullet1.velocityX=10*direction2,bullet1.x=player2.x,bullet1.y=player2.y,bullet1.visible=true);}
    
    if (player1.velocityX > speedcap) (player1.velocityX = speedcap);
    if (player1.velocityX < -speedcap) (player1.velocityX = -speedcap);
    
    if (player2.velocityX > speedcap) (player2.velocityX = speedcap);
    if (player2.velocityX < -speedcap) (player2.velocityX = -speedcap);
    
    if(bullet.isTouching(edges)) {
      (bullet.velocityX=0*direction1,bullet.x=player1.x,bullet.y=player1.y,bullet.visible=false);
    }
    if(mouseDown("left")&&player1.isTouching(raz)) {
      player1.x = raz.x;
      player1.y = raz.y;
    }
    if(mouseDown("left")&&player2.isTouching(raz)) {
      player2.x = raz.x;
      player2.y = raz.y;
    }
    player1.velocityY+=grv;
    if(player1.velocityY>11) (player1.velocityY=11);
      
    player2.velocityY+=grv;
    if(player2.velocityY>11) (player2.velocityY=11);
    
    if (player2char==1){
    if (keyWentDown("down")) (friction2=0,player2.velocityX+=75*direction2);
    else(friction2=0.25);
    }
    if (player1char==1){
    if (keyWentDown("S")) (friction=0,player1.velocityX+=75*direction1);
    else(friction=0.25);
    }
  
    player1.bounce(player2);
    if (player2.isTouching(bullet)&&bullet.visible==true) (bullet.visible=false);
    player2.bounceOff(bullet);
    if (player1.isTouching(bullet1)&&bullet1.visible==true) (bullet1.visible=false);
    player1.bounceOff(bullet1);
    
    player1.bounceOff(edges);
    player1.bounceOff(raz);
    bullet.bounceOff(ground);
    bullet.bounceOff(platform1);
    bullet.bounceOff(platform4);
    player2.bounceOff(edges);
    player2.bounceOff(raz);
    if(keyDown("4")) {
      player1.x = bullet.x;
      player1.y = bullet.y;
    } if(keyDown("7")) {
      bullet1.velocityX=20*direction2,bullet1.x=player2.x,bullet1.y=player2.y,bullet1.visible=true;
    } if(keyDown("8")) {
      player2.x = randomNumber(0,400);
      player2.y = randomNumber(0,295);
    } if(keyDown("5")) {
      player1.x = randomNumber(0,400);
      player1.y = randomNumber(0,295);
    } if(player1.isTouching(cn)) {
      p1s += 1;
      cn.x = randomNumber(0,400);
      cn.y = randomNumber(0,300);
    } if(player2.isTouching(cn)) {
      p2s += 1;
      cn.x = randomNumber(0,400);
      cn.y = randomNumber(0,300);
    }
    textAlign(CENTER,CENTER);
    fill("blue");
    text("Blue Score = "+p1s,50,25);
    fill("red");
    text("Red Score = "+p2s,350,25);
    
    drawSprites();
    platform2.bounceOff(edges);
    platform3.bounceOff(edges);
  }

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
