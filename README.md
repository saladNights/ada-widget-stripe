Widget based on [Create react App](https://create-react-app.dev/)

`npm run build` creates a 'build' directory with a production build of your app.

#### ADA App Input Data Parameters
(name: type - description; requirements; default value; other info)
1.  **stripeKey**: string - Stripe Publishable Key; required; no default value;

Other parameters are optional and described here https://www.npmjs.com/package/react-stripe-checkout

#### Returned Data
After a successful payment widget sends the whole token object to ADA. 
```json
{
  "id":"tok_1H3n37BFTLqQ87TQJdtgjTxc",
  "object":"token",
  "client_ip":"2.92.78.212",
  "created":1594490625,
  "email":"test@test.com",
  "livemode":false,
  "type":"card",
  "used":false,
  "card":{
     "id":"card_1H3n37BFTLqQ87TQ87uH19sY",
     "object":"card",
     "address_city":null,
     "address_country":null,
     "address_line1":null,
     "address_line1_check":null,
     "address_line2":null,
     "address_state":null,
     "address_zip":null,
     "address_zip_check":null,
     "brand":"Visa",
     "country":"US",
     "cvc_check":"unchecked",
     "dynamic_last4":null,
     "exp_month":1,
     "exp_year":2023,
     "funding":"credit",
     "last4":"4242",
     "metadata":{},
     "name":"test@test.com",
     "tokenization_method":null
  }
}
```

To get these parameters
– for non-card data use the name of the parameter. Example: id, email, etc.
– for card data use prefix ‘card.’. Example: card.id, card.name, etc.
