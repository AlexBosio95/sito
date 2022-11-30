import AOS from 'aos';
import { inject } from 'vue';

export default ({app}, inject) => {
    app.AOS = new AOS.init();
}