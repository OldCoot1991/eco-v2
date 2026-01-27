import order286 from "./order286.pdf"
import order273 from "./order273.pdf"
import listOfServicesAndGoods from "./listOfServicesAndGoods.pdf"


export interface Doc {
  title: string;
  href: string;
}

const DocumentPurchase: Doc[] = [
  {
    title: "Приказ от 24 июля 2023 г. №273 «Об утверждении Перечня товаров, работ, услуг, закупки которых осуществляется у субъектов малого и среднего предпринимательства»",
    href: order273,
  },
  {
    title: "Приказ от 21 декабря 2023 г. №286 «Об утверждении Перечня товаров, работ, услуг, закупки которых осуществляется у субъектов малого и среднего предпринимательства»",
    href: order286,
  },
  {
    title: "Приложение №1 к приказу от 21.12.2023 г. №286 «Об утверждении Перечня товаров, работ, услуг, закупки которых осуществляется у субъектов малого и среднего предпринимательства»",
    href: listOfServicesAndGoods,
  }
]


export default DocumentPurchase;