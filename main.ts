namespace SpriteKind {
    export const Win = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    if (And.overlapsWith(Banan)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan2)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan3)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan4)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan5)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan6)) {
        controller.moveSprite(And)
    } else {
        info.changeLifeBy(-1)
        And.setPosition(80, 250)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    if (And.overlapsWith(Banan)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan2)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan3)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan4)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan5)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan6)) {
        controller.moveSprite(And)
    } else {
        info.changeLifeBy(-1)
        And.setPosition(80, 250)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Win, function (sprite, otherSprite) {
    if (info.score() >= 5) {
        game.over(true)
    }
})
scene.onHitWall(SpriteKind.Enemy, function (sprite, location) {
    Ceres.setBounceOnWall(true)
    albani.setBounceOnWall(true)
    Ceres_1.setBounceOnWall(true)
    Albani_2.setBounceOnWall(true)
    Ceres2.setBounceOnWall(true)
    Albani1.setBounceOnWall(true)
    Banan.setBounceOnWall(true)
    Banan1.setBounceOnWall(true)
    Banan2.setBounceOnWall(true)
    Banan3.setBounceOnWall(true)
    Banan4.setBounceOnWall(true)
    Banan5.setBounceOnWall(true)
    Banan6.setBounceOnWall(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    if (And.overlapsWith(Banan)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan2)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan3)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan4)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan5)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan6)) {
        controller.moveSprite(And)
    } else {
        info.changeLifeBy(-1)
        And.setPosition(80, 250)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    if (And.overlapsWith(Banan)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan1)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan2)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan3)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan4)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan5)) {
        controller.moveSprite(And)
    } else if (And.overlapsWith(Banan6)) {
        controller.moveSprite(And)
    } else {
        info.changeLifeBy(-1)
        And.setPosition(80, 250)
    }
})
info.onLifeZero(function () {
    game.over(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(Ballon_1, assets.tile`myTile`)
    tiles.placeOnRandomTile(Ballon_2, assets.tile`myTile2`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    And.setPosition(80, 250)
})
let Ballon_2: Sprite = null
let Ballon_1: Sprite = null
let Albani1: Sprite = null
let Ceres2: Sprite = null
let Albani_2: Sprite = null
let Ceres_1: Sprite = null
let albani: Sprite = null
let Ceres: Sprite = null
let And: Sprite = null
let Banan6: Sprite = null
let Banan5: Sprite = null
let Banan4: Sprite = null
let Banan3: Sprite = null
let Banan2: Sprite = null
let Banan1: Sprite = null
let Banan: Sprite = null
tiles.setTilemap(tilemap`level2`)
info.setScore(0)
info.setLife(3)
Banan = sprites.create(img`
    eee99999999999999999999999999999
    eee55999999889988999999999999999
    eee55599999998889999999999888899
    95555555999999999999999998899999
    99555551ff9999999998888888999999
    99555551ff9999999999999999999559
    99555551115599999999999999995559
    99955555555555599999999955555559
    99955555555555559999995555555559
    99999555555555555999555555555599
    999995555555555555ff555555555599
    999999955555555555ff555555555999
    989999955555555555ff555555559999
    99888999955555555555555555599999
    99998899995555555555555559999999
    99999999999995555555555999999999
    `, SpriteKind.Projectile)
Banan.setPosition(200, 120)
Banan.setVelocity(-20, 0)
Banan1 = sprites.create(img`
    eee99999999999999999999999999999
    eee55999999889988999999999999999
    eee55599999998889999999999888899
    95555555999999999999999998899999
    99555551ff9999999998888888999999
    99555551ff9999999999999999999559
    99555551115599999999999999995559
    99955555555555599999999955555559
    99955555555555559999995555555559
    99999555555555555999555555555599
    999995555555555555ff555555555599
    999999955555555555ff555555555999
    989999955555555555ff555555559999
    99888999955555555555555555599999
    99998899995555555555555559999999
    99999999999995555555555999999999
    `, SpriteKind.Projectile)
Banan1.setPosition(124, 105)
Banan1.setVelocity(15, 0)
Banan2 = sprites.create(img`
    eee99999999999999999999999999999
    eee55999999889988999999999999999
    eee55599999998889999999999888899
    95555555999999999999999998899999
    99555551ff9999999998888888999999
    99555551ff9999999999999999999559
    99555551115599999999999999995559
    99955555555555599999999955555559
    99955555555555559999995555555559
    99999555555555555999555555555599
    999995555555555555ff555555555599
    999999955555555555ff555555555999
    989999955555555555ff555555559999
    99888999955555555555555555599999
    99998899995555555555555559999999
    99999999999995555555555999999999
    `, SpriteKind.Projectile)
Banan2.setPosition(87, 90)
Banan2.setVelocity(17, 0)
Banan3 = sprites.create(img`
    eee99999999999999999999999999999
    eee55999999889988999999999999999
    eee55599999998889999999999888899
    95555555999999999999999998899999
    99555551ff9999999998888888999999
    99555551ff9999999999999999999559
    99555551115599999999999999995559
    99955555555555599999999955555559
    99955555555555559999995555555559
    99999555555555555999555555555599
    999995555555555555ff555555555599
    999999955555555555ff555555555999
    989999955555555555ff555555559999
    99888999955555555555555555599999
    99998899995555555555555559999999
    99999999999995555555555999999999
    `, SpriteKind.Projectile)
Banan3.setPosition(20, 75)
Banan3.setVelocity(14, 0)
Banan4 = sprites.create(img`
    eee99999999999999999999999999999
    eee55999999889988999999999999999
    eee55599999998889999999999888899
    95555555999999999999999998899999
    99555551ff9999999998888888999999
    99555551ff9999999999999999999559
    99555551115599999999999999995559
    99955555555555599999999955555559
    99955555555555559999995555555559
    99999555555555555999555555555599
    999995555555555555ff555555555599
    999999955555555555ff555555555999
    989999955555555555ff555555559999
    99888999955555555555555555599999
    99998899995555555555555559999999
    99999999999995555555555999999999
    `, SpriteKind.Projectile)
Banan4.setPosition(65, 60)
Banan4.setVelocity(16, 0)
Banan5 = sprites.create(img`
    eee99999999999999999999999999999
    eee55999999889988999999999999999
    eee55599999998889999999999888899
    95555555999999999999999998899999
    99555551ff9999999998888888999999
    99555551ff9999999999999999999559
    99555551115599999999999999995559
    99955555555555599999999955555559
    99955555555555559999995555555559
    99999555555555555999555555555599
    999995555555555555ff555555555599
    999999955555555555ff555555555999
    989999955555555555ff555555559999
    99888999955555555555555555599999
    99998899995555555555555559999999
    99999999999995555555555999999999
    `, SpriteKind.Projectile)
Banan5.setPosition(40, 45)
Banan5.setVelocity(18, 0)
Banan6 = sprites.create(img`
    eee77777777777777777777777777777
    eee55777777777777777777777777777
    eee55577777777777777777777777777
    75555555777777777777777777777777
    99555551ff9999999998888888999999
    99555551ff9999999999999999999559
    99555551115599999999999999995559
    99955555555555599999999955555559
    99955555555555559999995555555559
    99999555555555555999555555555599
    999995555555555555ff555555555599
    999999955555555555ff555555555999
    989999955555555555ff555555559999
    99888999955555555555555555599999
    99998899995555555555555559999999
    99999999999995555555555999999999
    `, SpriteKind.Projectile)
Banan6.setPosition(85, 37)
Banan6.setVelocity(-14, 0)
And = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 8 8 8 8 . . . . . . . . . 
    . . 8 8 8 8 8 8 . . . . . . . . 
    . . 5 5 f 5 5 . . . . . . . . . 
    . 4 4 5 5 5 5 5 . . . . . . . . 
    4 4 4 5 5 5 5 5 . . . . . 5 5 . 
    . . . 5 5 5 5 5 5 . . 5 5 5 5 . 
    . . . . 5 5 5 5 5 5 5 5 5 5 5 . 
    . . . 5 5 5 5 5 f f f 5 5 5 5 . 
    . . . 5 5 5 5 5 5 5 5 f 5 5 5 . 
    . . . . 5 5 5 5 f f f 5 5 5 . . 
    . . . . . 5 5 5 5 5 5 5 5 . . . 
    . . . . . . 2 2 . . 2 2 . . . . 
    . . . . . 2 2 2 . 2 2 2 . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
And.setPosition(80, 250)
scene.cameraFollowSprite(And)
controller.moveSprite(And)
Ceres = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . 2 2 6 2 2 6 . . . . . 
    . . . . . 2 5 6 2 5 6 . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . 6 6 7 7 6 6 . . . . . 
    . . . . . 6 7 7 7 7 6 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 2 2 2 2 7 . . . . . 
    . . . . . 2 2 7 7 2 2 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 6 7 7 7 7 6 . . . . . 
    . . . . . 6 6 7 7 6 6 . . . . . 
    `, SpriteKind.Enemy)
albani = sprites.create(img`
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 5 5 7 5 5 7 . . . . . 
    . . . . . 5 f 7 5 f 7 . . . . . 
    . . . . . 7 7 7 7 7 7 2 . . . . 
    . . . . . 7 7 9 9 7 7 2 . . . . 
    . . . . . 7 9 9 9 9 7 2 2 . . . 
    . . . . . 7 9 9 9 9 7 2 2 . . . 
    . . . . . 7 7 9 9 7 7 2 2 2 . . 
    . . . . . 7 7 7 7 7 7 2 2 2 . . 
    . . . . . . 7 7 7 7 2 2 2 2 2 . 
    . . . . . . . 7 7 2 2 2 2 2 2 . 
    . . . . . . . 7 7 . 2 2 2 2 . . 
    . . . . . . 2 7 7 2 . . . . . . 
    . . . . . 2 2 5 5 2 2 . . . . . 
    . . . . 2 5 5 5 4 5 5 2 . . . . 
    . . . . . 2 5 4 4 5 2 . . . . . 
    `, SpriteKind.Enemy)
Ceres.setPosition(250, 230)
Ceres.setVelocity(-60, 0)
albani.setPosition(0, 215)
albani.setVelocity(60, 0)
Ceres_1 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . 2 2 6 2 2 6 . . . . . 
    . . . . . 2 5 6 2 5 6 . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . 6 6 7 7 6 6 . . . . . 
    . . . . . 6 7 7 7 7 6 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 2 2 2 2 7 . . . . . 
    . . . . . 2 2 7 7 2 2 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 6 7 7 7 7 6 . . . . . 
    . . . . . 6 6 7 7 6 6 . . . . . 
    `, SpriteKind.Enemy)
Ceres_1.setPosition(210, 200)
Ceres_1.setVelocity(-80, 0)
Albani_2 = sprites.create(img`
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 5 5 7 5 5 7 . . . . . 
    . . . . . 5 f 7 5 f 7 . . . . . 
    . . . . . 7 7 7 7 7 7 2 . . . . 
    . . . . . 7 7 9 9 7 7 2 . . . . 
    . . . . . 7 9 9 9 9 7 2 2 . . . 
    . . . . . 7 9 9 9 9 7 2 2 . . . 
    . . . . . 7 7 9 9 7 7 2 2 2 . . 
    . . . . . 7 7 7 7 7 7 2 2 2 . . 
    . . . . . . 7 7 7 7 2 2 2 2 2 . 
    . . . . . . . 7 7 2 2 2 2 2 2 . 
    . . . . . . . 7 7 . 2 2 2 2 . . 
    . . . . . . 2 7 7 2 . . . . . . 
    . . . . . 2 2 5 5 2 2 . . . . . 
    . . . . 2 5 5 5 4 5 5 2 . . . . 
    . . . . . 2 5 4 4 5 2 . . . . . 
    `, SpriteKind.Enemy)
Albani_2.setPosition(20, 182)
Albani_2.setVelocity(90, 0)
Ceres2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . 6 6 6 6 . . . . . . 
    . . . . . 2 2 6 2 2 6 . . . . . 
    . . . . . 2 5 6 2 5 6 . . . . . 
    . . . . . 6 6 6 6 6 6 . . . . . 
    . . . . . 6 6 7 7 6 6 . . . . . 
    . . . . . 6 7 7 7 7 6 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 7 2 2 2 2 7 . . . . . 
    . . . . . 2 2 7 7 2 2 . . . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 6 7 7 7 7 6 . . . . . 
    . . . . . 6 6 7 7 6 6 . . . . . 
    `, SpriteKind.Enemy)
Ceres2.setPosition(200, 168)
Ceres2.setVelocity(80, 0)
Albani1 = sprites.create(img`
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . . . 5 5 7 5 5 7 . . . . . 
    . . . . . 5 f 7 5 f 7 . . . . . 
    . . . . . 7 7 7 7 7 7 2 . . . . 
    . . . . . 7 7 9 9 7 7 2 . . . . 
    . . . . . 7 9 9 9 9 7 2 2 . . . 
    . . . . . 7 9 9 9 9 7 2 2 . . . 
    . . . . . 7 7 9 9 7 7 2 2 2 . . 
    . . . . . 7 7 7 7 7 7 2 2 2 . . 
    . . . . . . 7 7 7 7 2 2 2 2 2 . 
    . . . . . . . 7 7 2 2 2 2 2 2 . 
    . . . . . . . 7 7 . 2 2 2 2 . . 
    . . . . . . 2 7 7 2 . . . . . . 
    . . . . . 2 2 5 5 2 2 . . . . . 
    . . . . 2 5 5 5 4 5 5 2 . . . . 
    . . . . . 2 5 4 4 5 2 . . . . . 
    `, SpriteKind.Enemy)
Albani1.setPosition(45, 153)
Albani1.setVelocity(-60, 0)
let Prinsesse = sprites.create(img`
    . . . . . 5 . 5 . 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . 5 5 5 5 5 . . . . . . 
    . . . . . . . a a . . . . . . . 
    . . . . . . a a a a . . . . . . 
    . . . . . c c a c c a . . . . . 
    . . . . . c 1 a c 1 a . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . 3 a 3 3 a 3 . . . . . 
    . . . . . a 3 a a 3 a . . . . . 
    . . . . . a a 3 3 a a . . . . . 
    . . . . . 3 3 3 3 3 3 . . . . . 
    . . . . . a a a a a a . . . . . 
    . . . . . a a a a a a . . . . . 
    `, SpriteKind.Win)
tiles.placeOnTile(Prinsesse, tiles.getTileLocation(5, 0))
Ballon_1 = sprites.create(img`
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Ballon_1, assets.tile`myTile`)
Ballon_2 = sprites.create(img`
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . 2 2 2 2 2 . . . . . . 
    . . . . . . 2 2 2 . . . . . . . 
    . . . . . . . 2 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . . 1 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . 1 1 . . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(Ballon_2, assets.tile`myTile2`)
