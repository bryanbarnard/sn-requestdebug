

/**
 * get a guid for tracking
 */
var id = Packages.com.glide.util.Guid.generate(this);

/**
 * get the http method
 */
var methodMsg = "METHOD: " + g_request.getMethod() + "\n";

/**
 * iterate through all of the headers
 */
var headerList = g_request.getHeaderNames();
var headerMsg = "";
while (headerList.hasMoreElements()) {
    var header = headerList.nextElement();
    var value = g_request.getHeader(header);
    headerMsg += (header + " : " + value + "\n");
}

/**
 * iterate through all of the URL parameters
 */
var urlParamList = g_request.getParameterNames();
var paramMsg = ""; //we're going to log parameter info here
while (urlParamList.hasMoreElements()) {
    var param = urlParamList.nextElement();
    var value = g_request.getParameter(param);
    paramMsg += (param + " : " + value + "\n");
}

/**
 * store input stream, body
 */
var inputStream = g_request.getInputStream();
var is = g_request.getInputStream();
var st = GlideStringUtil.getStringFromStream(is);

var contentType = g_request.getHeader("Content-Type");
if (contentType == "application/xml") {
    //TODO: This is too specific, we just want to log this
}

if (contentType == "application/json") {

}

/**
 * Now we would normally process the request given the data posted to
 * us.  However, for this example, we are going to simply build out
 * a text response that is tailored to the information given to us
 */
var returnMessage = "";
returnMessage += "REQUESTTEST\n\n";
returnMessage += methodMsg;
returnMessage += "\nHEADERS:\n";
returnMessage += headerMsg;
returnMessage += "\nURL PARAMETERS:\n";
returnMessage += paramMsg;
returnMessage += "\n\n";

/**
 * Log Response
 */
gs.log(returnMessage, 'RequestTest: ' + id)

/**
 * Build and Return Response
 */
g_response.setHeader("Content-Type", "text/plain");
g_processor.writeOutput(id);

/**
 * Set Status Code and location header
 */

