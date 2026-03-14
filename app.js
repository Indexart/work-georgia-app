let tg = window.Telegram.WebApp

tg.expand()

function createOrder(){

tg.sendData("create_order")

}

function findJob(){

tg.sendData("find_job")

}