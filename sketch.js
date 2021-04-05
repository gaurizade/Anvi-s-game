/*const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;*/

var infant, infant_bg, infant_bg_2, infant_bg_3, infant_bg_4 
var obstacle1, obstacle2, obstacle3, obstacle4, obstacle5, obstacle6, obstacle7, obstacle8, obstacle9
var infant_IMG
var infant_bg_rand, child_bg_rand
var trial
var invisibleGround

var health, happiness, wealth, social, knowledge
var text_1
var text_2
var text_3
var text_4
var text_5

var checkValue 
var obstaclesGroup

var child_bg, child_bg_2, child_bg_3, child_bg_4, child_bg_5, child, child_IMG
var obstacle_child1, obstacle_child2, obstacle_child3, obstacle_child4, obstacle_child5, obstacle_child6
var obstacle_child7, obstacle_child8, obstacle_child9, obstacle_child10, obstacle_child11, obstacle_child12

var checkValue2
var obstaclesGroup_Child

var bigpink, bigblue, bigred, biggreen
var bigpinkIMG, bigblueIMG, bigredIMG, biggreenIMG
var dot_colour

var plain1, plain2, plain3, plain4, plain5
var pencil
var colour1Group, colour2Group, colour3Group, colour4Group, colour5Group

var maths_test_bg, maths_test_bg_IMG
var maths_test
var answer1, answer2, answer3, answer4, answer5, answer6

var congrats, congrats_bg, degree


var situation_bg1, party, sleep , tired, teasing
var situation_bg2, rest, extraWork, headache, noMoney
var situation_bg3, guitar, office_training, self_satisfaction, promotion
var situation_bg4, trip, birthday, sad_child, sad_worker
var situation_bg5, order_food, cooking, junk_food, healthy_food
var next

var text_rectangle1, text_rectangle2, text_rectangle3, text_rectangle4, text_rectangle5

var adult_end_bg, old_man
var old_room, speech_bubble
var bye_bg, analysis

var tick1, tick2, tick3, tick4, tick5, tick6, cross1, cross2, cross3, cross4, cross5, cross6
var checkAnswers

var situation1_Sound, party_Sound, sleep_Sound
var situation2_Sound, rest_Sound, extraWork_Sound
var situation3_Sound, guitar_Sound, office_training_Sound
var situation4_Sound, birthday_Sound, trip_Sound
var situation5_Sound, order_food_Sound, cooking_Sound

var Dadu_Sound, degree_Sound, old_start_Sound 
var collect_Sound
var title, title_IMG
var infant_bg_Sound, child_bg_Sound, adult_bg_Sound

