import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

var divStyle = {
  background: "#20315A",
  color: "white"
};

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>*/}
         <div className="container">
    {/*-- Jumbotron for Title -->*/}{" "}
    <div className="jumbotron" style={divStyle}>
      <h1 className="text-center">
        {" "}<strong>
          {" "}<i className="fa fa-newspaper-o"> </i> New York Times Article
          Scrubber
        </strong>{" "}
      </h1>
      <br />
      <h2 className="text-center">
        {" "}Search for and annotate articles of interest!{" "}
      </h2>{" "}
    </div>
    {/*/*-- Row for Searching New York Times -->*/}{" "}
    <div className="row">
      <div className="col-sm-12">
        <br /> {/*/*-- First panel is for handling the search parameters -->*/}{" "}
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">
              {" "}<strong>
                {" "}<i className="fa  fa-list-alt"> </i> Search
              </strong>{" "}
            </h3>{" "}
          </div>{" "}
          <div className="panel-body">
            {/*-- Here we create an HTML Form for handling the inputs-->*/}
            <form role="form">
              {/*-- Here we create the text box for capturing the search term-->*/}
              <div className="form-group">
                <label for="search"> Topic: </label>
                <input type="text" className="form-control" id="search-term" />
              </div>
              {/*/*-- Here we capture the Start Year Parameter-->*/}
              <div className="form-group">
                <label for="start-year"> Start Year: </label>
                <input type="text" className="form-control" id="start-year" />
              </div>
              {/*/*-- Here we capture the End Year Parameter -->*/}
              <div className="form-group">
                <label for="end-year"> End Year: </label>
                <input type="text" className="form-control" id="end-year" />
              </div>
              {/*/*-- Here we have our final submit button -->*/}
              <button type="submit" className="btn btn-default" id="run-search">
                {" "}<i className="fa fa-search"> </i> Search
              </button>
              <button type="button" className="btn btn-default" id="clear-all">
                {" "}<i className="fa fa-trash"> </i> Clear Results
              </button>
            </form>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
    {/*-- This row will handle all of the retrieved articles -->*/}
    <div className="row">
      <div className="col-sm-12">
        <br />
        {/*/*-- This panel will initially be made up of a panel and wells for each of the articles retrieved -->*/}
        <div className="panel panel-primary">
          {/*{/
                        *
                        --Panel Heading
                        for the retrieved articles box-- > *} */}
          <div className="panel-heading">
            <h3 className="panel-title">
              {" "}<strong>
                {" "}<i className="fa fa-table"> </i> Results
              </strong>{" "}
            </h3>{" "}
          </div>
          {/*-- This main panel will hold each of the resulting articles -->*/}
          <div className="panel-body" id="well-section" />
        </div>
      </div>
    </div>
    
 {/*-- This row will handle all of the saved articles -->*/}
    <div className="row">
      <div className="col-sm-12">
        <br />
        {/*/*-- This panel will initially be made up of a panel and wells for each of the articles retrieved -->*/}
        <div className="panel panel-primary">
          {/*{/
                        *
                        --Panel Heading
                        for the retrieved articles box-- > *} */}
          <div className="panel-heading">
            <h3 className="panel-title">
              {" "}<strong>
                {" "}<i className="fa fa-table"> </i> Saved Articles
              </strong>{" "}
            </h3>{" "}
          </div>
          {/*-- This main panel will hold each of the resulting articles -->*/}
          <div className="panel-body" id="well-section" />
        </div>
      </div>
    </div>
    {/*/*-- Footer Region -->*/}
    <div className="row">
      <div className="col-sm-12">
        {/*/*-- Line Break followed by closing -->*/}
        <hr />
        <h5 className="text-center">
          {" "}<small>
            {" "}Made by Brant with lots and lots of love{" "}
            <i className="fa fa-heart"> </i>
          </small>{" "}
        </h5>
      </div>
    </div>
  </div>
      </div>
    );
  }
}

export default App;
