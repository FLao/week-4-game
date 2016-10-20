$(document).ready(function(){ // triggers the following script soon as the document is loaded //

    var playerChosen = false;
    var enemyChosen = false;

        $(".firstPortrait").on("click", function(){
            if (!playerChosen) {
                $(".secondPortrait").css("background-color", "#ff0000");
                $(".thirdPortrait").css("background-color", "#ff0000");
                $(".fourthPortrait").css("background-color", "#ff0000");
                $("#firstCharacter").appendTo(".yourCharacter");
                $("#secondCharacter").appendTo(".yourEnemies");
                $("#thirdCharacter").appendTo(".yourEnemies");
                $("#fourthCharacter").appendTo(".yourEnemies");
                playerChosen = true;
                characterOne.isPlayer = true;
        } 

            else if(playerChosen && !enemyChosen) {
                $("#firstCharacter").appendTo(".yourEnemy");
                $(".firstPortrait").css("background-color", "#000000"); 
                enemyChosen = true;
                characterOne.isEnemy = true;
            }
        });

        $(".secondPortrait").on("click", function(){
            if (!playerChosen) {
                $(".firstPortrait").css("background-color", "#ff0000");
                $(".thirdPortrait").css("background-color", "#ff0000");
                $(".fourthPortrait").css("background-color", "#ff0000");
                $("#secondCharacter").appendTo(".yourCharacter");
                $("#firstCharacter").appendTo(".yourEnemies");
                $("#thirdCharacter").appendTo(".yourEnemies");
                $("#fourthCharacter").appendTo(".yourEnemies");
                playerChosen = true;
                characterTwo.isPlayer = true;
            }

            else if (playerChosen && !enemyChosen) {
                $("#secondCharacter").appendTo(".yourEnemy");
                $(".secondPortrait").css("background-color", "#000000"); 
                enemyChosen = true;
                characterTwo.isEnemy = true;
            }
        });

        $(".thirdPortrait").on("click", function(){
            if (!playerChosen) {
                $(".firstPortrait").css("background-color", "#ff0000");
                $(".secondPortrait").css("background-color", "#ff0000");
                $(".fourthPortrait").css("background-color", "#ff0000");
                $("#thirdCharacter").appendTo(".yourCharacter");
                $("#firstCharacter").appendTo(".yourEnemies");
                $("#secondCharacter").appendTo(".yourEnemies");
                $("#fourthCharacter").appendTo(".yourEnemies");
                playerChosen = true;
                characterThree.isPlayer = true;
            }

            else if(playerChosen && !enemyChosen) {
                $("#thirdCharacter").appendTo(".yourEnemy");
                $(".thirdPortrait").css("background-color", "#000000"); 
                enemyChosen = true;
                characterThree.isEnemy = true;
            }
        });

        $(".fourthPortrait").on("click", function() {
            if (!playerChosen) {
                $(".firstPortrait").css("background-color", "#ff0000");
                $(".secondPortrait").css("background-color", "#ff0000");
                $(".thirdPortrait").css("background-color", "#ff0000");
                $("#fourthCharacter").appendTo(".yourCharacter");
                $("#firstCharacter").appendTo(".yourEnemies");
                $("#secondCharacter").appendTo(".yourEnemies");
                $("#thirdCharacter").appendTo(".yourEnemies");
                playerChosen = true;
                characterFour.isPlayer = true;
            }

            else if(playerChosen && !enemyChosen) {
                $("#fourthCharacter").appendTo(".yourEnemy");
                $(".fourthPortrait").css("background-color", "#000000"); 
                enemyChosen = true;
                characterFour.isEnemy = true;
            }
        });

    $(".attack").on("click", function() {

        if(characterOne.isPlayer) 
            characterOneVersus();

        else if(characterTwo.isPlayer) 
            characterTwoVersus();

        else if(characterThree.isPlayer) 
            characterThreeVersus();

        else if(characterFour.isPlayer) 
            characterFourVersus();
    });

    function characterOneVersus() {
         // characterOne versus everybody else
        if((characterTwo.isEnemy) && (!characterTwo.isDefeated)) {
            characterOne.performAttack(characterTwo.name);
            characterTwo.getHealthPoints(characterOne.attackPower);

            if(!characterTwo.isDefeated) {
                characterTwo.performCounterAttack(characterOne.name);
                characterOne.getHealthPoints(characterTwo.counterAttackPower);
            }
            
            characterOne.increaseAttackPower();
        }

        else if((characterThree.isEnemy) && (!characterThree.isDefeated)) {
            characterOne.performAttack(characterThree.name);
            characterThree.getHealthPoints(characterOne.attackPower);

            if(!characterThree.isDefeated) {
                characterThree.performCounterAttack(characterOne.name);
                characterOne.getHealthPoints(characterThree.counterAttackPower);
            }
            
            characterOne.increaseAttackPower();
        }

        else if((characterFour.isEnemy) && (!characterFour.isDefeated)) {
            characterOne.performAttack(characterFour.name);
            characterFour.getHealthPoints(characterOne.attackPower);

            if(!characterFour.isDefeated) {
                characterFour.performCounterAttack(characterOne.name);
                characterOne.getHealthPoints(characterFour.counterAttackPower);
            }
            
            characterOne.increaseAttackPower();
        }

        else 
            $("#playerAction").html("There is no enemy to attack.");
    }

    function characterTwoVersus() {
    // characterTwo versus everybody else
        if((characterOne.isEnemy) && (!characterOne.isDefeated)) {
            characterTwo.performAttack(characterOne.name);
            characterOne.getHealthPoints(characterTwo.attackPower);
            
            if(!characterOne.isDefeated) {
                characterOne.performCounterAttack(characterTwo.name);
                characterTwo.getHealthPoints(characterOne.counterAttackPower);
            }
            
            characterTwo.increaseAttackPower();
        }

        else if((characterThree.isEnemy) && (!characterThree.isDefeated)) {
            characterTwo.performAttack(characterThree.name);
            characterThree.getHealthPoints(characterTwo.attackPower);

            if(!characterThree.isDefeated) {    
                characterThree.performCounterAttack(characterTwo.name);
                characterTwo.getHealthPoints(characterThree.counterAttackPower);
            }
            
            characterTwo.increaseAttackPower();
        }

        else if((characterFour.isEnemy) && (!characterFour.isDefeated)) {
            characterTwo.performAttack(characterFour.name);
            characterFour.getHealthPoints(characterTwo.attackPower);
            
            if(!characterFour.isDefeated) {
                characterFour.performCounterAttack(characterTwo.name);
                characterTwo.getHealthPoints(characterFour.counterAttackPower);
            }
            
            characterTwo.increaseAttackPower();
        }

        else 
            $("#playerAction").html("There is no enemy to attack.");
    }

    function characterThreeVersus() {
    // characterThree versus everybody else
        if((characterOne.isEnemy) && (!characterOne.isDefeated)) {
            characterThree.performAttack(characterOne.name);
            characterOne.getHealthPoints(characterThree.attackPower);

            if(!characterOne.isDefeated) {
                characterOne.performCounterAttack(characterThree.name);
                characterThree.getHealthPoints(characterOne.counterAttackPower);
            }
            
            characterThree.increaseAttackPower();
        }

        else if((characterTwo.isEnemy) && (!characterTwo.isDefeated)) {
            characterThree.performAttack(characterTwo.name);
            characterTwo.getHealthPoints(characterThree.attackPower);
            
            if(!characterTwo.isDefeated) {
                characterTwo.performCounterAttack(characterThree.name);
                characterThree.getHealthPoints(characterTwo.counterAttackPower);
            }

            characterThree.increaseAttackPower();
        }

        else if((characterFour.isEnemy) && (!characterFour.isDefeated)) {
            characterThree.performAttack(characterFour.name);
            characterFour.getHealthPoints(characterThree.attackPower);

            if(!characterFour.isDefeated) {
                characterFour.performCounterAttack(characterThree.name);
                characterThree.getHealthPoints(characterFour.counterAttackPower);
            }
            
            characterThree.increaseAttackPower();
        }

        else 
            $("#playerAction").html("There is no enemy to attack.");
    }

    function characterFourVersus() {
        // characterFour versus everybody else
        if((characterOne.isEnemy) && (!characterOne.isDefeated)) {
            characterFour.performAttack(characterOne.name);
            characterOne.getHealthPoints(characterFour.attackPower);
            
            if(!characterOne.isDefeated) {
                characterOne.performCounterAttack(characterFour.name);
                characterFour.getHealthPoints(characterOne.counterAttackPower);
            }
            
            characterFour.increaseAttackPower();
        }

        else if((characterTwo.isEnemy) && (!characterTwo.isDefeated)) {
            characterFour.performAttack(characterTwo.name);
            characterTwo.getHealthPoints(characterFour.attackPower);

            if(!characterTwo.isDefeated) {
                characterTwo.performCounterAttack(characterFour.name);
                characterFour.getHealthPoints(characterTwo.counterAttackPower);
            }
            
            characterFour.increaseAttackPower();
        }

        else if((characterThree.isEnemy) && (!characterThree.isDefeated)) {
            characterFour.performAttack(characterThree.name);
            characterThree.getHealthPoints(characterFour.attackPower);
            
            if(!characterThree.isDefeated) {
                characterThree.performCounterAttack(characterFour.name);
                characterFour.getHealthPoints(characterThree.counterAttackPower);
            }
        
            characterFour.increaseAttackPower();
        }

        else 
            $("#playerAction").html("There is no enemy to attack.");
    }

    function checkGameOver() {
        if((characterOne.isPlayer) && (characterOne.isDefeated) || (characterTwo.isPlayer) && (characterTwo.isDefeated) || (characterThree.isPlayer) && (characterThree.isDefeated) || (characterFour.isPlayer) && (characterFour.isDefeated)) {
                $("#gameEnds").html("Game over! Player loses!");
                restartGame();
        }
        else if((characterOne.isPlayer) && (characterTwo.isDefeated) && (characterThree.isDefeated) && (characterFour.isDefeated) || (characterTwo.isPlayer) && (characterOne.isDefeated) && (characterThree.isDefeated) && (characterFour.isDefeated) || (characterThree.isPlayer) && (characterOne.isDefeated) && (characterTwo.isDefeated) && (characterFour.isDefeated) || (characterFour.isPlayer) && (characterOne.isDefeated) && (characterTwo.isDefeated) && (characterThree.isDefeated)) {
                $("#gameEnds").html("Congrats! Player wins!");
                restartGame();
        }
    }

    function resetEnemy() {
        enemyChosen = false;
    }

    function restartGame() {
        $(".new").append("<button type='button' class='btn btn-default restart'>Restart</button>");
        $(".restart").on("click", function() {
            location.reload();
       });
    }

    var characterOne = {
        name: "Luke Skywalker",
        healthPoints: 85,
        attackPower: 12,
        counterAttackPower: 15,
        isPlayer: false,
        isEnemy: false,
        isDefeated: false,

        increaseAttackPower: function() {
            this.attackPower += 12;    
        },

        getHealthPoints: function(damage) {
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0) {
                $("#hp1").html("0");
                this.isDefeated = true;
                $("#firstCharacter").remove();
                $("#resultAction").html(this.name + " is defeated.");
                resetEnemy();
                checkGameOver();
            }

            else                 
                $("#hp1").html(this.healthPoints);
        },

        performAttack: function(n) {
            $("#playerAction").html(this.name + " attacks " + n + " for " + this.attackPower + ".");
        },

        performCounterAttack: function(n) {
            $("#enemyAction").html(this.name + " counterattacks " + n + " for " + this.counterAttackPower + ".");   
        }
    }

    var characterTwo = {
        name: "Princess Leia",
        healthPoints: 80,
        attackPower: 10,
        counterAttackPower: 25,
        isPlayer: false,
        isEnemy: false,
        isDefeated: false,

        increaseAttackPower: function() {
            this.attackPower += 10;    
        },

        getHealthPoints: function(damage) {
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0) {
                $("#hp2").html("0");
                this.isDefeated = true;
                $("#secondCharacter").remove();
                $("#resultAction").html(this.name + " is defeated.");
                resetEnemy();
                checkGameOver();
            }

            else 
                $("#hp2").html(this.healthPoints);
        },

        performAttack: function(n) {
            $("#playerAction").html(this.name + " attacks " + n + " for " + this.attackPower + ".");
        },

        performCounterAttack: function(n) {
            $("#enemyAction").html(this.name + " counterattacks " + n + " for " + this.counterAttackPower + ".");
        }
    }

    var characterThree = {
        name: "Darth Vader",
        healthPoints: 100,
        attackPower: 10,
        counterAttackPower: 20,
        isPlayer: false,
        isEnemy: false,
        isDefeated: false,

        increaseAttackPower: function() {
            this.attackPower += 10;    
        },

        getHealthPoints: function(damage) {
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0) {
                $("#hp3").html("0");
                this.isDefeated = true;
                $("#thirdCharacter").remove();
                $("#resultAction").html(this.name + " is defeated.");
                resetEnemy();
                checkGameOver();
            }

            else 
                $("#hp3").html(this.healthPoints);
        },

        performAttack: function(n) {
            $("#playerAction").html(this.name + " attacks " + n + " for " + this.attackPower + ".");
        },

        performCounterAttack: function(n) {
            $("#enemyAction").html(this.name + " counterattacks " + n + " for " + this.counterAttackPower + ".");
        }
    }

    var characterFour = {
        name: "Stormtrooper",
        healthPoints: 85,
        attackPower: 15,
        counterAttackPower: 10,
        isPlayer: false,
        isEnemy: false,
        isDefeated: false,

        increaseAttackPower: function() {
            this.attackPower += 15;   
        },

        getHealthPoints: function(damage) {
            this.healthPoints = this.healthPoints - damage;
            if(this.healthPoints <= 0) {
                $("#hp4").html("0");
                this.isDefeated = true;
               $("#fourthCharacter").remove();
               $("#resultAction").html(this.name + " is defeated.");
                resetEnemy();
                checkGameOver();
            }

            else 
                $("#hp4").html(this.healthPoints);
        },

        performAttack: function(n) {
            $("#playerAction").html(this.name + " attacks " + n + " for " + this.attackPower + ".");
        },

        performCounterAttack: function(n) {
             $("#enemyAction").html(this.name + " counterattacks " + n + " for " + this.counterAttackPower + ".");
        }
    }
});
