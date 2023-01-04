import '../style.css'
import JS_IMAGE from '../assets/javascript.jpg'

const h1Html = document.createElement('h1');
  h1Html.className = 'h1_html'
  h1Html.textContent = 'I love JavaScript';
const imgHtml = document.createElement('img');
  imgHtml.className = 'img_html'
  imgHtml.src = JS_IMAGE

document.body.append(h1Html,imgHtml);