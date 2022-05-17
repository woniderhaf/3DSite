// 3D scroll

let zSasing = -1000,
    lastPos = zSasing / 5,
    $frames = document.getElementsByClassName('frame'),
    frames = Array.from($frames),
    zVals = []

window.onscroll = function() {
    let top = document.documentElement.scrollTop
    let delta = lastPos - top

    lastPos = top

    frames.forEach(function(n,i) {
        zVals.push((i * zSasing) + zSasing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`
            opacity = zVals[i] < Math.abs(zSasing) / 5 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })
}
window.scrollTo(0,1)


//audio 
let sounButton = document.querySelector('.sound__btn')
let audio = document.querySelector('.audio')

let play = null


sounButton.addEventListener('click', (e) => {
    sounButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
    let i = document.documentElement.scrollTop 

    if (!sounButton.classList.contains('paused')) {
       console.log(document.documentElement.scrollTop)
       play =  setInterval(() => {
        document.documentElement.scrollTop = i
        i++
       }, 20)
    } else {
        clearInterval(play)
    }
})

window.onfocus = function() {
    sounButton.classList.contains('paused') ? audio.pause() :  audio.play()
}
window.onblur = function() {
    audio.pause()
}