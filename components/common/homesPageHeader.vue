<template>
  <div>
    <nav>
      <ul class="menu-bar">
        <li
          class="font font-weight-bold button-click ml-3 d-block mr-auto"
          style="cursor: pointer; padding: 11px 15px; margin: 8px 8px"
        >
          <nuxt-link
            tag="div"
            to="/"
            class="font-size-bedfied"
            style="font-size: 30px; user-select: none"
          >
            <img src="./placeholder (3).png" class="mr-2" alt="" /> Bedfied
          </nuxt-link>
        </li>
        <nuxt-link tag="div" to="/homeHost">
          <li class="font lis button-click">Ev sahibi modu</li>
        </nuxt-link>
        <div
          class="notification-container-slash shadow-lg"
          @click.prevent="slash = !slash"
          v-if="slash && $store.state.authKey != null"
        >
          <i class="far fa-bell-slash icon-bell"></i>
        </div>
        <div
          class="notification-container shadow-lg"
          @click.prevent="slashControl"
          v-else-if="!slash && $store.state.authKey != null"
        >
          <div
            class="message-length"
            v-if="guestValueData.length + hostValueData.length > 0"
          >
            <div class="message-number">
              {{ guestValueData.length + hostValueData.length }}
            </div>
          </div>
          <i class="far fa-bell icon-bell"></i>
        </div>
        <div
          class="card p-4 shadow-lg notification-container-message scroller"
          v-if="slash"
          v-click-outside="cardNotificationClose"
        >
          <div
            class="row p-3"
            v-if="guestNotData.length + hostNotData.length == 0"
          >
            <h6 class="text-muted mx-auto">Bildirim bulunmamaktadır.</h6>
          </div>
          <div
            class="row p-2 message-hover"
            @click.prevent="$router.push('/homeHost/myReservations')"
            v-for="(data, index) in hostNotData"
            :key="index"
          >
            <div class="col-2" v-if="data.guestProfilePhoto">
              <img
                :src="data.guestProfilePhoto"
                style="object-fit: cover"
                width="50"
                height="50"
                class="rounded-circle mt-1"
                alt=""
              />
            </div>
            <div class="col-2 pt-2" v-else>
              <img
                src="./user.png"
                style="object-fit: cover"
                width="50"
                height="50"
                class="rounded-circle mt-1"
                alt=""
              />
            </div>
            <div class="col-10 pt-2">
              <p class="pl-2">
                {{ data.guestName }} eviniz için rezervasyon oluşturdu.
                <span class="text-muted"
                  >({{ data.day }} {{ data.month }}
                  {{ data.weekDay }} günü)</span
                ><img class="ml-1" src="./guest-post.png" alt="" />
              </p>
            </div>
          </div>
          <div
            class="row p-2 message-hover"
            @click.prevent="$router.push('/travelMode')"
            v-for="(data, index) in guestNotData"
            :key="index"
          >
            <div class="col-2 pt-2">
              <img
                :src="data.hostHomePhoto"
                width="60"
                height="45"
                class="rounded pr-2"
                style="object-fit: cover"
                alt=""
              />
            </div>
            <div class="col-10 pt-2">
              <p class="pl-2">
                {{ data.county }} bölgesine gidiyorsunuz. <br /><small
                  class="text-muted"
                  >({{ data.day }} {{ data.month }} {{ data.weekDay }} günü
                  oluşturuldu.)</small
                >
                <img class="ml-1" src="./suitcases.png" alt="" />
              </p>
            </div>
          </div>
        </div>

        <li
          class="border border-dark p-1 mt-1 hover-li button-click"
          style="border-radius: 60px; list-style-type: none; cursor: pointer"
          @click.prevent="showCard = !showCard"
        >
          <i class="fas fa-bars bar-nav ml-1 p-2"></i
          ><img
            width="35"
            style="object-fit: cover; user-select: none"
            class="rounded-circle mb-1 img-nav mt-1 mr-2"
            height="35"
            v-if="userProfilesData.profileImage"
            :src="
              userProfilesData.profileImage == null
                ? './user.png'
                : userProfilesData.profileImage
            "
            alt=""
          />
          <img
            width="35"
            style="object-fit: cover; user-select: none"
            class="rounded-circle mb-1 img-nav mt-1 mr-2"
            height="35"
            v-else
            src="./user.png"
            alt=""
          />
        </li>        
        <div
          v-if="showCard"
          class="card shadow-lg p-2"
          v-click-outside="showCardOut"
          style="
            z-index: 5;
            position: absolute;
            top: 100px;
            right: 10px;
            height: auto;
            width: 200px;
            border-radius: 10px;
          "
        >
          <h6
            class="font-weight-bold font p-1 button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/auth')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Oturum açın
          </h6>
          <h6
            class="font p-1 button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/travelMode')"
            v-if="this.$store.getters.isAuthenticated"
          >
            Seyahatler
          </h6>
          <h6
            class="font pt-1 pb-1 pl-1 button-click hover-detail"
            @click.prevent="
              $router.push('/travelMode/messages/' + $store.state.authKey)
            "
            style="cursor: pointer"
            v-if="this.$store.getters.isAuthenticated"
          >
            Mesajlar
          </h6>
          <h6
            class="font pt-1 pb-1 pl-1 button-click hover-detail"
            @click.prevent="$router.push('/profile/' + $store.state.authKey)"
            style="cursor: pointer"
            v-if="this.$store.getters.isAuthenticated"
          >
            Profil
          </h6>

          <h6
            class="p-1 font button-click hover-detail"
            style="cursor: pointer"
            v-if="!this.$store.getters.isAuthenticated"
            @click.prevent="$router.push('/auth')"
          >
            Kaydolun
          </h6>
          <hr v-if="!this.$store.getters.isAuthenticated" />
          <h6
            class="p-1 font button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homes')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Seyahate çıkın
          </h6>
          <h6
            class="p-1 font button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homeHost')"
            v-if="this.$store.getters.isAuthenticated"
          >
            Ev sahibi modu
          </h6>

          <h6
            class="p-1 font button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="$router.push('/homeHost')"
            v-if="!this.$store.getters.isAuthenticated"
          >
            Evinizde ev sahipliği yapın
          </h6>
          <hr v-if="this.$store.getters.isAuthenticated" />
          <h6
            class="p-1 font button-click hover-detail"
            @click.prevent="$router.push('/homeHost/help')"
            style="cursor: pointer"
          >
            Yardım
          </h6>
          <h6
            class="p-1 font button-click hover-detail"
            style="cursor: pointer"
            @click.prevent="logout"
            v-if="this.$store.getters.isAuthenticated"
          >
            Oturumu kapatın
          </h6>
        </div>
      </ul>
      <ul class="menu-bar2">
        <div class="row w-100">
          <div class="col-3" style="cursor: pointer">
            <nuxt-link
              to="/travelMode"
              tag="div"
              v-if="$store.getters.isAuthenticated"
            >
              <i
                class="
                  fas
                  fa-suitcase-rolling
                  d-flex
                  justify-content-center
                  mt-2
                "
                style="font-size: 25px"
              ></i>
              <div
                class="text-center mt-1 font-weight-bold"
                style="color: black !important; font-size: 14px !important"
              >
                Seyahatler <span class="badge badge-danger" v-if="guestValueData.length != 0"> {{ guestValueData.length }}</span>
              </div>
            </nuxt-link>
            <nuxt-link to="/" tag="div" v-if="!$store.getters.isAuthenticated">
              <i
                class="fas fa-home d-flex justify-content-center"
                style="font-size: 25px; margin-top: 20px"
              ></i>
            </nuxt-link>
          </div>
          <div class="col-3" style="cursor: pointer">
            <nuxt-link to="/homes" tag="div">
              <i
                class="fas fa-search text-danger d-flex justify-content-center"
                style="font-size: 25px"
                :style="
                  $store.getters.isAuthenticated
                    ? 'font-size: 25px;margin-top:8px'
                    : 'font-size: 25px;margin-top:22px'
                "
              ></i>
              <div
                class="text-center mt-1 font-weight-bold"
                style="color: black !important; font-size: 14px !important"
                v-if="$store.getters.isAuthenticated"
              >
                Keşfet
              </div>
            </nuxt-link>
          </div>
          <div class="col-2" style="cursor: pointer">
            <div
              @click.prevent="
                $router.push('/travelMode/messages/' + $store.state.authKey)
              "
              v-if="$store.getters.isAuthenticated"
            >
              <i
                class="far fa-comment d-flex justify-content-center mt-2"
                style="font-size: 25px"
              ></i>
              <div
                class="mt-1 message-margin font-weight-bold"
                style="color: black !important; font-size: 14px !important"
              >
                Mesajlar
              </div>
            </div>
            <nuxt-link to="/homeHost" tag="div">
              <i
                class="fas fa-hotel d-flex justify-content-center mr-2"
                style="font-size: 23px; margin-top: 22px"
              ></i>
            </nuxt-link>
          </div>
          <div class="col-4" style="cursor: pointer">
            <div
              class="text-center mt-2 font-weight-bold"
              style="color: black !important; font-size: 14px !important"
            >
              <li
                class="border border-dark p-1 hover-li"
                @click.prevent="showCardMobile = !showCardMobile"
              >
                <i class="fas fa-bars"></i
                ><img
                  width="40"
                  style="object-fit: cover; user-select: none"
                  class="rounded-circle ml-2"
                  height="40"
                  v-if="userProfilesData.profileImage"
                  :src="
                    userProfilesData.profileImage == null
                      ? './user.png'
                      : userProfilesData.profileImage
                  "
                  alt=""
                />
                <img
                  width="40"
                  style="object-fit: cover; user-select: none"
                  class="rounded-circle ml-2"
                  height="40"
                  v-else
                  src="./user.png"
                  alt=""
                />
                <div class="mobile-not-number" v-if="guestValueData.length + hostValueData.length > 0"> {{ guestValueData.length + hostValueData.length }}</div>
              </li>
              
            </div>  
            <div
              v-if="showCardMobile"
              v-click-outside="showCardOutMobile"
              class="card showCard shadow-lg p-2"
            >
              <h6
                class="font-weight-bold font p-1"
                @click.prevent="$router.push('/auth')"
                style="cursor: pointer"
                v-if="!this.$store.getters.isAuthenticated"
              >
                Oturum açın
              </h6>
              <h6
                class="font p-1"
                style="cursor: pointer"
                @click.prevent="
                  $router.push('/profile/' + $store.state.authKey)
                "
                v-if="this.$store.getters.isAuthenticated"
              >
                Profil
              </h6>
              <h6
                class="font pt-1 pb-1 pl-1"
                @click.prevent="
                  $router.push('/travelMode/messages/' + $store.state.authKey)
                "
                style="cursor: pointer"
                v-if="this.$store.getters.isAuthenticated"
              >
                Mesajlar
              </h6>
              <h6
                class="p-1"
                style="cursor: pointer"
                @click.prevent="$router.push('/auth')"
                v-if="!this.$store.getters.isAuthenticated"
              >
                Kaydolun
              </h6>
              <hr v-if="!this.$store.getters.isAuthenticated" />
              <h6
                class="p-1"
                style="cursor: pointer"
                @click.prevent="$router.push('/homes')"
                v-if="!this.$store.getters.isAuthenticated"
              >
                Seyahate çıkın
              </h6>
              <h6
                class="p-1"
                style="cursor: pointer"
                @click.prevent="$router.push('/homeHost')"
              >
                Ev sahibi modu  <span class="badge badge-danger" v-if="hostValueData.length != 0"> {{ hostValueData.length }}</span>
              </h6>
              <hr v-if="this.$store.getters.isAuthenticated" />
              <h6
                class="p-1"
                @click.prevent="$router.push('/homeHost/help')"
                style="cursor: pointer"
              >
                Yardım
              </h6>
              <h6
                class="p-1"
                style="cursor: pointer"
                @click.prevent="logout"
                v-if="this.$store.getters.isAuthenticated"
              >
                Oturumu kapatın
              </h6>
            </div>
          </div>
        </div>
      </ul>
    </nav>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      showCard: false,
      showCardMobile: false,
      slash: false,
      guestNotData: [],
      guestValueData: [],
      hostNotData: [],
      hostValueData: [],
      messageData: 0,
      ref: null,
    };
  },
  props: {
    userProfilesData: {
      required: true,
    },
  },
  methods: {
    logout() {
      this.showCard = false;
      this.$store.dispatch("logout").then((res) => {
        window.location.reload();
      });
    },
    showCardOut() {
      this.showCard = false;
    },
    cardNotificationClose() {
      this.slash = false;
    },
    showCardOutMobile() {
      this.showCardMobile = false;
    },
    slashControl() {
      this.slash = true;
      this.guestValueData = [];
      this.hostValueData = [];
    },
    getNotData() {
      // Rezervasyon oluşturulunca giden bildirim misafire
      if (this.$store.state.authKey != null) {
        this.ref = this.$fire.firestore.collection("notification");
        this.ref
          .doc(this.$store.state.authKey)
          .collection("homes")
          .orderBy("orderDate")
          .onSnapshot((querySnapshot) => {
            let exampleData = [];
            let allNotData = [];
            querySnapshot.forEach((doc) => {
              allNotData.push(doc.data());
            });
            exampleData = allNotData.filter(
              (s) => s.guestId == this.$store.state.authKey
            );
            let tarih = new Date();
            let time = tarih.getTime();
            for (let example of exampleData) {
              if (time < example.orderDate + 604800000) {
                this.guestNotData = exampleData;
                this.guestNotData.reverse();
                this.$fire.firestore
                  .collection("notificationValue")
                  .doc(this.$store.state.authKey)
                  .collection("hostId")
                  .onSnapshot((querySnapshot) => {
                    let exampleData2 = [];
                    let allNotData = [];
                    querySnapshot.forEach((doc) => {
                      allNotData.push(doc.data());
                    });
                    if (allNotData.length != 0) {
                      exampleData2 = allNotData.filter(
                        (s) => s.guestId == this.$store.state.authKey
                      );
                      this.guestValueData = exampleData2;
                    }
                  });
              }
            }
          });
        axios
          .get(
            "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData.json"
          )
          .then((res) => {
            let data = res.data;
            let travelAllData = [];
            let newTravelData = [];
            let authData = [];
            let allNotData2 = [];

            for (let key in data) {
              travelAllData.push({ firebaseId: key, ...data[key] });
            }

            newTravelData = travelAllData.filter(
              (s) => s.userProfileData.authId == this.$store.state.authKey
            );

            newTravelData.forEach((auth) => {
              authData.push(auth.authId);
            });
            let allNotData = [];
            let exampleData2 = [];
            for (let auth of authData) {
              this.ref
                .doc(auth)
                .collection("homes")
                .onSnapshot((querySnapshot) => {
                  querySnapshot.forEach((doc) => {
                    allNotData2.push(doc.data());
                  });

                  exampleData2 = allNotData2.filter(
                    (s) => s.hostId == this.$store.state.authKey
                  );
                  this.hostNotData = exampleData2;
                  this.hostNotData.reverse();
                });
              this.$fire.firestore
                .collection("notificationValue")
                .doc(auth)
                .collection("hostId")
                .doc(this.$store.state.authKey)
                .collection("hostData")
                .onSnapshot((querySnapshot) => {
                  let exampleData = [];
                  querySnapshot.forEach((doc) => {
                    allNotData.push(doc.data());
                  });
                  this.hostValueData = allNotData;
                });
            }
          });
      }
      // Rezervasyon oluşturulunca giden bildirim misafire bitiş
    },
  },
  created() {
    this.getNotData();
  },
};
</script>

