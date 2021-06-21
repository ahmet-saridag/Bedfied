<template>
  <div>
    <div>
      <HostHeader :userProfilesData="userProfileDatas" />
    </div>
    <div class="container fm">
      <div class="row">
        <div
          class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3"
          v-if="!travelData.travelRemoveMode.reserveStatus"
        >
          <div class="buttons">
            <div
              class="card px-5 pt-5 pb-3 border-0 mb-3 w-100 card-padding-mobile"
              style="border-radius: 40px"
            >
              <div class="card-title">
                <h2 class="mb-4 text-center h2-mobile">
                  Rezervasyon Detayları
                </h2>
                <h5>
                  Rezervasyon isteği : {{ travelData.createRezevDate.Days }}.{{
                    travelData.createRezevDate.months
                  }}.{{ travelData.createRezevDate.years }} -
                  {{ travelData.createRezevDate.hours }}:{{
                    travelData.createRezevDate.Minutes
                  }}'da oluşturuldu
                </h5>
                <h6>
                  Rezerve etmek isteyen misafiriniz:
                  {{
                    CreateRezervPersonProfile.fullName == null
                      ? "İsim belirtilmemiş"
                      : CreateRezervPersonProfile.fullName
                  }}
                  <img
                    :src="
                      CreateRezervPersonProfile.profileImage == null
                        ? './user.png'
                        : CreateRezervPersonProfile.profileImage
                    "
                    style="object-fit: cover"
                    width="70"
                    height="70"
                    alt=""
                    class="rounded-circle float-right mt-3"
                  />
                </h6>
                <h6>
                  {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.goDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.goDate.split("-")[0] }}
                  ile
                  {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.endDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.endDate.split("-")[0] }}
                  arası
                </h6>
                <h6>
                  {{ travelData.lastDay }} günlük seyahat /
                  {{
                    travelData.travelData.guest.oldBoy +
                    travelData.travelData.guest.middleBoy
                  }}
                  misafir {{ travelData.travelData.guest.smallBoy }} bebek
                </h6>
                <h6 class="font-weight-bold">
                  Toplam kazancınız:
                  {{ travelData.homeData.price * travelData.lastDay }}₺
                </h6>
                <p>
                  <span class="font-weight-bold"
                    >Misafirin mesajı {{ travelData.reser }}
                  </span>
                  :{{ travelData.travelData.travelsMessage }}
                </p>
                <button
                  @click.prevent="
                    $router.push('/homeHost/messages/' + $store.state.authKey)
                  "
                  class="btn btn-info d-flex justift-content-center mx-auto mt-4"
                >
                  Misafir ile iletişime geç
                  <i class="far fa-comment mt-1 ml-2"></i>
                </button>
              </div>
            </div>
            <!-- <button @click.prevent="$router.push('/homes/' + travelData.homeDataFirebaseId )" class="btn btn-info">Konutun Profiline Git</button> -->
            <div class="groups text-center">
              <button
                @click.prevent="removeTravel"
                class="btn text-white mb-2"
                style="background: #f93b3b"
              >
                Rezervasyonu reddet <i class="fas fa-times-circle"></i>
              </button>
              <button
                @click.prevent="acceptRezervation"
                class="btn btn-success mb-2"
              >
                Rezervasyonu kabul et <i class="fa fa-check-circle ml-1"></i>
              </button>
            </div>
          </div>
        </div>
        <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-xs-12 mt-3" v-else>
          <div class="card mt-5 border-0">
            <div class="card-title mt-4">
              <h4 class="text-center text-success mb-4">
                Tebrikler rezervasyon onaylandı <img src="./check.png" alt="" />
              </h4>
              <div class="card-title">
                <h5>
                  Rezervasyon isteği : {{ travelData.createRezevDate.Days }}.{{
                    travelData.createRezevDate.months
                  }}.{{ travelData.createRezevDate.years }} -
                  {{ travelData.createRezevDate.hours }}:{{
                    travelData.createRezevDate.Minutes
                  }}'da oluşturuldu
                </h5>
                <h6>
                  Rezerve etmek isteyen misafiriniz:
                  {{
                    CreateRezervPersonProfile.fullName == null
                      ? "İsim belirtilmemiş"
                      : CreateRezervPersonProfile.fullName
                  }}
                  <img
                    :src="
                      CreateRezervPersonProfile.profileImage == null
                        ? './user.png'
                        : CreateRezervPersonProfile.profileImage
                    "
                    style="object-fit: cover"
                    width="70"
                    height="70"
                    alt=""
                    class="rounded-circle float-right"
                  />
                </h6>
                <h6>
                  {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.goDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.goDate.split("-")[0] }}
                  ile
                  {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.endDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.endDate.split("-")[0] }}
                  arası
                </h6>
                <h6>
                  <i class="fa fa-info-circle text-info"></i> Misafirinize
                  konutunuza hangi saat aralığında gelmesi gerektiğini mesaj
                  atarak belirtin.
                </h6>
                <h6>
                  {{ travelData.lastDay }} günlük seyahat /
                  {{
                    travelData.travelData.guest.oldBoy +
                    travelData.travelData.guest.middleBoy
                  }}
                  misafir {{ travelData.travelData.guest.smallBoy }} bebek
                </h6>
                <h6 class="font-weight-bold">
                  Toplam kazancınız:
                  {{ travelData.homeData.price * travelData.lastDay }}₺
                </h6>
                <p>
                  <span class="font-weight-bold">Misafirin mesajı</span> :{{
                    travelData.travelData.travelsMessage
                  }}
                </p>
                <button
                  @click.prevent="
                    $router.push('/homeHost/messages/' + $store.state.authKey)
                  "
                  class="btn btn-info d-flex justift-content-center mx-auto mt-4"
                >
                  Misafir ile iletişime geç
                  <i class="far fa-comment mt-1 ml-2"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-lg-4 col-xl-4 col-sm-12 col-xs-12 mt-5">
          <div
            class="card ml-3 card-width-mobile"
            style="width: 25rem; border-radius: 20px"
          >
            <img
              class="card-img-top"
              height="200"
              width="200"
              style="object-fit: cover; border-radius: 20px 20px 0px 0px"
              :src="travelData.homeData.photos[0].photo"
              alt="Card image cap"
            />
            <div class="card-body p-4 text-center">
              <h5 class="card-title mb-1">
                <h6 class="mt-2 text-center">
                  {{ travelData.travelData.dateData.goDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.goDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.goDate.split("-")[0] }}
                  ile
                  {{ travelData.travelData.dateData.endDate.split("-")[2] }}.{{
                    travelData.travelData.dateData.endDate.split("-")[1]
                  }}.{{ travelData.travelData.dateData.endDate.split("-")[0] }}
                  arası
                </h6>
                {{ travelData.homeData.county }} <br />
              </h5>
              <p class="card-text">
                {{ travelData.homeData.peopleCounty }} misafir
                {{ Math.floor(travelData.homeData.bed) }} yatak odası
                {{ travelData.homeData.bed }} yatak
                {{ travelData.homeData.bathroom }} banyo
              </p>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 100px"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HostHeader from "@/components/host/hostHeader";
