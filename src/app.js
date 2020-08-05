import Vue from "vue";
import Vuelidate from "vuelidate";
import { required, minLength, maxLength, minValue, maxValue } from 'vuelidate/lib/validators';
Vue.use(Vuelidate);

const app = new Vue({
  el: "#app",
  data: {
    surname: undefined,
    name: undefined,
    patronymic: undefined,
    birthDate: undefined,
    phoneNumber: undefined,
    sex: undefined,
    clientGroups: [],
    doctor: undefined,
    sendSms: false,
    zipCode: undefined,
    country: undefined,
    region: undefined,
    city: undefined,
    document: undefined,
    passSeries: undefined,
    passNumber: undefined,
    issuedBy: undefined,
    issueDate: undefined,
    generalInfoFields: [
      { text: "Фамилия*", model: "surname", type: "text", error: "Поле обязательно для заполнения" },
      { text: "Имя*", model: "name", type: "text", error: "Поле обязательно для заполнения"  },
      { text: "Отчество", model: "patronymic", type: "text" },
      { text: "Дата рождения*", model: "birthDate", type: "date", error: `Поле обязательно для заполнения. Дата рождения должна быть не ранее ${new Date().getFullYear() - 100} и не позднее сегодняшней даты` },
      { text: "Телефон*", model: "phoneNumber", type: "number", error: "Поле обязательно для заполнения. Номер телефона должен содержать 11 знаков и начинаться с 7"}
    ],
    addressFields: [
      { text: "Индекс", model: "zipCode" },
      { text: "Страна", model: "country" },
      { text: "Область", model: "region" },
      { text: "Город*", model: "city" },
      { text: "Улица", model: "street" },
      { text: "Дом", model: "house" }
    ],
    passportFields: [
      { text: "Серия", model: "passSeries", type: "text" },
      { text: "Номер", model: "passNumber", type: "text" },
      { text: "Кем выдан", model: "issuedBy", type: "text" },
      { text: "Дата выдачи*", model: "issueDate", type: "date", error: `Поле обязательно для заполнения. Дата выдачи документа должна быть не ранее ${new Date().getFullYear() - 100} и не позднее сегодняшней даты`
      }
    ]
  },
  validations: {
    surname: { required },
    name: { required },
    patronymic: {},
    birthDate: {
      required,
      minValue: value => new Date(value).getFullYear() >= (new Date().getFullYear() - 100),
      maxValue: value => new Date(value) <= new Date()
    },
    phoneNumber: {
      required,
      minLength: minLength(11),
      maxLength: maxLength(11),
      minValue: minValue(70000000000),
      maxValue: maxValue(79999999999)
    },
    clientGroups: { required },
    sex: {},
    doctor: {},
    sendSms: {},
    zipCode: {},
    country: {},
    region: {},
    city: { required },
    street: {},
    house: {},
    document: { required },
    passSeries: {},
    passNumber: {},
    issuedBy: {},
    issueDate: {
      required,
      minValue: value => new Date(value).getFullYear() >= (new Date().getFullYear() - 100),
      maxValue: value => new Date(value) <= new Date()
    }
  },
  methods: {
    submit: function () {
      event.preventDefault();
      if (this.$v.$invalid) {
        this.$v.$touch();
        alert("В форме присутствуют ошибки. Пожалуйста, исправьте их!");
      } else {
        alert("Клиент успешно создан!");
      }
    }
  }
});