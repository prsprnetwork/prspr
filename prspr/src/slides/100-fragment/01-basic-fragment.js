import React, { Component } from 'react';
import Section from 'lib/component/Section';
import Fragment from 'lib/component/Fragment';

export default class BasicFragment extends Component {

  render() {
    return (
      <Section>
        <p>Live ...</p>
        <Fragment>... long ...</Fragment>
        <Fragment>... and PRSPR.</Fragment>
      </Section>
    );
  }
}
