// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S) =>
  S.list()
    .title('Blog')
    .items([
      S.documentTypeListItem('post').title('Posts'),
      S.divider(),
      ...S.documentTypeListItems().filter(
        (item) => item.getId() && !['post'].includes(item.getId()),
      ),
    ])
    S.listItem()
        .title('Home')
        .child(
          S.list()
            .title('Home Content')
            .items([
              S.listItem()
                .title('Navbar')
                .schemaType('navbar')
                .child(S.document().schemaType('navbar').documentId('navbar')),
              S.listItem()
                .title('Hero')
                .schemaType('hero')
                .child(S.document().schemaType('hero').documentId('hero')),
              S.listItem()
                .title('Marquee Images')
                .schemaType('marqueeImgs')
                .child(S.document().schemaType('marqueeImgs').documentId('marqueeImgs')),
              S.listItem()
                .title('Cards')
                .schemaType('cards')
                .child(S.document().schemaType('cards').documentId('cards')),
              S.listItem()
                .title('About Section 1')
                .schemaType('about1')
                .child(S.document().schemaType('about1').documentId('about1')),
              S.listItem()
                .title('About Section 2')
                .schemaType('about2')
                .child(S.document().schemaType('about2').documentId('about2')),
              S.listItem()
                .title('Solutions')
                .schemaType('solutions')
                .child(S.document().schemaType('solutions').documentId('solutions')),
              S.listItem()
                .title('Icons Section')
                .schemaType('iconsSection')
                .child(S.document().schemaType('iconsSection').documentId('iconsSection')),
              S.listItem()
                .title('Testimonials')
                .schemaType('testimonials')
                .child(S.document().schemaType('testimonials').documentId('testimonials')),
              S.listItem()
                .title('FAQ')
                .schemaType('faq')
                .child(S.document().schemaType('faq').documentId('faq')),
              S.listItem()
                .title('Banner 1')
                .schemaType('banner1')
                .child(S.document().schemaType('banner1').documentId('banner1')),
              S.listItem()
                .title('Banner 2')
                .schemaType('banner2')
                .child(S.document().schemaType('banner2').documentId('banner2')),
                S.listItem()
                .title('Banner 3')
                .schemaType('banner3')
                .child(S.document().schemaType('banner3').documentId('banner3')),
              S.listItem()
                .title('Blog Slider')
                .schemaType('blogSlider')
                .child(S.document().schemaType('blogSlider').documentId('blogSlider')),
            ])
        )
