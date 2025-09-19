/**
 * Sets the document title with optional prefix/suffix
 * @param {string} title - The main title to set
 * @param {boolean} includeDefaultSuffix - Whether to append "- Beam Wallet" (default: true)
 */
export const setPageTitle = (title, includeDefaultSuffix = true) => {
  document.title = includeDefaultSuffix ? `${title} - Beam Wallet` : title;
};

/**
 * Resets the document title to the default
 */
export const resetPageTitle = () => {
  document.title = "Beam Wallet | Pay Faster and Earn more - Beam Wallet";
}; 