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
let updatevy = 0
let updatevx = 0
let vy = 0
let vx = 0
scene.setBackgroundImage(assets.image`Grid`)
let snake_head = sprites.create(assets.image`snake block`, SpriteKind.Player)
snake_head.setPosition(2, 2)
vx = 1
vy = 0
game.onUpdate(function () {
    if ((snake_head.x - 2) % 10 == 0 && (snake_head.y - 2) % 10 == 0) {
        updatevx = vx
        updatevy = vy
    }
    snake_head.x += updatevx
    snake_head.y += updatevy
})
