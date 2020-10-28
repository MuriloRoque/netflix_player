class VideoMediaPlayer {
  constructor({ manifestJSON }) {
    this.manifestJSON = manifestJSON
    this.videoElement = null
    this.sourceBuffer = null
  }

  initializeCodec() {
    this.videoElement = document.getElementById('vid')
    const mediaSourceSupported = !!window.MediaSource
    if (!mediaSourceSupported) {
      alert('Your browser or system does not support MSE!')
      return
    }
    const codecSupported = MediaSource.isTypeSupported(this.manifestJSON.codec)
    if (!codecSupported) {
      alert(`Your browser does not support codec: ${thismanifestJSON.codec}`)
      return
    }
  }
}