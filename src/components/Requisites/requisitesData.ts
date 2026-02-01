export interface RequisiteItem {
    labelKey: string;
    valueKey: string;
    allowCopy?: boolean;
    isRow?: boolean;
}

export const legalInfoItems: RequisiteItem[] = [
    { labelKey: 'orgName', valueKey: 'orgNameValue' },
    { labelKey: 'legalAddress', valueKey: 'legalAddressValue' },
    { labelKey: 'director', valueKey: 'directorValue' },
    { labelKey: 'inn', valueKey: 'innValue', allowCopy: true, isRow: true },
    { labelKey: 'kpp', valueKey: 'kppValue', allowCopy: true, isRow: true },
    { labelKey: 'ogrn', valueKey: 'ogrnValue', allowCopy: true }
];

export const bankInfoItems: RequisiteItem[] = [
    { labelKey: 'bank', valueKey: 'bankValue' },
    { labelKey: 'account', valueKey: 'accountValue', allowCopy: true },
    { labelKey: 'bik', valueKey: 'bikValue', allowCopy: true, isRow: true },
    { labelKey: 'bankInn', valueKey: 'bankInnValue', allowCopy: true, isRow: true },
    { labelKey: 'corrAccount', valueKey: 'corrAccountValue', allowCopy: true }
];
