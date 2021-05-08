import React, { Component } from "react";
import { Card, CardBody, FormGroup, Label, Spinner } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import { Wizard, Steps, Step } from 'react-albus';
import { injectIntl } from 'react-intl';
import { BottomNavigation } from "../../components/wizard/BottomNavigation";
import { TopNavigation } from "../../components/wizard/TopNavigation";
import { Formik, Form, Field } from "formik";


class Validation extends Component {
    constructor(props) {
        super(props);
        this.onClickNext = this.onClickNext.bind(this);
        this.onClickPrev = this.onClickPrev.bind(this);
        this.validateEmail = this.validateEmail.bind(this);
        this.validateName = this.validateName.bind(this);
        this.validatePassword = this.validatePassword.bind(this);

        this.form0 = React.createRef();
        this.form1 = React.createRef();
        this.form2 = React.createRef();

        this.state = {
            bottomNavHidden: false,
            topNavDisabled: false,
            loading: false,
            fields: [
                {
                    valid: false,
                    name: "name",
                    value: ""
                },
                {
                    valid: false,
                    name: "email",
                    value: ""
                },
                {
                    valid: false,
                    name: "password",
                    value: ""
                }
            ]
        }
    }

    componentDidMount() {
        this.setState({ fields: [{ ...this.state.fields[0], form: this.form0 }, { ...this.state.fields[1], form: this.form1 }, { ...this.state.fields[2], form: this.form2 }] });
    }

    validateEmail(value) {
        let error;
        if (!value) {
            error = "Please enter your email address";
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            error = "Invalid email address";
        }
        return error;
    }

    validateName(value) {
        let error;
        if (!value) {
            error = "Please enter your name";
        } else if (value.length < 2) {
            error = "Value must be longer than 2 characters";
        }
        return error;
    }

    validatePassword(value) {
        let error;
        if (!value) {
            error = "Please enter your password";
        } else if (value.length < 6) {
            error = "Password must be longer than 6 characters";
        }
        return error;
    }

    hideNavigation() {
        this.setState({ bottomNavHidden: true, topNavDisabled: true });
    }

    asyncLoading () {
        this.setState({ loading: true });
        setTimeout(() => {
            this.setState({ loading: false });
        }, 3000);
    }

    onClickNext(goToNext, steps, step) {
        if (steps.length - 1 <= steps.indexOf(step)) {
            return;
        }
        let formIndex = steps.indexOf(step);
        let form = this.state.fields[formIndex].form.current;
        let name = this.state.fields[formIndex].name;
        form.submitForm().then(() => {
            let fields = this.state.fields;
            fields[formIndex].value = form.state.values[name];
            fields[formIndex].valid = form.state.errors[name] ? false : true;
            this.setState({ fields });
            if (!form.state.errors[name]) {
                goToNext();
                step.isDone = true;
                if (steps.length - 2 <= steps.indexOf(step)) {
                    this.hideNavigation();
                    this.asyncLoading();
                }
            }
        });
    }

    onClickPrev(goToPrev, steps, step) {
        if (steps.indexOf(step) <= 0) {
            return;
        }
        goToPrev();
    }

    render() {
        const { messages } = this.props.intl;
        return (
            <Card>
                <CardBody className="wizard wizard-default">
                    <Wizard>
                        <TopNavigation className="justify-content-center" disableNav={true} />
                        <Steps>
                            <Step id="step1" name={messages["wizard.step-name-1"]} desc={messages["wizard.step-desc-1"]}>
                                <div className="wizard-basic-step">
                                    <Formik
                                        ref={this.form0}
                                        initialValues={{
                                            name: this.state.fields[0].value
                                        }}
                                        onSubmit={() => { }}>
                                        {({ errors, touched }) => (
                                            <Form className="av-tooltip tooltip-label-right">
                                                <FormGroup>
                                                    <Label>{messages["forms.name"]}</Label>
                                                    <Field
                                                        className="form-control"
                                                        name="name"
                                                        validate={this.validateName}
                                                    />
                                                    {errors.name && touched.name && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.name}
                                                        </div>
                                                    )}
                                                </FormGroup>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </Step>
                            <Step id="step2" name={messages["wizard.step-name-2"]} desc={messages["wizard.step-desc-2"]}>
                                <div className="wizard-basic-step">
                                    <Formik
                                        ref={this.form1}
                                        initialValues={{
                                            email: this.state.fields[1].value
                                        }}
                                        onSubmit={() => { }}>
                                        {({ errors, touched }) => (
                                            <Form className="av-tooltip tooltip-label-right">
                                                <FormGroup>
                                                    <Label>{messages["forms.email"]}</Label>
                                                    <Field
                                                        className="form-control"
                                                        name="email"
                                                        validate={this.validateEmail}
                                                    />
                                                    {errors.email && touched.email && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.email}
                                                        </div>
                                                    )}
                                                </FormGroup>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </Step>
                            <Step id="step3" name={messages["wizard.step-name-3"]} desc={messages["wizard.step-desc-3"]}>
                                <div className="wizard-basic-step">
                                    <Formik
                                        ref={this.form2}
                                        initialValues={{
                                            password: this.state.fields[2].value
                                        }}
                                        onSubmit={() => { }}>
                                        {({ errors, touched }) => (
                                            <Form className="av-tooltip tooltip-label-right error-l-75">
                                                <FormGroup>
                                                    <Label>{messages["forms.password"]}</Label>
                                                    <Field
                                                        className="form-control"
                                                        name="password"
                                                        validate={this.validatePassword}
                                                    />
                                                    {errors.password && touched.password && (
                                                        <div className="invalid-feedback d-block">
                                                            {errors.password}
                                                        </div>
                                                    )}
                                                </FormGroup>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </Step>
                            <Step id="step4" hideTopNav={true}>
                                <div className="wizard-basic-step text-center pt-3">
                                    {
                                        this.state.loading ? (
                                            <div>
                                                <Spinner color="primary" className="mb-1" />
                                                <p><IntlMessages id="wizard.async" /></p>
                                            </div>
                                        ) : (
                                                <div>
                                                    <h2 className="mb-2"><IntlMessages id="wizard.content-thanks" /></h2>
                                                    <p><IntlMessages id="wizard.registered" /></p>
                                                </div>
                                            )
                                    }
                                </div>
                            </Step>
                        </Steps>
                        <BottomNavigation onClickNext={this.onClickNext} onClickPrev={this.onClickPrev} className={"justify-content-center " + (this.state.bottomNavHidden && "invisible")} prevLabel={messages["wizard.prev"]} nextLabel={messages["wizard.next"]} />
                    </Wizard>
                </CardBody>
            </Card>
        );
    }
}
export default injectIntl(Validation)
