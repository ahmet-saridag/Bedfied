
import express from 'express';
import { json } from 'body-parser';
import nodemailer from 'nodemailer';
var Iyzipay = require('iyzipay');
const app = express();
app.use(json())


var iyzipay = new Iyzipay({
    apiKey: 'sandbox-8SZWtdSzwBlOY3PCqwdC5G9tiunO3K9N',
    secretKey: 'sandbox-3ga4qSLkbljJtmFGt2ZfgY3W6IyTQkBT',
    uri: 'https://sandbox-api.iyzipay.com'
});

/* 1.ADIM  Ev sahibi kredi kartı bilgilerini kayıt etme dönen değeri */
app.post('/addHostIban' , (req , res) => {
  iyzipay.subMerchant.create({
    name:'Ahmet Sarıdağ',
    locale: Iyzipay.LOCALE.TR,
    subMerchantExternalId: 'S49222dd',
    subMerchantType: Iyzipay.SUB_MERCHANT_TYPE.PRIVATE_COMPANY,
    address: 'Nidakule Göztepe, Merdivenköy Mah. Bora Sok. No:1',
    taxOffice: 'Tax officesd',
    legalCompanyTitle: 'John Doe incss',
    email: 'emailsd@submerchantemail.com',
    gsmNumber: '+905350000001',
    name: 'John\'s marketds',
    iban: 'TR 1800 0620 0119 0000 0667 2315',
    identityNumber: '313008647265',
    currency: Iyzipay.CURRENCY.TRY
}, function (err, result) {
    console.log(err, result);
});
})
/* 1.ADIM bitiş  Ev sahibi kredi kartı bilgilerini kayıt etme dönen değeri kullanman gerekiyor  */

/*  2.ADIM BİTİŞ   */




/*  2.ADIM  BİTİŞ  */



app.get("/get-all-data", (req, res) => {

  res.status(200).json({
    data: 'Her şey yolundaa !!!'
  })


});
//  <-- Rezervasyon oluşturulunca misafire giden email
app.post('/sendGuest', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
     
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', rezervasyonun başarıyla oluşturuldu.',
    text: 'Merhaba ' + req.body.guestName + ', rezervasyonun başarıyla oluşturuldu. (24 saat içerisinde onaylanmassa rezervasyon iptal edilecektir.)  ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      İsteğiniz gönderildi
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
      Bu onaylanmış (en azından şimdilik) bir rezervasyon değildir. 24 saat
      içerisinde yanıt alacaksınız.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     ${req.body.houseType}
    </h2>
        <h3 style="color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
          ${req.body.houseStayType} , ${req.body.totalDays} günlük seyahat <br />
          Ev sahibi : ${req.body.hostName = undefined ? 'İsim yok' : req.body.hostName}
        </h3>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Rezervasyon yaptığınız konuta güvenli bir gidiş sağlamadığınız sürece , sizden hiçbir ücret alınmayacaktır.
    </h3>
    <hr style="margin:15px 0px 15px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    color: #fff;
    background: #3E3E3B;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}"> Seyahatlerinize gidin</a>
     

  <a   style="
  display: block;
 width: 505px;
 text-decoration:none;
 text-align:center;
 margin-bottom: 5%;
 color: #fff;
 background: #f93b3b;
 border: none;
 padding: 10px;
 border-radius: 5px;
 cursor:pointer;
 font-size:22px;
" href="${req.body.cancelRezervation}"> İsteği iptal et</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })

})
// --> Rezervasyon oluşturulunca misafire giden email bitiş

// Aynı zamanda

//  <-- Rezervasyon oluşturulunca ev sahibine giden email
app.post('/sendHost', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', misafirin var !.',
    text: 'Merhaba ' + req.body.hostName + ', 24 saat içerisinde onaylamassanız rezervasyon iptal edilecektir  ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Misafiriniz var
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Rezervasyonu inceleyip kabul etmek için 24 saat süreniz bulunmakta aksi takdirde otomatik olarak iptal edilecektir.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: ${req.body.price}₺
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafiriniz: ${req.body.guestName}  <br />
          ${req.body.oldBoy} yetişkin ${req.body.middleBoy} çocuk ${req.body.smallBoy}  bebek
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Misafir evinize güvenli bir giriş yapmadığı sürece ücretiniz yatırılmayacaktır. Lütfen misafirinize keyifli bir seyahat zevki yaşatın.
    </h3>
    <hr style="margin:15px 0px 15px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #3E3E3B;
    color: #fff;

    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}"> Rezervasyonlarınıza gidin</a>
     

  <a   style="
  display: block;
 width: 505px;
 text-decoration:none;
 text-align:center;
 margin-bottom: 5%;
 color: #fff;
 background: #f93b3b;
 border: none;
 padding: 10px;
 border-radius: 5px;
 cursor:pointer;
 font-size:22px;
" href="${req.body.cancelRezervation}"> İsteği iptal et</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon oluşturulunca ev sahibine giden email bitiş

