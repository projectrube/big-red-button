import React from 'react';
import {View, StyleSheet, TouchableOpacity } from 'react-native';

export default class SimpleCircleButton extends React.Component {
  constructor(props) {
    super(props)

    this.numberOfRectangles = 15
    this.radius = this.props.circleDiameter / 2

    // base the height of each bars on the circle radius.
    // Add 1 to the value b/c we will subtract one down below to get rid of the zero index
    this.fillRectangleHeight = this.radius / (this.numberOfRectangles + 1)

    // The style used for the rectangles
    // the zIndex and elevation of 10 puts the rectangles in front of the clickable button
    this.baseRectangleStyle = {
      position: 'absolute',
      zIndex: 10,
      elevation: 10,
    }
  }

  fillRectangle = (iteration, starting) => {
    const barHeight = this.fillRectangleHeight
    const roundedRadius = Math.ceil(this.radius)
    const y = (barHeight * iteration)

    const x = Math.ceil(Math.sqrt(Math.pow(this.radius, 2) - Math.pow(y, 2)))

    let width = roundedRadius - x

    // The bar dimensions
    const size = {
      width: width,
      height: barHeight
    };

    const verticalLocation = y + roundedRadius

    let location = {}
    if(starting === 'topLeft'){
      location = {
        left: 0,
        bottom: verticalLocation,
      };
    }else if(starting === 'bottomLeft'){
      location = {
        left: 0,
        top: verticalLocation,
      }
    }else if(starting === 'topRight'){
      location = {
        right: 0,
        top: verticalLocation,
      }
    }else if(starting === 'bottomRight'){
      location = {
        right: 0,
        bottom: verticalLocation,
      }
    };

    // Create a unique key to identify the element
    let key = "" + iteration + starting

    return(
      <View key={key} style={{...this.baseRectangleStyle, ...size, ...location}}></View>
    )
  };

  renderLines = (starting) => {
    //start with index+1 b/c 0 will be a width of zero, so no point in doing that math
    return [...Array(this.numberOfRectangles)].map((_, index) => this.fillRectangle(index+1, starting))
  }

  fillRectangles = () => {
    return(
      <React.Fragment>
        {this.renderLines('topLeft')}
        {this.renderLines('bottomLeft')}
        {this.renderLines('topRight')}
        {this.renderLines('bottomRight')}
      </React.Fragment>
     )
   };

  render(){
    let localStyles = styles(this.props)

    return (
      <View style={localStyles.container}>
        <TouchableOpacity
          activeOpacity={.8}
          style = {localStyles.button}
          onPress = {this.props.onPress}
        >
          {this.props.children}
        </TouchableOpacity>

        {this.fillRectangles()}
      </View>
    )
  }
}

const styles = (props) => StyleSheet.create({
  container: {
    position: 'relative',
    zIndex: 0,
  },
  button: {
    backgroundColor: 'rgba(20,174,255,0.31)',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: (props.circleDiameter / 2),
    borderWidth: 3,
    width: props.circleDiameter,
    height: props.circleDiameter,
  },
});