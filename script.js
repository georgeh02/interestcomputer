const principalBox = document.querySelector("input#principal")
const interestBox = document.querySelector("input#interest")
const timesCompoundedBox = document.querySelector("input#timesCompounded")
const yearsBox = document.querySelector("input#years")
const compoundInterestSpan = document.querySelector("span")

function computeBMI() {
  const principal = principalBox.value
  const interest = interestBox.value / 100
  const timesCompounded = timesCompoundedBox.value
  const years = yearsBox.value
  const compoundInterest = principal * ((1 + (interest / timesCompounded)) ** (timesCompounded * years))
  compoundInterestSpan.textContent = compoundInterest
}

principalBox.addEventListener('input', computeBMI)
interestBox.addEventListener('input', computeBMI)
timesCompoundedBox.addEventListener('input', computeBMI)
yearsBox.addEventListener('input', computeBMI)
compoundInterestSpan.addEventListener('input', computeBMI)