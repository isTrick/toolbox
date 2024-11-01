import { text, image, barcodes } from "@pdfme/schemas";
import { generate } from "@pdfme/generator";

(async () => {
  const template = {
  "schemas": [
    [
      {
        "name": "resume_image",
        "type": "image",
        "content": "data:image/png;base64,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",
        "position": {
          "x": 0,
          "y": 0
        },
        "width": 90.8,
        "height": 60.9,
        "rotate": 0,
        "opacity": 1,
        "required": true,
        "readOnly": false
      },
      {
        "name": "name",
        "type": "text",
        "content": "",
        "position": {
          "x": 136.85,
          "y": 5.71
        },
        "width": 45.53,
        "height": 5.23,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "birthday",
        "type": "text",
        "content": "",
        "position": {
          "x": 143.41,
          "y": 11.74
        },
        "width": 45.53,
        "height": 5.23,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "email",
        "type": "text",
        "content": "",
        "position": {
          "x": 120.07,
          "y": 17.24
        },
        "width": 45.53,
        "height": 5.23,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "phone_number",
        "type": "text",
        "content": "",
        "position": {
          "x": 121.86,
          "y": 23.53
        },
        "width": 45.53,
        "height": 5.23,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "linkedin",
        "type": "text",
        "content": "",
        "position": {
          "x": 124.72,
          "y": 29.29
        },
        "width": 45.53,
        "height": 5.23,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "location",
        "type": "text",
        "content": "",
        "position": {
          "x": 128.64,
          "y": 40.87
        },
        "width": 45.53,
        "height": 5.23,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "district",
        "type": "text",
        "content": "",
        "position": {
          "x": 120.12,
          "y": 46.37
        },
        "width": 45.53,
        "height": 5.23,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "objective",
        "type": "text",
        "content": "",
        "position": {
          "x": 11.32,
          "y": 79.12
        },
        "width": 68.81,
        "height": 47.03,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "skills",
        "type": "text",
        "content": "",
        "position": {
          "x": 11.53,
          "y": 139.12
        },
        "width": 68.81,
        "height": 61.58,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "languages",
        "type": "text",
        "content": "",
        "position": {
          "x": 11.21,
          "y": 215
        },
        "width": 68.81,
        "height": 61.58,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "experience",
        "type": "text",
        "content": "",
        "position": {
          "x": 101.11,
          "y": 79.75
        },
        "width": 97.38,
        "height": 39.88,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "degrees",
        "type": "text",
        "content": "",
        "position": {
          "x": 102.11,
          "y": 132.35
        },
        "width": 97.38,
        "height": 25.32,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "courses",
        "type": "text",
        "content": "",
        "position": {
          "x": 102.06,
          "y": 170.13
        },
        "width": 97.38,
        "height": 53.63,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      },
      {
        "name": "volunteering",
        "type": "text",
        "content": "",
        "position": {
          "x": 102.54,
          "y": 237.02
        },
        "width": 97.38,
        "height": 39.87,
        "rotate": 0,
        "alignment": "left",
        "verticalAlignment": "top",
        "fontSize": 12,
        "lineHeight": 1,
        "characterSpacing": 0,
        "fontColor": "#000000",
        "backgroundColor": "",
        "opacity": 1,
        "strikethrough": false,
        "underline": false,
        "required": true,
        "readOnly": false,
        "fontName": "Roboto"
      }
    ]
  ],
  "basePdf": "data:application/pdf;base64,JVBERi0xLjQKJfbk/N8KMSAwIG9iago8PAovVHlwZSAvQ2F0YWxvZwovVmVyc2lvbiAvMS40Ci9QYWdlcyAyIDAgUgovU3RydWN0VHJlZVJvb3QgMyAwIFIKL01hcmtJbmZvIDQgMCBSCi9MYW5nIChwdC1CUikKL1ZpZXdlclByZWZlcmVuY2VzIDUgMCBSCj4+CmVuZG9iago2IDAgb2JqCjw8Ci9UaXRsZSA8NDNGMzcwNjk2MTIwNjQ2NTIwNDNGMzcwNjk2MTIwNjQ2NTIwNDM1NjIwMkQyMDRFNjU2N0YzNjM2OTZGNzMyMDY1NkQyMDQ3NjU3MjYxNkM+Ci9DcmVhdG9yIChDYW52YSkKL1Byb2R1Y2VyIChDYW52YSkKL0NyZWF0aW9uRGF0ZSAoRDoyMDI0MTEwMTE4MjAxOCswMCcwMCcpCi9Nb2REYXRlIChEOjIwMjQxMTAxMTgyMDE4KzAwJzAwJykKL0tleXdvcmRzIChEQUdWUW9iSWMxNCxCQUVCcm10MDkySSkKL0F1dGhvciAoUGF0cmljayBHaXJhcmRpKQo+PgplbmRvYmoKMiAwIG9iago8PAovVHlwZSAvUGFnZXMKL0tpZHMgWzcgMCBSXQovQ291bnQgMQo+PgplbmRvYmoKMyAwIG9iago8PAovVHlwZSAvU3RydWN0VHJlZVJvb3QKL0sgWzggMCBSXQovUGFyZW50VHJlZSA5IDAgUgovUGFyZW50VHJlZU5leHRLZXkgMTQKPj4KZW5kb2JqCjQgMCBvYmoKPDwKL01hcmtlZCB0cnVlCi9TdXNwZWN0cyBmYWxzZQo+PgplbmRvYmoKNSAwIG9iago8PAovVHlwZSAvVmlld2VyUHJlZmVyZW5jZXMKL0Rpc3BsYXlEb2NUaXRsZSB0cnVlCj4+CmVuZG9iago3IDAgb2JqCjw8Ci9UeXBlIC9QYWdlCi9SZXNvdXJjZXMgPDwKL1Byb2NTZXQgWy9QREYgL1RleHQgL0ltYWdlQiAvSW1hZ2VDIC9JbWFnZUldCi9FeHRHU3RhdGUgMTAgMCBSCi9Gb250IDExIDAgUgo+PgovTWVkaWFCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovQ29udGVudHMgMTIgMCBSCi9TdHJ1Y3RQYXJlbnRzIDAKL1BhcmVudCAyIDAgUgovVGFicyAvUwovQmxlZWRCb3ggWzAuMCA3LjgyOTk4MTMgNTk1LjUgODUwLjA3OTk2XQovVHJpbUJveCBbMC4wIDcuODI5OTgxMyA1OTUuNSA4NTAuMDc5OTZdCi9Dcm9wQm94IFswLjAgNy44Mjk5ODEzIDU5NS41IDg1MC4wNzk5Nl0KL1JvdGF0ZSAwCi9Bbm5vdHMgW10KPj4KZW5kb2JqCjggMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0RvY3VtZW50Ci9QIDMgMCBSCi9LIFsxMyAwIFJdCj4+CmVuZG9iago5IDAgb2JqCjw8Ci9MaW1pdHMgWzAgMF0KL051bXMgWzAgWzE0IDAgUiAxNSAwIFIgMTYgMCBSIDE3IDAgUiAxOCAwIFIgMTkgMCBSIDIwIDAgUiAyMSAwIFIgMjIgMCBSIDIzIDAgUgoyNCAwIFIgMjUgMCBSIDI2IDAgUiAyNyAwIFJdCl0KPj4KZW5kb2JqCjEwIDAgb2JqCjw8Ci9HMyAyOCAwIFIKPj4KZW5kb2JqCjExIDAgb2JqCjw8Ci9GNCAyOSAwIFIKPj4KZW5kb2JqCjEyIDAgb2JqCjw8Ci9MZW5ndGggMTU3MgovRmlsdGVyIC9GbGF0ZURlY29kZQo+PgpzdHJlYW0NCnicxVhdbxQ3FK3Ut3nqH6g0L6XQso4/rj+uhCKVBAIqFAIBWhWe0kJVJZVK/7/U45mdsSexZ9dppCZSsnvWY997zrnX9gptePjpJX43InsbrBTSM7v+/LL7u4ufawpKaNsbK1kYb/vPv3fvvuv+wsdGKHwQB6VXeE718ffVyfbF50/dwYnpP/0zTOeZeqW0idN87E7x+/8vg1XWPmNSwlonud8oTUIq68n3ypIRUkoOfSCghjxPTyhpvVBBKbt45LLTxnmBB5dTXQDnILTk5XhN2gunWAFVSgRjgtNACeFJ029YCkXMXvXnnSYvBQe83rggyDnp49AAylzAcoaFtI4k5WAQhiVWGieYYCcJeBx6kaPGYgZ23KelnCMsxcaloFxwQlmj3TDlFL+XHuF7hYFzpl7Da4pjRDMrCTvPSUzwBWDthMUSIYNBgojjfbYSeytIqxAWMbE1whsP1VLwSeCUZIbNdJznVkjcXeRw4jmtlCmSglqol+LPlc5SXTiv7K7z7o/BfLFgNHupJG+LZnpXNjJKSQSLiPK/KKvr4LLEyIVeW3cbFYakWbDWDpk6reEZhIb6ZYs8yZheh2CFJnBZeMIY1mhizqDActyTxuPSOSi0wMEwWFUEGuAWT9LbaFwdJdAa0rqoYbAEj8goF5x53m3gF+N1FAyzRGktBDAk2JnB+VEs0Ov6DUXKHbTPwGg9Fg5W1xkK78AHRmrjM1TB1cIrDRelpZSEfIZt8IuwlHQm9uyQp4C8wJdTWCtlm4MzNXGCGU5MXixggiYsNdpsWsyQ1cIoFfLA0ASNYLbjvHMShqCkiz05ZQsPoFKdMn3iJWGgO5GYYAiZCE9wJk1aKpMxDyvXPOWw8NOcbtllqdBklNqhvQRUR3ollw+mpFBp7FBy+d9YadfAZaVBhKuVFnee+Ud58IRMMXRUzdrgtt0xbGtm3Eq1CNhBPamhM6R35ek2C1gSkQwMWmIehpTu878xj2vgMg8T9N4do7z1o22haw5tC5IrRc7oGI4cxiCE8UVa9uBl/+DBwfOjp8eADw/7h8dH3cOzEd6+PXiM0nD92cduZGUT/0Xgsrv7hbrXn/3ZxRKyWsZakP3Zb8BfDXgYCEKDnuCX43AjjA7SGJrwJwMeezyhKuZZvhxgujrLndtZ9PV2eGAnQdUEv9guShSkMmZHiO8G2A5zq7ArlK8H+NHzo+7R2fAv41+18I+6Gfj/tkLFcXn9SrSV0RX6T8q8tWlYM04llLcD7ISGwRXN8OPyms/KEja677Sc5+0prlsUd3JU/P3dMQuJLq6l9m5a6atyXHIcbofsDNEOoivUVYpiLTvTkh3iHbJrLO02idqK4gaCUlMLxcY/5HxQEbQiRSXnn5qqslLD98tlVllyjQrbRAWFdSoqWlTKv6JzxcMVmj80zP1Ayh/4sDA+fmAPi9HcwF6uiVO/bRjfVDhtawBvynRU4H2TOy2dYYwRjplRiQHH8IBLntr3DOPXGAo4gF4liUeO9MgR4SZA1ms1Bfxo4g6n5+B5gp9PZYJ4DftlreH6jvupn+d4Vx78bNt1VHBk1Dz1LwPMsRmNtGR87iIu3gdlkGxQUBYnfuNwcl9l7omaqQs3pO79vallGw4cv1hYxHw1kzdFjl5Om5QlXLpoJum4MEcqtuUsqdZuxp6LXwRoGW/tBN/hfrPj6JyRxzck7/62fHDL0D7MjfWkbLuKZcpEt1A6na/2N1igyBa5/SlSq/eLNYNtDzwaLQl82NlgvxYzeV3mrlybZTcWeY72OirYbtodr634eP+5a6pMZ2foJ12CTaXiytmU7fG0qSu9Lfu0Ajf5tMJemZAXjTbVLiA6Gb+b3Nemq9ewFZv6ikvLopTTq2w3a1xcY/nH8hxl8isCVnzH0/2JHAcVdjisEt/P5fgqNihunrEUTbHTN9TzOiUNW23g+D0R8/4WW733rVjsToX/CqVlMiqS34Y/bCW+cu9tcnVFwg8NM1c21f/ignRSxSHXxeOD2nFUzW2wekFesQFVDqsVG9wGz227RXnnazzLPfTFCi97qc2n5Tkqg7+vsN3UwStEtYlQMXCT29foW7j9tPsXY3Yf/Q0KZW5kc3RyZWFtCmVuZG9iagoxMyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUGFydAovUCA4IDAgUgovUGcgNyAwIFIKL0sgWzE0IDAgUiAxNSAwIFIgMTYgMCBSIDE3IDAgUiAxOCAwIFIgMTkgMCBSIDIwIDAgUiAzMCAwIFIgMjIgMCBSIDIzIDAgUgoyNCAwIFIgMjUgMCBSIDI2IDAgUiAyNyAwIFJdCj4+CmVuZG9iagoxNCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovQWN0dWFsVGV4dCAoTm9tZSBDb21wbGV0bzopCi9QZyA3IDAgUgovSyBbMF0KPj4KZW5kb2JqCjE1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9QCi9BY3R1YWxUZXh0IChEYXRhIGRlIE5hc2NpbWVudG86KQovUGcgNyAwIFIKL0sgWzFdCj4+CmVuZG9iagoxNiAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovQWN0dWFsVGV4dCAoRS1NYWlsOikKL1BnIDcgMCBSCi9LIFsyXQo+PgplbmRvYmoKMTcgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL0FjdHVhbFRleHQgKENvbnRhdG86KQovUGcgNyAwIFIKL0sgWzNdCj4+CmVuZG9iagoxOCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovQWN0dWFsVGV4dCAoTGlua2VkSW46KQovUGcgNyAwIFIKL0sgWzRdCj4+CmVuZG9iagoxOSAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovQWN0dWFsVGV4dCA8NEM2RjYzNjE2QzY5N0E2MUU3RTM2RjNBPgovUGcgNyAwIFIKL0sgWzVdCj4+CmVuZG9iagoyMCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvUAovQWN0dWFsVGV4dCAoQmFpcnJvOikKL1BnIDcgMCBSCi9LIFs2XQo+PgplbmRvYmoKMjEgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL1AKL1AgMzEgMCBSCi9BY3R1YWxUZXh0IChPYmpldGl2bykKL1BnIDcgMCBSCi9LIFs3XQo+PgplbmRvYmoKMjIgMCBvYmoKPDwKL1R5cGUgL1N0cnVjdEVsZW0KL1MgL0gxCi9UIDw1MTc1NjE2QzY5NjY2OTYzNjFFN0Y1NjU3MzIwNjUyMDQ4NjE2MjY5NkM2OTY0NjE2NDY1NzM+Ci9FIDw1MTc1NjE2QzY5NjY2OTYzNjFFN0Y1NjU3MzIwNjUyMDQ4NjE2MjY5NkM2OTY0NjE2NDY1NzM+Ci9QZyA3IDAgUgovSyBbMTNdCj4+CmVuZG9iagoyMyAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvSDEKL1QgKElkaW9tYXMpCi9FIChJZGlvbWFzKQovUGcgNyAwIFIKL0sgWzldCj4+CmVuZG9iagoyNCAwIG9iago8PAovVHlwZSAvU3RydWN0RWxlbQovUyAvSDEKL1QgPDQ1Nzg3MDY1NzI2OUVBNkU2MzY5NjEyMDUwNzI2RjY2Njk3MzczNjk2RjZFNjE2Qz4KL0UgPDQ1Nzg3MDY1NzI2OUVBNkU2MzY5NjEyMDUwNzI2RjY2Njk3MzczNjk2RjZFNjE2Qz4KL1BnIDcgMCBSCi9LIFsxMF0KPj4KZW5kb2JqCjI1IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9IMQovVCA8NDY2RjcyNkQ2MUU3RTM2Rj4KL0UgPDQ2NkY3MjZENjFFN0UzNkY+Ci9QZyA3IDAgUgovSyBbOF0KPj4KZW5kb2JqCjI2IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9IMQovVCAoQ3Vyc29zIFJlYWxpemFkb3MpCi9FIChDdXJzb3MgUmVhbGl6YWRvcykKL1BnIDcgMCBSCi9LIFsxMl0KPj4KZW5kb2JqCjI3IDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9IMQovVCA8NTQ3MjYxNjI2MTZDNjg2RjczMjA1NjZGNkM3NTZFNzRFMTcyNjk2RjczPgovRSA8NTQ3MjYxNjI2MTZDNjg2RjczMjA1NjZGNkM3NTZFNzRFMTcyNjk2RjczPgovUGcgNyAwIFIKL0sgWzExXQo+PgplbmRvYmoKMjggMCBvYmoKPDwKL2NhIDEKL0JNIC9Ob3JtYWwKPj4KZW5kb2JqCjI5IDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9TdWJ0eXBlIC9UeXBlMAovQmFzZUZvbnQgL0FBQUFBQStUZVhHeXJlVGVybWVzLUJvbGQKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzMyIDAgUl0KL1RvVW5pY29kZSAzMyAwIFIKPj4KZW5kb2JqCjMwIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MCi9QIDEzIDAgUgovSyAzNCAwIFIKPj4KZW5kb2JqCjMxIDAgb2JqCjw8Ci9UeXBlIC9TdHJ1Y3RFbGVtCi9TIC9MQm9keQovUCAzNCAwIFIKL0sgWzIxIDAgUl0KPj4KZW5kb2JqCjMyIDAgb2JqCjw8Ci9UeXBlIC9Gb250Ci9Gb250RGVzY3JpcHRvciAzNSAwIFIKL0Jhc2VGb250IC9BQUFBQUErVGVYR3lyZVRlcm1lcy1Cb2xkCi9TdWJ0eXBlIC9DSURGb250VHlwZTIKL0NJRFRvR0lETWFwIC9JZGVudGl0eQovQ0lEU3lzdGVtSW5mbyAzNiAwIFIKL1cgWzAgWzI4MCAwIDAgMjUwXQogMTYgMjkgMzMzIDM3IFs2NjcgNzIyIDcyMiA2NjcgNjExIDAgNzc4IDM4OSAwIDAKNjY3IDk0NCA3MjIgNzc4IDYxMSA3NzggNzIyIDAgNjY3IDAKNzIyXQogNjkgWzU1NiA0NDQgNTU2IDQ0NCAzMzMgMCA1NTYgMjc4IDMzMyA1NTYKMjc4IDgzMyA1NTZdCiA4MwpbNTU2IDAg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MDAwMDAxNTUgMDAwMDAgbg0KMDAwMDAwMDcwNyAwMDAwMCBuDQowMDAwMDAxMDc4IDAwMDAwIG4NCjAwMDAwMDExNTEgMDAwMDAgbg0KMDAwMDAwMTI5NyAwMDAwMCBuDQowMDAwMDAxMzMwIDAwMDAwIG4NCjAwMDAwMDEzNjMgMDAwMDAgbg0KMDAwMDAwMzAxMSAwMDAwMCBuDQowMDAwMDAzMTgyIDAwMDAwIG4NCjAwMDAwMDMyNzQgMDAwMDAgbg0KMDAwMDAwMzM3MSAwMDAwMCBuDQowMDAwMDAzNDU2IDAwMDAwIG4NCjAwMDAwMDM1NDIgMDAwMDAgbg0KMDAwMDAwMzYyOSAwMDAwMCBuDQowMDAwMDAzNzMxIDAwMDAwIG4NCjAwMDAwMDM4MTYgMDAwMDAgbg0KMDAwMDAwMzkxMiAwMDAwMCBuDQowMDAwMDA0MDk3IDAwMDAwIG4NCjAwMDAwMDQxODcgMDAwMDAgbg0KMDAwMDAwNDM2MCAwMDAwMCBuDQowMDAwMDA0NDY4IDAwMDAwIG4NCjAwMDAwMDQ1NzkgMDAwMDAgbg0KMDAwMDAwNDc0MCAwMDAwMCBuDQowMDAwMDA0NzgwIDAwMDAwIG4NCjAwMDAwMDQ5MzMgMDAwMDAgbg0KMDAwMDAwNDk5OSAwMDAwMCBuDQowMDAwMDA1MDcxIDAwMDAwIG4NCjAwMDAwMDU0NTkgMDAwMDAgbg0KMDAwMDAwNTg3MyAwMDAwMCBuDQowMDAwMDA1OTQ5IDAwMDAwIG4NCjAwMDAwMDYxNTcgMDAwMDAgbg0KMDAwMDAwNjIzMiAwMDAwMCBuDQowMDAwMDA2MzA3IDAwMDAwIG4NCnRyYWlsZXIKPDwKL1Jvb3QgMSAwIFIKL0luZm8gNiAwIFIKL0lEIFs8NTFGN0NBRkRGMUVEQThDRTQ2NTZEQTY5M0M5NzlCODc+IDw1MUY3Q0FGREYxRURBOENFNDY1NkRBNjkzQzk3OUI4Nz5dCi9TaXplIDM5Cj4+CnN0YXJ0eHJlZgoxMDY2OAolJUVPRgo=",
  "pdfmeVersion": "5.0.0"
};
  const plugins = { text, image, qrcode: barcodes.qrcode };
  const inputs = [
  {
    "resume_image": "data:image/png;base64,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",
    "name": "",
    "birthday": "",
    "email": "",
    "phone_number": "",
    "linkedin": "",
    "location": "",
    "district": "",
    "objective": "",
    "skills": "",
    "languages": "",
    "experience": "",
    "degrees": "",
    "courses": "",
    "volunteering": ""
  }
];

  const pdf = await generate({ template, plugins, inputs });

  // Node.js
  // fs.writeFileSync(path.join(__dirname, 'test.pdf'), pdf);

  // Browser
  const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
  window.open(URL.createObjectURL(blob));
})();

export default function ResumeGenerator() {



}