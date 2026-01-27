import { useState } from "react";
import styles from "../Menu/menu.module.css";
import {
    Link,
    LinkProps,
    matchPath,
    RouteProps,
    useLocation
} from 'react-router-dom';
import {
    CarParkScene, ChildrenGuideScene, ContactsScene, ContainersScene, ContractJurScene,
    StandardsJurScene, FaqFizScene, MainFizScene, MainJurScene, ManagementScene, NewsScene,
    OurClientsScene, OurCompanyScene, SeparateGuideScene, TariffsFizScene, TariffsJurScene,
    VacanciesScene, Support, SupportJur, PurchaseScene, DocumentsScene,
} from '../../scenes';
import DocumentsCompanyScene from "../../scenes/DocumentsCompanyScene";
import DocumentsActsScene from "../../scenes/DocumentsActsScene";
import DocumentsAgreementScene from "../../scenes/DocumentsAgreementScene";
import SaleAndSupplyBuildingMaterialsScenes from "../../scenes/SaleAndSupplyBuildingMaterials"
import ConstructionInstallationWorksScenes from "../../scenes/ConstructionInstallationWorks"
import { useEffect } from "react";

interface MenuRouteProps extends RouteProps {
    title: string;
    id?: string;
    routes: MenuRouteProps[];
}

export const routes: MenuRouteProps[] = [{
    title: "Физ. лицам",
    path: "/fiz/main",
    component: MainFizScene,
    routes: [{
        title: "Главная",
        path: "/fiz/main",
        component: MainFizScene,
        routes: []
    }, {
        title: "Тарифы",
        path: "/fiz/tariffs",
        component: TariffsFizScene,
        routes: []
    }, {
        title: "Вопросы-ответы",
        path: "/fiz/faq",
        component: FaqFizScene,
        routes: []
    },
    {
        title: "Обратная связь",
        path: "/support",
        component: Support,
        routes: []
    }]
}, {
    title: "Бизнесу",
    path: "/jur/main",
    component: MainJurScene,
    routes: [{
        title: "Главная",
        path: "/jur/main",
        component: MainJurScene,
        routes: []
    }, {
        title: "Контракт",
        path: "/jur/contract",
        component: ContractJurScene,
        routes: []
    }, {
        title: "Тарифы",
        path: "/jur/tariffs",
        component: TariffsJurScene,
        routes: []
    }, {
        title: "Нормативы",
        path: "/jur/standards",
        component: StandardsJurScene,
        routes: []
    }, {
        title: "Обратная связь",
        path: "/support-jur",
        component: SupportJur,
        routes: []
    }]
}, {
    title: "Новости",
    path: "/news",
    component: NewsScene,
    routes: []
}, {
    title: "О компании",
    path: "/company/about",
    component: OurCompanyScene,
    routes: [{
        title: "Наша компания",
        path: "/company/about",
        component: OurCompanyScene,
        routes: []
    }, {
        title: "Руководство",
        path: "/company/management",
        component: ManagementScene,
        routes: []
    }, {
        title: "Наши клиенты",
        path: "/company/clients",
        component: OurClientsScene,
        routes: []
    }, {
        title: "Автопарк",
        path: "/company/carpark",
        component: CarParkScene,
        routes: []
    }, {
        title: "Контейнеры",
        path: "/company/containers",
        component: ContainersScene,
        routes: []
    }, /*{
        title: "Сортировочный комплекс",
        path: "/company/sorting",
        component: SortingComplexScene,
        routes: [],
        id: "complex"
    },*/ {
        title: "Вакансии",
        path: "/company/vacancies",
        component: VacanciesScene,
        routes: []
    }, {
        title: "Как сдавать отходы",
        path: "/guide/separate",
        component: SeparateGuideScene,
        routes: []
    }, {
        title: "РСО для детей",
        path: "/guide/children",
        component: ChildrenGuideScene,
        routes: []
    }, {
        title: "Контакты",
        path: "/contacts",
        component: ContactsScene,
        routes: []
    }]
}, {
    title: "Документы",
    path: "/documents/company",
    component: DocumentsScene,
    routes: [{
        title: "ООО «Экологистика»",
        path: "/documents/company",
        component: DocumentsCompanyScene,
        routes: []
    }, {
        title: "Нормативные правовые акты",
        path: "/documents/acts",
        component: DocumentsActsScene,
        routes: []
    }, {
        title: "Заключение договора",
        path: "/documents/agreements",
        component: DocumentsAgreementScene,
        routes: []
    }]
}, {
    title: "Закупки",
    path: "/purchases",
    component: PurchaseScene,
    routes: []
}, {
    title: "Экострой",
    path: "/ecostroi",
    component: ContactsScene,
    routes: [{
        title: "Строительно-монтажные работы",
        path: "/ecostroi/construction",
        component: ConstructionInstallationWorksScenes,
        routes: []
    }, {
        title: "Продажа/поставка стройматериалов",
        path: "/ecostroi/sale",
        component: SaleAndSupplyBuildingMaterialsScenes,
        routes: []
    }]
}];

