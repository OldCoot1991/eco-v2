import license from '../../assets/docs/license.pdf'
import ustav from '../../assets/docs/ustav.pdf'
import policy from '../../assets/docs/policy.pdf'
import deklaraciya_sootvetstviya_ohrani_truda from '../../assets/docs/deklaraciya_sootvetstviya_ohrani_truda.pdf'
import privacy_policy from '../../assets/docs/privacy_policy.pdf'
import workConditionAssessments from "../../assets/docs/WorkConditionAssessments.pdf"


export interface Doc {
  title: string;
  href: string;
}

const Document: Doc[] = [
  {
    title: "Устав",
    href: ustav,
  },
  {
    title: "Лицензия",
    href: license,
  },
  {
    title: "Политика оператора в отношении обработки персональных данных",
    href: policy,
  },
  {
    title: "Политика конфиденциальности персональных данных",
    href: privacy_policy,
  },
  {
    title: "Декларация соответствия условий труда государственным нормативным требованиям охраны труда",
    href: deklaraciya_sootvetstviya_ohrani_truda,
  },
  {
    title: "Специальная оценка условий труда ООО «Экологистика»",
    href: workConditionAssessments,
  }
]

export default Document;


