export interface TariffColumn {
  id: string | number;
  label: string;
  subLabel?: string;
  className?: string;
}

export interface TariffRow {
  id: string | number;
  header: {
    title: string;
    description?: string;
    iconVariant: 'zone1' | 'zone2' | 'zone3';
  };
  cells: {
    value: string | number;
    subValue?: string;
    isFuture?: boolean;
    className?: string;
  }[];
}
