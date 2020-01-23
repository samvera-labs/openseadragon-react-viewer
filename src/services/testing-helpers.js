export const mockTileSources = [
  {
    id: "https://iiif.stack.rdc.library.northwestern.edu/1",
    label: "Fileset 1"
  },
  {
    id: "https://iiif.stack.rdc.library.northwestern.edu/2",
    label: "Fileset 2"
  },
  {
    id: "https://iiif.stack.rdc.library.northwestern.edu/3",
    label: "Fileset 3"
  }
];

export const mockManifest = {
  "@context": "http://iiif.io/api/presentation/2/context.json",
  "@type": "sc:Manifest",
  "@id":
    "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json",
  label: "Scrapbook, 1899-1904",
  description: [
    'The second scrapbook in the James E. "Jimmy" Johnson Scrapbook collection is smaller than the first volume.  It only contains newspaper clippings pertaining to Johnson’s football career at Carlisle. '
  ],
  metadata: [
    { label: "Permalink", value: ["ark:/81985/n2nz81119"] },
    { label: "Date Created", value: ["1899/1904"] },
    { label: "Creator", value: ["Johnson, Jimmy, 1879-1942"] },
    {
      label: "Rights Statement",
      value: ["http://rightsstatements.org/vocab/InC-EDU/1.0/"]
    }
  ],
  sequences: [
    {
      "@type": "sc:Sequence",
      "@id": "/sequence/normal",
      rendering: [],
      canvases: [
        {
          "@type": "sc:Canvas",
          "@id":
            "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/c331c48e-0dda-4e4b-a566-b9a5e0129ce3",
          label: "Front cover",
          width: 640,
          height: 480,
          images: [
            {
              "@type": "oa:Annotation",
              motivation: "sc:painting",
              resource: {
                "@type": "dctypes:Image",
                "@id":
                  "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/c3%2F31%2Fc4%2F8e%2F-0%2Fdd%2Fa-%2F4e%2F4b%2F-a%2F56%2F6-%2Fb9%2Fa5%2Fe0%2F12%2F9c%2Fe3/full/600,/0/default.jpg",
                height: 480,
                width: 640,
                format: null,
                service: {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id":
                    "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/c3%2F31%2Fc4%2F8e%2F-0%2Fdd%2Fa-%2F4e%2F4b%2F-a%2F56%2F6-%2Fb9%2Fa5%2Fe0%2F12%2F9c%2Fe3",
                  profile: "http://iiif.io/api/image/2/level2.json"
                }
              },
              on:
                "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/c331c48e-0dda-4e4b-a566-b9a5e0129ce3"
            }
          ]
        },
        {
          "@type": "sc:Canvas",
          "@id":
            "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/0c4c6c92-45e2-45ce-9490-812f46e866c3",
          label: "Inside front cover",
          width: 640,
          height: 480,
          images: [
            {
              "@type": "oa:Annotation",
              motivation: "sc:painting",
              resource: {
                "@type": "dctypes:Image",
                "@id":
                  "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/0c%2F4c%2F6c%2F92%2F-4%2F5e%2F2-%2F45%2Fce%2F-9%2F49%2F0-%2F81%2F2f%2F46%2Fe8%2F66%2Fc3/full/600,/0/default.jpg",
                height: 480,
                width: 640,
                format: null,
                service: {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id":
                    "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/0c%2F4c%2F6c%2F92%2F-4%2F5e%2F2-%2F45%2Fce%2F-9%2F49%2F0-%2F81%2F2f%2F46%2Fe8%2F66%2Fc3",
                  profile: "http://iiif.io/api/image/2/level2.json"
                }
              },
              on:
                "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/0c4c6c92-45e2-45ce-9490-812f46e866c3"
            }
          ]
        },
        {
          "@type": "sc:Canvas",
          "@id":
            "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/c01050dd-2688-4da7-9c0a-07887c268f4a",
          label: "page 1. Scant victory for Harvard ",
          width: 640,
          height: 480,
          images: [
            {
              "@type": "oa:Annotation",
              motivation: "sc:painting",
              resource: {
                "@type": "dctypes:Image",
                "@id":
                  "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/c0%2F10%2F50%2Fdd%2F-2%2F68%2F8-%2F4d%2Fa7%2F-9%2Fc0%2Fa-%2F07%2F88%2F7c%2F26%2F8f%2F4a/full/600,/0/default.jpg",
                height: 480,
                width: 640,
                format: null,
                service: {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id":
                    "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/c0%2F10%2F50%2Fdd%2F-2%2F68%2F8-%2F4d%2Fa7%2F-9%2Fc0%2Fa-%2F07%2F88%2F7c%2F26%2F8f%2F4a",
                  profile: "http://iiif.io/api/image/2/level2.json"
                }
              },
              on:
                "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/c01050dd-2688-4da7-9c0a-07887c268f4a"
            }
          ]
        },
        {
          "@type": "sc:Canvas",
          "@id":
            "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/d43c02cd-14f9-4f3e-a164-746ec6153b76",
          label: "page 2. Harvard plays Indians today",
          width: 640,
          height: 480,
          images: [
            {
              "@type": "oa:Annotation",
              motivation: "sc:painting",
              resource: {
                "@type": "dctypes:Image",
                "@id":
                  "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/d4%2F3c%2F02%2Fcd%2F-1%2F4f%2F9-%2F4f%2F3e%2F-a%2F16%2F4-%2F74%2F6e%2Fc6%2F15%2F3b%2F76/full/600,/0/default.jpg",
                height: 480,
                width: 640,
                format: null,
                service: {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id":
                    "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/d4%2F3c%2F02%2Fcd%2F-1%2F4f%2F9-%2F4f%2F3e%2F-a%2F16%2F4-%2F74%2F6e%2Fc6%2F15%2F3b%2F76",
                  profile: "http://iiif.io/api/image/2/level2.json"
                }
              },
              on:
                "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/d43c02cd-14f9-4f3e-a164-746ec6153b76"
            }
          ]
        },
        {
          "@type": "sc:Canvas",
          "@id":
            "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/2b7a5311-70b9-4fd1-99f6-f02caa73bdfd",
          label: "page 3. Carlisle Indians beat the Quakers",
          width: 640,
          height: 480,
          images: [
            {
              "@type": "oa:Annotation",
              motivation: "sc:painting",
              resource: {
                "@type": "dctypes:Image",
                "@id":
                  "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/2b%2F7a%2F53%2F11%2F-7%2F0b%2F9-%2F4f%2Fd1%2F-9%2F9f%2F6-%2Ff0%2F2c%2Faa%2F73%2Fbd%2Ffd/full/600,/0/default.jpg",
                height: 480,
                width: 640,
                format: null,
                service: {
                  "@context": "http://iiif.io/api/image/2/context.json",
                  "@id":
                    "https://iiif.stack.rdc.library.northwestern.edu/iiif/2/2b%2F7a%2F53%2F11%2F-7%2F0b%2F9-%2F4f%2Fd1%2F-9%2F9f%2F6-%2Ff0%2F2c%2Faa%2F73%2Fbd%2Ffd",
                  profile: "http://iiif.io/api/image/2/level2.json"
                }
              },
              on:
                "https://iiif.stack.rdc.library.northwestern.edu/public/06/20/ea/ca/-5/4e/6-/41/81/-a/85/8-/39/dd/ea/0b/b1/c5-manifest.json/canvas/2b7a5311-70b9-4fd1-99f6-f02caa73bdfd"
            }
          ]
        }
      ]
    }
  ]
};
