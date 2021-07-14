const makeApiCall = async (url, method = "GET", headers, body) => {
    const resp = await fetch(url, {
        method: method,
        headers: headers,
        body: JSON.stringify(body),
    });
    return resp.json()
}
export default makeApiCall