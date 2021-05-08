import React, { Component } from "react";
import ReactAutoSuggest from "../../components/common/ReactAutoSuggest";
import { injectIntl } from "react-intl";
import cakes from "../../data/cakes";


class ReactAutoSugegstExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    }
  }

  render() {
    const { messages } = this.props.intl;
    const data = cakes.map(item => {
      return { name: item.title }
    });
    return (
      <ReactAutoSuggest
        placeholder={messages["form-components.type-a-cake"]}
        data={data}
        value={this.state.value}
        onChange={value => { }}
      />
    );
  }
};

export default injectIntl(ReactAutoSugegstExample);
