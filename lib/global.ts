import { cache } from "react";
import { wpQuery } from "@/lib/wp";

// Menu (3 levels) + site settings. Used by app/layout.tsx.
// cache() makes repeated calls in one request hit WordPress only once.
const GLOBAL_QUERY = `

query Global {
  primary: menu(id: "dGVybTo0") {
    count
    id
    databaseId
    name
    slug
    menuItems {
      nodes {
        id
        databaseId
        url
        cssClasses
        label
        target
        parentId
      }
    }
  }
  myGlobalSetting {
    myACFSetting {
      megaMenu {
        menuImage {
          node {
            sourceUrl
            title
            altText
          }
        }
        menuHeading
        menuDescription
        href {
          target
          title
          url
        }
      }
      footer {
        heading
        copy
        primary {
          target
          title
          url
        }
        secondary {
          target
          title
          url
        }
        socialMedia {
          link {
            target
            title
            url
          }
        }
      }
    }
  }
}

`;

export const getGlobal = cache(() => wpQuery<any>(GLOBAL_QUERY));