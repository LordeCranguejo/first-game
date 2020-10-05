controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . 2 2 2 . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . c f c . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . 2 . . f . . 2 . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . 9 a . . . a 9 . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . 2 . . . . . 2 . . . . 
        . . . . 2 . . . . . . . 2 . . . 
        . . . 2 . . . . . . . . . 2 . . 
        . . 2 . . . . . . . . . . . 2 . 
        . . 2 . . . . . . . . . . . 2 . 
        . . 2 . . . . . . . . . . . 2 . 
        . . 2 . . . . . . . . . . . 2 . 
        . . 2 . . . . . . . . . . . 2 . 
        . . 2 . . . . . . . . . . . 2 . 
        . . . 2 . . . . . . . . . 2 . . 
        . . . . 2 . . . . . . . 2 . . . 
        . . . . . 2 . . . . . 2 . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . 2 2 f . . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . c f c . . . . . . 
        . . . . . . f . f . f . . . . . 
        . . . . . 2 . . f . . 2 . . . . 
        . . . . . f . . f . . f . . . . 
        . . . . . . . f . f . . . . . . 
        . . . . . . f . . f . . . . . . 
        . . . . . . . 2 . . 2 . . . . . 
        . . . . . . 9 a . 9 a . . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . f 2 2 . . . . . . . . 
        . . . . . f f f . . . . . . . . 
        . . . . . . 2 . . . . . . . . . 
        . . . . . c f c . . . . . . . . 
        . . . . f . f . f . . . . . . . 
        . . . 2 . . f . . 2 . . . . . . 
        . . . f . . f . . f . . . . . . 
        . . . . . f . f . . . . . . . . 
        . . . . . f . . f . . . . . . . 
        . . . . 2 . . 2 . . . . . . . . 
        . . . . a 9 . a 9 . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . c f c . . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . 2 . . f . . 2 . . . . . 
        . . . . f . . f . . f . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . . f . f . . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . 2 . . . 2 . . . . . . 
        . . . . 9 a . . . a 9 . . . . . 
        `)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . f 2 f . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . f f f . . . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . . f . . f . . f . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . . f . f . . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . f f . . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.setBackgroundColor(11)
scene.setBackgroundImage(img`
    ................................................................................................................................................................
    ....................................3...........................................................................................................................
    ....................................3...........................................................................................................................
    ..................................3......................fffffffff......................................................................111111111....5..........
    .................................333....................ffdddddddff...................................................................11111111111111.5..........
    ..................................3...................ffddddddddddff...............ff...................1............................1111111111111155555........
    ....1..................ffff.....3...................ffddddddddddddddf..............ff...............................................dddd11111111111dd5d.........
    ....................fffdddff....3..............fffffddddddddddddddddf..............ff............................................1.ddddd11111111111dd5d.........
    ........f.........fffddddddf..................ffddddddddddddddddddddff....5........ff..............................................ddddd1111ddd1111dddd.........
    ........f........ffddddddddf..................fddddddddddddddddddddddff..555......fdf...1..........................................dddd11ddddddd111ddddd........
    .......fdf.....ffddddddddddff......fffffff....fdddddffddddddddddddddddff..5......fddf..............................................ddd111ddddddd111dddd.........
    .......fdff..fffddddddddddddf....fffdddddf....fdddffdfffdddddddddddddddffffffffffdddf..........................1...................ddd11dddddddd11111d11........
    .......fddffffdddddddddddddddffffddddddddf....fdddfddddfddddddddddddddddddddddddddddf..................................1...........ddd11ddddddddd1111111........
    .......fdddddddddddddddddddddddddddddddddf....fddddddddfddddddddddddddddddddddddddddf..............................................ddd1dddddddddd1111111........
    .......ffdddddddddddfffddddddddddddddddddf.....fdddddddfddddddddddddddddddddddddddff...............................................ddd1dddddddddddd11111........
    ........ffdddddddfff..fdddddddddffffdddddf......fddddffdddffffdddddddddddddddffffff................................................ddd1ddddddddddd111111........
    .........fffffffff....ffdddddddfdddfdddddf.......ffffddddffddfddddddddddddddfdddff.................................................ddd11dddddddddd11111.........
    .......................fddddddfddfdfddddff..........fddddfddddfddfffffddddddfdddf...................................................11111dddddddd111111.........
    .......................ffdddddffddffdddff...........fdddddddddfdff...fffdddddddff....ff.............................................11111dddddddd111111.........
    ........................fffffffdddddddff............ffdddddddffff......fffdddddf...ffdf.............................................111111dddddd111111..........
    ........5.....................fdddddfff......1.......fddddddff...........ffffff..ffdddf..............................................111111dddd1111dd...........
    .......555...1................fffffff................ffffffff...................ffdddf.....................1...........1...............111d11111111dd.......1...
    .....1..5.......................................................................ffddf.............1....................................5..1dddddddddd...........
    .................................................................................fff..................................................555.ddddddddddd...........
    .......................................................................................................................................5........................
    ....................................................................1...........................................................1...............................
    ..........................................1.....................................................................................................................
    .........................................................................................1......................................................................
    ..........................................................................................................................................1.....................
    ................................................................................................................................................................
    ...........1.................1......................444.........................................................................................................
    ..............................................444.44444444.......................................1..............................................................
    .............................................2445554445444444...................................................................................................
    ............................................22445544445544454............................2......................................................................
    ...........................................5444255455555545544...........................2......................................................................
    ...................1.......................54442444555444554244........................2.2.2....................................................................
    ..........................................4444444445554245452544...........1............212.....................................................................
    ..........................................44454445554455544455444.......................121.....................................................................
    ..........................................4425554444455554255554c4......................212.....................................................................
    .........................................44522555444445554225445c4.....................2.2.2..............1.....................................................
    ........................................445542554444445545554444cc...................1...2...............................1..............................1.......
    ..............................5........2455cc444555424454544422cccc......................2......................................................................
    ........................1.....5........45c3cc44455555544445544433cc.............................................................................................
    ...1..........................55......455c33c44255555444c5554443cccc............................................................................................
    ..............1................5.....445c3c3ccc42225544444454444ccccc...........................................................................................
    ...............................5.....4ccc31c3cc44554333c4445c444ccccc...........................................................................................
    .....................................cc3311cc33c554ccc3344444444cccccc..........................................................................................
    ....................................cc33c1ccc333545cccccc244455ccccccc..........................................................................................
    ...................................cc33c1ccccc33445ccccccc44445cccccccc..................................................................cccccccccccccccc.......
    ..................................cc33c11ccccccc455cccccccc444ccccccccc..............................................................ccccccccccccccccccccc......
    .................................cc3311ccccccccc45ccccccccc4442cccccc3c............................................................cccccccccccccccccccccccc.....
    ................................cc3311cccccccc4445ccccccccccc2244cccc3cc...c......................................................cccccccccccccccccccccccccc....
    ...............1...............ccc311ccccccccc4c55ccccccccccc5444cccc13c..cc.....................................................ccccccccccccccccccccccccccc....
    .............................cccc331cccccccccc4424ccccc3cccc25444cccc13cccc.........................1...........................cccccccccccccccccccccccccccccc..
    .............6.6.6..........ccccc33cccccccccccc452cccc33cccc2445ccccc113c3c....................................................cccccccccccccccccccccccccccccccc.
    ...............6............cccc33ccccccccccccc54ccccc3ccccc444ccccccc113cc...............1....................................cccccccccccccccccccccccccccccccc.
    ..............666..........cccc33ccccccccccccccc4cccc33ccccc444c2cccccc1c3c....................................................ccccccccccccc3333cccccccccccccccc
    ...............6...........cc333ccccccccccccccccccccc3ccccccccc44cccccc1c3c...........................................1.......ccccccc3333333cdd33ccccccccccccccc
    .............6.6.6........cc3311ccccccccccccc9cccccc33ccccccccccccccccc1133...................................................cccccc3cddddcccccc333ccccccccccccc
    .........................ccc311ccccccccccccc99ccccc313cccccccccccccccccc133c..........1.......................................cccccccccccccccccccdd333cccccccccc
    ...........1.............c3311ccccccccccccccccccccc313cccccccccccccccccc13cc.................................................cccc3dcc...ccccccccccd3333ccccccccc
    ........................cc331ccccccccccccccccccccc3313cccccccccccccccccc113cc.........................5......................cccc3dcc.......cccccccd333ccccccccc
    ....................c..ccc331ccccccccccccccccccccc3c13ccccccccccccccccccc13cc........................555....................cccc3dc9........ccc...ccd33ccccccccc
    ....................c.ccc3331ccccccccccccccccccc33cc133cccccccccccccccccc133cc........................5....1................ccc33d999.......ccc....cc333cccccccc
    ....................c.ccc331ccccccccccccccccccc33ccc1133ccccccccccccccccc133cc..............................................cc33dcc9.........c......cc333ccccccc
    ...................ccccc3311ccccccccccccccccccc3c1cc11133cccccccccccccccc1c33c..............................................cc3dccc..........c.......dcd3ccccccc
    ...................cccc3311cccccccc3ccccccccccc3c1cccc1113ccccccccccccccc11c3cc.............................................c33ccc...........9.9.....ccd33cccccc
    ..................cccc3111cccccccc33cccccccccc3c1ccccccccccccccccccccccccc1133c.......................9.....................c3cc.....5.5......9......ccd333ccccc
    ..1...............cccc11cccccccccc33ccccccccc33c1cccccccccccccccccccccccccc133c................1......c9....................cccc.............9.9.....ccd3333cccc
    ..................c3cccccccccccccc3cccccccccc33c1cccccccccc3ccccccccccccccc1c3c......................c9......................cccc......5.............ccdd333cccc
    .................cc3ccccccccccccc33cccccccccc3311cccccccccc3ccccccccccccccc113cc.....................cc9...........1.........cccc....c................ccd333cccc
    ................cc331ccccccccccc333ccccccccc33c1cccccccccc33cccccccccccccccc13cc.....................cc......................c.ccccccc................ccd333cccc
    ................cc31ccccccccccc3333ccccccccc3311cccccccccc33ccccccccccccccccc3cc.....................ccc........................ccccc.................cc3333cccc
    ................c331cccccccccc33133cccccccc3c11cccccccccc333ccccccccccccccccc3c3......1..............ccc.9...........................................ccc3333cccc
    ........c.....ccc311cccccccccc33133ccccccccc11cccccccccc33c3ccccccccccccccccc333c...................ccc99............................................ccc3333cccc
    .......cc....ccc311ccccccccc33311333cccccccccccccccccccc33c3cccccccccccccccccc33ccc................ccccc9............................................cccc333cccc
    .......cc....cc311ccccccccc33311c333cccccccccccccccccccc3cc3cccccccccc9c9cccccc3cccc..............ccc3cc............................................ccc.c333cccc
    .......cc.cccc311cccccccccc3311cc333cccccccccccccccccccc3cc3ccccccccccc9ccccccccccccc............cccc3cc............................................ccc.c333cccc
    .......ccccc33c1cccccccccc3331ccc333ccccccccccccccccccc3c1c3cccccccccc939ccccccccccccc..........ccccc3cc............................................cc..c333cccc
    ......c3ccc1311ccccccccccc3331ccc333ccccccccccccccccccc3c1c33cccccccccc3ccccccccccccccc........ccccc33ccc...................cccccccc................cc..c333cccc
    ......93cc3311ccccc9cccccc3311ccc333cccccccccccccccccc3311cc3cccccccccc33ccccccccccccccc.....ccccc3333ccc..................ccccccccccc..............cc..c333cccc
    ....99c31cccccccccc99cccc331ccccc333ccccccccccccccccc3331cccc3cccccccccc3ccccccccccccccccc..cccc333313cccc................cccccccccccc..............c...c333cccc
    ....c9c31ccccccccc3cccccc33ccccccc33cccccccccccccccc33331cccc33ccccccccc33ccccccccccccccccccccc3c11113cccc........1.......cccccccccccccc................cd33cccc
    ..cccc911cccccccc33ccccc33cccccccc33cccccccccccccccc33311ccccc33ccccccccc33ccccccccccccccccc3333ccc31333cc................cccccccd3ccccc................cd3ccccc
    ..ccc331ccccccc333cccccc33ccccccccc33cccccccccccccc33331ccccccc3ccccccccc333cccccccccccccccccccccccc1333ccc...............c.....cd33cccc................cd3ccccc
    ..c3311cccccccc333ccccc333ccccccccc33ccccccccccccc33331cccccccc3ccccccccc333cccccccccccccccccccccccc1113c3cc..............c......cd3ccccc...............cd3ccccc
    ccc311ccccccccc33cccccc333ccccccccc33ccccccccccccc33311ccccccccc3cccccccc3333ccccccccccccccccccccccccc11ccccc.............c.......cd3cccc...............cd3ccccc
    cc331cccccccccc33ccccc333ccccccccccc3ccccccccccccc3311cccccccccc3cccccccc3333cccccccccccccccccccccccccc133ccc.............c......ccd3cccc...............cd3ccccc
    cc311cccccccccc33ccccc33cccccccccccc3ccccccccccccc3c1ccccccccccc3cccccccc33133ccccccccccccccccccc3cccccc3ccccc..............9....ccc3cccc...............cd3ccccc
    c311cccccccccc333cccc333cccccccccccc33cccc9ccccccc3c1ccccccccccc3cccccccc331333cccccccccccccccccc3ccccccccccccc...........1......cccccccc...............cd3ccccc
    c11ccccccccccc333ccc333ccccccccccccc33ccc999cccccc3ccccccccccccc33ccccccc331333cccccccccccccccccc3ccccccccccccc...........9......ccccccccc..............cc3ccccc
    31ccccccccccc3333cc333cccccccccccccc13ccc39cccccccccccccccccccccc3ccccccc33c133cccccccccccccccccc3cccccccccccccc................cccccccccc..............cc3ccccc
    31ccccccccccc3313c3333cccccccccccccc133cc3ccccccccccccccccccccccc3ccccccc33c1133ccccccccccccccccc3ccccccccccccccc..............cccddcccccc..............cc3ccccc
    31cccccccccc33313c333ccccccccccccccc113cc3ccccccccccccccccccccccc33cccccc33cc113ccccccccccccccccc3cccccc33ccccccccc.......9...cccd33cccccc.............ccc3ccccc
    11cccccccccc33113333ccccccccccccccccc133c3cccccccccccccccccccccccc33ccccc33ccc113cccccccccccccccccccccccc3cccccccccccccccc...ccccd3ccccccc.............ccc3ccccc
    1ccccccccccc331c333cccccccccccccccccc113c3ccccccccccccccccccccccccc33cccc33cccc13ccccccccccccccccccccccccc3cccccccccccccccccccccd33ccccccc............cccccccccc
    1ccccccccccc331ccccccccccccccccccccccc11333ccccccccccccccccccccccccc3ccc333cccc113ccccccccccccccccccccccccc33ccccccccccccccccddd33cccccccc............cccccccccc
    ccccccccccc3311cccccccccccccccccccccccc13333cccccccccccccccccccccccccccc333ccccc133cccccccccccccccccccccccccc3cccccccccccccc3333cccccccccc...........ccccccccccc
    ccccccccccc331ccccccccccccccccccccccccc113333ccccccccccccccccccccccccccc333ccccc113cccccccccccccccccccccccccccccccccccccccc333cccccccccccc..........cccccccccccc
    ccccccccc33311cccccccccccccccccccccccccc11333ccccccccccccccccccccccccccc33ccccccc133cccccccccccccccccccccccccccccccccccccccccccccccccccccc..........cccccccccccc
    cccccccc333111ccccccccccccccccccccccccccc1133cccccccccccccccccccccccccc333ccccccc113cccccccccccccccccccccccccccccccccccccccccccccccccccccc.........ccccccccccccc
    cccccccc33311ccccccccccccccccccccccccccccc133cccccccccccccccccccccccccc33ccccccccc133ccccccccccccccccccccccccccccccccccccccccccccccccccccc.......ccccccccccccccc
    cccccc333311ccccccccccccccccccccccccccccccc13cccccccccccccccccccccccccc33ccccccccc1333cccccccccccccccccccccccccccccccccccccccccccccccccccc.....ccccccccccccccccc
    cccccc3331ccccccccccccccccccccccccccccccccc133cccccccccccccccccccccccc33cccccccccc1133cccccccccccccccccccccccccccccccccccccccccccccccccccc....cccccccccccccccccc
    ccccc33311ccccccccccccccccccccccccccccccccc1c3cccccccccccccccccccccccc31ccccccccccc1333ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccccc333cccccccccccccccccccccccccccccccccccc133ccccccccccccccccccccccc31ccccccccccc1133ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccc3333cccccccccccccccccccccccccccccccccccccc33ccccccccccccccccccccc311cccccccccccc1333cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccc3311cccccccccccccccccccccccccccccccccccccccc3cccccccccccccccccccc3111cccccccccccccc3333cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cc331cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc31111ccccccccccccccc3333ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    c3331cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333111ccccccccccccccccc333ccc3ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    33331ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333111ccccccccccccccccccc333cc3ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    3331ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333311cccccccccccccccccccc333c3cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    3331ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33111cccccccccccccccccccccc3333cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    3311cccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3311ccccccccccccccccccccccccc333cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    331ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccccccccccccccccccccccccccc33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    331ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    331ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    331ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    131ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    31cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
