import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import {messages} from './languages'
i18next
.use(initReactI18next)
.init({
    debug: false,
    defaultNS : ['translations'],
    fallbackLng: 'pt',
    ns : ['translations'],
    resources:messages


})
export {i18next}