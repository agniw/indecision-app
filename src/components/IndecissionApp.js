import React from 'react';

import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined
    };

    handleDeleteOption = (optionToRemove) => {
      this.setState(prevState => ({
        options: prevState.options.filter(option => {
          return option !== optionToRemove;
        })
      }));
    }
  
    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    }

    handlePick = () => {
      const randomOption = this.state.options[
        Math.floor(Math.random() * this.state.options.length)
      ];
      console.log(randomOption);
      this.setState(()=>({
        selectedOption: randomOption
      }))
    }

    handleAddOption = (option) => {
      if (!option) {
        return "Enter the valid value to add item";
      } else if (this.state.options.indexOf(option) > -1) {
        return "This option already exist";
      }
      this.setState(prevState => ({ options: prevState.options.concat(option) }));
    }

    handleCloseModal = () => {
      this.setState(()=>({
        selectedOption: undefined
      }))
    }
  
    componentDidMount() {
      try {
        const json = localStorage.getItem("options");
        const options = JSON.parse(json);
  
        if (options) {
          this.setState(() => ({ options }));
        }
      } catch (e) {
        //do nothing
      }
    }
  
    componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length != this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem("options", json);
        console.log("save data");
      }
    }
  
    componentWillUnmount() {
      console.log("component will unmount");
    }
  
    render() {
      const subtitle = "Put your life in the hands of computer.";
  
      return (
        <div>
          <Header subtitle={subtitle} />
          <div className="container">
            <Action
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <Options
              options={this.state.options}
              handleDeleteOption={this.handleDeleteOption}
              handleDeleteOptions={this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption} />
          </div>
          <OptionModal selectedOption={this.state.selectedOption} handleCloseModal={this.handleCloseModal} />
        </div>
      );
    }
  }