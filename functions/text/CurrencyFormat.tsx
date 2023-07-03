export default (value) => {
    // Convert the value to a string and remove any existing commas
  let formattedValue = String(value).replace(/,/g, '');

  // Split the value into the integer and decimal parts
  const parts = formattedValue.split('.');

  // Format the integer part by adding commas every 3 digits
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');

  // Join the integer and decimal parts back together
  formattedValue = parts.join('.');

  return formattedValue;
}