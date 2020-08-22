import * as React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import CalendarStateInterface from "./CalendarStateInterface";

export class Calendar extends React.Component<{}, CalendarStateInterface> {
  constructor(props: Readonly<{}>) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
  }

  handleChange = (date: any) => {
    this.setState({
      startDate: date,
    });
  };

  public render() {
    const { startDate } = this.state;
    return (
      <div>
        <DatePicker
          className="datepicker"
          dateFormat="dd-mm-yyyy"
          selected={startDate}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