// <-- Rezervasyonu ev sahibi iptal edince ev sahibine giden email
app.post('/sendHostRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', rezervasyonu iptal ettin :(',
    text: 'Merhaba ' + req.body.hostName + ', rezervasyonu iptal ettin :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Misafiriniz buna üzülücek :/
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Rezervasyonu iptal ettiniz.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: 0₺
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafiriniz: ${req.body.guestName}  <br />
            Seyahat sizin tarafınızdan iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #3E3E3B;
    color: #fff;

    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}"> Rezervasyonlarınıza gidin</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon ev sahibi iptal edince ev sahibine giden email bitiş 

// <-- Rezervasyonu ev sahibi iptal edince misafire giden email 
app.post('/sendGuestRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', rezervasyonunu ev sahibi iptal etti :(',
    text: 'Merhaba ' + req.body.guestName + ', rezervasyonunu ev sahibi iptal etti :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
    <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Ev sahibi rezervasyonu iptal etti. Ama üzülmeyin rezervasyon ücreti eksiksiz bir şekilde iade edildi. :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Yeni bir rezervasyon oluşturmak ister misiniz? yakınlardaki rezervasyonları keşifedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam iade edilen miktar: ${req.body.price}₺ <br> (Ücret iadesi bankanıza gönderildi <br/> size ulaştırması zaman alabilir)
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Ev sahibi: ${req.body.hostName}  <br />
            Ev sahibi tarafından iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon ev sahibi iptal edince misafire giden email bitiş 

 // Misafir iptal edince

// <-- Rezervasyonu misafir iptal edince misafire giden email 
app.post('/sendHaveGuestRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', rezervasyonu iptal ettiniz :(',
    text: 'Merhaba ' + req.body.guestName + ', rezervasyonu iptal ettiniz :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
    <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
       Rezervasyonu iptal ettiniz. Oluşturulan rezervasyon ücreti eksiksiz bir şekilde iade edildi. :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
    Yeni bir rezervasyon oluşturmak ister misiniz? yakınlardaki konaklamaları keşifedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam iade edilen miktar: ${req.body.price}₺ <br> (Ücret iadesi bankanıza gönderildi <br/> size ulaştırması zaman alabilir)
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Ev sahibi: ${req.body.hostName}  <br />
            Sizin tarafınızdan iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon  misafir iptal edince misafire giden email bitiş  

app.post('/sendHaveHostRemove', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', rezervasyonu misafiriniz iptal etti :(',
    text: 'Merhaba ' + req.body.hostName + ', rezervasyonu misafiriniz iptal etti :( ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
   <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
       Rezervasyonunuz iptal edildi. Yeni misafirleriniz için konutunuzu tekrardan rezerve edebilirsiniz. :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
      Başka bir ev sahibinin evine misafir olmak ister misiniz? yakınlardaki konaklamaları keşifedin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
          
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: 0₺
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafir: ${req.body.guestName}  <br />
            Misafir tarafından iptal edilmiştir.
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="70"
        width="70"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Yakınlardaki konaklamaları keşfet</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})

// Misafir iptal edince bitiş


// <-- Rezervasyon kabul edilince ev sahibine giden email 
app.post('/sendHostAccept', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.hostEmail,
    subject: 'Merhaba ' + req.body.hostName + ', rezervasyonu kabul ettiniz :)',
    text: 'Merhaba ' + req.body.hostName + ', rezervasyonu kabul ettiniz :) ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
   <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      Tebrikler rezervasyonu onayladınız :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
     Misafirinize eve giriş çıkış saatlerini belirtip , ayrıntılarıda mesaj atarak belirtin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam kazancınız: ${req.body.price}₺ <br> (konaklama ücreti misafir evinize güvenli <br> bir giriş sağladıktan sonra onayladığı <br> takdirde gönderilecektir)
    </h2>
        <h3 style=" color:#323339;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , Misafir: ${req.body.guestName}  <br />
           ${req.body.oldBoy} yetişkin ${req.body.middleBoy} çocuk ${req.body.smallBoy}  bebek
        </h3>
      </div>
      <img
        src="${req.body.guestProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.guestProfilePhoto}"
        style="object-fit: cover; margin-left: auto; margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
    Misafir evinize güvenli bir giriş yapmadığı sürece ücretiniz yatırılmayacaktır. Lütfen misafirinize keyifli bir seyahat zevki yaşatın.
  </h3>
  <hr style="margin:15px 0px 15px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Rezervasyonlara gidin</a>
  
  <a   style="
  display: block;
 width: 505px;
 text-decoration:none;
 text-align:center;
 margin-bottom: 5%;
 background: #323339;
 color: #fff;
 border: none;
 padding: 10px;
 border-radius: 5px;
 cursor:pointer;
 font-size:22px;
" href="${req.body.goMessages}">Mesajlara git</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon kabul edilince ev sahibine giden email bitiş

// <-- Rezervasyon kabul edilince misafire giden email 
app.post('/sendGuestAccept', (req, res) => {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bedfied@gmail.com',
      pass: 'mwssmftfowsebnsw'
    }
  });
  var mailOptions = {
    from: 'bedfied@gmail.com',
    to: req.body.guestEmail,
    subject: 'Merhaba ' + req.body.guestName + ', ev sahibi rezervasyonu kabul etti :)',
    text: 'Merhaba ' + req.body.guestName + ', ev sahibi rezervasyonu kabul etti :) ',
    html: `  <div style="  width: 505px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 3%;">
    <h1
      style="
        color: #f93b3b;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     <span class="text-dark font-weight-bold">Bedfied</span>
    </h1>
    <h2
      style="
        margin-top: 1%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
      ${req.body.county} bölgesine gidiyorsunuz :)
    </h2>
    <h3
      style="
        margin-top: 4%;
        margin-bottom: 4%;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        color:#323339;
        font-weight:500;
      "
    >
     Ev sahibinden eve giriş çıkış saatlerini öğrenip , bilmeniz gerekenleride mesaj atarak belirtmesini isteyin.
    </h3>
    <img
      src="${req.body.hostHomePhoto}"
      style="width: 505px; object-fit: cover; border-radius: 10px"
      height="300"
      alt=""
    />
    <div  style=" display: flex;
    width: 505px;">
      <div
        class="houseContainer"
        style="
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        "
      >
      <h2
      style="
        margin-top: 4%;
        font-family: 'Titillium Web', sans-serif !important;
        color:#323339;
        font-weight:500;
        font-family:Verdana, Geneva, Tahoma, sans-serif
      "
    >
     Toplam seyahat tutarı: ${req.body.price}₺ <br> (konaklama ücreti siz konuta güvenli <br> bir giriş sağladıktan sonra onayladığınız <br> takdirde gönderilecektir)
    </h2>
        <h2 style=" color:#323339!important;   font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;">
           ${req.body.totalDays} günlük seyahat , <br />
           Ev sahibi: ${req.body.hostName}  <br />
           ${req.body.houseType} , ${req.body.houseStayType} <br/>
           ${req.body.oldBoy} yetişkin ${req.body.middleBoy} çocuk ${req.body.smallBoy}  bebek <br/>
        </h2>
      </div>
      <img
        src="${req.body.hostProfilePhoto == '' ? 'https://images.unsplash.com/photo-1604966795869-8df0b4517138?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80' : req.body.hostProfilePhoto}"
        style="object-fit: cover;margin-left:auto ;margin-top: 3%;border-radius:50%"
        height="60"
        width="60"
        alt=""
      />
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <div  style=" display: flex;
    width: 505px;">
      <h2 style="font-weight:400; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;; color:#323339;">
       ${req.body.goDate} ile
      </h2>
      <h2
        style="
          margin-left: auto;
          font-weight:400;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
          color:#323339;
        "
      >
        ${req.body.endDate} arası
      </h2>
    </div>
    <hr style="margin:10px 0px 10px 0px "/>
    <h2 style=" color:#323339!important;">
    Adres: ${req.body.adres} <br/>
    <a   style="
    display: block;
   width: 505px;
   text-decoration:none;
   text-align:center;
   margin-top: 4%;
   background: #323339;
   color: #fff;
   border: none;
   padding: 10px;
   border-radius: 5px;
   cursor:pointer;
   font-size:22px;
  " href="https://www.google.com.tr/maps/dir/${req.body.adres}">Yol tarifi</a>
    </h2>
    <hr style="margin:20px 0px 20px 0px "/>
    <h3 style="font-weight:500;font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
    Konuta güvenli bir giriş sağladıktan sonra ev sahibine ücretini göndermeyi unutmayın!!
  </h3>
  <hr style="margin:15px 0px 15px 0px "/>
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background: #f93b3b;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
  " href="${req.body.goMyRezervations}">Seyahat detaylarına gidin</a>
  
     <a   style="
     display: block;
    width: 505px;
    text-decoration:none;
    text-align:center;
    margin-bottom: 5%;
    background:#36384C;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor:pointer;
    font-size:22px;
   " href="${req.body.goMessages}">Mesajlara git</a>
     <a   style="
     display: block;
     width: 505px;
     text-decoration:none;
     text-align:center;
     margin-bottom: 5%;
     background:#4d3664;
     color: #fff;
     border: none;
     padding: 10px;
     border-radius: 5px;
     cursor:pointer;
     font-size:22px;
     " href="${req.body.goMoney}">Ev sahibine parayı gönder</a>
    <hr style="margin:20px 0px 20px 0px "/>
    <h4 style="margin-left:190px;font-weight:500; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;  color:#323339;">
      Bedfied'dan <span style="color: #f93b3b">♥</span> ile gönderildi
    </h4>
  </div>
    `
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      res.status(200).json({
        data: info.response
      })
      // console.log('Email sent: ' + info.response);
    }
  })
})
// --> Rezervasyon kabul edilince misafire giden email bitiş

export const path = "/api";
export const handler = app;