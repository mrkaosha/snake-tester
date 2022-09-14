controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = -1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = -1
    vy = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 1
    vy = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    vx = 0
    vy = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (eatenflag == 0) {
        foodx = randint(0, 15) * 10
        foody = randint(0, 11) * 10
    }
    eatenflag += 1
})
let updatevy = 0
let updatevx = 0
let foody = 0
let foodx = 0
let vy = 0
let vx = 0
let eatenflag = 0
scene.setBackgroundImage(assets.image`Grid`)
eatenflag = 0
let snake_head = sprites.create(assets.image`snake block`, SpriteKind.Player)
let snakefood = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    . . . . . . 5 5 5 5 5 5 5 5 5 5 
    `, SpriteKind.Food)
snake_head.setPosition(2, 2)
vx = 1
vy = 0
foodx = 80
foody = 60
game.onUpdate(function () {
    if ((snake_head.x - 2) % 10 == 0 && (snake_head.y - 2) % 10 == 0) {
        updatevx = vx
        updatevy = vy
    }
    snake_head.x += updatevx
    snake_head.y += updatevy
    snakefood.setPosition(foodx + 2, foody + 2)
    if (eatenflag >= 2) {
        eatenflag = 0
    }
})
