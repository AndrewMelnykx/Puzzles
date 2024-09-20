function domainName(url) {
  url = url.replace(/(https?:\/\/)?(www\.)?/, "");
  return url.split(".")[0];
}

const result = domainName("https://www.cnet.com");
console.log(result);