export default {
  middleware: ["session-control", "auth"],

  layout: "homes",
  components: {
    HostHeader,
  },
  data() {
    return {
      accept: true,
      CreateRezervPersonProfile: [],
      rezervationData: [],
      userProfileDatas: [],
    };
  },
  asyncData(context) {
    return axios
      .get(
        "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
          context.params.rezervationId +
          ".json"
      )
      .then((res) => {
        return {
          travelData: res.data,
        };
      });
  },
  methods: {
    removeTravel() {
      var answer = confirm(
        "Rezervasyonu iptal etmek istediginize emin misiniz?"
      );
      if (answer) {
        axios
          .put(
            "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
              this.$route.params.rezervationId +
              ".json",
            {
              homeData: this.rezervationData.homeData,
              travelData: this.rezervationData.travelData,
              homeDataFirebaseId: this.rezervationData.homeDataFirebaseId,
              createRezevDate: this.rezervationData.createRezevDate,
              userProfileData: this.rezervationData.userProfileData,
              authId: this.rezervationData.authId,
              lastDay: this.rezervationData.lastDay,
              travelRemoveMode: {
                authId: this.$store.state.authKey, // Rezervasyonun oluşturan kişi
                reserveStatus: false,
              },
            }
          )
          .then((res) => {
            let goDayDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[2];
            let goMonthDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[1];
            let goYearDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[0];
            let endDayDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[2];
            let endMonthDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[1];
            let endYearDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[0];
            axios.post("https://www.bedfied.com/api/sendHostRemove", {
              hostEmail: this.userProfileDatas.email,
              hostName: this.userProfileDatas.fullName,
              hostHomePhoto: this.travelData.homeData.photos[0].photo,
              price: this.travelData.homeData.price * this.travelData.lastDay,
              totalDays: this.rezervationData.lastDay,
              goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
              endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
              goMyRezervations: "https://www.bedfied.com/homeHost/myReservations",
              guestName: this.CreateRezervPersonProfile.fullName,
              guestProfilePhoto: this.CreateRezervPersonProfile.profileImage,
            });
            axios.post("https://www.bedfied.com/api/sendGuestRemove", {
              guestName: this.CreateRezervPersonProfile.fullName,
              guestEmail: this.CreateRezervPersonProfile.email,
              hostName: this.userProfileDatas.fullName,
              hostProfilePhoto: this.userProfileDatas.profileImage,
              hostHomePhoto: this.travelData.homeData.photos[0].photo,
              price:
                this.travelData.homeData.price * this.travelData.lastDay +
                (this.travelData.homeData.price * this.travelData.lastDay) / 8,
              totalDays: this.rezervationData.lastDay,
              goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
              endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
              goMyRezervations: "https://www.bedfied.com/homes",
            });
            this.$router.push("/homeHost/myReservations");
          });
      } else {
        return;
      }
    },
    getCreateRezervPersonProfile() {
      axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
            this.$route.params.rezervationId +
            ".json"
        )
        .then((response) => {
          this.rezervationData = response.data;
          axios
            .get(
              "https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json"
            )
            .then((res) => {
              let data = res.data;
              let newArray = [];
              for (let key in data) {
                newArray.push({ firebaseId: key, ...data[key] });
              }
              let userData = [];
              userData.push(
                newArray.find((s) => s.authId == this.travelData.authId)
              );
              if (userData[0] != undefined) {
                this.CreateRezervPersonProfile = userData[0];
              }
            });
        });
    },
    acceptRezervation() {
      var answer = confirm(
        "Rezervasyonu kabul etmek istediginize emin misiniz?"
      );
      if (answer) {
        axios
          .put(
            "https://munhasir-ad882-default-rtdb.firebaseio.com/travelData/" +
              this.$route.params.rezervationId +
              ".json",
            {
              homeData: this.rezervationData.homeData,
              createRezevDate: this.rezervationData.createRezevDate,
              travelData: this.rezervationData.travelData,
              homeDataFirebaseId: this.rezervationData.homeDataFirebaseId,
              userProfileData: this.rezervationData.userProfileData,
              authId: this.rezervationData.authId,
              lastDay: this.rezervationData.lastDay,
              travelRemoveMode: {
                authId: this.$store.state.authKey, // Rezervasyonun oluşturan kişi
                reserveStatus: true,
              },
            }
          )
          .then((res) => {
            let goDayDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[2];
            let goMonthDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[1];
            let goYearDate = this.travelData.travelData.dateData.goDate.split(
              "-"
            )[0];
            let endDayDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[2];
            let endMonthDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[1];
            let endYearDate = this.travelData.travelData.dateData.endDate.split(
              "-"
            )[0];
            axios.post("https://www.bedfied.com/api/sendHostAccept", {
              hostEmail: this.userProfileDatas.email,
              hostName: this.userProfileDatas.fullName,
              hostHomePhoto: this.travelData.homeData.photos[0].photo,
              price: this.travelData.homeData.price * this.travelData.lastDay,
              totalDays: this.rezervationData.lastDay,
              oldBoy: this.travelData.travelData.guest.oldBoy,
              middleBoy: this.travelData.travelData.guest.middleBoy,
              smallBoy: this.travelData.travelData.guest.smallBoy,
              goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
              endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
              goMyRezervations: "https://www.bedfied.com/homeHost/myReservations",
              goMessages:
                "https://www.bedfied.com/homeHost/messages/" +
                this.$store.state.authKey,
              guestName: this.CreateRezervPersonProfile.fullName,
              guestProfilePhoto: this.CreateRezervPersonProfile.profileImage,
            });
            axios.post("https://www.bedfied.com/api/sendGuestAccept", {
              guestEmail: this.CreateRezervPersonProfile.email,
              guestName: this.CreateRezervPersonProfile.fullName,
              hostProfilePhoto: this.userProfileDatas.profileImage,
              hostHomePhoto: this.travelData.homeData.photos[0].photo,
              hostName: this.userProfileDatas.fullName,
              county: this.travelData.homeData.county,
              price:
                this.travelData.homeData.price * this.travelData.lastDay +
                (this.travelData.homeData.price * this.travelData.lastDay) / 8,
              totalDays: this.rezervationData.lastDay,
              houseType: this.travelData.homeData.houseType,
              houseStayType: this.travelData.homeData.houseStayType,
              adres: this.travelData.homeData.adres,
              oldBoy: this.travelData.travelData.guest.oldBoy,
              middleBoy: this.travelData.travelData.guest.middleBoy,
              smallBoy: this.travelData.travelData.guest.smallBoy,
              goDate: goDayDate + "." + goMonthDate + "." + goYearDate,
              endDate: endDayDate + "." + endMonthDate + "." + endYearDate,
              goMyRezervations: "https://www.bedfied.com/homeHost/myReservations",
              goMessages:
                "https://www.bedfied.com/homeHost/messages/" +
                this.$store.state.authKey,
            });
            window.location.reload();
          });
      } else {
        return;
      }
    },
    getUserDATA() {
      return axios
        .get(
          "https://munhasir-ad882-default-rtdb.firebaseio.com/userProfileDATA.json"
        )
        .then((res) => {
          let data = res.data;
          let userArray = [];
          let newArray = [];
          for (let key in data) {
            userArray.push({ firebaseId: key, ...data[key] });
          }
          newArray = userArray.find(
            (c) => c.authId == this.$store.state.authKey
          );
          if (newArray) {
            this.userProfileDatas = newArray;
          }
        });
    },
  },
  created() {
    this.getCreateRezervPersonProfile();
    this.getUserDATA();
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@1,200&family=Titillium+Web:wght@300&display=swap");
.fm {
  font-family: "Titillium Web", sans-serif !important;
}
@media (max-width: 762px) {
  .card-padding-mobile {
    padding: 10px !important;
  }
  .card-width-mobile {
    width: 20rem !important;
    margin-left: 4px !important;
  }
  .h2-mobile {
    font-size: 25px !important ;
    font-weight: bold;
  }
}
</style>