function preload() {

   infant_bg_2 = loadImage("Infant bg.png")
   infant_IMG = loadImage("Images/Infant/infant.gif")
   infant_bg_3_IMG = loadImage("Images/Infant/infant_bg 2.jpg")
   infant_bg_4_IMG = loadImage("Images/Infant/infant_bg 3.jpg")

   obstacle1 = loadImage("Images/Infant/baby food.gif");
   obstacle2 = loadImage("Images/Infant/dirty hands.gif");
   obstacle3 = loadImage("Images/Infant/milk bottle.png");
   obstacle4 = loadImage("Images/Infant/parents.png");
   obstacle5 = loadImage("Images/Infant/rattle.png");
   obstacle6 = loadImage("Images/Infant/stroller.png");
   obstacle7 = loadImage("Images/Infant/toy 1.png");
   obstacle8 = loadImage("Images/Infant/Toy 2.gif");
   obstacle9 = loadImage("Images/Infant/vaccine.png");
   
   child_bg_2 = loadImage("Images/Childhood/Childhood bg.jpg")
   child_bg_3_IMG = loadImage("Images/Childhood/Childhood bg 2.jpg")
   child_bg_4_IMG = loadImage("Images/Childhood/Childhood bg 3.jpg")
   child_bg_5_IMG = loadImage("Images/Childhood/Childhood bg 4.jpg")
   
   child_IMG = loadImage("Images/Childhood/child.gif")

   obstacle_child1 = loadImage("Images/Childhood/burger.png")
   obstacle_child2 = loadImage("Images/Childhood/coca cola.png")
   obstacle_child3 = loadImage("Images/Childhood/fruits.png")
   obstacle_child4 = loadImage("Images/Childhood/glass of milk.png")
   obstacle_child5 = loadImage("Images/Childhood/good marks.gif")
   obstacle_child6 = loadImage("Images/Childhood/injury.png")
  
   obstacle_child7 = loadImage("Images/Childhood/pizza.png")
   obstacle_child8 = loadImage("Images/Childhood/playing.png")
   obstacle_child9 = loadImage("Images/Childhood/toy areoplane.png")
   obstacle_child10 = loadImage("Images/Childhood/toy car.png")
   obstacle_child11 = loadImage("Images/Childhood/vegetables.gif")
   obstacle_child12 = loadImage("Images/Childhood/video games.png")

   bigpinkIMG = loadImage("Images/Childhood/pDot.gif")
   bigblueIMG = loadImage("Images/Childhood/bDot.gif")
   biggreenIMG = loadImage("Images/Childhood/gDot.gif")
   bigredIMG = loadImage("Images/Childhood/rDot.gif")

   plain1_IMG = loadImage("Images/Childhood/Plain 1.gif")
   plain2_IMG = loadImage("Images/Childhood/Plain 2.gif")
   plain3_IMG = loadImage("Images/Childhood/Plain 3.gif")
   plain4_IMG = loadImage("Images/Childhood/Plain 4.gif")
   plain5_IMG = loadImage("Images/Childhood/Plain 5.gif")

   colour1_IMG = loadImage("Images/Childhood/Colour 1.gif")
   colour2_IMG = loadImage("Images/Childhood/Colour 2.gif")
   colour3_IMG = loadImage("Images/Childhood/Colour 3.gif")
   colour4_IMG = loadImage("Images/Childhood/Colour 4.gif")
   colour5_IMG = loadImage("Images/Childhood/Colour 5.gif")

   maths_test_bg_IMG = loadImage("Images/Childhood/maths test bg.jpg")

   congrats_IMG = loadImage("Images/Adolescent/congrats.png")
  congrats_bg_IMG = loadImage("Images/Adolescent/background congratulations.jfif")
  degree_IMG = loadImage("Images/Adolescent/degree.png")
 


   next_IMG = loadImage("Images/Adolescent/next.png")

   situation_bg1_IMG = loadImage("Images/Adolescent/decision 1 bg.jpg")
   party_IMG = loadImage("Images/Adolescent/party.png")
   sleep_IMG = loadImage("Images/Adolescent/sleep.png")
   tired_IMG = loadImage("Images/Adolescent/tired.png")
   teasing_IMG = loadImage("Images/Adolescent/teasing.png")

   situation_bg2_IMG = loadImage("Images/Adolescent/decision 2 bg.jpg")
   rest_IMG = loadImage("Images/Adolescent/rest.gif")
   extraWork_IMG = loadImage("Images/Adolescent/extra work.png")
   headache_IMG = loadImage("Images/Adolescent/headache.png")
   noMoney_IMG = loadImage("Images/Adolescent/no money.png")

   situation_bg3_IMG = loadImage("Images/Adolescent/decision 3 bg.jpg")
   guitar_IMG = loadImage("Images/Adolescent/guitar.png")
   office_training_IMG = loadImage("Images/Adolescent/office training.png")
   self_satisfaction_IMG = loadImage("Images/Adolescent/self satisfaction.png")
   promotion_IMG = loadImage("Images/Adolescent/promotion.png")
  
   situation_bg4_IMG = loadImage("Images/Adolescent/decision 4 bg.jpg")
   trip_IMG = loadImage("Images/Adolescent/trip.png")
   birthday_IMG = loadImage("Images/Adolescent/birthday.png")
   sad_child_IMG = loadImage("Images/Adolescent/sad child.png")
   sad_worker_IMG = loadImage("Images/Adolescent/sad worker.png")

   situation_bg5_IMG = loadImage("Images/Adolescent/decision 5 bg.jpg")
   order_food_IMG = loadImage("Images/Adolescent/order food.jpg")
   cooking_IMG = loadImage("Images/Adolescent/cook food.png")
   junk_food_IMG = loadImage("Images/Adolescent/junk food.png")
   healthy_food_IMG = loadImage("Images/Adolescent/healthy.png")
  
   text_rectangle_IMG = loadImage("text_rectangle.png")
 
   
   adult_end_bg_IMG = loadImage("Images/Oldage/bg adult end.jpg")
   old_man_IMG = loadImage("Images/Oldage/old man.png")
   old_room_IMG = loadImage("Images/Oldage/old man room.jpg")
   speech_bubble_IMG = loadImage("Images/Oldage/speech _bubble.png")
   bye_bg_IMG = loadImage("Images/Oldage/bye.jpg")
   analysis_IMG = loadImage("Images/Oldage/analysis.png")

   tick_IMG = loadImage("Images/Childhood/tick.png")
   cross_IMG = loadImage("Images/Childhood/cross.png")

   situation1_Sound = loadSound("Images/Adolescent/Situation 1 Aanvi.m4a")
   party_Sound = loadSound("Images/Adolescent/Party.m4a")
   sleep_Sound = loadSound("Images/Adolescent/Sleep.m4a")

   situation2_Sound = loadSound("Images/Adolescent/Situation 2 Aanvi.m4a")
   rest_Sound = loadSound("Images/Adolescent/Rest.m4a")
   extraWork_Sound = loadSound("Images/Adolescent/Extra Work.m4a")

   situation3_Sound = loadSound("Images/Adolescent/Situation 3 Aanvi.m4a")
   guitar_Sound = loadSound("Images/Adolescent/Guitar.m4a")
   office_training_Sound = loadSound("Images/Adolescent/Office Training.m4a")

   situation4_Sound = loadSound("Images/Adolescent/Situation 4 Aanvi.m4a")
   trip_Sound = loadSound("Images/Adolescent/trip.m4a")
   birthday_Sound = loadSound("Images/Adolescent/birthday.m4a")

   situation5_Sound = loadSound("Images/Adolescent/Situation 5 Aanvi.m4a")
   order_food_Sound = loadSound("Images/Adolescent/Order Online.m4a")
   cooking_Sound = loadSound("Images/Adolescent/Cooking.m4a")

   old_start_Sound = loadSound("Images/Adolescent/old start.m4a")
   Dadu_Sound = loadSound("Images/Adolescent/Dadu Voice (2).m4a")
   degree_Sound = loadSound("Images/Adolescent/Degree.m4a")

   collect_Sound = loadSound("Images/Infant/Collect sound.mp4")
   title_IMG = loadImage("Title.jpg")

   infant_bg_Sound = loadSound("Images/Infant/bg music infant.mp3")
   child_bg_Sound = loadSound("Images/Childhood/bg music child.mp3")
   adult_bg_Sound = loadSound("Images/Adolescent/by music adult.mp3")

}

