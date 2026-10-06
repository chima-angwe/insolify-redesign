export function formatMoney(amount: number, currency: 'NGN' | 'USD') {
  const symbol = currency === 'NGN' ? '₦' : '$'
  const rounded = Math.round(amount * 100) / 100
  const hasDecimals = !Number.isInteger(rounded)
  return (
    symbol +
    rounded.toLocaleString('en-US', {
      minimumFractionDigits: hasDecimals ? 2 : 0,
      maximumFractionDigits: 2,
    })
  )
}