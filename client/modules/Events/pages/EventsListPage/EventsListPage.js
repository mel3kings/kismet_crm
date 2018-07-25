import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash'
import styles from './EventListPage.css';
import {fetchEvents} from '../../EventActions';


class EventsListPage extends Component {
  componentDidMount() {
    this.props.dispatch(fetchEvents());
  }

  render() {
    return <div>
      <b>Last 50 Events Done</b>
      <br/><br/>
      {this.renderList()}
    </div>
  }

  renderList() {
    return _.map(this.props.eventData, data => {
      return (
        <div>
          <b>{data.event_details} </b> On  <i>{data.date_done}</i>
          <hr className={styles.divider}/>
        </div>
      );
    })
  }
}

function mapStateToProps(state, ownProps) {
  return {
    eventData:state.event.data
  };
}

export default connect(mapStateToProps)(EventsListPage);
