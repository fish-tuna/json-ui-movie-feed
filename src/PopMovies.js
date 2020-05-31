import React from "react";

export default class PopMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      err: false,
      items: [],
    };
  }
  async componentDidMount() {
    try {
      const url =
        "https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json";
      const response = await fetch(url);
      const data = await response.json();
      let i = 0;
      let j = 0;
      do {
        if (
          data.entries[j].programType == "movie" &&
          data.entries[j].releaseYear >= 2010
        ) {
          this.state.items.push(
            <div className="grid-item">
              <img src={data.entries[j].images["Poster Art"].url}></img>
              <p>{data.entries[j].title}</p>
            </div>
          );
          i++;
        }
        j++;
      } while (i < 21);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ err: error });
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        {(() => {
          if (this.state.err) {
            return (
              <div className="conditional">
                <p>Oops, something went wrong:</p>
                <p>{this.state.err.toString()}</p>
              </div>
            );
          } else if (!this.state.loading) {
            return <div className="conditional">{this.state.items}</div>;
          } else if (this.state.loading) {
            return <div className="conditional">Loading..</div>;
          }
        })()}
      </div>
    );
  }
}
