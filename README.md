# react-barebones-calendar

A simple fully customizable calendar for react.

## Getting Started
### Installation

  ```sh
  npm install --save react-barebones-calendar moment
  ```

### Run Demo

To run the demo on your computer:
* Clone the react-barebones-calendar repository from https://github.com/GeorgeVaughan/react-barebones-calendar
* `npm install`
* `npm start`
* Visit http://localhost:3000/ on your browser

### Example code

View all the example code on GitHub: [src/examples/](https://github.com/GeorgeVaughan/react-barebones-calendar/tree/master/src/examples)

The basic example is displayed below:

![react-barebones-calendar example](https://raw.githubusercontent.com/GeorgeVaughan/react-barebones-calendar/master/demo.png)

```js
class BasicCalendar extends Component {
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