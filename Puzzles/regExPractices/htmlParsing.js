const text = `<!DOCTYPE html>
<html>
<head>
  <title>Complex Example Page</title>
</head>
<body>
  <h1>Welcome to My Advanced Site</h1>
  <p>Here are some links with complex structures:</p>

  <a href="htp://invalid-url" class="external">Example</a>
  <a href="http://blog.example.com">Example Blog</a>
  <a href="invalid_link_without_http">Search Page</a>
  <a href="https://www.example.com/docs#section2">Docs Section</a>
  <a href="http://localhost:8080/admin">Localhost Admin</a>
  <a href="https://www.example.com/path%20with%20spaces/asdasdasd/asdasdas">Encoded Path</a>
  <a href="https://sub.subdomain.example.co.uk">Multi Subdomain</a>
  <a href="https://www.example.com/query?param=value&other=1%20test">Query Special</a>
  <a href="mailto:support@example.com">Email Us</a>
  <a href="ftp://ftp.example.com/file.zip">Download File</a>
</body>
</html>`;

const linkPattern = `(?<=<a\\shref\\=")(https?:\\/\\/[a-z0-9.-]+)(?:\\/?[^\\s"<>]*)?(?=")`;

const wholePattern = `${linkPattern}`;
const regexGroup = new RegExp(wholePattern, "gi");

console.log(text.match(regexGroup));
