import { common } from './common';
import { nav } from './nav';
import { footer } from './footer';
import { home } from './home';
import { companyPage } from './company';
import { business } from './business';
import { businessContract } from './business_contract';
import { tariffs } from './tariffs';
import { contacts } from './contacts';
import { documents } from './documents';
import { requisites } from './requisites';
import { jobs } from './jobs';
import { fleet } from './fleet';
import { management } from './management';
import { pages } from './pages';
import { mobileApp } from './mobile_app';
import { paymentPartners } from './payment_partners';
import { faq } from './faq';
import { header } from './header';

export const translationsConfig = {
    ru: {
        common: common.ru,
        nav: nav.ru,
        footer: footer.ru,
        home: home.ru,
        companyPage: companyPage.ru,
        businessPage: business.ru.businessPage,
        businessSteps: business.ru.businessSteps,
        businessServices: business.ru.businessServices,
        businessFeedback: business.ru.businessFeedback,
        businessContract: businessContract.ru,
        tariffs: tariffs.ru,
        contacts: contacts.ru,
        documents: documents.ru,
        requisites: requisites.ru,
        jobs: jobs.ru,
        fleet: fleet.ru,
        management: management.ru,
        pages: pages.ru,
        mobileApp: mobileApp.ru,
        paymentPartners: paymentPartners.ru,
        faq: faq.ru,
        header: header.ru
    },
    en: {
        common: common.en,
        nav: nav.en,
        footer: footer.en,
        home: home.en,
        companyPage: companyPage.en,
        businessPage: business.en.businessPage,
        businessSteps: business.en.businessSteps,
        businessServices: business.en.businessServices,
        businessFeedback: business.en.businessFeedback,
        businessContract: businessContract.en,
        tariffs: tariffs.en,
        contacts: contacts.en,
        documents: documents.en,
        requisites: requisites.en,
        jobs: jobs.en,
        fleet: fleet.en,
        management: management.en,
        pages: pages.en,
        mobileApp: mobileApp.en,
        paymentPartners: paymentPartners.en,
        faq: faq.en,
        header: header.en
    }
};
