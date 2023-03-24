import { createApp } from "vue";

import App from "./App.vue";
import "virtual:windi.css";
import "./assets/main.css";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faAngleDown,
  faCalendarDays,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
/* add icons to the library */
library.add(faAngleDown, faCalendarDays, faChevronRight, faChevronLeft);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
