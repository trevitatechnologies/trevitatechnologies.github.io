/**
 * Google Apps Script Web App Template for Trevita Technologies
 * 
 * INSTRUCTIONS:
 * 1. Create a new Google Sheet.
 * 2. Open "Extensions" -> "Apps Script".
 * 3. Delete any default code and paste this script.
 * 4. Click "Deploy" (top right) -> "New deployment".
 * 5. Choose type "Web app".
 * 6. Set "Execute as" to "Me (your email)".
 * 7. Set "Who has access" to "Anyone" (crucial for form submission without login).
 * 8. Authorize the script when prompted by Google.
 * 9. Copy the generated "Web app URL" and paste it in `config.js` as the `formEndpoint`.
 */

function doPost(e) {
  try {
    // Open active spreadsheet and sheet named "Sheet1" (or the default first sheet)
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheets()[0];
    
    // Headers setup (will write if the sheet is brand new and empty)
    var headers = ["Timestamp", "Name", "Email", "Company", "Primary Interest", "Message"];
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(headers);
    }
    
    // Read post parameters
    var parameter = e.parameter;
    
    var name = parameter.name || "N/A";
    var email = parameter.email || "N/A";
    var company = parameter.company || "N/A";
    var interest = parameter.interest || "N/A";
    var message = parameter.message || "N/A";
    var timestamp = parameter.timestamp || new Date().toISOString();
    
    // Append new data row
    sheet.appendRow([timestamp, name, email, company, interest, message]);
    
    // Return standard success response
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "row": sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "error": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// CORS pre-flight response handler (if browser runs CORS validations)
function doOptions(e) {
  return ContentService
    .createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT);
}
