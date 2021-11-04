var plane = document.getElementsByClassName("plane")[0];
let left = 280;
let top1 = 560;

document.addEventListener("keydown", function(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (top1 >= 20) {
                top1 -= 20;
                $(".plane").css('top', `${top1}px`)
            };
            break
        case 'ArrowDown':
            if (top1 <= 540) {
                top1 += 20;
                $(".plane").css('top', `${top1}px`)
            };
            break
        case 'ArrowLeft':
            if (left >= 20) {
                left -= 20;
                $(".plane").css('left', `${left}px`)
            };
            break
        case 'ArrowRight':
            if (left <= 540) {
                left += 20;
                $(".plane").css('left', `${left}px`)
            };
            break

    }
})

// let plane = document.getElementsByClassName('plane')[0]
let rock = document.getElementsByClassName('rock')

let points = 0
let getPoints = setInterval(function() {
    points++
    $("#points").text(`Your Score: ${points}`)
}, 250)


var checkDead = setInterval(function() {
        let planeTop = parseInt(window.getComputedStyle(plane).getPropertyValue('top'))
        let planeLeft = parseInt(window.getComputedStyle(plane).getPropertyValue('left'))
        let rockTopArr = []
        let rockLeftArr = []
        for (let i = 0; i < 3; i++) {
            rockTopArr.push(parseInt(window.getComputedStyle(rock[i]).getPropertyValue('top')))
            rockLeftArr.push(parseInt(window.getComputedStyle(rock[i]).getPropertyValue('left')))
        }

        let topDist = rockTopArr.map((a) => planeTop - a)
        let leftDist = rockLeftArr.map((a) => planeLeft - a)


        for (let i = 0; i < 3; i++) {
            if ((topDist[i] < 20 && topDist[i] > -40) && (leftDist[i] < 20 && leftDist[i] > -40)) {
                $(".rock").css('animation', 'none')
                $("#points").append(`<p>You DIED! Refresh to replay :)</p>`)
                clearInterval(getPoints)
                points = 0


            }
        }
    },
    10)

// $(".plane").on("keydown", function(typingEvent) {
//     let input = typingEvent
//     console.log("input:", input);
//     if (input.length > 10) {
//         $(this).css("border", "10px solid green")
//     } else {
//         $(this).css("border", "10px solid red")
//     }
// })

let randomLeft = setInterval(function() {

    let rockTopArr = []
    let rockLeftArr = []
    for (let i = 0; i < 3; i++) {
        if (parseInt(window.getComputedStyle(rock[i]).getPropertyValue('top')) > 720) {
            $(`#rock${i}`).css('left', `${Math.random() * 580}px`)
            $(`#rock${i}`).css('animation-delay', `${Math.random() * 0.2}s`)
        }
        // rockLeftArr.push(parseInt(window.getComputedStyle(rock[i]).getPropertyValue('left')))
    }

}, 10)