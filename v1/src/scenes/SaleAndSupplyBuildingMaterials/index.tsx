import React from 'react';
import styles from "./SaleAndSupplyBuildingMaterialsScenes.module.css"
import img from "./img/armatura_riflenaya_a3_a500s_12_mm.webp"
import img2 from "./img/armatura_stekloplastikovaya_bukhta_10_m_12_mm.webp"
import img3 from "./img/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_20_pn20_2_m_20kh2_.webp"
import img4 from "./img/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_20_pn20_4_m_20kh2_.webp"
import img5 from "./img/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_25_pn20_2_m_25kh3_.webp"
import img6 from "./img/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_32_pn20_2_m_32kh4_.webp"
import img7 from "./img/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_32_pn20_4_m_32kh4_.webp"
import img8 from "./img/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_40_pn20_4_m_40kh5_.webp"
import img9 from "./img/truba_polipropilenovaya_armirovannaya_steklovoloknom_valtec_pp_fiber_vtp_700_fb20_50_pn20_4_m_50kh6_.webp"
import img10 from "./img/truba_polipropilenovaya_valtec_pp_r_vtp_700_0020_20_pn20_4_m_20kh3_4_mm.webp"


const MapItem = [{
    "title": "Арматура",
    "items": [{
            "name": "Арматура рифленая А3 (А500С), 12 мм",
            "image": img
        }, {
            "name": "Арматура стеклопластиковая (бухта 10 м), 12 мм",
            "image": img2
        }
    ]
}, {
    "title": "Пластиковые трубы",
    "items": [{
            "name": "Труба полипропиленовая армированная стекловолокном Valtec PP-FIBER VTp.700.FB20.20, PN20, 2 м, 20х2,8 мм",
            "image": img3
        }, {
            "name": "Труба полипропиленовая армированная стекловолокном Valtec PP-FIBER VTp.700.FB20.20, PN20, 4 м, 20х2,8 мм",
            "image": img4
        }, {
            "name": "Труба полипропиленовая армированная стекловолокном Valtec PP-FIBER VTp.700.FB20.25, PN20, 2 м, 25х3,5 мм",
            "image": img5
        }, {
            "name": "Труба полипропиленовая армированная стекловолокном Valtec PP-FIBER VTp.700.FB20.32, PN20, 2 м, 32х4,4 мм",
            "image": img6
        }, {
            "name": "Труба полипропиленовая армированная стекловолокном Valtec PP-FIBER VTp.700.FB20.32, PN20, 4 м, 32х4,4 мм",
            "image": img7
        }, {
            "name": "Труба полипропиленовая армированная стекловолокном Valtec PP-FIBER VTp.700.FB20.40, PN20, 4 м, 40х5,5 мм",
            "image": img8
        }, {
            "name": "Труба полипропиленовая армированная стекловолокном Valtec PP-FIBER VTp.700.FB20.50, PN20, 4 м, 50х6,9 мм",
            "image": img9
        }, {
            "name": "Труба полипропиленовая Valtec PP-R VTp.700.0020.20, PN20, 4 м, 20х3,4 мм",
            "image": img10
        }
    ]
}
]

class SaleAndSupplyBuildingMaterialsScenes extends React.Component {
    render() {
        return (
            <div className={styles.container}>
                {MapItem.map((category, index) => (
                    <div className={styles.container_category}>
                        <h1 className={styles.h1}>{category.title}</h1>
                        <div key={index} className={styles.category}>
                        {category.items.map((item, subIndex) => (
                            <div key={subIndex} className={styles.card}>
                                <img className={styles.img} src={item.image} alt={item.name}/>
                                <p className={styles.name}>{item.name}</p>
                                <a href={'/support'} className={styles.button}>Уточнить цену</a>
                            </div>
                        ))}
                    </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default SaleAndSupplyBuildingMaterialsScenes;


