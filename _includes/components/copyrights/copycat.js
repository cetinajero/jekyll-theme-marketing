const cc = new Object()
cc[1]=window
cc[2]=document
cc[3]=cc[1].location
cc[4]=cc[3].origin
cc[5]=cc[2].head
cc[6]=cc[5].parentElement

{% capture location %}{{ site.url
  | replace: "/", "\/"
  | replace: "www.", "(www.|staging.)"
  | replace: "0.0.0.0", "localhost"}}{% endcapture %}

if (!cc[4].match(/({{ location }}|http:\/\/172\.31\.3[0-1]\.[0-9]{2}:)/)) {
  cc[6].remove()
}
