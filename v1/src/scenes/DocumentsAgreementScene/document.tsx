import application_contract from '../../assets/docs/application_contract.docx'
import standard_contract from '../../assets/docs/standard_contract.docx'
import standard_contract_bo from '../../assets/docs/standard_contract_bo.docx'
import standard_contract_ip from '../../assets/docs/standard_contract_ip.docx'
import standard_contract_jur from '../../assets/docs/standard_contract_jur.docx'


export interface Doc {
  title: string;
  href: string;
}

const Document: Doc[] = [
  {
    title: "Заявка на заключение договора для юридических лиц и индивидуальных предпринимателей",
    href: application_contract,
  },
  {
    title: "Типовой договор на оказание услуг по обращению с твердыми коммунальными отходами для физических лиц",
    href: standard_contract,
  },
  {
    title: "Типовой договор на оказание услуг по обращению с твердыми коммунальными отходами для бюджетных организаций",
    href: standard_contract_bo,
  },
  {
    title: "Типовой договор на оказание услуг по обращению с твердыми коммунальными отходами для индивидуальных предпринимателей",
    href: standard_contract_ip,
  },
  {
    title: "Типовой договор на оказание услуг по обращению с твердыми коммунальными отходами для юридических лиц",
    href: standard_contract_jur,
  }
]

export default Document;
