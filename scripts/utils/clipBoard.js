export function copyToClipboard(value) {
  return navigator.clipboard.writeText(value);
}

export function pasteFromClipboard() {
  return navigator.clipboard.readText();
}