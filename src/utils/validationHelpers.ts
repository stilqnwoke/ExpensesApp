export function validateForm(name: string, amount: number, budgetCategory) {
  let isValid = budgetCategory !== "" && name !== null && amount !== null;

  return isValid;
}
