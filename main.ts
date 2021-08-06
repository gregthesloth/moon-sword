namespace SpriteKind {
    export const Sword = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("You are trapped in the sun void where  you will defeat all kinds of demons so look around", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myEnemy.setFlag(SpriteFlag.Invisible, true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Sword, function (sprite, otherSprite) {
    otherSprite.destroy()
    animation.runImageAnimation(
    sprite,
    assets.animation`Moon lava gets sword`,
    300,
    false
    )
    pause(4800)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 5 1 1 . . . . . . 
        . . . . . 1 5 5 5 1 . . . . . . 
        . . . . . 1 1 5 1 1 . . . . . . 
        . . . . . 1 1 1 1 1 . . . . . . 
        . . . 1 1 1 5 1 1 1 1 . . . . . 
        . . 5 1 1 1 5 5 1 1 5 . . . . . 
        . . 5 1 1 5 5 5 5 1 5 5 . . . . 
        . . 5 . 1 5 5 5 5 1 . 5 . . . . 
        . . 5 . . 1 5 5 5 . . 5 5 . . . 
        . . 5 . . 1 1 1 5 . . . 5 . . . 
        . . 5 . . 5 . . 5 . . . 1 . . . 
        . . . . . 1 . . 1 . . . . . . . 
        . . . . . 1 . . 1 . . . . . . . 
        . . . . . 5 . . 5 . . . . . . . 
        `, SpriteKind.Enemy)
    myEnemy.setPosition(26, 25)
    myEnemy.follow(sprite, 40)
})
let myEnemy: Sprite = null
scene.setBackgroundColor(13)
let Moon_sword = sprites.create(img`
    . . . . . . 1 1 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . 3 . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . 1 1 1 1 1 . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    `, SpriteKind.Sword)
info.setLife(3)
let Moon_lava = sprites.create(assets.image`Moon lava`, SpriteKind.Player)
Moon_lava.setStayInScreen(true)
Moon_lava.setPosition(81, 120)
controller.moveSprite(Moon_lava, 100, 100)
forever(function () {
    music.playMelody("B F C C5 C C5 G F ", 120)
})
