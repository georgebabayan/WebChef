const React = require('react')

const RestaurantDetailsForm = React.createClass({
  getInitialState() {
    return {
      info: {}
    }
  },
  componentWillReceiveProps(nextProps) {
    if(typeof nextProps.info != 'undefined') {
      this.setState({info: nextProps.info})
    }
  },
  onPhoneChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.phone_number = e.target.value
    this.setState({oldState: newState})
  },
  onAddressChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.address = e.target.value
    this.setState({oldState: newState})
  },
  onCityChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.city = e.target.value
    this.setState({oldState: newState})
  },
  onStateChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.state = e.target.value
    this.setState({oldState: newState})
  },
  onZipChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.postal_code = e.target.value
    this.setState({oldState: newState})
  },
  onAboutChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.about = e.target.value
    this.setState({oldState: newState})
  },
  onEmailChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.email = e.target.value
    this.setState({oldState: newState})
  },
  onFacebookChange(e) {
    let oldState = this.state.info;
    let newState = this.state.info;
    newState.facebook = e.target.value
    this.setState({oldState: newState})
  },
  render() {
  return (
    <div id="restaurant-details">
      <h2>{this.props.info.name} Details</h2>
      <form>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            Phone:
            <input className='form-control' type="text" name="phone_number" value={this.state.info.phone_number} onChange={this.onPhoneChange}/>
          </div>
        </label>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            Address:
            <input className='form-control' type="text" name="address" value={this.state.info.address} onChange={this.onAddressChange}/>
          </div>
        </label>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            City:
            <input className='form-control' type="text" name="city" value={this.state.info.city} onChange={this.onCityChange}/>
          </div>
        </label>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            State:
            <input className='form-control' type="text" name="state" value={this.state.info.state} onChange={this.onStateChange}/>
          </div>
        </label>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            Zip Code:
            <input className='form-control' type="text" name="postal_code" value={this.state.info.postal_code} onChange={this.onZipChange}/>
          </div>
        </label>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            Email:
            <input className='form-control' type="text" name="email "onChange={this.onEmailChange}/>
          </div>
        </label>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            Facebook:
            <input className='form-control' type="text" name="facebook "onChange={this.onFacebookChange}/>
          </div>
        </label>
        <label className='col-form-label'>
          <div className='form-group form-inline'>
            About:
            <textarea className='form-control' type="text" name="about "onChange={this.onAboutChange}/>
          </div>
        </label><br/>
        <button className='btn btn-primary' onClick={(e)=>this.props.handleInfoChange(e, this.state.info)}>Create Your Website</button>
      </form>
    </div>
    )
  }
});

export default RestaurantDetailsForm;
