export interface MaterialItem {
    name: string;
    image: string;
}

export interface MaterialCategory {
    titleKey: string;
    items: MaterialItem[];
}

export const getMaterialsData = (t: any): MaterialCategory[] => [
    {
        titleKey: 'rebar',
        items: [
            {
                name: t.nav.materials.items.rebar12,
                image: "/images/materials/armatura_riflenaya_a3_a500s_12_mm.webp"
            },
            {
                name: t.nav.materials.items.fiberRebar12,
                image: "/images/materials/armatura_stekloplastikovaya_bukhta_10_m_12_mm.webp"
            }
        ]
    },
    {
        titleKey: 'pipes',
        items: [
            {
                name: t.nav.materials.items.pipe202,
                image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_20_pn20_2_m_20kh2_.webp"
            },
            {
                name: t.nav.materials.items.pipe204,
                image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_20_pn20_4_m_20kh2_.webp"
            },
            {
                name: t.nav.materials.items.pipe252,
                image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_25_pn20_2_m_25kh3_.webp"
            },
            {
                name: t.nav.materials.items.pipe322,
                image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_32_pn20_2_m_32kh4_.webp"
            },
            {
                name: t.nav.materials.items.pipe324,
                image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_32_pn20_4_m_32kh4_.webp"
            },
            {
                name: t.nav.materials.items.pipe404,
                image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_40_pn20_4_m_40kh5_.webp"
            },
            {
                name: t.nav.materials.items.pipe504,
                image: "/images/materials/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_50_pn20_4_m_50kh6_.webp"
            },
            {
                name: t.nav.materials.items.pipeNormal,
                image: "/images/materials/truba_polipropilenovaya_valtec_pp_r_vtp_700_0020_20_pn20_4_m_20kh3_4_mm.webp"
            }
        ]
    }
];
