const cc = new Object()
cc[1]=window
cc[2]='aHR0cHM6Ly93d3cuZ3J1cG9wdi5teC8/bD0='
cc[3]=cc[1].location
cc[4]=cc[3].origin

if (cc[4] != '{{ site.url }}') {
  cc[5]=cc[3].href
  cc[3].href = `${atob(cc[2])}${cc[5]}`
}
