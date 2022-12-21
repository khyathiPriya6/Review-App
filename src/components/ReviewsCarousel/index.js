import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewIndex: 0}

  onClickLeftArrow = () => {
    const {reviewIndex} = this.state

    if (reviewIndex === 0) {
      console.log('no change')
    } else {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex - 1}))
    }
  }

  onCLickRightArrow = () => {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state
    const lengthOfList = reviewsList.length
    if (reviewIndex === lengthOfList - 1) {
      console.log('no Change')
    } else {
      this.setState(prevState => ({reviewIndex: prevState.reviewIndex + 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {reviewIndex} = this.state

    return (
      <div className="app-container">
        <h1 className="heading-style">Reviews</h1>
        <img
          src={reviewsList[reviewIndex].imgUrl}
          className="img-style"
          alt={reviewsList[reviewIndex].username}
        />
        <div className="name-arrow-btn">
          <button className="arrow-btn-style" type="submit" testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              onClick={this.onClickLeftArrow}
            />
          </button>
          <p className="name-style">{reviewsList[reviewIndex].username}</p>
          <button className="arrow-btn-style" type="submit" testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt=" right arrow"
              onClick={this.onCLickRightArrow}
            />
          </button>
        </div>
        <p className="company-name">{reviewsList[reviewIndex].companyName}</p>
        <p className="description">{reviewsList[reviewIndex].description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
