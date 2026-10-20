import {
  Landmark,
  Banknote,
  Smartphone,
  Zap,
  CreditCard,
  Wallet,
  ShieldCheck,
  Lock,
  Headset,
} from 'lucide-react'

/*
  UNVERIFIED, copied from the live page. Edit or delete here:
  - COST_BOX and the first cost point ("46% cheaper")
  - the review line (in Settle.tsx), "8 million customers" and "4 minutes, 90%" (FAQs)
  - SAFETY ("licensed and regulated", "24/7")
  - the "over 130 countries" line (in Settle.tsx) vs the country list (85 names)
*/

export const SEND_METHODS = [
  {
    icon: Landmark,
    title: 'Bank transfer',
    text: "Send money directly to a bank account. All you need are your receiver's details.",
  },
  {
    icon: Banknote,
    title: 'Cash pickup',
    text: 'Send money to be collected in cash by your receiver at any of our pickup locations.',
  },
  {
    icon: Smartphone,
    title: 'Mobile money',
    text: "Instant transfer to your receiver's registered mobile money account number.",
  },
  {
    icon: Zap,
    title: 'Airtime top up',
    text: 'Top up credit for a pre-paid mobile phone number with no extra fees.',
  },
]

export const STEPS = [
  {
    title: 'Create an account',
    text: 'Sign up using your email address on our app or website. Keep things secure by choosing a strong password.',
  },
  {
    title: "We'll verify your details",
    text: "For even better security, we'll verify who you are. This should only take a few minutes.",
  },
  {
    title: 'Start your transfer',
    text: 'Select the receive country and method, and enter the amount you want to send. Our fees and exchange rates are shown upfront.',
  },
  {
    title: "Enter your receiver's details",
    text: "Have your receiver's details to hand. These may vary depending on how you're sending them the money.",
  },
  {
    title: 'Pay for your transfer',
    text: "Choose how you'd like to pay for your transfer: bank deposit, credit or debit card.",
  },
]

export const PAYMENT_METHODS = [
  {
    icon: Landmark,
    title: 'Bank deposit',
    text: 'You can pay for your transfer using bank transfer.',
  },
  {
    icon: CreditCard,
    title: 'Debit card',
    text: "Paying with Debit Card is quick and easy. It's also cheaper than a credit card.",
  },
  {
    icon: Wallet,
    title: 'Credit card',
    text: 'Credit card issuers may charge an advance payment fee.',
  },
]

export const COST_BOX = {
  big: '46%',
  label: 'Cheaper than banks',
  rows: [
    { label: 'Bank transfer', value: '$15 to $25', highlight: false },
    { label: 'Settle Africa', value: '$2.99', highlight: true },
  ],
}

export const COST_POINTS = [
  { before: "We're on average ", bold: '46% cheaper', after: ' than most banks.' },
  { before: 'There are ', bold: 'no hidden fees.', after: " You'll see all our fees upfront." },
  {
    before: 'Our currency converter shows you the ',
    bold: 'exchange rates,',
    after:
      " and once you select your receive method and delivery partner, you'll see the total amount your receiver will get.",
  },
]

export const SAFETY = [
  {
    icon: ShieldCheck,
    title: 'Licensed and regulated',
    text: 'Authorised by financial regulators in multiple countries',
  },
  {
    icon: Lock,
    title: 'Secure transactions',
    text: 'All transfers are protected by advanced encryption',
  },
  {
    icon: Headset,
    title: '24/7 support',
    text: 'Our support team is available around the clock',
  },
]

export const POPULAR_COUNTRIES = [
  { code: 'NG', name: 'Nigeria' },
  { code: 'GH', name: 'Ghana' },
  { code: 'KE', name: 'Kenya' },
  { code: 'ZA', name: 'South Africa' },
  { code: 'TZ', name: 'Tanzania' },
  { code: 'UG', name: 'Uganda' },
]

export const ALL_COUNTRIES = [
  'Albania', 'Argentina', 'Australia', 'Bangladesh', 'Barbados', 'Benin', 'Bolivia', 'Botswana',
  'Brazil', 'British Virgin Islands', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Cape Verde',
  'Cayman Islands', 'Central African Republic', 'Chile', 'China', 'Colombia', 'Congo DRC',
  'Congo-Brazzaville', 'Costa Rica', 'Dominica', 'Ecuador', 'Egypt', 'El Salvador', 'Ethiopia',
  'Fiji', 'Gambia', 'Ghana', 'Grenada', 'Guatemala', 'Guinea Bissau', 'Guinea-Conakry', 'Haiti',
  'India', 'Indonesia', 'Ivory Coast', 'Jamaica', 'Kenya', 'Laos', 'Lebanon', 'Liberia',
  'Madagascar', 'Malawi', 'Malaysia', 'Mali', 'Mexico', 'Montserrat', 'Morocco', 'Mozambique',
  'Nepal', 'Netherlands Antilles', 'New Zealand', 'Niger', 'Nigeria', 'Pakistan', 'Paraguay',
  'Peru', 'Philippines', 'Puerto Rico', 'Rwanda', 'Senegal', 'Sierra Leone', 'Somalia',
  'Somaliland', 'South Africa', 'Sri Lanka', 'St Kitts and Nevis', 'St Lucia',
  'St Vincent Grenadines', 'Suriname', 'Tanzania', 'Thailand', 'Tunisia', 'Turkey',
  'Turks and Caicos', 'Uganda', 'United Arab Emirates', 'United Kingdom', 'Uruguay', 'Vietnam',
  'Zambia', 'Zimbabwe',
]

export const SETTLE_FAQS = [
  {
    q: 'What is Settle?',
    a: "Settle is Insolify's consumer app for sending and receiving money across Africa and seeing your connected finances in one place.",
  },
  {
    q: 'Can I send money from Nairobi to Abuja?',
    a: 'That is the kind of route Settle is designed for: you send in your currency and the recipient receives in theirs. Availability depends on market, regulation and provider.',
  },
  {
    q: 'Will I see the rate and fees first?',
    a: 'Yes. The exchange rate and fees are shown before you confirm a payment.',
  },
  {
    q: 'How do I track a payment?',
    a: 'Each payment can be followed from sent to received inside the app.',
  },
  {
    q: 'Is Settle secure?',
    a: 'Payments are confirmed with a PIN or biometrics and can be screened for fraud by Safi. Features depend on supported providers and market rules.',
  },
  {
    q: 'Which countries are supported?',
    a: 'Supported markets vary and are expanding. Contact the Insolify team for current availability.',
  },
]
