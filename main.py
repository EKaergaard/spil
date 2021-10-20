@namespace
class SpriteKind:
    Win = SpriteKind.create()

def on_overlap_tile(sprite, location):
    info.change_life_by(-1)
    And.set_position(80, 250)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile4
    """),
    on_overlap_tile)

def on_overlap_tile2(sprite2, location2):
    info.change_life_by(-1)
    And.set_position(80, 250)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
    """),
    on_overlap_tile2)

def on_on_overlap(sprite3, otherSprite):
    if info.score() >= 5:
        game.over(True)
sprites.on_overlap(SpriteKind.player, SpriteKind.Win, on_on_overlap)

def on_hit_wall(sprite4, location3):
    Ceres.set_bounce_on_wall(True)
    albani.set_bounce_on_wall(True)
    Ceres_1.set_bounce_on_wall(True)
    Albani_2.set_bounce_on_wall(True)
    Ceres2.set_bounce_on_wall(True)
    Albani1.set_bounce_on_wall(True)
    Banan.set_bounce_on_wall(True)
    Banan1.set_bounce_on_wall(True)
    Banan2.set_bounce_on_wall(True)
    Banan3.set_bounce_on_wall(True)
    Banan4.set_bounce_on_wall(True)
    Banan5.set_bounce_on_wall(True)
    Banan6.set_bounce_on_wall(True)
scene.on_hit_wall(SpriteKind.enemy, on_hit_wall)

def on_overlap_tile3(sprite5, location4):
    info.change_life_by(-1)
    And.set_position(80, 250)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile5
    """),
    on_overlap_tile3)

def on_life_zero():
    game.over(False)
info.on_life_zero(on_life_zero)

def on_on_overlap2(sprite6, otherSprite2):
    info.change_score_by(1)
    tiles.place_on_random_tile(Ballon_1, assets.tile("""
        myTile
    """))
    tiles.place_on_random_tile(Ballon_2, assets.tile("""
        myTile2
    """))
sprites.on_overlap(SpriteKind.player, SpriteKind.food, on_on_overlap2)

def on_on_overlap3(sprite7, otherSprite3):
    info.change_life_by(-1)
    And.set_position(80, 250)
sprites.on_overlap(SpriteKind.player, SpriteKind.enemy, on_on_overlap3)

Ballon_2: Sprite = None
Ballon_1: Sprite = None
Albani1: Sprite = None
Ceres2: Sprite = None
Albani_2: Sprite = None
Ceres_1: Sprite = None
albani: Sprite = None
Ceres: Sprite = None
And: Sprite = None
Banan6: Sprite = None
Banan5: Sprite = None
Banan4: Sprite = None
Banan3: Sprite = None
Banan2: Sprite = None
Banan1: Sprite = None
Banan: Sprite = None
tiles.set_tilemap(tilemap("""
    level2
"""))
info.set_score(0)
Banan = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Banan.set_position(200, 120)
Banan.set_velocity(-60, 0)
Banan1 = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Banan1.set_position(124, 105)
Banan1.set_velocity(77, 0)
Banan2 = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Banan2.set_position(87, 90)
Banan2.set_velocity(-60, 0)
Banan3 = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Banan3.set_position(20, 75)
Banan3.set_velocity(60, 0)
Banan4 = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Banan4.set_position(65, 60)
Banan4.set_velocity(-47, 0)
Banan5 = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Banan5.set_position(40, 45)
Banan5.set_velocity(53, 0)
Banan6 = sprites.create(img("""
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
    """),
    SpriteKind.projectile)
Banan6.set_position(85, 30)
Banan6.set_velocity(-70, 0)
And = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . 8 8 . . . . . . . . . . 
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
            . . . . . . 2 2 . . 2 2 . . . . 
            . . . . . 2 2 2 . 2 2 2 . . . .
    """),
    SpriteKind.player)
And.set_position(80, 250)
scene.camera_follow_sprite(And)
controller.move_sprite(And)
Ceres = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
albani = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Ceres.set_position(250, 230)
Ceres.set_velocity(-60, 0)
albani.set_position(0, 215)
albani.set_velocity(60, 0)
Ceres_1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Ceres_1.set_position(210, 200)
Ceres_1.set_velocity(-80, 0)
Albani_2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Albani_2.set_position(20, 182)
Albani_2.set_velocity(90, 0)
Ceres2 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Ceres2.set_position(200, 168)
Ceres2.set_velocity(80, 0)
Albani1 = sprites.create(img("""
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
    """),
    SpriteKind.enemy)
Albani1.set_position(45, 151)
Albani1.set_velocity(-60, 0)
Ballon_1 = sprites.create(img("""
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
    """),
    SpriteKind.Win)
tiles.place_on_tile(Ballon_1, tiles.get_tile_location(5, 0))
info.set_life(3)
Ballon_1 = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(Ballon_1, assets.tile("""
    myTile
"""))
Ballon_2 = sprites.create(img("""
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
    """),
    SpriteKind.food)
tiles.place_on_random_tile(Ballon_2, assets.tile("""
    myTile2
"""))