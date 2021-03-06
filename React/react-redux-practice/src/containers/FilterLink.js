import Link from '../components/Link';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';

const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
