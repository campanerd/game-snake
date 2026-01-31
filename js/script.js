const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

const size = 30

const snake = [
    { x:200, y: 200},
    { x:230, y: 200}
]

let direction, LoopId


const drawSnake = () => {
    ctx.fillStyle = "#9400D3"
    
    snake.forEach((position, index) =>{

        if (index == snake.length - 1){
            ctx.fillStyle = "#A020F0"

        }

        ctx.fillRect(position.x, position.y, size, size)
    })

}

const moveSnake = () => {
    if (!direction) return
    const head = snake.at(-1)

    if (direction == "rigth"){
        snake.push({ x: head.x + size, y: head.y})
    }

    if (direction == "left"){
        snake.push({ x: head.x - size, y: head.y})
    }

    if (direction == "down"){
        snake.push({ x: head.x, y: head.y + size})
    }

    if (direction == "up"){
        snake.push({ x: head.x, y: head.y - size})
    }

    snake.shift()
}

const gameLoop = () => {
    clearInterval(LoopId)
    ctx.clearRect(0, 0, 600, 600)

    moveSnake()
    drawSnake()

    LoopId = setTimeout( () => {
        gameLoop()
        }, 300)
}
gameLoop()