function setup(){
    var canvas = createCanvas(900,700);
    //engine = Engine.create();
    //world = engine.world;

    infant_bg = createSprite(600, 300);
    infant_bg. addImage(infant_bg_2);
    infant_bg.scale = 3.2;

    infant_bg_3 = createSprite(600, 300);
    infant_bg_3. addImage(infant_bg_3_IMG);
    infant_bg_3.scale = 1;

    infant_bg_4 = createSprite(600, 350);
    infant_bg_4. addImage(infant_bg_4_IMG);
    infant_bg_4.scale = 1.2;

    infant = createSprite(100, 620, 50, 50)
    infant.addImage(infant_IMG);
    infant.scale = 0.2

    child_bg = createSprite(450, 300);
    child_bg. addImage(child_bg_2);
    child_bg.scale = 2.3;
    child_bg.visible = false;

    child_bg_3 = createSprite(450, 300);
    child_bg_3. addImage(child_bg_3_IMG);
    child_bg_3.scale = 2.8;
    child_bg_3.visible = false;

    child_bg_4 = createSprite(450, 300);
    child_bg_4. addImage(child_bg_4_IMG);
    child_bg_4.scale = 2.9;
    child_bg_4.visible = false;

    child_bg_5 = createSprite(450, 300);
    child_bg_5. addImage(child_bg_5_IMG);
    child_bg_5.scale = 2.9;
    child_bg_5.visible = false;
   
    child = createSprite(100, 570, 50, 50)
    child.addImage(child_IMG);
    child.scale = 0.2
    child.visible = false;


    invisibleGround = createSprite(600, 650, 1200, 20)
    invisibleGround.visible = false;

    bigpink = createSprite(250, 200);
    bigpink.addImage(bigpinkIMG);
    bigpink.scale=0.4
  bigpink.visible=false;
  
  biggreen = createSprite(400, 200);
  biggreen.addImage(biggreenIMG);
  biggreen.scale=0.4
  biggreen.visible=false;
  
  bigblue = createSprite(550, 200);
  bigblue.addImage(bigblueIMG);
  bigblue.scale=0.4
  bigblue.visible=false;

  bigred = createSprite(700, 200);
  bigred.addImage(bigredIMG);
  bigred.scale=0.4
  bigred.visible=false;

  plain1 = createSprite(150, 200);
  plain1.addImage(plain1_IMG);
  plain1.scale=0.5
  plain1.visible=false;

  plain2 = createSprite(300, 200);
  plain2.addImage(plain2_IMG);
  plain2.scale=0.5
  plain2.visible=false;

  plain3 = createSprite(450, 200);
  plain3.addImage(plain3_IMG);
  plain3.scale=0.5
  plain3.visible=false;

  plain4 = createSprite(600, 200);
  plain4.addImage(plain4_IMG);
  plain4.scale=0.5
  plain4.visible=false;

  plain5 = createSprite(750, 200);
  plain5.addImage(plain5_IMG);
  plain5.scale=0.5
  plain5.visible=false;

  maths_test_bg = createSprite(450, 350)
  maths_test_bg.addImage(maths_test_bg_IMG);
  maths_test_bg.scale = 2
  maths_test_bg.visible = false;


  congrats_bg = createSprite(450, 350)
  congrats_bg.addImage(congrats_bg_IMG);
  congrats_bg.scale = 2
  congrats_bg.visible = false;

  congrats = createSprite(450, 300)
  congrats.addImage(congrats_IMG)
  congrats.scale = 1.5
  congrats.visible = false;

  degree = createSprite(450, 500)
  degree.addImage(degree_IMG)
  degree.scale = 0.5
  degree.visible = false;


situation_bg1 = createSprite(450, 350);
situation_bg1.addImage(situation_bg1_IMG);
situation_bg1.scale = 2
situation_bg1.visible = false;

party = createSprite(250, 500)
party.addImage(party_IMG);
party.scale = 0.8
party.visible = false;  

text_1 = 0;
text_2 = 0;
text_3 = 0;
text_4 = 0;
text_5 = 0;

sleep = createSprite(675, 500)
sleep.addImage(sleep_IMG);
sleep.scale = 0.6
sleep.visible = false;  

tired = createSprite(450, 550)
tired.addImage(tired_IMG);
tired.scale = 0.4
tired.visible = false; 

teasing = createSprite(450, 550)
teasing.addImage(teasing_IMG);
teasing.scale = 0.8
teasing.visible = false; 


situation_bg2 = createSprite(450, 350);
situation_bg2.addImage(situation_bg2_IMG);
situation_bg2.scale = 2.7
situation_bg2.visible = false;

rest = createSprite(250, 530)
rest.addImage(rest_IMG);
rest.scale = 0.5
rest.visible = false;  


extraWork = createSprite(675, 550)
extraWork.addImage(extraWork_IMG);
extraWork.scale = 0.4
extraWork.visible = false;  

headache = createSprite(450, 550)
headache.addImage(headache_IMG);
headache.scale = 0.1
headache.visible = false; 

noMoney = createSprite(450, 550)
noMoney.addImage(noMoney_IMG);
noMoney.scale = 0.5
noMoney.visible = false; 


situation_bg3 = createSprite(450, 350);
situation_bg3.addImage(situation_bg3_IMG);
situation_bg3.scale = 2.7
situation_bg3.visible = false;

guitar = createSprite(250, 530)
guitar.addImage(guitar_IMG);
guitar.scale = 0.3
guitar.visible = false;  


office_training = createSprite(675, 550)
office_training.addImage(office_training_IMG);
office_training.scale = 0.5
office_training.visible = false;  

self_satisfaction = createSprite(450, 550)
self_satisfaction.addImage(self_satisfaction_IMG);
self_satisfaction.scale = 2
self_satisfaction.visible = false; 

promotion = createSprite(450, 550)
promotion.addImage(promotion_IMG);
promotion.scale = 0.5
promotion.visible = false; 


situation_bg4 = createSprite(450, 350);
situation_bg4.addImage(situation_bg4_IMG);
situation_bg4.scale = 2
situation_bg4.visible = false;

trip = createSprite(250, 530)
trip.addImage(trip_IMG);
trip.scale = 0.3
trip.visible = false;  

trial  = 0;
birthday = createSprite(675, 550)
birthday.addImage(birthday_IMG);
birthday.scale = 1
birthday.visible = false;  

sad_child = createSprite(450, 550)
sad_child.addImage(sad_child_IMG);
sad_child.scale = 0.5
sad_child.visible = false; 

sad_worker = createSprite(450, 550)
sad_worker.addImage(sad_worker_IMG);
sad_worker.scale = 0.8
sad_worker.visible = false; 


situation_bg5 = createSprite(450, 350);
situation_bg5.addImage(situation_bg5_IMG);
situation_bg5.scale = 2
situation_bg5.visible = false;

order_food = createSprite(250, 530)
order_food.addImage(order_food_IMG);
order_food.scale = 0.5
order_food.visible = false;  


cooking = createSprite(675, 550)
cooking.addImage(cooking_IMG);
cooking.scale = 0.5
cooking.visible = false;  

junk_food = createSprite(450, 550)
junk_food.addImage(junk_food_IMG);
junk_food.scale = 0.5
junk_food.visible = false; 

healthy_food = createSprite(450, 500)
healthy_food.addImage(healthy_food_IMG);
healthy_food.scale = 0.3
healthy_food.visible = false; 


next = createSprite(800, 650)
next.addImage(next_IMG);
next.scale = 0.1
next.visible = false; 
next.setCollider("rectangle", 0, 0, 30, 10);
next.debug = true;

checkAnswers = 0

adult_end_bg = createSprite(450, 350);
adult_end_bg.addImage(adult_end_bg_IMG);
adult_end_bg.scale = 0.8
adult_end_bg.visible = false;


old_room = createSprite(450, 350);
old_room.addImage(old_room_IMG);
old_room.scale = 1.6
old_room.visible = false;

old_man = createSprite(450, 600)
old_man.addImage(old_man_IMG);
old_man.scale = 0.1
old_man.visible = false; 

speech_bubble = createSprite(520, 270)
speech_bubble.addImage(speech_bubble_IMG);
speech_bubble.scale = 1.4
speech_bubble.visible = false; 

bye_bg = createSprite(450, 350);
bye_bg.addImage(bye_bg_IMG);
bye_bg.scale = 1.7
bye_bg.visible = false;

analysis = createSprite(470,570)
analysis.addImage(analysis_IMG);
analysis.scale = 1.1
analysis.visible = false; 

text_rectangle1 = createSprite(150,50)
text_rectangle1.addImage(text_rectangle_IMG);
text_rectangle1.scale = 0.05

text_rectangle2 = createSprite(300,50)
text_rectangle2.addImage(text_rectangle_IMG);
text_rectangle2.scale = 0.05

text_rectangle3 = createSprite(450,50)
text_rectangle3.addImage(text_rectangle_IMG);
text_rectangle3.scale = 0.05

text_rectangle4 = createSprite(600,50)
text_rectangle4.addImage(text_rectangle_IMG);
text_rectangle4.scale = 0.05

text_rectangle5 = createSprite(750,50)
text_rectangle5.addImage(text_rectangle_IMG);
text_rectangle5.scale = 0.05

tick1 = createSprite(500, 200)
tick1.addImage(tick_IMG)
tick1.scale = 0.2
tick1.visible = false;

tick2 = createSprite(500, 250)
tick2.addImage(tick_IMG)
tick2.scale = 0.2
tick2.visible = false;

tick3 = createSprite(500, 300)
tick3.addImage(tick_IMG)
tick3.scale = 0.2
tick3.visible = false;

tick4 = createSprite(500, 350)
tick4.addImage(tick_IMG)
tick4.scale = 0.2
tick4.visible = false;

tick5 = createSprite(500, 400)
tick5.addImage(tick_IMG)
tick5.scale = 0.2
tick5.visible = false;

tick6 = createSprite(500, 450)
tick6.addImage(tick_IMG)
tick6.scale = 0.2
tick6.visible = false;



cross1 = createSprite(500, 200)
cross1.addImage(cross_IMG)
cross1.scale = 0.1
cross1.visible = false;

cross2 = createSprite(500, 250)
cross2.addImage(cross_IMG)
cross2.scale = 0.1
cross2.visible = false;

cross3 = createSprite(500, 300)
cross3.addImage(cross_IMG)
cross3.scale = 0.1
cross3.visible = false;

cross4 = createSprite(500, 350)
cross4.addImage(cross_IMG)
cross4.scale = 0.1
cross4.visible = false;

cross5 = createSprite(500, 400)
cross5.addImage(cross_IMG)
cross5.scale = 0.1
cross5.visible = false;

cross6 = createSprite(500, 450)
cross6.addImage(cross_IMG)
cross6.scale = 0.1
cross6.visible = false;

title = createSprite(450, 350)
title.addImage(title_IMG)
title.scale = 0.9
title.visible = false;



    health = 50
    happiness = 50
    wealth = 0
    social = 50
    knowledge = 0



 checkValue = 0
  checkValue2 = 0

   maths_test = new MathsTest();

    obstaclesGroup = new Group();
    obstaclesGroup_Child = new Group ();
    
    blueGroup = new Group ();
    greenGroup = new Group ();
    redGroup = new Group ();
    pinkGroup = new Group ();
    
    colour1Group = new Group ();
    colour2Group = new Group ();
    colour3Group = new Group ();
    colour4Group = new Group ();
    colour5Group = new Group ();

    


}

