<template>
  <div class="body w-100 h-100">
    <div class="video">
      <video
        id="InformationVideo"
        class="information__video information__video--visible"
        preload="auto"
        autobuffer=""
        autoload=""
        autoplay=""
        loop=""
      >
        <source
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/astrochimp.mp4"
          type="video/mp4"
        />
        <source
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/astrochimp.webm"
          type="video/webm"
        />
        <source
          src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/astrochimp.ogg"
          type="video/ogg"
        />
      </video>
    </div>
    <header class="">
      <h1>404</h1>
      <h3>error</h3>
      <br />
      <hr />
      <p>
        "Maymun...<br />
        Kötü haberlerim var dostum.<br />
        Sanırım kaybolduk."
      </p>
      <nuxt-link
      to="/homes"
      tag="div"
      >
        <button class="btn btn-danger btn-dark btn-lg" style="  font-family: 'Titillium Web', sans-serif !important;
">Yakınlardaki konaklamaları keşifedin</button>
      </nuxt-link>
    </header>
  </div>
</template>
<script>
export default {
    layout:"homes"
}
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");

.body {
  background: #2d3949;
  background: #2d3949
    url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/130891/stars.png) repeat
    top center;
}

@keyframes move-twink-back {
  from {
    background-position: 0 0;
  }
  to {
    background-position: -10000px 5000px;
  }
}


h1 {
  color: white;
  font-size: 72px;
  font-family: "lust-display-didone", serif;
}
h3 {
  color: white;
  font-size: 48px;
  line-height: 32px;
  text-transform: uppercase;
  font-weight: 300;
  font-family: "futura-pt", serif;
}
hr {
  width: 100px;
  margin: 0.5em auto 1em;
  border: none;
  height: 2px;
  background: white;
}
p {
  font-size: 24px;
  line-height: 34px;
  font-family: "futura-pt", sans-serif;
  font-style: italic;
  font-weight: 300;
}

.video {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 2;
  background: #2d3949;
  
}
 .video:before {
  content: "";
  display: block;
  position: absolute;
  z-index: 2;
  background-image: linear-gradient(rgba(#2d3949, 0), #2d3949);
  width: 100%;
  height: 100%;
 
  left: 0;
} 
video {
  width: 100%;
  margin-top: -15%;
  opacity: 0.35;
  
}
header {
  position: relative;
  z-index: 3;
  text-align: center;
  color: white;
  padding: 12em 0 5em;
}
</style>