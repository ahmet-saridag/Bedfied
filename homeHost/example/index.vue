<template>
  <div>
    <nav class="nav-slider" id="nav-background">
      <ul class="menu-bar border-bottom border-tranparent">
        <li
          class="font font-weight-bold-css mt-3 ml-4"
          style="list-style-type: none; cursor: pointer"
        >
          <nuxt-link
            tag="div"
            to="/"
            class="col-button-click margin-bedfied pb-2"
            style="font-size: 30px"
          >
            <img src="./abc.jpg" class="mb-4" alt="" />
          </nuxt-link>
        </li>
        <div
          class="card p-2 shadow-lg card-header-search"
          @click.prevent="cardSearchActive"
          style="cursor: pointer"
          v-if="scrolStyle"
        >
          <div class="row">
            <div class="col-9">
              <h6 class="text-dark font-weight-bold">Aramanıza başlayın</h6>
            </div>
            <div class="col-3">
              <div class="search-button2 button-click" style="cursor: pointer">
                <i
                  class="fa fa-search text-white"
                  style="margin-top: 13px; margin-left: 13px; font-size: 14px"
                ></i>
              </div>
            </div>
          </div>
        </div>
        <div class="d-flex mx-auto">
          <li class="font lis text-white col-button-click">GÜNLÜK EVLER</li>

          <li class="font lis text-white col-button-click">OTEL</li>

          <li class="font lis text-white col-button-click">EMLAK</li>
          <li class="font lis text-white col-button-click">ARSA</li>
        </div>
        <li
          class="
            font
            lis
            text-white
            col-button-click
            border border-danger
            rounded
          "
          style="padding: 3px 10px !important"
        >
          TR <i class="fas fa-chevron-down ml-2"></i>
        </li>

        <li class="font lis text-white col-button-click d-flex">KAYIT OL</li>
        <div
          style="height: 35px; width: 2px"
          class="text-danger bg-danger"
        ></div>
        <li class="font lis text-white col-button-click">GİRİŞ YAP</li>
        <hr />
      </ul>
      <ul class="menu-bar2">
        <div class="row w-100">
          <div class="col-3" style="cursor: pointer">
            <nuxt-link to="/travelMode" tag="div">
              <i
                class="
                  fas
                  fa-suitcase-rolling
                  d-flex
                  justify-content-center
                  mt-2
                  col-button-click
                  hover-detail
                "
                style="font-size: 25px"
              ></i>
              <div
                class="
                  text-center
                  mt-1
                  font-weight-bold-css
                  col-button-click
                  hover-detail
                "
                style="color: black !important; font-size: 14px !important"
              >
                Günlük evler
              </div>
            </nuxt-link>
            <i
              class="fas fa-home d-flex justify-content-center"
              style="font-size: 25px; margin-top: 20px"
            ></i>
          </div>
          <div class="col-3" style="cursor: pointer">
            <nuxt-link to="/homes" tag="div">
              <i
                class="
                  fas
                  fa-hotel
                  text-danger
                  d-flex
                  justify-content-center
                  col-button-click
                  hover-detail
                "
                style="font-size: 25px; margin-top: 6px"
              ></i>
              <div
                class="
                  text-center
                  mt-1
                  font-weight-bold-css
                  col-button-click
                  hover-detail
                "
                style="color: black !important; font-size: 14px !important"
              >
                Otel
              </div>
            </nuxt-link>
          </div>
          <div class="col-2" style="cursor: pointer">
            <div>
              <i
                class="
                  fa
                  fa-home
                  col-button-click
                  hover-detail
                  d-flex
                  justify-content-center
                  mt-2
                "
                style="font-size: 25px"
              ></i>
              <div
                class="
                  mt-1
                  message-margin
                  font-weight-bold-css
                  col-button-click
                  hover-detail
                "
                style="color: black !important; font-size: 14px !important"
              >
                Emlak
              </div>
            </div>
            <nuxt-link to="/homeHost" tag="div">
              <i
                class="
                  fas
                  fa-hotel
                  col-button-click
                  hover-detail
                  d-flex
                  justify-content-center
                  mr-2
                "
                style="font-size: 23px; margin-top: 20px"
              ></i>
            </nuxt-link>
          </div>
          <div class="col-4" style="cursor: pointer">
            <div
              class="text-center mt-1 font-weight-bold-css col-button-click"
              style="color: black !important; font-size: 14px !important"
            >
              <li
                class="border border-dark p-1 hover-li"
                @click.prevent="showCardMobile = !showCardMobile"
              >
                <i class="fas fa-bars"></i>
                <img
                  width="40"
                  style="object-fit: cover; user-select: none"
                  class="rounded-circle ml-2"
                  height="40"
                  src="./user.png"
                  alt=""
                />
              </li>
            </div>
            <div v-if="showCardMobile" class="card showCard shadow-lg p-2">
              <h6
                class="
                  font-weight-bold-css font
                  p-1
                  hover-detail
                  col-button-click
                "
                style="cursor: pointer"
              >
                Kayıt ol
              </h6>
              <h6
                class="font p-1 hover-detail col-button-click"
                style="cursor: pointer"
              >
                Giriş yap
              </h6>
              <h6
                class="font pt-1 pb-1 pl-1 hover-detail col-button-click"
                style="cursor: pointer"
              >
                TR
              </h6>
              <h6
                class="p-1 hover-detail col-button-click"
                style="cursor: pointer"
              >
                Arsa
              </h6>
            </div>
          </div>
        </div>
      </ul>
      <div
        class="container-fluid h-50 margin-top mobile-home-page"
        style="margin-top: 10%; width: 94% !important"
      >
        <div class="row w-100 h-100 p-0 m-0">
          <div class="col-md-11 col-sm-11 col-xs-11 w-100 h-75">
            <h1 class="mrg-sm mrg-sm-special nature-life text-white">
              Lorem Ipsum <br />
              Dolor Sit Amet Contane
            </h1>
          </div>
          <div
            class="col-md-1 col-sm-1 col-xs-1 w-100 h-50"
            style="margin-top: 10%"
          >
            <div class="d-flex">
              <i
                class="fas fa-chevron-up text-white mr-2"
                style="font-size: 60px; cursor: pointer"
                @click.prevent="upSlider"
              ></i>

              <i
                class="fas fa-chevron-down text-white"
                style="font-size: 60px; cursor: pointer"
                @click.prevent="downSlider"
              ></i>
            </div>
            <!-- Slider 1 -->
            <div class="d-flex" style="width: 155% !important" v-if="allStep">
              <div
                style="height: 30px; width: 30px"
                class="rounded-circle border border-white mt-3 ml-2"
              >
                <div
                  style="height: 20px; width: 20px"
                  class="rounded-circle bg-white mt-1 ml-1"
                  v-if="stepCounty == 1"
                ></div>
              </div>
              <!-- Slider 2 -->

              <div
                style="height: 30px; width: 30px"
                class="rounded-circle border border-white mt-3 ml-2"
              >
                <div
                  style="height: 20px; width: 20px"
                  class="rounded-circle bg-white mt-1 ml-1"
                  v-if="stepCounty == 2"
                ></div>
              </div>
              <!-- Slider 3 -->

              <div
                style="height: 30px; width: 30px"
                class="rounded-circle border border-white mt-3 ml-2"
              >
                <div
                  style="height: 20px; width: 20px"
                  class="rounded-circle bg-white mt-1 ml-1"
                  v-if="stepCounty == 3"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-fluid mobile-home-page2">
        <div class="p-3 row bg-white shadow-lg mobile-search b-block mx-auto">
          <div
            class="col-1"
            style="cursor: pointer"
            @click.prevent="$router.push('/homes')"
          >
            <i
              class="fa fa-search"
              style="margin-top: 10px; color: #f93b3b; font-size: 20px"
            ></i>
          </div>
          <div class="col-10">
            <input
              type="text"
              @keyup.enter="$router.push('/homes')"
              id="adress"
              style="font-size: 18px"
              placeholder="Nereye gidiyorsunuz?"
              class="form-control border-0 font-weight-bold-css text-dark"
            />
          </div>
        </div>
        <div class="row w-100 h-100 p-0 m-0">
          <div
            class="col-md-3 col-sm-12 col-xs-12 w-100 h-75 nature-life-mobile"
          >
            <h1 class="font-weight-bold-css">
              Lorem Ipsum <br />
              Dolor Sit Amet Contane
            </h1>
            <h5 class="font-weight-bold-css">
              Evren tarafından seçilen favoriler
            </h5>
            <a
              href="/homes"
              class="
                btn btn-dark
                col-button-click
                go-homes
                mt-2
                px-3
                font
                btn-sm
              "
            >
              İlham alın
            </a>
          </div>
        </div>
      </div>
    </nav>
    <!-- Yardım sayfası body bitiş -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      userData: [],
      stepCounty: 1,
      allStep: false,
      showCardMobile:false
    };
  },
  methods: {
    upSlider() {
      this.allStep = true;
      if (this.stepCounty < 3) {
        this.stepCounty++;
        let container = document.getElementById("nav-background");
        if (this.stepCounty === 2) {
          container.classList.add("nav-slider-2");
        }
        if (this.stepCounty == 3) {
          container.classList.remove("nav-slider-2");

          container.classList.add("nav-slider-3");
        }
      } else {
        this.stepCounty = this.stepCounty - 2;
        let container = document.getElementById("nav-background");
        container.classList.remove("nav-slider-3");
      }
    },
    downSlider() {
      this.allStep = true;
      let container = document.getElementById("nav-background");

      if (this.stepCounty > 1) {
        this.stepCounty--;
        if (this.stepCounty == 2) {
          container.classList.remove("nav-slider-3");

          container.classList.add("nav-slider-2");
        }
        if (this.stepCounty == 1) {
          container.classList.remove("nav-slider-2");
        }
      } else {
        this.stepCounty = this.stepCounty + 2;
        // container.classList.remove("nav-slider-2");

        container.classList.add("nav-slider-3");
      }
    },
  },
};
</script>

