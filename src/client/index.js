console.log('index.js loaded');
document.getElementById('date').min = new Date().toLocaleDateString('en-ca');

import { handleSubmit } from "./js/formhandler";

import './css/main.css';

window.handleSubmit = handleSubmit;