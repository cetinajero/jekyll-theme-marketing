const cc = new Object()
cc[1]=window
cc[2]=document
cc[3]=cc[1].location
cc[4]=cc[3].origin
cc[5]=cc[2].head
cc[6]=cc[5].parentElement

if (cc[4] != '{{ site.url | replace: "0.0.0.0", "localhost" }}') {
  cc[6].remove()
}
