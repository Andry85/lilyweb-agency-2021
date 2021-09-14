import React, { Component } from 'react';
import styles from './SimpleMap.module.scss'
import GoogleMapReact from 'google-map-react';

type AnyReactComponentProps = { text: string; lat: number; lng: number;} & typeof defaultProps;

const defaultProps = {
  text: 'My Marker',
  lat: 59.955413,
  lng: 30.337844
};



const AnyReactComponent = (props: AnyReactComponentProps) => <div>{props.text}</div>;

AnyReactComponent.defaultProps = defaultProps;

type SimpleMapProps = typeof SimpleMap.defaultProps & {
  center: {
    lat: number;
    lng: number;
  },
  zoom: number;
};


class SimpleMap extends Component<SimpleMapProps>  {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'lyrical-tooling-292517' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;