import React, { Component } from 'react';
import PropTypes from 'prop-types';

//styles
import './workItem.css';

class WorkItem extends Component {
  render() {
    return (
      <section className="work-item-section" name="work" id="work">
        <a href={this.props.url} className="work-item-link">
          <img
            src={this.props.image}
            alt="Work item"
            className="work-item--image"
          />
          <div className="work-item--mask" />
          <div className="work-item--reveal-mask" />
          <div className="work-item--number">
            <div className="work-item--number-inner mg--black">
              {this.props.workNumber}
            </div>
          </div>
          <div className="work-item--content">
            <h4>
              {this.props.name}
            </h4>
            <p className="work-item--caption mg--caption">
              <span>Role</span>
              <span className="mg--bold">
                {this.props.workDetails}
              </span>
            </p>
            <p className="work-item--description">
              {this.props.workDescription}
            </p>
          </div>
        </a>
      </section>
    );
  }
}

WorkItem.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string,
  url: PropTypes.string.isRequired,
  workDescription: PropTypes.string,
  workDetails: PropTypes.string,
  workNumber: PropTypes.string.isRequired,
};

export default WorkItem;