<style  scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css");
@import url("https://fonts.googleapis.com/css2?family=Truculenta:wght@300&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.mobile-not-number {
  color: white;
  position: absolute;
  top: 0px;
  right: 20%;
  border-radius: 40%;
  padding: 0px 7px;
  background: #f93b3b;
  font-size: 14px;
}
.message-hover {
  cursor: pointer;
  border-radius: 10px;
}
.message-hover:hover {
  background: rgb(236, 236, 236);
}
.scroller {
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
}
.message-length {
  position: absolute;
  z-index: 50;
  background: #f93b3b;
  color: #fff;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  text-align: center;
  margin-left: 25px;
  margin-top: 8px;
  user-select: none;
}
.message-number {
  font-size: 12px;
}
.notification-container-message {
  border-radius: 20px;
  position: absolute;
  right: 7%;
  top: 90%;
  width: 400px;
  height: auto;
  max-height: 400px;
}

.notification-container {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: #fff;
  margin: 0px 10px 0px 0px;
  color: #121317;
  cursor: pointer;
}
.notification-container-slash {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-image: linear-gradient(to right, #323b42, #121317);
  margin: 0px 10px 0px 0px;
  color: #fff;
  cursor: pointer;
}
.notification-container:hover {
  background-image: linear-gradient(to right, #323b42, #121317);
  color: #fff;
}
.icon-bell {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
  font-size: 20px;
}
.font-weight-bold-css {
  font-weight: bold !important;
}
.card-header-search {
  height: 46px !important;
  width: 250px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 60px;
}
.card-header-search h6 {
  padding: 5px 0px 5px 15px;
}
.mobile-home-page2 {
  display: none;
}
.showCard {
  z-index: 5;
  position: absolute;
  margin-top: -290px;
  margin-left: -90px;
  height: auto;
  width: 200px;
  border-radius: 10px;
}
.date-picker {
  z-index: 50 !important;
  margin-left: 500px;
}
.font {
  font-family: "Titillium Web", sans-serif !important;
}
.width-img {
  width: 35px;
  height: 35px;
}
@media (min-width: 1450px) {
  .size-navbars {
    font-size: 20px;
  }
  .width-img {
    width: 40px;
    height: 40px !important;
  }
  .bars-font-size {
    font-size: 17px !important;
  }
  .margin-bedfied {
    font-size: 35px !important;
  }
  .lis {
    font-size: 20px !important;
  }
}
.message-margin {
  margin-left: -35%;
}
.hover-li:hover {
  background-color: rgba(0, 0, 0, 0.5) !important;
  color: #ffff !important;
}
.hover-li {
  border-radius: 60px;
  list-style-type: none;
  cursor: pointer;
}
.nature-life {
  margin-top: 9.5%;
  font-size: 65px;
  font-weight: bolder;
  cursor: pointer;
  user-select: none;
}
@media (min-width: 1569px) {
  .width-search {
    width: 70%;
    height: 16% !important;
  }
  .nature-life {
    font-size: 80px;
  }
}
.card-where {
  width: 56%;
  height: 150%;
  margin-top: 15px;
  border-radius: 30px;
  z-index: 5;
}
nav {
  background: url("asc.jpg") center / cover no-repeat;
  height: 100vh;
  margin: 0;
  display: flex;
  justify-content: center;
  font-family: "Titillium Web", sans-serif !important;
  transition: 1s all;
}
.nav-slider-2 {
  transition: 1s all;
  background: url("https://images.unsplash.com/photo-1623298371642-416fcc1286d0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80")
    center / cover no-repeat !important;
}
.nav-slider-3 {
  transition: 1s all;
  background: url("https://images.unsplash.com/photo-1623298317883-6b70254edf31?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80")
    center / cover no-repeat !important;
}
.ft {
  font-size: 20px !important;
}
.col-map {
  padding: 13px 0px 0px 35px;
  border-radius: 35px 0px 0px 35px;
  cursor: pointer;
}
.button-click {
  transition: transform 80ms ease-in;
}

.button-click:active {
  transform: scale(0.9);
  background: #f93b3b;
}
.col-button-click {
  transition: transform 80ms ease-in;
}

.col-button-click:active {
  transform: scale(0.95);
}
.col-hover:hover {
  background: rgba(0, 0, 0, 0.06);
  cursor: pointer;
}
.col-guest {
  padding: 13px 0px 0px 23px;
  border-radius: 0px 35px 35px 0px;
}
.go-homes {
  font-size: 16px;
  border-radius: 10px;
  background: rgb(0, 0, 0, 0.7);
}

.search-button {
  width: 50px;
  border-radius: 50%;
  height: 50px;
  margin-top: -6px;
  margin-left: -25%;
  background: -webkit-linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
  background: linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
}
.search-button2 {
  width: 38px;
  border-radius: 50%;
  height: 38px;
  margin-right: 60px !important;
  margin-top: -5px;
  background: -webkit-linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
  background: linear-gradient(to right, rgba(0, 243, 141, 1), #009eff);
}
.menu-bar {
  height: 12%;
  position: fixed;
  z-index: 500;
  width: 100%;
  display: inline-flex;
  background-color: none;
  align-items: center;
  padding: 0 10px;
  margin: 20px 0 0 0;
}
.menu-logo2 {
  display: none;
}
.menu-bar2 {
  width: 100% !important;
  height: 60px;
  position: fixed;
  bottom: -15px;
  background: #fff;
  z-index: 5;
  list-style: none;
}
.hover-detail:hover {
  color: #f93b3b;
}
.lis {
  list-style: none;
  color: black;
  font-family: sans-serif;
  font-weight: bold;
  padding: 12px 16px;
  margin: 8px 8px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  white-space: nowrap;
}
.lis:hover {
  color: #f93b3b !important;
}
.lis:hover::before {
  transform: scale(1.2);
}
.lis:before {
  content: " ";
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: -1;
  transition: 0.2s;
  border-radius: 25px;
}
.menu-bar2 {
  display: none;
}
@media (max-width: 768px) {
  .nature-life-mobile {
    margin-top: 10%;
  }
  .mobile-search {
    width: 95%;
    min-height: 14%;
    border-radius: 35px;
    position: fixed;
    z-index: 501;
    top: 10px;
  }
  .mobile-home-page2 {
    display: inherit !important;
  }
  .mobile-home-page {
    display: none !important;
  }
  nav {
    min-height: 40vh !important;
    max-height: 75vh !important;
    background: url("https://a0.muscache.com/im/pictures/38100f6a-9a35-45b8-a503-cfe384d953b5.jpg?im_w=960")
      center / cover no-repeat;
  }
  .mrg-button {
    font-size: 15px !important;
  }
  .menu-bar {
    display: none;
  }
  .mrg-sm-special {
    margin-top: 0px !important;
  }
  .mrg-special {
    margin-top: 30px !important;
  }
  .mrg-sm {
    font-size: 35px !important;
  }
  .margin-top {
    margin-top: 33px !important;
  }
  .menu-bar2 {
    display: flex;
  }
  .menu-logo2 {
    display: inherit;
  }
  .mrg-left {
    margin-left: 0px !important ;
    width: 115% !important;
  }
}
@media (max-width: 562px) {
  .nature-life-mobile {
    margin-top: 40%;
  }
  .mobile-search {
    max-width: 95%;
    min-height: 7%;
    border-radius: 35px;
    position: fixed;
    z-index: 501;
    top: 10px;
  }
  nav {
    height: 75vh;
  }
  .mrg-button {
    font-size: 15px !important;
  }
  .menu-bar {
    display: none;
  }
  .mrg-sm-special {
    margin-top: 0px !important;
  }
  .mrg-special {
    margin-top: 30px !important;
  }
  .mrg-sm {
    font-size: 35px !important;
  }
  .margin-top {
    margin-top: 33px !important;
  }
  .menu-bar2 {
    display: flex;
  }
  .menu-logo2 {
    display: inherit;
  }
  .mrg-left {
    margin-left: 0px !important ;
    width: 115% !important;
  }
}
</style>