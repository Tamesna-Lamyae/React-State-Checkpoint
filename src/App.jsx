import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  toggleProfile = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Mon Profil</h1>

        <button
          onClick={this.toggleProfile}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          {this.state.show ? 'Cacher le Profil' : 'Afficher le Profil'}
        </button>

        {this.state.show && (
          <div className="mt-6 p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto">
            <h2 className="text-2xl font-semibold text-gray-800">John Doe</h2>
            <p className="text-gray-600">Développeur Full Stack</p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
