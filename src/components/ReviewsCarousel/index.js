import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  onChangeLeftSide = () => {
    const {index} = this.state
    if (index > 0) {
      this.setState(preState => ({index: preState.index - 1}))
    }
  }

  onChangeRightSide = () => {
    const {index} = this.state
    if (index < 3) {
      this.setState(preState => ({index: preState.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[index]
    return (
      <div className="main-container">
        <h1 className="review-heading">Reviews</h1>
        <div className="Review-details-container">
          <button
            type="button"
            className="button-style"
            onClick={this.onChangeLeftSide}
          >
            <img
              alt="left arrow"
              className="arrow-style"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          <div className="reviewer-review-container">
            <img alt={username} className="reviewer-image" src={imgUrl} />
            <p className="reviewer-name">{username}</p>
            <p className="company-name">{companyName}</p>
            <p className="review-description">{description}</p>
          </div>
          <button
            type="button"
            className="button-style"
            onClick={this.onChangeRightSide}
          >
            <img
              alt="right arrow"
              className="arrow-style"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
