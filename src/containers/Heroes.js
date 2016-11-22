import { connect } from 'react-redux';

import {
    setDogcogLevel,
    setDogcogRelicsBonusCheckbox,
    setHeroCurrentLevel,
    setHeroTargetLevel
} from '../actions';
import { getDogcogRelicLevels } from '../selectors';

import Heroes from '../components/Heroes';

const mapStateToProps = state => ({
    heroes: state.heroes.costs,
    isGameStateSet: Boolean(state.gameState),
    dogcogLevel: state.heroes.dogcogLevel,
    bonusLevels: state.gameState ? getDogcogRelicLevels(state.gameState.items.items) : 0,
    relicsBonusChecked: state.heroes.relicsBonusChecked
});

const mapDispatchToProps = dispatch => ({
    setDogcogLevel: level => dispatch(setDogcogLevel(level)),
    setRelicsBonusCheckboxValue: checkboxState => dispatch(setDogcogRelicsBonusCheckbox(checkboxState)),
    setHeroCurrentLevel: (hero, value) => dispatch(setHeroCurrentLevel(hero, value)),
    setHeroTargetLevel: (hero, value) => dispatch(setHeroTargetLevel(hero, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Heroes);