function draw(){
    background(0);
  //  Engine.update(engine);

  
if(frameCount === 100){
   infant_bg_Sound.play();
}

if(frameCount === 1250){
 infant_bg_Sound.stop();
 child_bg_Sound.play();
}

if(frameCount === 4000){
  child_bg_Sound.stop();
  adult_bg_Sound.play();
}


  dot_colour = Math.round(random(1, 4))
  pencil = Math.round(random(1, 5))

  if(frameCount % 200 === 0 &&  frameCount<=1250){
     infant_bg_rand = Math.round(random(1, 3))
   }
   
  switch(infant_bg_rand){
    case 1: infant_bg.visible = true;
            infant_bg_3.visible = false;
            infant_bg_4.visible = false;

            infant_bg.velocityX = -3

            if (infant_bg.x < 0){
               infant_bg.x = infant_bg.width/2;
             }

            break;

    case 2: infant_bg.visible = false;
            infant_bg_3.visible = true;
            infant_bg_4.visible = false;

            infant_bg_3.velocityX = -3

      if (infant_bg_3.x < 0){
         infant_bg_3.x = infant_bg_3.width/2;
       }

            break;   
            
    case 3: infant_bg.visible = false;
            infant_bg_3.visible = false;
            infant_bg_4.visible = true;


            infant_bg_4.velocityX = -3

            if (infant_bg_4.x < 0){
               infant_bg_4.x = infant_bg_4.width/2;
             }
     
            break;           

  }


  if(frameCount % 200 === 0 &&  frameCount >= 1250 && frameCount<=2100){
    child_bg_rand = Math.round(random(1, 4))
  }
  
 switch(child_bg_rand){
   case 1: child_bg.visible = true;
           child_bg_3.visible = false;
           child_bg_4.visible = false;
           child_bg_5.visible = false;

           child_bg.velocityX = -3

           if (child_bg.x < 0){
              child_bg.x = child_bg.width/2;
            }

           break;

   case 2: child_bg.visible = false;
           child_bg_3.visible = true;
           child_bg_4.visible = false;
           child_bg_5.visible = false;

           child_bg_3.velocityX = -3

     if (child_bg_3.x < 0){
        child_bg_3.x = child_bg_3.width/2;
      }

           break;   
           
   case 3: child_bg.visible = false;
           child_bg_3.visible = false;
           child_bg_4.visible = true;
           child_bg_5.visible = false;

           child_bg_4.velocityX = -3

           if (child_bg_4.x < 0){
              child_bg_4.x = child_bg_4.width/2;
            }
    
           break;     
           
  case 4:  child_bg.visible = false;
           child_bg_3.visible = false;
           child_bg_4.visible = false;
           child_bg_5.visible = true;

           child_bg_5.velocityX = -3

           if (child_bg_5.x < 0){
              child_bg_5.x = child_bg_5.width/2;
            }
    
           break;     

 }

  if( keyDown("space") && infant.y >= 550) {
   infant.velocityY = -12;
   
 }


 infant.velocityY = infant.velocityY + 0.8

 infant.collide(invisibleGround);

 if( keyDown("space") && child.y >= 420) {
        child.velocityY = -12;
        
      }
     
     
      child.velocityY = child.velocityY + 0.8
     
      child.collide(invisibleGround);
   

     child_bg.velocityX = -3

      if (child_bg.x < 0){
         child_bg.x = child_bg.width/2;
      }

     
      
     
      spawnObstacles();
      

      if(infant.isTouching(obstaclesGroup) && checkValue === 1){
          obstaclesGroup.destroyEach();
          health = health + 5
          collect_Sound.play();
      }

      if(infant.isTouching(obstaclesGroup) && checkValue === 2){
        obstaclesGroup.destroyEach();
        health = health-5
        collect_Sound.play();
    }

    

    if(infant.isTouching(obstaclesGroup) && checkValue === 3){
        obstaclesGroup.destroyEach();
        health = health + 5
        collect_Sound.play();
    }
    
    if(infant.isTouching(obstaclesGroup) && checkValue === 4){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       social = social + 5
       collect_Sound.play();
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 5){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       collect_Sound.play();
    }
    
    if(infant.isTouching(obstaclesGroup) && checkValue === 6){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       collect_Sound.play();
    }
   
    if(infant.isTouching(obstaclesGroup) && checkValue === 7){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       collect_Sound.play();
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 8){
        obstaclesGroup.destroyEach();
       happiness = happiness + 5
       collect_Sound.play();
    }

    if(infant.isTouching(obstaclesGroup) && checkValue === 9){
        obstaclesGroup.destroyEach();
       happiness = happiness - 5
       health = health + 5
       collect_Sound.play();
    }

    if(frameCount >= 1250){
   
     infant_bg.visible = false;
     infant_bg_3.visible = false;
     infant_bg_4.visible = false;
     infant.visible = false;
      
     child_bg.visible = true
     child.visible = true

     spawnObstacles2();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 1){
        obstaclesGroup_Child.destroyEach();
        health = health - 5
        happiness = happiness + 5
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 2){
        obstaclesGroup_Child.destroyEach();
        health = health - 5
        happiness = happiness + 5
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 3){
        obstaclesGroup_Child.destroyEach();
        health = health + 5
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 4){
        obstaclesGroup_Child.destroyEach();
        health = health + 5
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 5){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 6){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness - 5 
        health = health - 5  
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 7){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        health = health - 5  
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 8){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        health = health + 5  
        social = social + 5
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 9){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 10){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 11){
        obstaclesGroup_Child.destroyEach();
        health = health + 5  
        collect_Sound.play();
    }

    if(child.isTouching(obstaclesGroup_Child) && checkValue2 === 12){
        obstaclesGroup_Child.destroyEach();
        happiness = happiness + 5 
        health = health - 5  
        social = social - 5
        collect_Sound.play();
    }

    if (frameCount >= 1500 && frameCount<= 1800){
        bigred.visible = true;
        biggreen.visible = true;
        bigpink.visible = true;
        bigblue.visible = true;
        switch(dot_colour){
                case 1: pink_dots();
                      break;
                case 2: green_dots();
                      break;
                case 3: blue_dots();
                      break;
                case 4: red_dots();
                      break;
                      
                }
    }

    if(frameCount >= 1800 && frameCount<= 2100){
      plain1.visible = true;
      plain2.visible = true;
      plain3.visible = true;
      plain4.visible = true;
      plain5.visible = true;

      bigred.destroy();
      biggreen.destroy();
      bigpink.destroy();
      bigblue.destroy();

      switch(pencil){
        case 1: spawnColour1();
              break;
        case 2: spawnColour2();
              break;
        case 3: spawnColour3();
              break; 
        case 4: spawnColour4();
              break;
        case 5: spawnColour5();
              break;       
      }
    }

   

      
   if(mousePressedOver(bigpink)){
        pinkGroup.destroyEach();
      
        
      }
      
      if(mousePressedOver(biggreen)){
        greenGroup.destroyEach();
       
      }
      
      if(mousePressedOver(bigblue)){
        blueGroup.destroyEach();
      
      }
      
      if(mousePressedOver(bigred)){
        redGroup.destroyEach();
       
      }



       
      if(mousePressedOver(plain1)){
        colour1Group.destroyEach();
       
      }

      if(mousePressedOver(plain2)){
        colour2Group.destroyEach();
       
      }

      if(mousePressedOver(plain3)){
        colour3Group.destroyEach();
       
      }

      if(mousePressedOver(plain4)){
        colour4Group.destroyEach();
       
      }

      if(mousePressedOver(plain5)){
        colour5Group.destroyEach();
       
      }


      if (frameCount >= 2100 && frameCount <= 4000){
        child.destroy();
        child_bg.destroy();
        plain1.destroy();
        plain2.destroy();
        plain3.destroy();
        plain4.destroy();
        plain5.destroy();
        maths_test_bg.visible = true;

          
      
       maths_test.display();
       if(checkAnswers === 1){
       if(answer1 === 193){
        tick1.visible = false;
     }else{
       cross1.visible = false;
     }

     if(answer2 === 0){
      tick2.visible = false;
   }else{
     cross2.visible = false;
   }

   if(answer3 === 944){
      tick3.visible = false;
   }else{
     cross3.visible = false;
   }

   if(answer4 === 125){
      tick4.visible = false;
   }else{
     cross4.visible = false;
   }

   if(answer5 === 5673){
      tick5.visible = false;
   }else{
     cross5.visible = false;
   }

   if(answer6 === 4590){
      tick6.visible = false;
   }else{
     cross6.visible = false;
   }
  }
  
       
      }

      if(frameCount>= 4000){
        maths_test_bg.destroy();
        maths_test.hide();
      }

      if(frameCount>= 4000 && frameCount<=4200){
        degree.visible = true;
        congrats.visible = true;
        congrats_bg.visible = true;

        
      }

     
 drawSprites();

      textSize(18);
      fill ("black")
      text ("Health: " + health, 105, 55)
      text ("Happiness:" + happiness, 245, 55)
      text ("Wealth: " + wealth, 405, 55)
      text ("Social: " + social, 555, 55)
      text ("Knowledge: " + knowledge, 695, 55)

      if(frameCount >= 2100 && frameCount <= 4000){
        textSize(24);
        fill ("white")
        text ("153 + 40 = ", 420, 200)
        text ("883 x 0 = ", 420, 250)
        text ("954 - 10 = ", 420, 300)
        text ("1000 / 08 = ", 420, 350)
        text ("5673 x 1 = ", 420, 400)
        text ("4565 + 25 = ", 420, 450)

      }

      if(frameCount>= 4000 && frameCount<=4200){
        textSize(20);
        fill ("white")
        text ("Great!! You have completed your school and college life.", 70, 520)
        text ("Now it is time for you to focus on your career and you ", 70, 535)
        text ("will have to take important decisions in your life now. ", 70, 550)
      }
      
     

      if(frameCount === 4200){
         situation1_Sound.play();
      }
    

      if(frameCount>=4200){
        situation1();
        
      }

      if(keyCode===49 && text_1 === 2 ){
        situation2_Sound.play();
         text_1 = 3;
      }

      if(keyCode===49 && text_1 === 1 ){
        situation2_Sound.play();
        text_1 = 3;
     }

      if(text_1 === 3){
         situation2();
         party.destroy();
         sleep.destroy();
         teasing.destroy();
         tired.destroy();
      }
 
      if(keyCode === 50 && text_2 === 2){
        situation3_Sound.play();
        text_2 = 3
      }

      if(keyCode === 50 && text_2 === 1){
        situation3_Sound.play();
        text_2 = 3
      }
     
      if(text_2 === 3){
        situation3();
        extraWork.destroy();
        rest.destroy();
        headache.destroy();
        noMoney.destroy();
     }

     if(keyCode === 51 && text_3 === 2){
     situation4_Sound.play();
      text_3 = 3
    }

    if(keyCode === 51 && text_3 === 1){
      situation4_Sound.play();
      text_3 = 3
    }
   
    if(text_3 === 3){
      situation4();
      extraWork.destroy();
      rest.destroy();
      headache.destroy();
      noMoney.destroy();
   }

   if(keyCode === 52 && text_4 === 2){
    situation5_Sound.play();
    text_4 = 3
  }

  if(keyCode === 52 && text_4 === 1){
    situation5_Sound.play();
    text_4 = 3
  }
 
  if(text_4 === 3){
    situation5();
    trip.destroy();
    sad_child.destroy();
    sad_worker.destroy();
    birthday.destroy();
 }
  
 if(keyCode === 53 && text_5 === 1){
   old_start_Sound.play();
   text_5 = 3
 }

 if(keyCode === 53 && text_5 === 2){
   old_start_Sound.play();
  text_5 = 3
}

if(text_5 === 3){
  old_age1();
  cooking.destroy();
  order_food.destroy();
  healthy_food.destroy();
  junk_food.destroy();
}

if(keyCode === 54 && text_5 === 3){
  
   text_5 = 4
}
if(text_5 === 4){
  old_age2();
}

if(keyCode === 32 && text_5 === 4){
  
  text_5 = 5
}
if(text_5 === 5){
 old_age3();
}



    }
