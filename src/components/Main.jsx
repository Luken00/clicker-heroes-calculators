import Header from '../containers/Header';
import Relics from '../containers/Relics';
import Ancients from '../containers/Ancients';
import Heroes from '../containers/Heroes';
import Mercenaries from '../containers/Mercenaries';
import Links from '../components/Links';
import Utilities from '../components/Utilities';

const Main = ({ active }) => {
    let content = null;

    switch (active) {
        case 'heroes':
            content = <Heroes />;
            break;
        case 'ancients':
            content = <Ancients />;
            break;
        case 'mercenaries':
            content = <Mercenaries />;
            break;
        case 'links':
            content = <Links />;
            break;
        case 'utilities':
            content = <Utilities />;
            break;
        case 'relics':
        default:
            content = <Relics />;
            break;
    }

    return (
        <div>
            <Header />
            {content}
        </div>
    );
};

Main.propTypes = {
    active: React.PropTypes.string,
};

export default Main;
