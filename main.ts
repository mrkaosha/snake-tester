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
let y = 0
let x = 0
let vy = 0
let vx = 0
let snake_head = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    . . . . . . . . 3 3 3 3 3 3 3 3 
    `, SpriteKind.Player)
snake_head.setPosition(0, 0)
vx = 1
vy = 0
game.onUpdate(function () {
    snake_head.x += vx
    snake_head.y += vy
    x = snake_head.x
    y = snake_head.y
})