interface MenuState {
    route?: MenuRouteProps;
}

function Menu() {
    const [state, setState] = useState<MenuState>({
        route: undefined,
    });
    const [mobileToggled, setMobileToggled] = useState(false)
    const [closelinkToggled, dislayNoneToggled] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

    function updateSubMenu(route: MenuRouteProps) {
        setState({
            ...state,
            route,
        });
    }
    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 900);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [])

    return (
        <nav className={styles.menu}>
            <button onClick={() => setMobileToggled(!mobileToggled)} className={`${styles.btn1} ${styles.btn2}`}><p className={styles.btn1_text}>{mobileToggled == closelinkToggled ? '☰' : '×'}</p></button>
            <div className={`${styles.menu__list} ${mobileToggled && styles.menu__list_enebled, closelinkToggled == mobileToggled ? styles.menu__list : styles.menu__list_enebled}`}>
                {routes.map((route, i) => (
                    <ul key={i} className={styles.menu__item}>
                        <MenuLink
                            key={i}
                            to={route.path as string}
                            onMouseOver={() => updateSubMenu(route)}
                        >
                            {route.title}
                        </MenuLink>
                        {route === state.route &&
                            state.route.routes.length > 0 && (
                                <ul className={styles.sub_menu__list}>
                                    {route === state.route &&
                                        state.route.routes.map((route, i) => (
                                            <li
                                                key={i}
                                                className={styles.sub_menu__link}
                                                id={route.id}
                                            >
                                                <Link
                                                    onClick={() => dislayNoneToggled(!closelinkToggled)}
                                                    className={styles.sub_link}
                                                    key={i}
                                                    to={route.path as string}
                                                >
                                                    {route.title}
                                                </Link>
                                            </li>
                                        ))}
                                </ul>
                            )}
                    </ul>
                ))}
                {isMobile && (
                    <a href="https://lk.ecologistika.com/auth/login" style={{margin: "0 auto", background: "#89c228", padding: "10px", color: "white", textDecoration: "none" }} target="_blank" rel="noopener noreferrer">
                        Личный кабинет
                    </a>
                )}
            </div>
        </nav>
    );
}


function MenuLink(props: LinkProps) {
    const location = useLocation();
    const to = props.to as string;
    const classList = [styles.link];

    if (location.pathname === "/") {
        if (matchPath(to, routes[0])) {
            classList.push(styles.link_active);
        }
    } else if (
        matchPath(to, location.pathname) ||
        routes.some(
            (route) =>
                matchPath(to, route) &&
                route.routes.some((route) =>
                    matchPath(location.pathname, route)
                )
        )
    ) {
        classList.push(styles.link_active);
    }

    return <Link className={classList.join(" ")} {...props} />;
}

export default Menu;