<style  scoped>
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

.scroller {
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;
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
.font {
  font-family: "Titillium Web", sans-serif !important;
}
@media (min-width: 1450px) {
  .bar-nav {
    font-size: 17px !important;
  }
  .img-nav {
    width: 45px;
    height: 45px;
  }
  .font-size-bedfied {
    font-size: 35px !important;
  }
  .lis {
    font-size: 25px !important;
  }
  .font {
    font-size: 19px !important;
  }
}
nav {
  height: 16vh;
  margin: 0;
  display: flex;
  justify-content: center;
  font-family: "Titillium Web", sans-serif !important;
}
.hover-li {
  border-radius: 60px;
  list-style-type: none;
  cursor: pointer;
}
.hover-li:hover {
  background: linear-gradient(to right, #323b42, #121317);
  color: #ffff !important;
}
.ft {
  font-size: 20px !important;
}
.hover-detail:hover {
  color: #f93b3b;
}
.menu-bar {
  border-radius: 25px;
  height: fit-content;
  position: fixed;
  z-index: 5;
  width: 100%;
  display: inline-flex;
  background-color: white;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  align-items: center;
  padding: 0 10px;
}
.button-click {
  transition: transform 80ms ease-in;
}

.button-click:active {
  transform: scale(0.95);
}
.menu-logo2 {
  display: none;
}
.menu-bar2 {
  width: 100% !important;
  height: 60px;
  position: fixed !important;
  bottom: -15px;
  background: #fff;
  z-index: 5;
  list-style: none;
}
.lis {
  list-style: none;
  color: black;
  font-family: sans-serif;
  font-weight: bold;
  padding: 11px 15px;
  margin: 8px 8px;
  position: relative;
  cursor: pointer;
  font-size: 20px;
  white-space: nowrap;
}
.lis:hover {
  color: #fff;
}
.message-margin {
  margin-left: -35%;
}
.lis:hover::before {
  background: linear-gradient(to right, #565f66, #414347);

  color: #ffff;
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
  nav {
    height: 5vh !important;
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
.showCard {
  z-index: 5;
  position: absolute;
  margin-top: -290px;
  margin-left: -90px;
  height: auto;
  width: 200px;
  border-radius: 10px;
}
</style>