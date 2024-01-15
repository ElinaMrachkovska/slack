router.get('/selector', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('selector', {
    //                  ↑↑ сюди вводимо JSON дані
    layout: "selector",
    right: ">",
    left: "<",
  })
})

