import { graphql, useStaticQuery } from "gatsby"

export default function useSiteMetadata() {
  const data = useStaticQuery(graphql`
    query getMetadata {
      site {
        siteMetadata {
          title
          description
          repoUrl
          infoData {
            contact {
              email
              github_handle
              twitter_handle
            }
            cta
            description
            background_color
          }
          licenseData {
            license_header
            license_subheader
            license_content
          }
          homeData {
            home_content
            home_content_1
            home_header
            home_content_header
          }
        }
      }
    }
  `)
  return data.site.siteMetadata
}