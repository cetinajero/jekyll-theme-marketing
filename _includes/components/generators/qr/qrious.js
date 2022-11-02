new QRious({
  element: document.querySelector("#qr-code"),
  value: "{{ include.url | absolute_url }}",
  size: 200,
  backgroundAlpha: 0, // 0 means transparent
  foreground: "#343a40",
  level: "H",
});
