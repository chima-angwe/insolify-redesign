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
    q: 'What information do I need to send money abroad?',
    a: "You need to register with Settle Africa to send an international money transfer. You can access the Settle Africa app on your Android or iOS phone. We'll need your personal details (full name, email address, mobile phone number, gender, birth date and address), transfer details (amount, receive method, payment method), receiver details (full name, mobile number and email address), and payment details (bank account, debit card or credit card).",
  },
  {
    q: 'What are the benefits of sending money online with Settle Africa?',
    a: 'Over 8 million customers use Settle Africa to send and receive money across the world. We offer up to four receive methods worldwide and are always fast, secure and easy to use. Every transfer with us is covered by our stringent security checks. Settle Africa is authorised and regulated by financial regulators in multiple countries.',
  },
  {
    q: 'What verification do I need to send an international transfer?',
    a: "We'll verify your mobile phone number with an OTP. You may be required to provide ID proof and a selfie image to verify your identity. Identity verification takes up to 4 minutes at least 90% of the time. In case of a delay, we'll contact you instantly.",
  },
  {
    q: 'How much money can I send abroad?',
    a: 'The amount you can send depends on the country you are sending money to. It may also vary depending on the receive method, as well as local regulations.',
  },
  {
    q: 'How long does an online money transfer take?',
    a: 'In most cases, money transfers sent using Settle Africa will arrive within minutes. You will see the expected delivery time before you make a payment. We aim to complete transfers within the suggested time, but some transfers may take longer depending on the receive method.',
  },
  {
    q: 'How do I track my Settle Africa transfer?',
    a: "After sending money, you can quickly start tracking it every step of the way. We'll send you a notification with all your transfer details instantly. You can also use the app to check on previous transfers. If you have sent money within the last hour, please wait for confirmation that it has arrived.",
  },
]