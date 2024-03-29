import FooterComponent from "@/components/FooterComponent.vue";
import NavBar from "@/components/NavBar.vue";
import SearchBar from "@/components/SearchBar.vue";
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import specific icons */
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  Area,
  Button,
  Calendar,
  CellGroup,
  Field,
  Form,
  Image as VanImage,
  Lazyload,
  Loading,
  Picker,
  Popup,
  Toast,
  Uploader
} from "vant";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* add icons to the library */
library.add(fas);
library.add(far);

const app = createApp(App);

app.component("SearchBar", SearchBar);
app.component("NavBar", NavBar);
app.component("FooterComponent", FooterComponent);
app.component("font-awesome-icon", FontAwesomeIcon);

app.use(store);
app.use(Lazyload, {
  lazyComponent: true
});
app.use(Loading);
app.use(Toast);
app.use(Popup);
app.use(Area);
app.use(Form);
app.use(Field);
app.use(Calendar);
app.use(Picker);
app.use(Uploader);
app.use(VanImage);
app.use(CellGroup);
app.use(Button);
app.use(router);

app.mount("#app");
