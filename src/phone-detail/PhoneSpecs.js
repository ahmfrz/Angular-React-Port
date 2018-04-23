import React from 'react';

class PhoneSpecs extends React.Component{
  render(){
  return (
  <ul className="specs">
    <li>
      <span>Availability and Networks</span>
      <dl>
        <dt>Availability</dt>
        {
          this.props.specs.availability &&
          this.props.specs.availability.map(avail =>
            <dd key={avail}>{avail}</dd>
          )
        }
      </dl>
    </li>
    <li>
      <span>Battery</span>
      <dl>
        <dt>Type</dt>
        <dd>{this.props.specs.battery && this.props.specs.battery.type}</dd>
        <dt>Talk Time</dt>
        <dd>{this.props.specs.battery && this.props.specs.battery.talkTime}</dd>
        <dt>Standby time (max)</dt>
        <dd>{this.props.specs.battery && this.props.specs.battery.standbyTime}</dd>
      </dl>
    </li>
    <li>
      <span>Storage and Memory</span>
      <dl>
        <dt>RAM</dt>
        <dd>{this.props.specs.storage && this.props.specs.storage.ram}</dd>
        <dt>Internal Storage</dt>
        <dd>{this.props.specs.storage && this.props.specs.storage.flash}</dd>
      </dl>
    </li>
    <li>
      <span>Connectivity</span>
      <dl>
        <dt>Network Support</dt>
        <dd>{this.props.specs.connectivity && this.props.specs.connectivity.cell}</dd>
        <dt>WiFi</dt>
        <dd>{this.props.specs.connectivity && this.props.specs.connectivity.wifi}</dd>
        <dt>Bluetooth</dt>
        <dd>{this.props.specs.connectivity && this.props.specs.connectivity.bluetooth}</dd>
        <dt>Infrared</dt>
        <dd>{this.props.specs.infrared ? '\u2713' : '\u2718'}</dd>
        <dt>GPS</dt>
        <dd>{this.props.specs.connectivity && this.props.specs.connectivity.gps ? '\u2713' : '\u2718'}</dd>
      </dl>
    </li>
    <li>
      <span>Android</span>
      <dl>
        <dt>OS Version</dt>
        <dd>{this.props.specs.android && this.props.specs.android.os}</dd>
        <dt>UI</dt>
        <dd>{this.props.specs.android && this.props.specs.android.ui}</dd>
      </dl>
    </li>
    <li>
      <span>Size and Weight</span>
      <dl>
        <dt>Dimensions</dt>
        {this.props.specs.sizeAndWeight &&
          this.props.specs.sizeAndWeight.dimensions.map(dim =>
          <dd key={dim}>{dim}</dd>)
        }
        <dt>Weight</dt>
        <dd>{this.props.specs.sizeAndWeight && this.props.specs.sizeAndWeight.weight}</dd>
      </dl>
    </li>
    <li>
      <span>Display</span>
      <dl>
        <dt>Screen size</dt>
        <dd>{this.props.specs.display && this.props.specs.display.screenSize}</dd>
        <dt>Screen resolution</dt>
        <dd>{this.props.specs.display && this.props.specs.display.screenResolution}</dd>
        <dt>Touch screen</dt>
        <dd>{this.props.specs.display && this.props.specs.display.touchScreen ? '\u2713' : '\u2718'}</dd>
      </dl>
    </li>
    <li>
      <span>Hardware</span>
      <dl>
        <dt>CPU</dt>
        <dd>{this.props.specs.hardware && this.props.specs.hardware.cpu}</dd>
        <dt>USB</dt>
        <dd>{this.props.specs.hardware && this.props.specs.hardware.usb}</dd>
        <dt>Audio / headphone jack</dt>
        <dd>{this.props.specs.hardware && this.props.specs.hardware.audioJack}</dd>
        <dt>FM Radio</dt>
        <dd>{this.props.specs.hardware && this.props.specs.hardware.fmRadio ? '\u2713' : '\u2718'}</dd>
        <dt>Accelerometer</dt>
        <dd>{this.props.specs.hardware && this.props.specs.hardware.accelerometer ? '\u2713' : '\u2718'}</dd>
      </dl>
    </li>
    <li>
      <span>Camera</span>
      <dl>
        <dt>Primary</dt>
        <dd>{this.props.specs.camera && this.props.specs.camera.primary}</dd>
        <dt>Features</dt>
        <dd>{this.props.specs.camera && this.props.specs.camera.features.join(', ')}</dd>
      </dl>
    </li>
    <li>
      <span>Additional Features</span>
      <dd>{this.props.specs.additionalFeatures}</dd>
    </li>
  </ul>
      );
  }
}

export default PhoneSpecs;