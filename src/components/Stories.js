import React from 'react';
import { connect } from 'react-redux';
import { loadStories, clear } from '../actions'

const Stories = props => (
  <div>
    <button type="button" onClick={props.loadStories}>Load Top 3 Stories</button>
    <button type="button" onClick={props.clear}>Clear</button>
    <StoryList {...props} />
  </div>
);

const StoryList = ({items}) => {
  if (items.length === 0) return null;
  return (
    <div>
      {items.map(item => <Story {...item} key={item.id} />)}
    </div>
  )
}

const Story = ({title}) =>  <p>{title}</p>;

const mapState = state => state;

export default connect(mapState, { loadStories, clear })(Stories);
