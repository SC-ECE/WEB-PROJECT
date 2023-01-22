//</script><script type="text/babel">

const CreatorCopyRight = (props) => {
  return (
    <div
      style={{
        textAlign: "center",
        fontSize: "20px",
        fontFamily: "Arial Helvetica sans-serif",
        fontWeight: "bold",
        margin: "5px 0 5px 0",
      }}
    >
      {props.value}
    </div>
  );
};

// the CardList Component
const CardList = (props) => {
  // the profiles will be received from the parent which is the App component.
  // map the array of objects into Card elements. map every profile object into a card element,
  // the conversion is done like this: [<Card />, <Card />, <Card />, <Card />, etc]

  // it is necessary to use a key for every card element. in this case I used the html_url as a key, since it is unique
  return (
    <div>
      {props.profiles.map((profile) => (
        <Card key={profile.html_url} {...profile} />
      ))}
    </div>
  );
};

// The Card component
class Card extends React.Component {
  render() {
    // the prop through which there will be passed information from the parent which is the CardList component
    // the prop will be composed of 5 properties.
    const profile = this.props;

    return (
      <div
        className="github-profile"
        style={{
          margin: "5% 0 0 5%",
          display: "block",
          background: "#5B8FB9",
          width: "300px",
          color: "white",
          padding: "10px",
        }}
      >
        <img
          src={profile.avatar_url}
          width="100px"
          height="100px"
          style={{ display: "inline-block", margin: "5px 0 0 0" }}
          alt="missing"
        />
        <div
          className="info"
          style={{ display: "inline-block", margin: "0 0 0 5%" }}
        >
          <div className="public repos" style={{ fontSize: "90%" }}>
            public repositories: {profile.public_repos}
          </div>
          <span>link: </span>
          <a
            className="link"
            href={profile.html_url}
            style={{ fontSize: "90%" }}
          >
            {profile.html_url}
          </a>
          <div className="created-at" style={{ fontSize: "100%" }}>
            created at: {profile.created_at}
          </div>
          <div className="type" style={{ fontSize: "90%" }}>
            type: {profile.type}
          </div>
        </div>
      </div>
    );
  }
}

// the Form component
class Form extends React.Component {
  // create a state without constructor, using class attributes
  state = {
    userName: "",
  };

  // the submit button event listener which uses axios library to fetch data from the API
  handleSubmit = async (event) => {
    // need to use preventDefault, otherwise the page will refresh after clicking the button when working with forms
    event.preventDefault();

    try {
      // resp awaits for axios to retrieve data from github using the given url
      const resp = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );

      // pass the response data to the submitAction prop. the addNewProfile function will take it as parameter in
      //  the App Component and will setState based on the previous State
      this.props.onSubmitAction(resp.data);
    } catch (error) {
      alert(`${this.state.userName} does not exist, Please try a real user`);
    }
  };

  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ textAlign: "center", margin: "10px 0 0 0" }}
      >
        <input
          type="text"
          placeholder="Insert user name"
          value={this.state.userName} // the value is the username state
          // using onChange to add user and setState of userName based on the value
          onChange={(event) => this.setState({ userName: event.target.value })}
          required
        />
        <button>Add User</button>
      </form>
    );
  }
}

class App extends React.Component {
  // define the states as class attribute (no need for constructor anymore)
  state = {
    profiles: [],
  };

  // access previous state, spread the existing profile using ...prevState.profile, and append the new profileData
  // basically a concatenation on the profiles state array
  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  // pass the state as props to the CardList child
  // when the Form button is clicked, the state will be updated
  render() {
    return (
      <div>
        <div
          style={{
            textAlign: "center",
            fontSize: "30px",
            fontFamily: "Arial Helvetica sans-serif",
            fontWeight: "bold",
          }}
        >
          {this.props.title}
        </div>
        <CreatorCopyRight value={"Ⓒ 2022 Created by Ankit Kumar"} />
        <Form onSubmitAction={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </div>
    );
  }
}

ReactDOM.render(
  <App title="Github users details" />,
  document.getElementById("root")
);

//</script>