function old_age1(){

  adult_end_bg.visible = true;
  old_man.visible = true;

  textSize(30);
  fill ("black")
  text ("Life is all about making decisions.", 220, 200)
  text("And the quality of being able to make  ", 200, 250)
  text(" the right decisions is a boon!! ", 240, 300)
  text("So, great!! You made amazing decisions. ", 180, 350)
  text("Now gradually, as you grew old, you retired. ", 150, 400)
  text("So, now it is the start of a new journey.", 180, 450)
  }
  
  
  function old_age2(){
    old_room.visible = true;
    old_man.visible = true;
    old_man.scale = 0.2
    old_man.x = 150
    old_man.y = 500

    speech_bubble.visible = true;

  textSize(18);
  fill ("black")
  text ("You know, the day I retired, I thought that now, I am a free bird.", 260, 80)
  text("I thought that I can visit my favourite holiday destination, go on  ", 270, 100)
  text("trekking & so on. But gradually I realised, my energy depleted,", 280, 120)
  text("and that craving for travelling was not there any more.", 300, 140)
  text("When we are children, we have enery and time, but no money. ", 280, 160)
  text("As we grow into an adult, we have energy and money, but no time. ", 270, 180)
  text("As we grow old, like me, we have time and money but no energy. The  ", 250, 200)
  text("same health which I took forgranted before, now values me the most.", 240, 220)
  text("Family, which was sometimes not my priority, is only the support left ", 250, 240)
  text("for me. Now that I am just nearing my dead bed, there are many   ", 270, 260)
  text("things that I regret, why I did or I didn't. But always remember,    ", 280, 280)
  text("life doesn't have a 'UNDO' button. Be sensible while taking your  ", 275, 300)
  text(" decisions. Enjoy and relish every single moment of this  ", 280, 320)
  text(" beautiful journey called 'LIFE'!! 🙂  ", 350, 340)
  }

  function old_age3(){
    bye_bg.visible = true;
    analysis.visible = true;
    
  textSize(50);
  fill ("white")
  text ("So here your life ends...Bye!!", 160, 150)

  textSize(30);
  text ("Life Analysis:", 360, 200)
  textSize(20);
  
  text ("Health = " + health, 400, 250)
  text ("Wealth = " + wealth, 400, 300)
  text ("Knowledge = " + knowledge, 380, 350)
  text ("Social = " + social, 400, 400)
  text ("Happiness = " + happiness, 380, 450)

  }

