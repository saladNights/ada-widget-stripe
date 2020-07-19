import React from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import { flattenObject } from './helpers';

import styles from './App.module.scss';

const AdaWidgetSDK = require('@ada-support/ada-widget-sdk');
const widgetSDK = new AdaWidgetSDK();

interface IState {
  isActive: boolean;
  stripeKey: string;
  initStripe: boolean;
  name?: string;
  description?: string;
  image?: string;
  panelLabel?: string;
  amount?: number;
  currency?: string;
  locale?: string;
  email?: string;
  shippingAddress?: boolean;
  billingAddress?: boolean;
  zipCode?: boolean;
  alipay?: boolean;
  bitcoin?: boolean;
  allowRememberMe?: boolean;
  errorMsgs: {
    [key: string]: string;
  };
  errors: string[];
  success: boolean;
}

class App extends React.Component<unknown, IState> {
  private stripeRef = React.createRef<HTMLDivElement>();

  state = {
    isActive: false,
    stripeKey: '',
    initStripe: false,
    name: '',
    description: '',
    image: '',
    panelLabel: '',
    amount: 0,
    currency: '',
    locale: '',
    email: '',
    shippingAddress: false,
    billingAddress: false,
    zipCode: false,
    alipay: false,
    bitcoin: false,
    allowRememberMe: false,
    errorMsgs: {
      initialized: 'ADA SDK could not be initialized',
    },
    errors: [],
    success: false,
  };

  componentDidMount() {
    try {
      widgetSDK.init((event: any) => {
        if (event.type === 'WIDGET_INITIALIZED') {
          this.setState({
            isActive: true,
            stripeKey: event.metaData.stripe_key,
            name: event.metaData.name,
            description: event.metaData.description,
            image: event.metaData.image,
            panelLabel: event.metaData.panel_label,
            amount: +event.metaData.amount || 0,
            currency: event.metaData.currency,
            locale: event.metaData.locale,
            email: event.metaData.email,
            shippingAddress: event.metaData.shipping_address === 'true',
            billingAddress: event.metaData.billing_address === 'true',
            zipCode: event.metaData.zip_code === 'true',
            alipay: event.metaData.alipay === 'true',
            bitcoin: event.metaData.bitcoin === 'true',
            allowRememberMe: event.metaData.allow_remember_me === 'true',
          });
        }
      });
    } catch (e) {
      console.error('ADA SDK could not be initialized');
      this.setState({
        isActive: false,
        errors: ['initialized'],
      });
    }
  }

  componentDidUpdate(prevProps: unknown, prevState: IState) {
    const { isActive, stripeKey } = this.state;

    if (!widgetSDK.widgetIsActive && prevState.isActive) this.setState({ isActive: false });

    if (isActive && !prevState.isActive && stripeKey && !prevState.stripeKey) {
      this.setState({ initStripe: true }, () => {
        const buttonElement: HTMLButtonElement | undefined = this.stripeRef.current?.getElementsByTagName('button')[0];
        buttonElement && buttonElement.click();
      });
    }
  }

  sendDataToADA = (token: Token) => {
    if (widgetSDK.widgetIsActive) {
      widgetSDK.sendUserData(
        {
          ...flattenObject(token),
        },
        () => {
          this.setState({ isActive: false, success: true });
        },
      );
    }
  };

  render() {
    const {
      isActive,
      stripeKey,
      initStripe,
      name,
      description,
      image,
      panelLabel,
      amount,
      currency,
      locale,
      email,
      shippingAddress,
      billingAddress,
      zipCode,
      alipay,
      bitcoin,
      allowRememberMe,
      errorMsgs,
      errors,
      success,
    } = this.state;

    const stripeParams: { [key: string]: string | number | boolean } = {
      name,
      description,
      image,
      panelLabel,
      amount,
      currency,
      locale,
      email,
      shippingAddress,
      billingAddress,
      zipCode,
      alipay,
      bitcoin,
      allowRememberMe,
    };

    Object.keys(stripeParams).forEach((key) => stripeParams[key] === undefined && delete stripeParams[key]);

    return (
      <div className={styles.wrapper}>
        {isActive && (
          <div className={styles.stripeWrapper} ref={this.stripeRef}>
            {initStripe && (
              <StripeCheckout token={this.sendDataToADA} stripeKey={stripeKey} {...stripeParams}>
                <button className={styles.stripeBtn} />
              </StripeCheckout>
            )}
          </div>
        )}
        <div className={styles.errorsWrapper}>
          {errors.map((error) => (
            <div key={error} className={styles.error}>
              {errorMsgs[error]}
            </div>
          ))}
        </div>
        {success && <div className={styles.success}>Payment Successful</div>}
      </div>
    );
  }
}

export default App;
