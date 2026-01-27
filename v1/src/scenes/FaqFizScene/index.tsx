import React from 'react';
import QuestionsAnswers from '../../components/QuestionsAnswers/index'
import EcoMobileAppBanner from '../../components/EcoMobileAppBanner';
// Физическим лицам: Вопросы-ответы
class FaqFizScene extends React.Component {
    render() {
        return (
            <div className="faqfiz">
                <QuestionsAnswers/>
                <EcoMobileAppBanner />
            </div>
        )
    }
}

export default FaqFizScene;
