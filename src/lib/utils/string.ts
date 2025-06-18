export function dexPad(number: number, amount: number = 4): string {
	return String(number).padStart(amount, '0');
}
