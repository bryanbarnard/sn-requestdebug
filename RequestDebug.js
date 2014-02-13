/*global Packages, g_response, gs, g_request, g_processor, GlideStringUtil*/

/**
 * get a guid for tracking
 */
var id = Packages.com.glide.util.Guid.generate(this);

/**
 * get the http method
 */
var methodMsg = 'METHOD: ' + g_request.getMethod() + '\n';

/**
 * iterate through all of the headers
 */
var headerList = g_request.getHeaderNames();
var headerMsg = '';
while (headerList.hasMoreElements()) {
    var header = headerList.nextElement();
    var value = g_request.getHeader(header);
    headerMsg += (header + ' : ' + value + '\n');
}

/**
 * iterate through all of the URL parameters
 */
var urlParamList = g_request.getParameterNames();
var paramMsg = ''; //we're going to log parameter info here
while (urlParamList.hasMoreElements()) {
    var param = urlParamList.nextElement();
    var value = g_request.getParameter(param);
    paramMsg += (param + ' : ' + value + '\n');
}

/**
 * store input stream, body
 */
var is = g_request.getInputStream();
var st = GlideStringUtil.getStringFromStream(is);


/**
 * build out log message
 */
var requestMessage = '';
requestMessage += 'REQUESTTEST\n\n';
requestMessage += methodMsg;
requestMessage += '\nHEADERS:\n';
requestMessage += headerMsg;
requestMessage += '\nURL PARAMETERS:\n';
requestMessage += paramMsg;
requestMessage += '\n\n';
requestMessage += '\nBODY:\n';
requestMessage += st;

var responseMessage = 'RQDBG: ' + id;

// Log Response
gs.log(requestMessage, responseMessage);

/**
 * Build and Return Response
 */
g_response.setHeader('Content-Type', 'text/plain');
g_processor.writeOutput(responseMessage);

/**
 * Set Status Code and location header
 */