function situation1(){
if(frameCount>=4200 ){

    degree.destroy();
    congrats.destroy();
    congrats_bg.destroy();
     
     situation_bg1.visible = true;
     party.visible = true;
     sleep.visible= true;

   if(text_1 === 0){
     textSize(30);
     fill ("black")
     text ("It is Monday, 10 pm . At this time, would you rather....", 100, 200)
     text("Go on to a party ", 160, 350)
     text("at your friend's place. ",130, 390)
     
     text("Go to sleep.", 550, 360)

   }
   }
 if(frameCount === 4200 ){
      wealth = 50
   }

   if(mousePressedOver(party) && text_1 === 0 ){
    
    text_1 = 1
    happiness = happiness + 5
    health = health - 5
    wealth = wealth - 5  
    party.destroy();
     sleep.destroy();
     next.visible = true;
     party_Sound.play();
   
    }
 
    if(mousePressedOver(sleep) && text_1 === 0){
      
      text_1 = 2
      happiness = happiness - 5
      party.destroy();
      sleep.destroy();
      next.visible = true;
      sleep_Sound.play();
    }
    if(text_1 === 2){
   
   
    
      textSize(30);
      fill ("black")
      text ("Great, you were able to reach your office at time,", 150, 200)
      text(" but your collegues teased you al lot talking about .", 140, 250)
      text(" the fun they had at the party yesterday.", 200, 300)
      text(" This made you very unhappy.", 240, 350)
    
      
      teasing.visible = true;

     
     }
  
     if(text_1 === 1){
  
      
      textSize(30);
      fill ("black")
      text ("Great, you must have had a lot of fun,", 200, 200)
      text(" but due to lack of sleep, you were very tired.", 160, 250)
      text(" This had an impact on your productivity", 170, 300)
      text(" which lead to a bad impression on you boss and collegues", 60, 350)
      text ("as well as impacted your wealth and health.", 170, 400)
      
      tired.visible = true;
  
      
     }
       
      
  }


  function situation2(){
    // if(frameCount>=5500 ){
      if(frameCount >=5 ){
        // degree.destroy();
        // congrats.destroy();
        // congrats_bg.destroy();
         
         situation_bg2.visible = true;
         rest.visible = true;
         extraWork.visible= true;
    
       if(text_2 === 0){
         textSize(25);
         fill ("black")
         text ("It is evening and now its time for you to get back home from work. ", 100, 200)
         text ("You are very tired today and you just want to go home and rest. ", 110, 230)
         text ("But then your Boss comes and asks that whether you can help him out  ", 75, 260)
         text ("with some extra work and he would even pay you for that. But it is  ", 90, 290)
         text ("completely optional. So, would you rather.....  ", 190, 320)
        
         text("Go home and rest ", 160, 400)
         
         text("Do the extra work", 550, 400)
    
       }
       }
    // if(frameCount === 5500 ){
      
    
       if(mousePressedOver(rest) && text_2 === 0 ){
        rest_Sound.play();
        text_2 = 1
        
        health = health + 5
  
        rest.destroy();
        extraWork.destroy();
        next.visible = true;
       
        }
     
        if(mousePressedOver(extraWork) && text_2 === 0){
          extraWork_Sound.play();
          text_2 = 2
          health = health - 10
          wealth = wealth + 10
          rest.destroy();
          extraWork.destroy();
          next.visible = true;
        }
        if(text_2 === 2){
       
       
        
          textSize(30);
          fill ("black")
          text ("Great! You got extra money!", 250, 200)
          text(" But due to excess of work, when you returned back,", 120, 250)
          text(" you had a severe headache and had to", 150, 300)
          text(" take leave for 2 days.", 290, 350)
        
          
          headache.visible = true;
    
         
         }
      
         if(text_2 === 1){
      
          
          textSize(30);
          fill ("black")
          text ("Great! You know that health is much more", 190, 220)
          text(" important than wealth. But as you could not do  ", 150, 270)
          text(" the extra work, you did not got the extra money.", 150, 320)
          
          
          
          noMoney.visible = true;
      
          
         }
           
          
      }



      function situation3(){
        // if(frameCount>=5500 ){
          if(frameCount >=5 ){
            // degree.destroy();
            // congrats.destroy();
            // congrats_bg.destroy();
             
             situation_bg3.visible = true;
             guitar.visible = true;
             office_training.visible= true;
        
           if(text_3 === 0){
             textSize(25);
             fill ("black")
             text ("You are having holidays from your office. You have got to know  ", 100, 200)
             text ("that there are some guitar hobby classes going on in your society. ", 90, 230)
             text ("Playing guitar used to be your passion in childhood but you could not  ", 75, 260)
             text ("pursue it later. Also, in your office, there are some traing sessions going   ", 60, 290)
             text ("on that can help you get promotion. So, would you rather.....  ", 120, 320)
            
             text("Attend the Guitar Hobby classes ", 100, 400)
             
             text("Attend the Office Training sessions ", 500, 400)
        
           }
           }
        // if(frameCount === 5500 ){
          
        
           if(mousePressedOver(guitar) && text_3 === 0 ){
            
            guitar_Sound.play();
            text_3 = 1
            
            knowledge = knowledge + 10
            happiness = happiness + 10
      
            guitar.destroy();
            office_training.destroy();
            next.visible = true;
           
           
            }
         
            if(mousePressedOver(office_training) && text_3 === 0){
              
              office_training_Sound.play();
              text_3 = 2

              knowledge = knowledge + 10
              happiness = happiness + 5

              guitar.destroy();
              office_training.destroy();
              next.visible = true;

            }
           
            if(text_3 === 2){
           
           
            
              textSize(30);
              fill ("black")
              text ("Great! The training was very useful.", 200, 200)
              text(" This helped you very much in different situations ", 120, 250)
              text(" at work.", 370, 300)
                      
              promotion.visible = true;
        
             
             }
          
             if(text_3 === 1){
          
              
              textSize(30);
              fill ("black")
              text ("Great! You were very happy after puersueing   ", 150, 270)
              text(" your passion and felt self - satisfied.", 170, 320)
              
              
              
              self_satisfaction.visible = true;
          
              
             }
               
              
          }


      function situation4(){
            // if(frameCount>=5500 ){
              if(frameCount >=5 ){
                // degree.destroy();
                // congrats.destroy();
                // congrats_bg.destroy();
                 
                 situation_bg4.visible = true;
                 trip.visible = true;
                 birthday.visible= true;
            
               if(text_4 === 0){
                 textSize(25);
                 fill ("black")
                 text ("Your child's birthday is just 2 days away.  ", 200, 200)
                 text ("And you are asked to go on a trip from your office for ", 150, 230)
                 text ("some project. Most of your collegues are ready to go because  ", 100, 260)
                 text ("of the opportunities it offer. So, would you rather....   ", 170, 290)
 
                
                 text("Go on the office trip ", 150, 400)
                 
                 text("Be there for your child's birthday ", 500, 400)
            
               }
               }
            // if(frameCount === 5500 ){
              
            
               if(mousePressedOver(trip) && text_4 === 0 ){
                
                trip_Sound.play();
                text_4 = 1
                happiness = happiness - 10
                social = social - 10
                knowledge = knowledge + 5
                wealth = wealth + 5
          
                trip.destroy();
                birthday.destroy();
                next.visible = true;
               
                }
             
                if(mousePressedOver(birthday) && text_4 === 0){
                  
                  birthday_Sound.play();
                  text_4 = 2
    
                  social = social + 10
                  happiness = happiness + 5
                  wealth = wealth - 5
    
                  trip.destroy();
                  birthday.destroy();
                  next.visible = true;
    
                }
               
                if(text_4 === 2){
               
               
                
                  textSize(30);
                  fill ("black")
                  text ("Great! You had a lot of fun spendig time with your family ", 90, 200)
                  text("and your child was very happy. But as you missed the trip, ", 80, 250)
                  text("it affected your wealth.", 300, 300)
                  
                          
                 sad_worker.visible = true;
            
                 
                 }
              
                 if(text_4 === 1){
              
                  
                  textSize(30);
                  fill ("black")
                  text ("Great! Going on the office trip, helped you but   ", 150, 250)
                  text(" as you were not there on your child's birthday, ", 150, 300)
                  text(" he was very sad and missed you a lot. ", 200, 350)
                  
                  
                  
                  sad_child.visible = true;
              
                  
                 }
                   
                  
              }


              function situation5(){
                // if(frameCount>=5500 ){
                  if(frameCount >=5 ){
                    // degree.destroy();
                    // congrats.destroy();
                    // congrats_bg.destroy();
                     
                     situation_bg5.visible = true;
                     order_food.visible = true;
                     cooking.visible= true;
                
                   if(text_5 === 0){
                     textSize(25);
                     fill ("black")
                     text ("You just returned from work and you are very tired.  ", 200, 200)
                     text ("Your wife is not at home as well. ", 300, 245)
                     text (" So, would you rather....   ", 350, 290)
     
                    
                     text("Order Food Online", 150, 400)
                     
                     text("Cook Food yourself", 500, 400)
                
                   }
                   }
                // if(frameCount === 5500 ){
                  
                
                   if(mousePressedOver(order_food) && text_5 === 0 ){
                    
                    order_food_Sound.play();
                    text_5 = 1
                                        
                    happiness = happiness + 10
                    health = health + 5
                    wealth = wealth - 5
              
                    order_food.destroy();
                    cooking.destroy();
                    next.visible = true;
                   
                    }
                 
                    if(mousePressedOver(cooking) && text_5 === 0){
                      
                      cooking_Sound.play();
                      text_5 = 2
        
                      happiness = happiness - 5
                      health = health + 10
        
                      order_food.destroy();
                      cooking.destroy();
                      next.visible = true;
        
                    }
                   
                    if(text_5 === 2){
                   
                   
                    
                      textSize(30);
                      fill ("black")
                      text ("Great! You worked hard and cooked for yourself ", 150, 200)
                      text("instead of just ordering from outside. ", 230, 250)
                    
                      
                              
                     healthy_food.visible = true;
                
                     
                     }
                  
                     if(text_5 === 1){
                  
                      
                      textSize(30);
                      fill ("black")
                      text ("Great! The food must be very delicious. ", 200, 250)
                      text(" But it was not so healthy and affected your health. ", 120, 300)
                                          
                      
                      
                      junk_food.visible = true;
                  
                      
                     }
                       
                      
                  }     

