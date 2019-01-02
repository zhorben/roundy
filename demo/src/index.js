import React, { Component } from 'react'
import { render } from 'react-dom'

import Roundy from '../../src'
import RoundyGroup from '../../src/RoundyGroup'

class Demo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      max: 100,
      min: 0,
      color: '#00ff00',
      step: 10,
      value: 50,
      radius: 100
    }
  }
  render() {
    const { max, min, step, radius, color } = this.state
    return (
      <div>
        <h1>roundy Demo</h1>
        <p>Simple rounded slider with some basic options:</p>
        <ul>
          <li>radius</li>
          <li>step</li>
          <li>color</li>
          <li>max</li>
          <li>min</li>
        </ul>
        <h3>Tweak it</h3>
        Max{' '}
        <input
          value={max}
          onChange={e => this.setState({ max: e.target.value })}
          type="number"
          min={100}
          max={1000}
        />
        Min{' '}
        <input
          value={min}
          onChange={e => this.setState({ min: e.target.value })}
          type="number"
          min={0}
          max={50}
        />
        Color{' '}
        <input
          value={color}
          onChange={e => this.setState({ color: e.target.value })}
          type="color"
        />
        Radius{' '}
        <input
          value={radius}
          onChange={e => this.setState({ radius: e.target.value })}
          type="number"
          min={40}
          max={300}
        />
        <Roundy
          allowClick
          value={this.state.value}
          radius={parseInt(radius)}
          min={parseInt(min)}
          max={parseInt(max)}
          color={color}
          overrideStyle={`
            .sliderHandle:after {
              background: pink;
            }
          `}
          rotation={-90}
          // arcSize={180}
          // sliced={false}
          onChange={value => this.setState({ value })}
        />
        {this.state.value}
        <Roundy
          allowClick
          radius={80}
          max={100}
          color={color}
          style={{ border: '2px solid blue', display: 'block' }}
          render={({ angle, value: val2 }, props) => (
            <div
              style={{
                width: 5,
                background: 'red',
                margin: '0 auto',
                height: `${(val2 / props.max) * 100}%`
              }}
            >
              {val2}
            </div>
          )}
        />
        <h1>roundy group</h1>
        <p>
          Use array of objects to easily create stacked group of roundy sliders.
        </p>
        <pre>{`<RoundyGroup sliders={[
              { value: 30, step: 10, id: 'mjaw', max: 50,  radius: 60, color: 'blueviolet', onChange:(val, props) => console.log(props) },
              { value: 30, step: 10, max: 50, radius: 100 },
              { value: 100, step: 20, max: 200, color: 'orange', radius: 140, sliced: false, step: 1 }
            ]} />`}</pre>
        <RoundyGroup
          sliders={[
            {
              value: 30,
              step: 4,
              id: 'mjaw',
              max: 50,
              strokeWidth: 20,
              radius: 55,
              color: 'blueviolet',
              onChange: (val, props) => console.log(props)
            },
            { value: 30, step: 10, max: 50, radius: 100 },
            {
              value: 100,
              step: 20,
              max: 200,
              color: 'orange',
              radius: 140,
              sliced: false,
              step: 1
            }
          ]}
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector('#demo'))
