# react-barebones-calendar

A simple fully customizable calendar for react.

![react-barebones-calendar demo-gif](https://raw.githubusercontent.com/GeorgeVaughan/react-barebones-calendar/master/demo.gif)

## Getting Started

### Installation

```sh
npm install --save react-barebones-calendar moment
```

### Run Demo

To view the demos on a web page go to https://GeorgeVaughan.github.io/react-barebones-calendar

To run the demo on your computer:

- Clone the react-barebones-calendar repository from https://github.com/GeorgeVaughan/react-barebones-calendar
- `npm install`
- `npm start`
- Visit http://localhost:3000/ on your browser

## Examples

View all the example code in [src/examples/](https://github.com/GeorgeVaughan/react-barebones-calendar/tree/master/src/examples)

The basic example is shown along with the code below:

![react-barebones-calendar demo-png](https://raw.githubusercontent.com/GeorgeVaughan/react-barebones-calendar/master/demo.png)

```js
class BasicCalendar extends Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      monthMoments: getMonthsFrom(moment(), 1),
      selectedDay: moment()
    };
  }
  render() {
    const { monthMoments, selectedDay } = this.state;
    return (
      <Calendar
        monthGridProps={{
          monthMoments
        }}
        dayProps={{
          modifiers: [
            selectedModifier(selectedDay),
            emptyModifier,
            weekendModifier
          ],
          onClick: (_, { dayMoment }) =>
            this.setState({ selectedDay: dayMoment })
        }}
      />
    );
  }
}
```

There are also more complex examples like the large calendar displayed below:

![react-barebones-calendar large-demo-png](https://raw.githubusercontent.com/GeorgeVaughan/react-barebones-calendar/master/large-demo.png)

The example code is available at [src/examples/](https://github.com/GeorgeVaughan/react-barebones-calendar/tree/master/src/examples)
