namespace SpriteKind {
    export const Collider1 = SpriteKind.create()
    export const Collider2 = SpriteKind.create()
    export const Line = SpriteKind.create()
}
info.player1.onScore(50, function () {
    game.setGameOverMessage(true, "Jugador 1 guanya!")
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    pause(1)
    if (otherSprite.x > 60) {
        otherSprite.right = sprite.x
    } else if (otherSprite.x < 60) {
        otherSprite.left = sprite.right
    }
    otherSprite.setVelocity(otherSprite.vx * -1.1, otherSprite.vy)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Collider1, function (sprite, otherSprite) {
    info.player2.changeScoreBy(1)
    scene.cameraShake(4, 500)
    pause(500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Collider2, function (sprite, otherSprite) {
    info.player1.changeScoreBy(1)
    scene.cameraShake(4, 500)
    pause(500)
})
info.player2.onScore(50, function () {
    game.setGameOverMessage(true, "Jugador 2 guanya!")
    game.gameOver(true)
})
let mySprite = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    . . . . . . . 1 1 1 . . . . . . 
    `, SpriteKind.Player)
let mySprite4 = sprites.create(img`
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    `, SpriteKind.Collider1)
let mySprite5 = sprites.create(img`
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    ffff
    `, SpriteKind.Collider2)
let mySprite6 = sprites.create(img`
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    ....
    ....
    ....
    ....
    ....
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    ....
    ....
    ....
    ....
    ....
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    ....
    ....
    ....
    ....
    ....
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    1111
    `, SpriteKind.Line)
mySprite2.setPosition(150, 60)
controller.moveSprite(mySprite, 0, 150)
mySprite.setPosition(10, 60)
mySprite4.setPosition(0, 60)
mySprite5.setPosition(160, 60)
controller.player2.moveSprite(mySprite2, 0, 150)
let mySprite3 = sprites.create(img`
    . . . 1 1 . . . 
    . 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 . 
    1 1 1 1 1 1 1 1 
    1 1 1 1 1 1 1 1 
    . 1 1 1 1 1 1 . 
    . 1 1 1 1 1 1 . 
    . . . 1 1 . . . 
    `, SpriteKind.Projectile)
mySprite.setBounceOnWall(true)
mySprite2.setBounceOnWall(true)
mySprite3.setBounceOnWall(true)
mySprite3.setVelocity(randint(-100, 100), randint(180, -180))
forever(function () {
    if (24 < info.player2.score()) {
        scene.cameraShake(4, 999999999999999)
    } else if (24 < info.player1.score()) {
        scene.cameraShake(4, 999999999999999)
    }
})
