export function validateForm(name: string, amount: number, budgetCategory) {
  let isValid = budgetCategory !== "" && name !== "" && amount !== "";

  return isValid;
}

export function validateBudgetForm(name: string, max: number) {
  let isValidBudget = name !== "" && max !== "";

  return isValidBudget;
}
