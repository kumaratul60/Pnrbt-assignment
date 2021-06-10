import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '650px',
  height: '400px',
  borderRadius: '1rem',
  margin: '1rem'
};

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '100%'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        containerStyle={containerStyle}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'YOUR_GOOGLE_MAPS_API_KEY_GOES_HERE'
})(MapContainer);
