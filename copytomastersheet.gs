  function copyToMasterSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const masterSheet = ss.getSheetByName("Summary"); // master sheet name

  const sheetNames = ["Sheet A", "Sheet B", "Sheet B"]; // feeder sheet names
  let targetRow = masterSheet.getLastRow(); // will start pasting after leaving 1 row 

  sheetNames.forEach(name => {
    const sheet = ss.getSheetByName(name);
    const lastRow = sheet.getLastRow();
    const lastCol = sheet.getLastColumn();
    const values = sheet.getDataRange().getValues();


  // Leave one blank row
    targetRow += 1;

    // Add a header row with the sheet name, colored light green
    masterSheet.getRange(targetRow, 1).setValue(name);
    const totalCols = masterSheet.getMaxColumns();
    masterSheet.getRange(targetRow, 1, 1, totalCols).setBackground("#d9ead3");
    targetRow += 1;


    // Paste into Master starting at targetRow
    masterSheet.getRange(targetRow, 1, values.length, values[0].length).setValues(values);
    targetRow += values.length; // Move down
  });
}
