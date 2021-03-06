import React from 'react';
import STRINGS from 'configs/Strings';
import { BackButton } from "components/BackButton";
import { Banner } from "components/Banner";
import { SubBanner } from "components/SubBanner";
import { ContinueButton } from "components/ContinueButton";
import { RegistrationList } from "./RegistrationList";

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      groupCode: this.props.match.params.groupCode
    };
  }

  componentDidMount () {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div>
        <BackButton />
        <Banner
          title={STRINGS.registration_greeting.title}
        />
        <SubBanner
          title={STRINGS.registration_documents.title}
          paragraphs={STRINGS.registration_documents.paragraphs}
        />
        <SubBanner
          title={STRINGS.registration_steps.title}
          paragraphs={STRINGS.registration_steps.paragraphs}
        />
        <Banner
          title={STRINGS.registration_list.title}
        />
        <RegistrationList schools={this.props.location.state.schoolsNearby} />
        <Banner
          title={STRINGS.actions.can_do}
        />
        <ContinueButton title={STRINGS.actions.compare_address} subtitle={STRINGS.actions.see_wait_near} link={STRINGS.routes.address + "/" + this.state.groupCode} />
        <ContinueButton title={STRINGS.actions.back_to_start} subtitle="" link="/" />
      </div>
    );
  }
}
