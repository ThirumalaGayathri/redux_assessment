
import { connect } from 'react-redux';
import App from '../components/App';

const mapStateToProps = state => ({
  getSelectedValue: state.event.selectValue,
});

const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;