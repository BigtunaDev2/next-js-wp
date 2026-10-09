// lib/queries.ts
export const HOME_QUERY = `
query HomePage {
  page(id: "106", idType: DATABASE_ID) {
    id
    title
    slug
    content
    homepage {
      banner {
        eyebrow
        heading
        description
        primaryButton {
          target
          title
          url
        }
        secondaryButton {
          target
          title
          url
        }
      }
      logos {
        logo
      }
      services {
        heading
        description
        accordion {
          copy
          heading
        }
      }
      recentProjects {
        description
        heading
        cards {
          copy
          heading
          subHeading
        }
      }
      howWeWork {
        heading
        cards {
          copy
          title
        }
      }
      team {
        heading
        cards {
          copy
          title
        }
      }
      testimonial {
        heading
        cards {
          copy
          title
        }
      }
      packages {
        copy
        heading
        cards {
          copy
          isFeatured
          price
          subTitle
          title
        }
      }
    }
  }
  generalSettings {
    title
  }
}
`;