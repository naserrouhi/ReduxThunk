import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchItems } from '../actions/actions';
import '../css/ItemList.css';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    const { items, loading, error } = this.props;

    if (loading) {
      return <div className="loader">Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className="item">
            <h3>{item.name}</h3>
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = (state) => ({
  items: state.items,
  loading: state.loading,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  fetchItems: () => dispatch(fetchItems()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);