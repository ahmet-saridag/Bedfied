<template>
  <div>
    <HomesPageHeader :userProfilesData="userData" />
    <div class="containers">
      <div class="main-body mt-4">
        <div class="row gutters-sm">
          <div class="col-md-4 mb-3" v-if="showProfile">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    :src="
                      user.profileImage == null
                        ? 'https://www.gravatar.com/avatar/49475d1f1538f4b301c5d7a6cc634191?s=285&r=g&d=https%3A%2F%2Fwww.bursasporluyuz.org%2Fwp-content%2Fuploads%2Favatars%2Fbursasporluyuz-guest.jpg'
                        : user.profileImage
                    "
                    alt="Yükleniyor..."
                    class="rounded-circle"
                    width="150"
                    height="150"
                    style="object-fit: cover; background-size: cover"
                  />
                  <div class="mt-3">
                    <h4>{{ user.fullName }}</h4>
                    <p class="text-secondary mb-1">Ev sahibi</p>
                    <p class="text-muted font-size-sm">Türkiye</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4 mb-3" v-if="showUbdateProfile">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-column align-items-center text-center">
                  <img
                    :src="photoUrl == null ? user.profileImage : photoUrl"
                    class="rounded-circle border border-danger"
                    width="150"
                    height="150"
                    style="object-fit: cover; background-size: cover"
                  />
                  <div
                    v-if="progress != null"
                    class="progress-bar bg-danger progress-bar-striped progress-bar-animated"
                    :style="'width:' + progress + '%'"
                  >
                    {{ Math.floor(progress) }}%
                  </div>
                  <div class="mt-3">
                    <h4>
                      {{
                        user.fullName == null
                          ? "İsim belirtilmemiş"
                          : user.fullName
                      }}
                    </h4>
                    <p class="text-secondary mb-1">Ev sahibi</p>
                    <p class="text-muted font-size-sm">Türkiye</p>
                    <input
                      ref="file4"
                      type="file"
                      @change="processFile($event)"
                      value=""
                      style="display: none"
                    />
                    <button
                      class="btn btn-danger btn-md mt-1"
                      @click.prevent="$refs.file4.click()"
                      v-if="showUbdateProfile"
                    >
                      Fotoğraf Seç
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8" v-if="showProfile">
            <div class="card mb-3 border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">İsim Soyisim</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{
                      user.fullName == null
                        ? "İsim belirtilmemiş"
                        : user.fullName
                    }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{
                      user.email == null ? "Email belirtilmemiş" : user.email
                    }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon Numarası</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{
                      user.phone == null ? "Numara belirtilmemiş" : user.phone
                    }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Doğum Tarihi</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    {{ user.date == null ? "Tarih belirtilmemiş" : user.date }}
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <button
                      @click.prevent="showProfiles"
                      class="btn btn-danger"
                    >
                      Düzenle
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-8" v-if="showUbdateProfile">
            <div class="card mb-3 border-0">
              <div class="card-body">
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">İsim Soyisim</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="user.fullName"
                      class="form-control w-50 border border-dark"
                      id="inputFullName1"
                      type="text"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Email</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="user.email"
                      class="form-control w-50 border border-dark"
                      id="email"
                      type="email"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Telefon Numarası</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="user.phone"
                      class="form-control w-50 border border-dark"
                      id="inputPhone1"
                      type="text"
                    />
                  </div>
                </div>
                <hr />
                <div class="row">
                  <div class="col-sm-3">
                    <h6 class="mb-0">Doğum Tarihi</h6>
                  </div>
                  <div class="col-sm-9 text-secondary">
                    <input
                      v-model="user.date"
                      class="form-control w-50 border border-dark"
                      id="inputDate1"
                      type="text"
                    />
                  </div>
                </div>
                <hr />
                <hr />
                <div class="row">
                  <div class="col-12 d-flex justify-content-center">
                    <button
                      @click="ubdateProfiles"
                      v-if="goUbdateButton"
                      class="btn btn-danger"
                    >
                      Güncelle
                    </button>
                  </div>
                </div>
              </div>
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
import HomesPageHeader from "@/components/common/homesPageHeader";
export default {
  layout: "homes",
  components: {
    HomesPageHeader,
  },
  data() {
    return {
      user: {
        fullName: null,
        email: null,
        date: null,
        phone: null,
        profileImage: null,
        firebaseId: null,
      },
      photoUrl: null,
      goUbdateButton: true,
      showProfile: true,
      userData: [],
      progress: null,
      showUbdateProfile: false,
    };
  },
  methods: {
    processFile(event) {
      let photo1Id = Math.random(Math.round()) * 10000000000;
      let file = event.target.files[0];
      this.photoUrl = URL.createObjectURL(file);
      var storageRef = this.$fire.storage
        .ref("userPhoto/")
        .child("photos1/" + photo1Id)
        .put(file);
      storageRef.on(
        "state_changed",
        (snapshot) => {
          this.progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error);
        },
        () => {
          this.$fire.storage
            .ref("userPhoto/")
            .child("photos1/" + photo1Id)
            .getDownloadURL()
            .then((url) => {
              this.user.profileImage = url;
            });
        }
      );
      //  console.log(this.photos.photo1)
    },
    showProfiles() {
      (this.showProfile = false), (this.showUbdateProfile = true);
    },
    ubdateProfiles() {
      this.$store
        .dispatch("ubdateUserProfiles", {
          firebaseId: this.user.firebaseId,
          user: this.user,
        })
        .then((res) => {
          window.location.reload();
        });
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
            this.user.firebaseId = newArray.firebaseId;
            this.user.authId = newArray.authId;
              if (newArray.email != undefined) {
                this.user.email = newArray.email;
              }
              if (newArray.profileImage != undefined) {
                this.user.profileImage = newArray.profileImage;
              }
              if (newArray.fullName != undefined) {
                this.user.fullName = newArray.fullName;
              }
               if (newArray.phone != undefined) {
                this.user.phone = newArray.phone;
              }
               if (newArray.date != undefined) {
                this.user.date = newArray.date;
              }
            this.userData = newArray;
          }
        });
    },
  },
  created() {
    this.getUserDATA();
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}
.containers {
  width: 80%;
  height: 100%!important;
  margin-right: auto;
  margin-left: auto;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 0 solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

.card-body {
  flex: 1 1 auto;
  min-height: 1px;
  padding: 1rem;
}

.gutters-sm {
  margin-right: -8px;
  margin-left: -8px;
}

.gutters-sm > .col,
.gutters-sm > [class*="col-"] {
  padding-right: 8px;
  padding-left: 8px;
}
.mb-3,
.my-3 {
  margin-bottom: 1rem !important;
}

.bg-gray-300 {
  background-color: #e2e8f0;
}
.h-100 {
  height: 100% !important;
}
.shadow-none {
  box-shadow: none !important;
}
</style>