import AutoPlay from '../plugins/AutoPlay.js'

const video = document.querySelector("video")
const button = document.querySelector("button")
const mute = document.querySelector("#muteButton")

function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function() {
    this.plugins.forEach(plugin => {
        plugin.run(this)
    })
}

MediaPlayer.prototype.play = function() {
    (this.media.paused)?this.media.play():this.media.pause()
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

const player = new MediaPlayer({el : video, plugins : [
    new AutoPlay ()
]})

button.onclick = () => player.play()

mute.onclick = () => (video.muted)?player.unmute():player.mute()