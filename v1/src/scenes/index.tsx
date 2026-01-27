import MainFizScene from './MainFizScene';
import TariffsFizScene from './TariffsFizScene';
import PurchaseScene from "./PurchasesScene"
import FaqFizScene from './FaqFizScene';
import MainJurScene from './MainJurScene';
import ContractJurScene from './ContractJurScene';
import TariffsJurScene from './TariffsJurScene';
import FeedbackJurScene from './FeedbackJurScene';
import NewsScene from './NewsScene';
import OurCompanyScene from './OurCompanyScene';
import ManagementScene from './ManagementScene';
import ThanksScene from './ThanksScene';
import OurClientsScene from './OurClientsScene';
import CarParkScene from './CarParkScene';
import ContainersScene from './ContainersScene';
import SortingComplexScene from './SortingComplexScene';
import VacanciesScene from './VacanciesScene';
import SeparateGuideScene from './SeparateGuideScene';
import ChildrenGuideScene from './ChildrenGuideScene';
import DebtorsScene from './DebtorsScene';
import ContactsScene from './ContactsScene';
import FeedbackFizScene from './FeedbackFizScene';
import { ReportTko, RequestTko, Support, ReportTkoJur, RequestTkoJur, SupportJur } from './Feedback';
import DocumentsScene from './DocumentsScene';
import StandardsJurScene from './StandardsJurScene';

export {
    MainFizScene,           // Физическим лицам: Главная
    TariffsFizScene,        // Физическим лицам: Тарифы
    FaqFizScene,            // Физическим лицам: Вопросы-ответы
    MainJurScene,           // Бизнесу: Главная
    ContractJurScene,       // Бизнесу: Заключить договор
    TariffsJurScene,        // Бизнесу: Тарифы
    StandardsJurScene,      // Бизнесу: Нормативы
    FeedbackJurScene,       // Бизнесу: Обратная связь
    FeedbackFizScene,       // Физическим лицам: Обратная связь
    NewsScene,              // Новости
    PurchaseScene,          // Закупки
    OurCompanyScene,        // О компании: Наша компания
    ManagementScene,        // О компании: Руководство
    ThanksScene,            // О компании: Благодарности
    OurClientsScene,        // О компании: Наши клиенты
    CarParkScene,           // О компании: Автопарк
    ContainersScene,        // О компании: Контейнеры
    SortingComplexScene,    // О компании: Сортировачный комплекс
    VacanciesScene,         // О компании: Вакансии
    SeparateGuideScene,     // Раздельный сбор: Как сдавать отходы
    ChildrenGuideScene,     // Раздельный сбор: РСО для детей
    DebtorsScene,           // Для должников
    ContactsScene,          // Контакты
    ReportTko,              // Сцены обратной связи
    ReportTkoJur,
    RequestTko,
    RequestTkoJur,
    Support,
    SupportJur,
    DocumentsScene
}