function spawnObstacles() {
   if(frameCount % 150 === 0 && frameCount <= 1200) {
     var obstacle = createSprite(1250,350,10,40);
     
     //obstacle.debug = true;
     obstacle.velocityX = -7;
     
     //generate random obstacles
     var rand = Math.round(random(1,6));
     switch(rand) {
       case 1: obstacle.addImage(obstacle1);
               checkValue = 1;
               break;
       case 2: obstacle.addImage(obstacle2);
               checkValue = 2;
               break;
       case 3: obstacle.addImage(obstacle3);
               checkValue = 3;
               break;
       case 4: obstacle.addImage(obstacle4);
               checkValue = 4;
               break;
       case 5: obstacle.addImage(obstacle5);
               checkValue = 5;
               break;
       case 6: obstacle.addImage(obstacle6);
               checkValue = 6;
               break;
       case 7: obstacle.addImage(obstacle7);
               checkValue = 7;
               break;   
       case 8: obstacle.addImage(obstacle8);
               checkValue = 8;
               break; 
       case 9: obstacle.addImage(obstacle9);
               checkValue = 9;
               break;    
       default: break;
     }
     
     //assign scale and lifetime to the obstacle           
     obstacle.scale = 0.2;
    // obstacle.lifetime = 300;
     //add each obstacle to the group
    obstaclesGroup.add(obstacle);

    if(frameCount>=1200){
     obstacle.destroy();
    }
   }
 }

 function spawnObstacles2() {
        if(frameCount % 100 === 0 && frameCount >= 1250 && frameCount<=2100) {
          var obstacle_child = createSprite(1250,height-200,10,40);
          //obstacle.debug = true;
          obstacle_child.velocityX = -9;
          
          //generate random obstacles
          var rand2 = Math.round(random(1,6));
          switch(rand2) {
            case 1: obstacle_child.addImage(obstacle_child1);
                    checkValue2 = 1;
                    break;
            case 2: obstacle_child.addImage(obstacle_child2);
                    checkValue2 = 2;
                    break;
            case 3: obstacle_child.addImage(obstacle_child3);
                    checkValue2 = 3;
                    break;
            case 4: obstacle_child.addImage(obstacle_child4);
                    checkValue2 = 4;
                    break;
            case 5: obstacle_child.addImage(obstacle_child5);
                    checkValue2 = 5;
                    break;
            case 6: obstacle_child.addImage(obstacle_child6);
                    checkValue2 = 6;
                    break;
            case 7: obstacle_child.addImage(obstacle_child7);
                    checkValue2 = 7;
                    break;   
            case 8: obstacle_child.addImage(obstacle_child8);
                    checkValue2 = 8;
                    break; 
            case 9: obstacle_child.addImage(obstacle_child9);
                    checkValue2 = 9;
                    break;    
            case 10: obstacle_child.addImage(obstacle_child10);
                    checkValue2 = 10;
                    break;      
            case 11: obstacle_child.addImage(obstacle_child11);
                    checkValue2 = 11;
                    break;      
            case 12: obstacle_child.addImage(obstacle_child12);
                    checkValue2 = 12;
                    break;           
            default: break;
          }
          
          //assign scale and lifetime to the obstacle           
          obstacle_child.scale = 0.2;
         // obstacle.lifetime = 300;
          //add each obstacle to the group
         obstaclesGroup_Child.add(obstacle_child);
        }
      }
 


      function pink_dots(){
        if(frameCount % 50 === 0){
        var pink = createSprite(900, 600);
        pink.scale=0.25
        pink.addImage(bigpinkIMG)
        pink.velocityX=-10
        pink.lifetime=200
        pinkGroup.add(pink)

       // if(frameCount<= 2100){
         //  pink.destroy();
        //}
        
      
        }
      }
      
      function green_dots(){
        if(frameCount % 50 === 0){
        var green = createSprite(900, 600);
        green.addImage(biggreenIMG)
        green.scale=0.25
        green.velocityX=-10
        green.lifetime=200
        greenGroup.add(green)
        
       // if(frameCount<= 2100){
         // green.destroy();
      // }
        }
      }
      
      
      function blue_dots(){
        if(frameCount % 50 === 0){
        var blue = createSprite(900, 600);
        blue.addImage(bigblueIMG)
        blue.scale=0.25
        blue.velocityX=-10
        blue.lifetime=200
        blueGroup.add(blue)
        
       // if(frameCount<= 2100){
         // blue.destroy();
      // }
        }
      }
      
      
      function red_dots(){
        if(frameCount % 50 === 0 ){
        var red = createSprite(900, 600);
        red.addImage(bigredIMG)
        red.scale=0.25
        red.velocityX=-10
        red.lifetime=200
        redGroup.add(red)
       
       // if(frameCount<= 2100){
         // red.destroy();
      // }
       
        }
      }

      function spawnColour1(){
        if(frameCount % 50 === 0 ){
         var colour1 = createSprite(900, 600);
         colour1.addImage(colour1_IMG)
         colour1.velocityX=-10
         colour1.lifetime=200
         colour1Group.add(colour1)
         colour1.scale=0.3
         
       
         } 
       }

       function spawnColour2(){
        if(frameCount % 50 === 0 ){
         var colour2 = createSprite(900, 600);
         colour2.addImage(colour2_IMG)
         colour2.velocityX=-10
         colour2.lifetime=200
         colour2Group.add(colour2)
         colour2.scale=0.3
         
       
         } 
       }

       function spawnColour3(){
        if(frameCount % 50 === 0 ){
         var colour3 = createSprite(900, 600);
         colour3.addImage(colour3_IMG)
         colour3.velocityX=-10
         colour3.lifetime=200
        colour3Group.add(colour3)
        colour3.scale=0.3
         
       
         } 
       }

       function spawnColour4(){
        if(frameCount % 50 === 0 ){
         var colour4 = createSprite(900, 600);
         colour4.addImage(colour4_IMG)
         colour4.velocityX=-10
         colour4.lifetime=200
         colour4Group.add(colour4)
         colour4.scale=0.3
         
       
         } 
       }

       function spawnColour5(){
        if(frameCount % 50 === 0 ){
         var colour5 = createSprite(900, 600);
         colour5.addImage(colour5_IMG)
         colour5.velocityX=-10
         colour5.lifetime=200
         colour5Group.add(colour5)
         colour5.scale=0.3
         
       
         } 
       }
      